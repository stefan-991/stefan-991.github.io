import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const analysiData = [
  { text: 'Marketing', value: 22, size: 195, image: 'planet1' },
  { text: 'Products', value: -15, size: 165, image: 'planet2' },
  { text: 'Sales', value: 8, size: 210, image: 'planet3' },
  { text: 'Performance', value: 18, size: 180, image: 'planet4' },
  { text: 'Employees', value: -3, size: 150, image: 'planet5' },
];

const AnalysisAnimation = ({ isActive, isMobile }) => {
  const [step, setStep] = useState(0);
  const [counts, setCounts] = useState(analysiData.map(() => 0));

  useEffect(() => {
    if (isActive) {
      const stepTimer = setTimeout(() => setStep(1), 500);
      const enlargeTimer = setTimeout(() => setStep(2), 1500);
      const linesTimer = setTimeout(() => setStep(3), 2500);
      const countTimer = setTimeout(() => setStep(4), 3000);

      if (isMobile) {
        const resetTimer = setTimeout(() => {
          setStep(0);
          setCounts(analysiData.map(() => 0));
        }, 8000); // 3 seconds after animation completes

        return () => {
          clearTimeout(stepTimer);
          clearTimeout(enlargeTimer);
          clearTimeout(linesTimer);
          clearTimeout(countTimer);
          clearTimeout(resetTimer);
        };
      }

      return () => {
        clearTimeout(stepTimer);
        clearTimeout(enlargeTimer);
        clearTimeout(linesTimer);
        clearTimeout(countTimer);
      };
    } else {
      setStep(0);
      setCounts(analysiData.map(() => 0));
    }
  }, [isActive, isMobile]);

  useEffect(() => {
    if (step === 4) {
      const interval = setInterval(() => {
        setCounts(prevCounts =>
          prevCounts.map((count, index) =>
            Math.abs(count) < Math.abs(analysiData[index].value)
              ? count + Math.sign(analysiData[index].value)
              : count
          )
        );
      }, 50);
      return () => clearInterval(interval);
    }
  }, [step]);

  const scale = isMobile ? 0.5 : 1;

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="analysis-animation-container"
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
          {analysiData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.2 * scale, y: 0 }}
              animate={{
                opacity: step > 0 ? 1 : 0,
                scale: step >= 2 ? scale : 0.2 * scale,
                y: step >= 2 ? ([-52.5, 26.25, 78.75, -26.25, 52.5][index] * scale) : 0,
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
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  boxShadow: step >= 2 ? '0px 0px 22px rgba(255,255,255,0.5)' : 'none',
                }}
              >
                {step >= 2 && (
                  <>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
                      animate={{
                        opacity: 1,
                        scale: [0.9, 1.1, 0.9],
                        rotate: 360
                      }}
                      transition={{
                        opacity: { duration: 0.5 },
                        scale: {
                          repeat: Infinity,
                          duration: 3,
                          ease: "easeInOut"
                        },
                        rotate: {
                          repeat: Infinity,
                          duration: 10,
                          ease: "linear"
                        }
                      }}
                      style={{
                        position: 'absolute',
                        width: '110%',
                        height: '110%',
                        borderRadius: '50%',
                        border: '2px dashed rgba(255,255,255,0.5)',
                      }}
                    />
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      style={{
                        fontSize: item.size * 0.12 * scale,
                        color: 'white',
                        fontWeight: 'bold',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
                        textAlign: 'center',
                      }}
                    >
                      {item.text}
                    </motion.span>
                  </>
                )}
              </motion.div>
              {step >= 3 && (
                <>
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: item.size * 0.35 * scale }}
                    transition={{ duration: 0.5 }}
                    style={{
                      position: 'absolute',
                      top: item.value > 0 ? `-${item.size * 0.35 * scale}px` : '100%',
                      left: '50%',
                      width: '2px',
                      background: 'white',
                    }}
                  />
                  <motion.span
                    initial={{ opacity: 0, y: item.value > 0 ? -20 : 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{
                      position: 'absolute',
                      top: item.value > 0 ? `-${item.size * 0.55 * scale}px` : `calc(100% + ${item.size * 0.35 * scale}px)`,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      fontSize: item.size * 0.15 * scale,
                      fontWeight: 'bold',
                      color: item.value > 0 ? '#4CAF50' : '#F44336',
                      textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
                    }}
                  >
                    {step >= 4 ? (item.value > 0 ? '+' : '') + counts[index] + '%' : ''}
                  </motion.span>
                </>
              )}
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnalysisAnimation;