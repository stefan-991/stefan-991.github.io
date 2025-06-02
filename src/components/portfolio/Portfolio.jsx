import React, { useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import ImageModal from "./ImageModal";
import ProjectDetailModal from "./ProjectDetailModal";
import PortfolioCard from "./PortfolioCard";
import { projects } from "./projectsData";
import "./portfolio.scss";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [initialImageIndex, setInitialImageIndex] = useState(0);
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

  const handleViewDetails = (projectId) => {
    const project = projects.find(p => p.id === projectId);
    if (project) {
      setSelectedProject(project);
      setProjectModalOpen(true);
    }
  };

  const handleCloseProjectModal = () => {
    setProjectModalOpen(false);
    setSelectedProject(null);
  };

  // This function is only used by PortfolioCard for the main card image click
  const handleImageClick = (images, index = 0) => {
    if (images && images.length > 0) {
      setModalImages(images);
      setInitialImageIndex(index);
      setModalOpen(true);
    }
  };

  const handleCloseImageModal = () => {
    setModalOpen(false);
    setModalImages([]);
    setInitialImageIndex(0);
  };

  return (
    <div className="portfolio" ref={ref}>
      <div className="portfolio__header">
        <div className="portfolio__header-content">
          <h1 className="portfolio__title">Featured Works</h1>
          <motion.div
            style={{ scaleX }}
            className="portfolio__progress-bar"
          />
        </div>
      </div>

      <div className="portfolio__content">
        <div className="portfolio__grid">
          {projects.map((project) => (
            <PortfolioCard
              key={project.id}
              project={project}
              onViewDetails={handleViewDetails}
              onImageClick={handleImageClick}
            />
          ))}
        </div>
      </div>

      {/* Image Modal - only used for portfolio card image clicks */}
      <ImageModal
        images={modalImages}
        isOpen={modalOpen}
        onClose={handleCloseImageModal}
        initialIndex={initialImageIndex}
      />

      {/* Project Detail Modal - now has its own image carousel */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={projectModalOpen}
        onClose={handleCloseProjectModal}
      />
    </div>
  );
};

export default Portfolio;