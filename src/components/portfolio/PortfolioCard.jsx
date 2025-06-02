import React, { useRef, useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import './PortfolioCard.scss';

const PortfolioCard = ({ project, onViewDetails, onImageClick }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    const handleViewDetails = () => {
        onViewDetails(project.id);
    };

    const handleImageClick = () => {
        onImageClick(project.allImages, 0);
    };

    return (
        <div
            ref={ref}
            className={`portfolio-card ${isVisible ? 'portfolio-card--visible' : ''}`}
        >
            <div
                className="portfolio-card__image-container"
                onClick={handleImageClick}
            >
                <img
                    src={project.mainImage}
                    alt={project.title}
                    className="portfolio-card__image"
                />
                <div className="portfolio-card__overlay" />
            </div>

            <h3 className="portfolio-card__title">{project.title}</h3>

            <p className="portfolio-card__description">{project.shortDesc}</p>

            <div className="portfolio-card__technologies">
                {project.technologies.slice(0, 4).map((tech, index) => (
                    <span key={index} className="tech-tag">
                        {tech.name}
                    </span>
                ))}
                {project.technologies.length > 4 && (
                    <span className="tech-tag tech-tag--more">
                        +{project.technologies.length - 4} more
                    </span>
                )}
            </div>

            <button
                className="portfolio-card__button"
                onClick={handleViewDetails}
            >
                View Details <ArrowRight size={16} />
            </button>
        </div>
    );
};

export default PortfolioCard;