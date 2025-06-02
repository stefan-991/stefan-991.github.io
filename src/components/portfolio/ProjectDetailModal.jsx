import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './ProjectDetailModal.scss';

const ProjectDetailModal = ({ project, isOpen, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleClickOutside = useCallback((e) => {
        if (e.target.dataset.backdrop === 'true') {
            onClose();
        }
    }, [onClose]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            setCurrentImageIndex(0); // Reset to first image when modal opens
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleKeyPress = useCallback((e) => {
        if (e.key === 'Escape') {
            onClose();
        } else if (e.key === 'ArrowLeft') {
            handlePreviousImage();
        } else if (e.key === 'ArrowRight') {
            handleNextImage();
        }
    }, [onClose]);

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('keydown', handleKeyPress);
        }
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [isOpen, handleKeyPress]);

    const handlePreviousImage = () => {
        if (project && project.allImages) {
            setCurrentImageIndex((prev) =>
                prev === 0 ? project.allImages.length - 1 : prev - 1
            );
        }
    };

    const handleNextImage = () => {
        if (project && project.allImages) {
            setCurrentImageIndex((prev) =>
                prev === project.allImages.length - 1 ? 0 : prev + 1
            );
        }
    };

    if (!isOpen || !project) return null;

    return (
        <div
            className="project-modal"
            data-backdrop="true"
            onClick={handleClickOutside}
        >
            <div className="project-modal__container">
                <div className="project-modal__header">
                    <button
                        className="project-modal__close"
                        onClick={onClose}
                        aria-label="Close project details"
                    >
                        <X size={24} />
                    </button>
                    <h1 className="project-modal__title">{project.title}</h1>
                    <p className="project-modal__subtitle">{project.shortDesc}</p>
                </div>

                {/* Image Carousel Section */}
                <div className="project-modal__carousel">
                    <div className="carousel-container">
                        {project.allImages && project.allImages.length > 1 && (
                            <button
                                className="carousel-nav carousel-nav--prev"
                                onClick={handlePreviousImage}
                                aria-label="Previous image"
                            >
                                <ChevronLeft size={24} />
                            </button>
                        )}

                        <div className="carousel-image-container">
                            <img
                                src={project.allImages[currentImageIndex]}
                                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                                className="carousel-image"
                            />
                        </div>

                        {project.allImages && project.allImages.length > 1 && (
                            <button
                                className="carousel-nav carousel-nav--next"
                                onClick={handleNextImage}
                                aria-label="Next image"
                            >
                                <ChevronRight size={24} />
                            </button>
                        )}
                    </div>

                    {project.allImages && project.allImages.length > 1 && (
                        <div className="carousel-indicators">
                            {project.allImages.map((_, index) => (
                                <button
                                    key={index}
                                    className={`carousel-indicator ${index === currentImageIndex ? 'active' : ''
                                        }`}
                                    onClick={() => setCurrentImageIndex(index)}
                                    aria-label={`Go to image ${index + 1}`}
                                />
                            ))}
                        </div>
                    )}

                    {project.allImages && project.allImages.length > 1 && (
                        <div className="carousel-counter">
                            {currentImageIndex + 1} / {project.allImages.length}
                        </div>
                    )}
                </div>

                <div className="project-modal__body">
                    {/* Project Overview */}
                    <section className="project-section">
                        <h2 className="project-section__title project-section__title--blue">
                            Project Overview
                        </h2>
                        <p className="project-section__text">
                            {project.detailedDesc.overview}
                        </p>
                        {/* First image after overview - only render if image exists and is valid */}
                        {project.allImages && project.allImages[0] && project.allImages[0].trim() !== '' && (
                            <div className="project-section__inline-image">
                                <img
                                    src={project.allImages[0]}
                                    alt={`${project.title} - Overview`}
                                    className="inline-image"
                                    onError={(e) => {
                                        const container = e.target.parentElement;
                                        if (container) {
                                            container.remove();
                                        }
                                    }}
                                    onLoad={(e) => {
                                        // Ensure image is actually loaded with content
                                        if (e.target.naturalWidth === 0 || e.target.naturalHeight === 0) {
                                            const container = e.target.parentElement;
                                            if (container) {
                                                container.remove();
                                            }
                                        }
                                    }}
                                />
                            </div>
                        )}
                    </section>

                    {/* Challenge */}
                    <section className="project-section">
                        <h2 className="project-section__title project-section__title--red">
                            The Challenge
                        </h2>
                        <p className="project-section__text">
                            {project.detailedDesc.challenge}
                        </p>
                        {/* Second image after challenge - only render if image exists and is valid */}
                        {project.allImages && project.allImages[1] && project.allImages[1].trim() !== '' && (
                            <div className="project-section__inline-image">
                                <img
                                    src={project.allImages[1]}
                                    alt={`${project.title} - Challenge`}
                                    className="inline-image"
                                    onError={(e) => {
                                        const container = e.target.parentElement;
                                        if (container) {
                                            container.remove();
                                        }
                                    }}
                                    onLoad={(e) => {
                                        if (e.target.naturalWidth === 0 || e.target.naturalHeight === 0) {
                                            const container = e.target.parentElement;
                                            if (container) {
                                                container.remove();
                                            }
                                        }
                                    }}
                                />
                            </div>
                        )}
                    </section>

                    {/* Solution */}
                    <section className="project-section">
                        <h2 className="project-section__title project-section__title--green">
                            Our Solution
                        </h2>
                        <p className="project-section__text">
                            {project.detailedDesc.solution}
                        </p>
                        {/* Third image after solution - only render if image exists and is valid */}
                        {project.allImages && project.allImages[2] && project.allImages[2].trim() !== '' && (
                            <div className="project-section__inline-image">
                                <img
                                    src={project.allImages[2]}
                                    alt={`${project.title} - Solution`}
                                    className="inline-image"
                                    onError={(e) => {
                                        const container = e.target.parentElement;
                                        if (container) {
                                            container.remove();
                                        }
                                    }}
                                    onLoad={(e) => {
                                        if (e.target.naturalWidth === 0 || e.target.naturalHeight === 0) {
                                            const container = e.target.parentElement;
                                            if (container) {
                                                container.remove();
                                            }
                                        }
                                    }}
                                />
                            </div>
                        )}
                    </section>

                    {/* Key Features */}
                    <section className="project-section">
                        <h2 className="project-section__title project-section__title--purple">
                            Key Features
                        </h2>
                        <div className="features-grid">
                            {project.detailedDesc.features.map((feature, index) => (
                                <div key={index} className="feature-item">
                                    <div className="feature-item__dot" />
                                    <span className="feature-item__text">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Impact */}
                    <section className="project-section">
                        <h2 className="project-section__title project-section__title--yellow">
                            Impact & Results
                        </h2>
                        <p className="project-section__text">
                            {project.detailedDesc.impact}
                        </p>
                    </section>

                    {/* Technologies Used */}
                    <section className="project-section">
                        <h2 className="project-section__title project-section__title--blue">
                            Technologies Used
                        </h2>
                        <div className="technologies-grid">
                            {project.technologies.map((tech, index) => (
                                <div key={index} className="tech-item">
                                    <div className="tech-item__icon">
                                        <img
                                            src={tech.icon}
                                            alt={tech.name}
                                            className="tech-item__image"
                                        />
                                    </div>
                                    <span className="tech-item__name">
                                        {tech.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailModal;