import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const ImageModal = ({ images, isOpen, onClose, initialIndex = 0 }) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    const handleClickOutside = useCallback((e) => {
        if (e.target.dataset.backdrop === 'true') {
            onClose();
        }
    }, [onClose]);

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

    if (!isOpen) return null;

    return (
        <div
            data-backdrop="true"
            onClick={handleClickOutside}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 998,
                background: 'rgba(0, 0, 0, 0.9)',
            }}
        >
            {/* Card container */}
            <div
                style={{
                    position: 'relative',
                    backgroundColor: '#1a1a1a',
                    borderRadius: '8px',
                    padding: '40px 10px', // Reduced horizontal padding
                    maxWidth: '90vw',
                    maxHeight: '90vh',
                    width: 'auto',
                    height: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        right: '12px',
                        top: '12px',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: 'white',
                        zIndex: 999,
                    }}
                >
                    <X size={24} />
                </button>

                {/* Previous button */}
                <button
                    onClick={handlePrevious}
                    style={{
                        position: 'absolute',
                        left: '8px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: 'white',
                        padding: '8px',
                        zIndex: 999,
                    }}
                >
                    <ChevronLeft size={40} />
                </button>

                {/* Image container */}
                <div style={{
                    position: 'relative',
                    maxWidth: '100%',
                    maxHeight: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 40px', // Reduced margin for arrows
                }}>
                    <img
                        src={images[currentIndex]}
                        alt={`Image ${currentIndex + 1}`}
                        style={{
                            maxWidth: '100%',
                            maxHeight: '70vh',
                            objectFit: 'contain',
                        }}
                    />
                </div>

                {/* Next button */}
                <button
                    onClick={handleNext}
                    style={{
                        position: 'absolute',
                        right: '8px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: 'white',
                        padding: '8px',
                        zIndex: 999,
                    }}
                >
                    <ChevronRight size={40} />
                </button>

                {/* Image counter */}
                <div style={{
                    position: 'absolute',
                    bottom: '16px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    color: 'white',
                    background: 'rgba(0, 0, 0, 0.5)',
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '14px',
                }}>
                    {currentIndex + 1} / {images.length}
                </div>
            </div>
        </div>
    );
};

export default ImageModal;