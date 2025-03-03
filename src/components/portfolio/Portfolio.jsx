import { useRef, useState, useEffect } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import ImageModal from "./ImageModal";

const items = [
  {
    id: 1,
    title: "Node & React CRM",
    img: ["/crmai_3.jpg", "/crmai_2.jpg", "/crmai_1.jpg"],
    desc: "Comprehensive customer relationship management system designed specifically for environmental inspection company. This all-in-one solution seamlessly connects field operations, customer service, and administrative functions, creating a unified workflow from initial customer contact through project completion. This CRM also supports integration with other web apps.",
    technologies: [
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-line.svg"
      },
      {
        name: "Express.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
      },
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
      },
      {
        name: "Redux",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg"
      },
      {
        name: "GitLab",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-plain.svg"
      },
      {
        name: "AITable",
        icon: "https://avatars.githubusercontent.com/u/89725681?s=200&v=4"
      },
      {
        name: "Bootstrap",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-plain.svg"
      },
      {
        name: "API",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/openapi/openapi-line.svg"
      },
      {
        name: "JSON",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-plain.svg"
      }
    ]
  },
  {
    id: 2,
    title: "Custom AI Agent",
    img: ["/aiAgent3.jpg", "/aiAgent2.jpg", "/aiAgent1.jpg"],
    desc: "Intelligent email automation system built with n8n workflow automation that manages both new and existing customer communications. The agent leverages AI to comprehend incoming emails, schedule services, and intelligently route messages to appropriate departments with automatic ticket assignment. Implemented with a vector database for knowledge retrieval, allowing the system to accurately respond to customer inquiries by referencing company procedures and FAQs. This solution significantly reduces response times, eliminates manual email sorting, and ensures consistent customer service quality while freeing up staff resources for higher-value tasks.",
    technologies: [
      {
        name: "n8n",
        icon: "/n8n.svg",
      },
      {
        name: "Albato",
        icon: "/albato.svg",
      },
      {
        name: "Integrately",
        icon: "/integrately.svg"
      },
      {
        name: "Pinecone",
        icon: "/pinecone.svg",
      },
      {
        name: "JSON",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-plain.svg"
      },
      {
        name: "Zendesk",
        icon: "/zendesk.svg"
      },
      {
        name: "Looker Studio",
        icon: "/google.svg",
      }
    ]
  },
  {
    id: 3,
    title: "Automated Payroll",
    img: ["/automatedPayroll.png", "/automatedPayroll3.png", "/automatedPayroll2.png"],
    desc: "Custom payroll automation system streamlines the entire salary calculation process by integrating with multiple time tracking platforms, calendar applications, and financial institution APIs. It processes employee work hours, overtime, leave balances, and attendance data to automatically compute accurate salary figures based on predefined pay rates and policies. The system generates customized reports for various stakeholders. Automated workflows significantly reduce manual intervention, minimize calculation errors, and accelerate the payroll processing cycle.",
    technologies: [
      {
        name: "Google Apps Script",
        icon: "/gas.svg",
      },
      {
        name: "Google Workspace",
        icon: "/google.svg",
      },
      {
        name: "Zapier",
        icon: "/zapier.svg"
      },
      {
        name: "Looker Studio",
        icon: "/google.svg",
      },
      {
        name: "API",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/openapi/openapi-line.svg"
      },
      {
        name: "JSON",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-plain.svg"
      },
      {
        name: "QuickBooks",
        icon: "/quickbooks.svg"
      }
    ]
  },
  {
    id: 4,
    title: "Performance Report",
    img: ["/salesReport2.jpg", "/salesReport1.jpg", "/salesReport3.jpg"],
    desc: "A comprehensive sales performance report that presents complex business metrics through intuitive, color-coded visualizations. The report combines sales distribution data, call center performance statistics, and geographical sales analysis across Canadian regions using clear donut charts and time-based graphs. Through strategic color coding and thoughtful data organization, it effectively communicates critical KPIs including sales attribution, revenue distribution, and regional performance, allowing upper management to quickly grasp performance trends and make informed decisions. The report transforms raw data into clear, actionable insights while maintaining executive-level accessibility.",
    technologies: [
      {
        name: "Google Workspace",
        icon: "/google.svg",
      },
      {
        name: "Zapier",
        icon: "/zapier.svg"
      },
      {
        name: "FreshBooks",
        icon: "/freshbooks.svg"
      }
    ]
  }
];

const Single = ({ item }) => {
  const ref = useRef();
  const [modalOpen, setModalOpen] = useState(false);
  const [initialImageIndex, setInitialImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Add layoutEffect: false to prevent the warning
  const { scrollYProgress } = useScroll({
    target: ref,
    layoutEffect: false,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  // Add visibility detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const handleImageClick = (index) => {
    setInitialImageIndex(index);
    setModalOpen(true);
  };

  return (
    <section ref={ref}>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer">
            <img
              src={item.img[0]}
              alt="Image 2"
              className="imageLeft"
              onClick={() => handleImageClick(0)}
            />
            <img
              src={item.img[1]}
              alt="Image 1"
              className="imageCenter"
              onClick={() => handleImageClick(1)}
            />
            <img
              src={item.img[2]}
              alt="Image 3"
              className="imageRight"
              onClick={() => handleImageClick(2)}
            />
          </div>
          <motion.div
            className="textContainer"
            style={{ y }}
            animate={{
              opacity: isVisible ? 1 : 0,
              y: isVisible ? 0 : 50
            }}
            transition={{
              duration: 0.5,
              delay: 0.2
            }}
          >
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            {item.technologies && item.technologies.length > 0 && (
              <div className="technologies">
                <h3>Technologies Used</h3>
                <div className="tech-icons">
                  {item.technologies.map((tech, index) => (
                    <div key={index} className="tech-icon">
                      <img src={tech.icon} alt={tech.name} />
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
          <ImageModal
            images={item.img}
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            initialIndex={initialImageIndex}
          />
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
    layoutEffect: false
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;