import { useRef, useState, useEffect } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";
import AnalysisAnimation from "./AnalysisAnimation";
import LiveRepAnimation from "./LiveRepAnimation";
import AutomationAnimation from "./AutomationAnimation";
import CustomSoftAnimation from "./CustomSoftAnimation";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  const [isAnalysisActive, setIsAnalysisActive] = useState(false);
  const [isLiveRepActive, setIsLiveRepActive] = useState(false);
  const [isAutomationActive, setIsAutomationActive] = useState(false);
  const [isCustomSoftActive, setIsCustomSoftActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const handleBoxInteraction = (setActive) => {
    if (isMobile) {
      setActive(true);
      setTimeout(() => setActive(false), 8000);
    }
  };

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I will help your company focus on what
          <br />makes a difference and help it grow
        </p>
        <hr />
      </motion.div>
      <div className="starPresentation" style={{ position: 'relative' }}>
        {!isAnalysisActive && !isLiveRepActive && !isAutomationActive && !isCustomSoftActive && (
          <motion.div className="titleContainer" variants={variants}>
            <div className="title">
              <img src="/people.webp" alt="" />
              <h1>
                <motion.b
                  whileHover={{ color: "rgb(173, 216, 230)" }} // Using RGB value for lightblue
                  initial={{ color: "rgb(255, 255, 255)" }} // White
                >
                  Unique
                </motion.b> Solutions
              </h1>
            </div>
            <div className="title">
              <h1>
                <motion.b
                  whileHover={{ color: "rgb(173, 216, 230)" }} // Using RGB value for lightblue
                  initial={{ color: "rgb(255, 255, 255)" }} // White
                >
                  For Your
                </motion.b> Business.
              </h1>
              <a href="#Portfolio" className="button">WHAT I DID?</a>
            </div>
          </motion.div>
        )}
        <AnalysisAnimation isActive={isAnalysisActive} isMobile={isMobile} />
        <LiveRepAnimation isActive={isLiveRepActive} isMobile={isMobile} />
        <AutomationAnimation isActive={isAutomationActive} isMobile={isMobile} />
        <CustomSoftAnimation isActive={isCustomSoftActive} isMobile={isMobile} />
      </div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={isMobile ? {} : {
            background: "rgb(211, 211, 211)", // lightgray
            color: "rgb(0, 0, 0)"
          }}
          initial={{
            background: "rgba(211, 211, 211, 0)", // transparent lightgray
            color: "rgb(255, 255, 255)"
          }}
          onHoverStart={() => !isMobile && setIsAnalysisActive(true)}
          onHoverEnd={() => !isMobile && setIsAnalysisActive(false)}
          onClick={() => handleBoxInteraction(setIsAnalysisActive)}
        >
          <h2>Financial & Performance Analysis</h2>
          <p>
            Uncover your business's pulse.
            <br />
            I will pinpoint improvement & optimization areas.
          </p>
        </motion.div>

        <motion.div
          className="box"
          whileHover={isMobile ? {} : {
            background: "rgb(211, 211, 211)", // lightgray
            color: "rgb(0, 0, 0)"
          }}
          initial={{
            background: "rgba(211, 211, 211, 0)", // transparent lightgray
            color: "rgb(255, 255, 255)"
          }}
          onHoverStart={() => !isMobile && setIsLiveRepActive(true)}
          onHoverEnd={() => !isMobile && setIsLiveRepActive(false)}
          onClick={() => handleBoxInteraction(setIsLiveRepActive)}
        >
          <h2>Live Reporting</h2>
          <p>
            Stay agile with real-time insights.
            <br />
            Track your company's progress at every step on your path to success.
          </p>
        </motion.div>

        <motion.div
          className="box"
          whileHover={isMobile ? {} : {
            background: "rgb(211, 211, 211)", // lightgray
            color: "rgb(0, 0, 0)"
          }}
          initial={{
            background: "rgba(211, 211, 211, 0)", // transparent lightgray
            color: "rgb(255, 255, 255)"
          }}
          onHoverStart={() => !isMobile && setIsAutomationActive(true)}
          onHoverEnd={() => !isMobile && setIsAutomationActive(false)}
          onClick={() => handleBoxInteraction(setIsAutomationActive)}
        >
          <h2>Process Automation</h2>
          <p>
            Streamline for excellence.
            <br />
            I will automate routines and build AI Agents, freeing your team to focus on skills that set your company apart.
          </p>
        </motion.div>

        <motion.div
          className="box"
          whileHover={isMobile ? {} : {
            background: "rgb(211, 211, 211)", // lightgray
            color: "rgb(0, 0, 0)"
          }}
          initial={{
            background: "rgba(211, 211, 211, 0)", // transparent lightgray
            color: "rgb(255, 255, 255)"
          }}
          onHoverStart={() => !isMobile && setIsCustomSoftActive(true)}
          onHoverEnd={() => !isMobile && setIsCustomSoftActive(false)}
          onClick={() => handleBoxInteraction(setIsCustomSoftActive)}
        >
          <h2>Custom Software Solutions</h2>
          <p>
            Propel your company beyond limits with tailored,
            <br />
            unique solutions designed specifically for your business needs.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;

