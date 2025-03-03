import { useRef } from "react";
import "./skills.scss";
import { motion } from "framer-motion";

const skills = [
    {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        description: "Frontend JavaScript library for building user interfaces"
    },
    {
        name: "Redux",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
        description: "Commonly used with libraries like React for managing the application's state"
    },
    {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-line.svg",
        description: "JavaScript runtime for server-side development"
    },
    {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-plain.svg",
        description: "High-level programming language for general-purpose programming"
    },
    {
        name: "Express.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
        description: "Web application framework for Node.js"
    },
    {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg",
        description: "Core programming language for client-side web development and browser interactivity"
    },
    {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg",
        description: "Strongly typed programming language that builds on JavaScript with static type definitions"
    },
    {
        name: "Sass",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
        description: "CSS preprocessor scripting language"
    },
    {
        name: "HTML",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg",
        description: "Standard markup language for web pages"
    },
    {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
        description: "NoSQL database for modern applications"
    },
    {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
        description: "Open-source relational database management system"
    },
    {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg",
        description: "Advanced open-source relational database"
    },
    {
        name: "Bootstrap",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-plain.svg",
        description: "Bootstrap is a popular front-end framework used for developing responsive and mobile-first websites"
    },
    {
        name: "API",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/openapi/openapi-line.svg",
        description: "Application Programming Interface development"
    },
    {
        name: "JSON",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-plain.svg",
        description: "Lightweight data-interchange format"
    }
];

const tools = [
    {
        name: "VS Code",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-plain.svg",
        description: "Powerful source-code editor"
    },
    {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
        description: "Version control and collaboration platform"
    },
    {
        name: "GitLab",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-plain.svg",
        description: "DevOps platform for software development"
    },
    {
        name: "Google Apps Script",
        icon: "/gas.svg",
        description: "Cloud-based scripting platform"
    },
    {
        name: "Google Workspace",
        icon: "/google.svg",
        description: "Cloud-based productivity and collaboration tools including Looker Studio"
    },
    {
        name: "Microsoft Office",
        icon: "/office.svg",
        description: "Professional productivity software suite"
    },
    {
        name: "QuckBooks",
        icon: "/quickbooks.svg",
        description: "A powerful accounting software for managing finances, invoicing, and bookkeeping for businesses of all sizes."
    },
    {
        name: "FreshBooks",
        icon: "/freshbooks.svg",
        description: "Cloud-based accounting software for small businesses"
    },
    {
        name: "Zapier",
        icon: "/zapier.svg",
        description: "Web application automation tool"
    },
    {
        name: "Integrately",
        icon: "/integrately.svg",
        description: "Workflow automation platform"
    },
    {
        name: "Albato",
        icon: "/albato.svg",
        description: "Integration and automation platform"
    },
    {
        name: "n8n",
        icon: "/n8n.svg",
        description: "Workflow automation tool"
    },
    {
        name: "LLMs",
        icon: "/ai.svg",
        description: "Large Language Models for AI applications"
    }
];

const IconGrid = ({ items }) => {
    return (
        <div className="gridContainer">
            {items.map((item, index) => (
                <div className="iconWrapper" key={index}>
                    <img src={item.icon} alt={item.name} />
                    <span className="skillName">{item.name}</span>
                    <div className="bubble">
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

const Skills = () => {
    return (
        <div className="skills">
            <motion.div
                className="title"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1>Skills & Tools</h1>
            </motion.div>

            <div className="content">
                <div className="section">
                    <h2>Skills</h2>
                    <IconGrid items={skills} />
                </div>

                <div className="horizontalLine"></div>

                <div className="section">
                    <h2>Tools</h2>
                    <IconGrid items={tools} />
                </div>
            </div>
        </div>
    );
};

export default Skills;