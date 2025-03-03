import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const planetData = [
    { size: 195, image: 'planet1' },
    { size: 165, image: 'planet2' },
    { size: 210, image: 'planet3' },
    { size: 180, image: 'planet4' },
    { size: 150, image: 'planet5' },
];

const CustomSoftAnimation = ({ isActive, isMobile }) => {
    const [step, setStep] = useState(0);
    const containerRef = useRef(null);
    const [curvePath, setCurvePath] = useState('');
    const [rocketProgress, setRocketProgress] = useState(0);
    const [smokeParticles, setSmokeParticles] = useState([]);

    useEffect(() => {
        if (isActive) {
            const stepTimer = setTimeout(() => setStep(1), 500);
            const shrinkTimer = setTimeout(() => setStep(2), 1700);
            const lineTimer = setTimeout(() => setStep(3), 2700);
            const rocketTimer = setTimeout(() => setStep(4), 4700);

            if (isMobile) {
                const resetTimer = setTimeout(() => {
                    setStep(0);
                }, 10000);

                return () => {
                    clearTimeout(stepTimer);
                    clearTimeout(shrinkTimer);
                    clearTimeout(lineTimer);
                    clearTimeout(rocketTimer);
                    clearTimeout(resetTimer);
                };
            }

            return () => {
                clearTimeout(stepTimer);
                clearTimeout(shrinkTimer);
                clearTimeout(lineTimer);
                clearTimeout(rocketTimer);
            };
        } else {
            setStep(0);
            setSmokeParticles([]);
        }
    }, [isActive, isMobile]);

    useEffect(() => {
        if (step >= 2 && containerRef.current) {
            const container = containerRef.current;
            const containerRect = container.getBoundingClientRect();
            const planetElements = Array.from(container.children).slice(0, 5);

            const planetPositions = planetElements.map(planet => {
                const rect = planet.getBoundingClientRect();
                return {
                    x: (rect.left + rect.right) / 2 - containerRect.left,
                    y: (rect.top + rect.bottom) / 2 - containerRect.top,
                };
            });

            const mobileAdjustment = isMobile ? 200 : 170;

            const startX = planetPositions[0].x - mobileAdjustment;
            const startY = planetPositions[0].y - 50;
            const endX = planetPositions[4].x - mobileAdjustment;
            const endY = -100;

            const cp1x = startX + (endX - startX) * 0.25;
            const cp1y = startY;
            const cp2x = startX + (endX - startX) * 0.75;
            const cp2y = endY + 200;

            const path = `M ${startX},${startY} C ${cp1x},${cp1y} ${cp2x},${cp2y} ${endX},${endY}`;
            setCurvePath(path);
        }
    }, [step, isMobile]);

    useEffect(() => {
        if (step >= 4) {
            const animateRocket = () => {
                setRocketProgress(prev => {
                    if (prev >= 1.2) return 0;
                    return prev + 0.008;
                });
            };

            const rocketInterval = setInterval(animateRocket, 16);
            return () => clearInterval(rocketInterval);
        }
    }, [step]);

    const getRocketPosition = (progress) => {
        if (!containerRef.current || !curvePath) return { x: 0, y: 0, angle: 0, opacity: 1 };

        const pathLength = 1000;
        const point1 = progress * pathLength;
        const point2 = (progress + 0.1) * pathLength;

        const svgPoint = containerRef.current.querySelector('path');
        if (!svgPoint) return { x: 0, y: 0, angle: 0, opacity: 1 };

        const pos1 = svgPoint.getPointAtLength(point1);
        const pos2 = svgPoint.getPointAtLength(point2);

        const angle = Math.atan2(pos2.y - pos1.y, pos2.x - pos1.x) * (180 / Math.PI) + 90;
        const opacity = progress > 1 ? Math.max(0, 1.2 - progress) / 0.2 : 1;

        return {
            x: pos1.x,
            y: pos1.y,
            angle: angle,
            opacity: opacity
        };
    };

    useEffect(() => {
        if (step >= 4) {
            const interval = setInterval(() => {
                const rocketPos = getRocketPosition(rocketProgress);
                setSmokeParticles(prev => {
                    const newParticle = {
                        id: Date.now(),
                        x: rocketPos.x + (isMobile ? 135 : 0),
                        y: rocketPos.y + (isMobile ? 25 : 0),
                        initialScale: Math.random() * 0.3 + 0.2,
                        color: Math.random() > 0.5 ? 'rgba(255, 255, 255, 0.4)' : 'rgba(128, 128, 128, 0.4)'
                    };
                    return [...prev, newParticle].slice(-8);
                });
            }, 50);

            return () => clearInterval(interval);
        }
    }, [step, rocketProgress, isMobile]);

    const scale = isMobile ? 0.5 : 1;
    const initialPositions = [-52.5, 26.25, 78.75, -26.25, 52.5];
    const rocketWidth = 159 * 0.2 * scale;
    const rocketHeight = 270 * 0.2 * scale;

    return (
        <AnimatePresence>
            {isActive && (
                <motion.div
                    ref={containerRef}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="custom-soft-animation-container"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: isMobile ? '0%' : '15%',
                        width: isMobile ? '100%' : '80%',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    {planetData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{
                                opacity: 0,
                                scale: scale,
                                y: initialPositions[index] * scale
                            }}
                            animate={{
                                opacity: step > 0 ? 1 : 0,
                                scale: step >= 2 ? 0.2 * scale : scale,
                                y: step >= 2 ?
                                    20 * scale - (index * 30 * scale) :
                                    initialPositions[index] * scale,
                            }}
                            transition={{
                                opacity: { duration: 0.5, delay: index * 0.1 },
                                scale: { duration: 1, ease: "easeInOut" },
                                y: { duration: 1, ease: "easeInOut" },
                            }}
                            style={{
                                position: 'absolute',
                                left: `${index * 20}%`,
                                width: item.size * scale,
                                height: item.size * scale,
                            }}
                        >
                            <motion.div
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: '50%',
                                    backgroundImage: `url(/${item.image}.png)`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    boxShadow: step < 2 ? '0px 0px 22px rgba(255,255,255,0.5)' : 'none',
                                }}
                            />
                        </motion.div>
                    ))}
                    <div style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        top: 0,
                        left: 0,
                        pointerEvents: 'none'
                    }}>
                        {step >= 3 && curvePath && (
                            <svg
                                style={{
                                    position: 'absolute',
                                    width: '100%',
                                    height: '100%',
                                    overflow: 'visible',
                                    left: isMobile ? '+135px' : '0',
                                    top: isMobile ? '+25px' : '0',
                                }}
                            >
                                <motion.path
                                    d={curvePath}
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeDasharray="5,5"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 2, ease: "easeInOut" }}
                                />
                            </svg>
                        )}
                        {step >= 4 && (
                            <>
                                {smokeParticles.map((particle, index) => (
                                    <motion.div
                                        key={particle.id}
                                        initial={{
                                            opacity: 0.8,
                                            scale: particle.initialScale,
                                            x: particle.x,
                                            y: particle.y
                                        }}
                                        animate={{
                                            opacity: 0,
                                            scale: 2,
                                            x: particle.x - 40,
                                            y: particle.y + 20
                                        }}
                                        transition={{
                                            duration: 1.5,
                                            ease: "easeOut"
                                        }}
                                        style={{
                                            position: 'absolute',
                                            width: rocketWidth,
                                            height: rocketWidth,
                                            borderRadius: '50%',
                                            background: particle.color,
                                            filter: 'blur(4px)',
                                            zIndex: index
                                        }}
                                    />
                                ))}
                                <motion.div
                                    animate={{
                                        x: getRocketPosition(rocketProgress).x + (isMobile ? +135 : 0) - rocketWidth / 2,
                                        y: getRocketPosition(rocketProgress).y + (isMobile ? +25 : 0) - rocketHeight / 2,
                                        rotate: getRocketPosition(rocketProgress).angle,
                                        opacity: getRocketPosition(rocketProgress).opacity
                                    }}
                                    transition={{
                                        duration: 0,
                                        ease: "linear"
                                    }}
                                    style={{
                                        position: 'absolute',
                                        width: rocketWidth,
                                        height: rocketHeight,
                                        transformOrigin: 'center center',
                                        zIndex: 1000
                                    }}
                                >
                                    <img
                                        src="/rocket.png"
                                        alt="Rocket"
                                        style={{ width: '100%', height: '100%' }}
                                    />
                                </motion.div>
                            </>
                        )}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CustomSoftAnimation;
