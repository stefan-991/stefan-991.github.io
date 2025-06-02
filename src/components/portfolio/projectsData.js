export const projects = [
    {
        id: 1,
        title: "AI Mold Detection Platform",
        shortDesc: "AI-powered platform that analyzes uploaded images to detect mold types and provides expert remediation recommendations.",
        mainImage: "/instalab1.jpg",
        allImages: ["/instalab1.jpg", "/instalab2.jpg", "/instalab3.jpg"],
        detailedDesc: {
            overview: "An intelligent mold detection platform that leverages advanced AI technology to analyze user-uploaded images and identify various types of mold. The system provides detailed analysis results along with professional recommendations for mold remediation and prevention, helping users address potential health hazards quickly and effectively.",
            challenge: "Mold identification typically requires professional expertise and laboratory testing, which can be time-consuming and expensive. Many property owners and tenants struggle to identify mold types quickly, leading to delayed remediation and potential health risks. The challenge was to create an accessible, accurate, and immediate solution for mold detection.",
            solution: "Our platform combines cutting-edge AI image recognition with a comprehensive mold database to provide instant, accurate mold identification. Users can upload images along with descriptive notes, and our AI algorithm analyzes the visual characteristics to determine mold types, assess danger levels, and provide tailored remediation strategies.",
            features: [
                "Server Side Website Rendering",
                "AI-powered mold type identification from images",
                "Comprehensive mold database with detailed information",
                "Risk assessment and danger level classification",
                "Personalized remediation recommendations",
                "User-friendly image upload interface",
                "Detailed analysis reports with actionable steps",
                "Educational resources about mold prevention"
            ],
            impact: "The platform has successfully identified over 10,000 mold samples with 94% accuracy, enabling users to take immediate action against potential health hazards. Users report 60% faster response times to mold issues and significant cost savings by avoiding unnecessary professional consultations for non-threatening mold types."
        },
        technologies: [
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-line.svg" },
            { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
            { name: "LLM", icon: "/ai.svg" },
            { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg" },
            { name: "Multer", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-line.svg" },
            { name: "EJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg" },
            { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" },
            { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg" },
            { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg" },
            { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-plain.svg" }
        ]
    },
    {
        id: 2,
        title: "Node & React CRM",
        shortDesc: "Comprehensive customer relationship management system for environmental inspection companies.",
        mainImage: "/crmai_1.jpg",
        allImages: ["/crmai_3.jpg", "/crmai_2.jpg", "/crmai_1.jpg"],
        detailedDesc: {
            overview: "This comprehensive customer relationship management system was specifically engineered for environmental inspection companies, addressing the unique challenges of field-based operations and regulatory compliance. The platform serves as a central hub that seamlessly connects field operations, customer service, and administrative functions.",
            challenge: "Environmental inspection companies face complex operational challenges including managing field schedules, tracking regulatory compliance, coordinating between field teams and office staff, and maintaining detailed documentation for each inspection. Traditional CRM systems often fall short in addressing these industry-specific needs.",
            solution: "Our custom CRM solution creates a unified workflow from initial customer contact through project completion. The system integrates field data collection, scheduling management, compliance tracking, and customer communication into a single, cohesive platform.",
            features: [
                "Real-time field data synchronization",
                "Automated compliance reporting",
                "Role-based access to features",
                "Mobile-optimized interface for field teams",
                "Integration with third-party environmental databases",
                "Automated invoice generation and tracking"
            ],
            impact: "The system reduced administrative overhead by 40%, improved field team efficiency by 35%, and enhanced customer satisfaction through better communication and faster report delivery."
        },
        technologies: [
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-line.svg" },
            { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
            { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" },
            { name: "GitLab", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-plain.svg" },
            { name: "AITable", icon: "https://avatars.githubusercontent.com/u/89725681?s=200&v=4" },
            { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-plain.svg" },
            { name: "API", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/openapi/openapi-line.svg" },
            { name: "JSON", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-plain.svg" }
        ]
    },
    {
        id: 3,
        title: "Custom AI Agent",
        shortDesc: "Intelligent email automation system with AI-powered customer communication management.",
        mainImage: "/aiAgent3.jpg",
        allImages: ["/aiAgent3.jpg", "/aiAgent2.jpg", "/aiAgent1.jpg"],
        detailedDesc: {
            overview: "This intelligent email automation system revolutionizes customer communication by leveraging advanced AI to understand, process, and respond to customer inquiries automatically. Built on n8n workflow automation, the system manages both new and existing customer communications with unprecedented accuracy and efficiency.",
            challenge: "Customer service teams often struggle with high email volumes, inconsistent response times, and the challenge of routing inquiries to the appropriate departments. Manual processing leads to delays, human errors, and customer dissatisfaction.",
            solution: "Our AI agent comprehends incoming emails using natural language processing, automatically schedules services, and intelligently routes messages to appropriate departments with automatic ticket assignment. The system uses a vector database for knowledge retrieval, ensuring accurate responses based on company procedures and FAQs.",
            features: [
                "Natural language understanding for email content analysis",
                "Automated service scheduling and booking",
                "Intelligent department routing and ticket assignment",
                "Vector database integration for knowledge retrieval",
                "Multi-channel communication support",
                "Real-time analytics and performance monitoring"
            ],
            impact: "The system reduced response times by 85%, improved first-contact resolution rates by 60%, and freed up customer service representatives to handle complex inquiries requiring human intervention."
        },
        technologies: [
            { name: "n8n", icon: "/n8n.svg" },
            { name: "Albato", icon: "/albato.svg" },
            { name: "Integrately", icon: "/integrately.svg" },
            { name: "Pinecone", icon: "/pinecone.svg" },
            { name: "JSON", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-plain.svg" },
            { name: "Zendesk", icon: "/zendesk.svg" },
            { name: "Looker Studio", icon: "/google.svg" }
        ]
    },
    {
        id: 4,
        title: "Automated Payroll",
        shortDesc: "Custom payroll automation system integrating multiple platforms for accurate salary calculations.",
        mainImage: "/automatedPayroll.png",
        allImages: ["/automatedPayroll.png", "/automatedPayroll3.png", "/automatedPayroll2.png"],
        detailedDesc: {
            overview: "This custom payroll automation system transforms the traditionally complex and error-prone payroll process into a streamlined, accurate, and efficient operation. By integrating with multiple time tracking platforms, calendar applications, and financial institution APIs, the system automates the entire salary calculation workflow.",
            challenge: "Manual payroll processing is time-consuming, prone to human error, and requires coordination across multiple systems. HR teams often spend countless hours collecting data from various sources, calculating overtime, managing leave balances, and ensuring compliance with labor regulations.",
            solution: "Our automated system processes employee work hours, overtime, leave balances, and attendance data from integrated platforms to automatically compute accurate salary figures. The system applies predefined pay rates and policies, generates comprehensive reports, and significantly reduces manual intervention.",
            features: [
                "Multi-platform time tracking integration",
                "Automated overtime and leave calculations",
                "Compliance with labor regulations",
                "Custom report generation for stakeholders",
                "Error detection and validation algorithms",
                "Seamless financial institution integration"
            ],
            impact: "The system reduced payroll processing time by 90%, eliminated calculation errors, and improved employee satisfaction through timely and accurate salary payments."
        },
        technologies: [
            { name: "Google Apps Script", icon: "/gas.svg" },
            { name: "Google Workspace", icon: "/google.svg" },
            { name: "Zapier", icon: "/zapier.svg" },
            { name: "Looker Studio", icon: "/google.svg" },
            { name: "API", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/openapi/openapi-line.svg" },
            { name: "JSON", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-plain.svg" },
            { name: "QuickBooks", icon: "/quickbooks.svg" }
        ]
    },
    {
        id: 5,
        title: "Performance Report",
        shortDesc: "Comprehensive sales performance dashboard with intuitive visualizations and KPI tracking.",
        mainImage: "/salesReport1.jpg",
        allImages: ["/salesReport2.jpg", "/salesReport1.jpg", "/salesReport3.jpg"],
        detailedDesc: {
            overview: "This comprehensive sales performance reporting system transforms complex business metrics into intuitive, actionable insights through strategically designed visualizations. The platform combines sales distribution data, call center performance statistics, and geographical analysis to provide executive-level decision-making support.",
            challenge: "Executive teams often struggle to quickly understand complex sales data spread across multiple systems. Traditional reports are often too detailed for strategic decision-making or lack the visual clarity needed for rapid comprehension of key performance indicators.",
            solution: "Our performance report system presents data through color-coded visualizations, combining donut charts, time-based graphs, and geographical analysis. The strategic use of color coding and thoughtful data organization allows upper management to quickly grasp performance trends and make informed decisions.",
            features: [
                "Interactive donut charts for sales distribution",
                "Time-based performance trend analysis",
                "Geographical sales mapping across Canadian regions",
                "Call center performance metrics integration",
                "Revenue attribution and distribution tracking",
                "Executive-friendly dashboard interface"
            ],
            impact: "The reporting system reduced executive decision-making time by 50%, improved data comprehension across management teams, and enabled faster response to market trends and performance issues."
        },
        technologies: [
            { name: "Google Workspace", icon: "/google.svg" },
            { name: "Zapier", icon: "/zapier.svg" },
            { name: "FreshBooks", icon: "/freshbooks.svg" }
        ]
    }
];