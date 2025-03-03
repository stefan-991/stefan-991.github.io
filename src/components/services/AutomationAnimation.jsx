import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const planetData = [
    { size: 195, image: 'planet1' },
    { size: 165, image: 'planet2' },
    { size: 210, image: 'planet3' },
    { size: 180, image: 'planet4' },
    { size: 150, image: 'planet5' },
];

const AutomationAnimation = ({ isActive, isMobile }) => {
    const [step, setStep] = useState(0);
    const containerRef = useRef(null);
    const [linePath, setLinePath] = useState('');
    const [rocketPosition, setRocketPosition] = useState({ x: 0, y: 0 });

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
        }
    }, [isActive, isMobile]);

    useEffect(() => {
        if (step >= 2 && containerRef.current) {
            const container = containerRef.current;
            const containerRect = container.getBoundingClientRect();
            const planetElements = Array.from(container.children).slice(0, 3);

            const planetPositions = planetElements.map(planet => {
                const rect = planet.getBoundingClientRect();
                return {
                    x: (rect.left + rect.right) / 2 - containerRect.left,
                    y: (rect.top + rect.bottom) / 2 - containerRect.top,
                };
            });

            const mobileAdjustment = isMobile ? 200 : 170;

            // Adjust both start and end Y positions to be above planets
            const startX = planetPositions[0].x - mobileAdjustment;
            const startY = planetPositions[0].y - 50; // Move above first planet
            const endX = planetPositions[2].x - mobileAdjustment;
            const endY = planetPositions[2].y - (isMobile ? 50 : 70);

            const path = `M ${startX},${startY} L ${endX},${endY}`;
            setLinePath(path);

            // Position rocket at the end of line
            setRocketPosition({
                x: endX,
                y: endY - (isMobile ? 15 : 30)
            });
        }
    }, [step, isMobile]);

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
                    className="automation-animation-container"
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
                        {step >= 3 && linePath && (
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
                                    d={linePath}
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
                        {step >= 4 && rocketPosition.x !== 0 && (
                            <motion.div
                                initial={{
                                    x: rocketPosition.x + (isMobile ? +135 : 0),
                                    y: rocketPosition.y + (isMobile ? +25 : 0),
                                    opacity: 0,
                                    rotate: 85
                                }}
                                animate={{
                                    x: rocketPosition.x + (isMobile ? +135 : 0),
                                    y: rocketPosition.y + (isMobile ? +25 : 0),
                                    opacity: 1,
                                    rotate: 85
                                }}
                                transition={{
                                    duration: 2,
                                    ease: "easeInOut"
                                }}
                                style={{
                                    position: 'absolute',
                                    width: rocketWidth,
                                    height: rocketHeight,
                                    transformOrigin: 'center center'
                                }}
                            >
                                <img
                                    src="/rocket.png"
                                    alt="Rocket"
                                    style={{ width: '100%', height: '100%' }}
                                />
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
                                    transition={{ repeat: Infinity, duration: 1 }}
                                    style={{
                                        position: 'absolute',
                                        top: '80%',
                                        left: '30%',
                                        width: rocketWidth * 0.7,
                                        height: rocketWidth * 0.7,
                                        borderRadius: '50%',
                                        background: 'rgba(255, 165, 0, 0.6)',
                                        filter: 'blur(5px)',
                                        transform: 'translate(-50%, -50%)',
                                    }}
                                />
                            </motion.div>
                        )}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default AutomationAnimation;