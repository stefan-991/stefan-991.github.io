import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './ImageModal.scss';

const ImageModal = ({ images, isOpen, onClose, initialIndex = 0 }) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    const handleClickOutside = useCallback((e) => {
        if (e.target.dataset.backdrop === 'true') {
            onClose();
        }
    }, [onClose]);

    useEffect(() => {
        setCurrentIndex(initialIndex);
    }, [initialIndex]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handlePrevious = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    if (!isOpen || !images || images.length === 0) return null;

    return (
        <div
            className="image-modal"
            data-backdrop="true"
            onClick={handleClickOutside}
        >
            <div className="image-modal__container">
                <button
                    className="image-modal__close"
                    onClick={onClose}
                    aria-label="Close modal"
                >
                    <X size={24} />
                </button>

                {images.length > 1 && (
                    <button
                        className="image-modal__nav image-modal__nav--prev"
                        onClick={handlePrevious}
                        aria-label="Previous image"
                    >
                        <ChevronLeft size={40} />
                    </button>
                )}

                <div className="image-modal__content">
                    <img
                        src={images[currentIndex]}
                        alt={`Image ${currentIndex + 1}`}
                        className="image-modal__image"
                    />
                </div>

                {images.length > 1 && (
                    <button
                        className="image-modal__nav image-modal__nav--next"
                        onClick={handleNext}
                        aria-label="Next image"
                    >
                        <ChevronRight size={40} />
                    </button>
                )}

                <div className="image-modal__counter">
                    {currentIndex + 1} / {images.length}
                </div>
            </div>
        </div>
    );
};

export default ImageModal;