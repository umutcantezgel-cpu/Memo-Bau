import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
    images: string[];
    isOpen: boolean;
    onClose: () => void;
    initialIndex?: number;
}

export const Lightbox: React.FC<LightboxProps> = ({ images, isOpen, onClose, initialIndex = 0 }) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setCurrentIndex(initialIndex);
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen, initialIndex]);

    const next = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % images.length);
    }, [images.length]);

    const prev = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }, [images.length]);

    // Keyboard navigation
    useEffect(() => {
        if (!isOpen) return;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') next();
            if (e.key === 'ArrowLeft') prev();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose, next, prev]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[1000] bg-black/95 flex items-center justify-center backdrop-blur-sm animate-in fade-in duration-300" onClick={onClose}>
            <button onClick={onClose} className="absolute top-6 right-6 text-white/50 hover:text-accent transition-colors z-[1010]" aria-label="Close gallery">
                <X className="w-8 h-8" />
            </button>

            <div className="relative w-full max-w-[90vw] h-full flex items-center justify-center p-4">
                {/* Image */}
                <img
                    src={images[currentIndex]}
                    alt={`Gallery view ${currentIndex + 1}`}
                    className="max-h-[85vh] max-w-full object-contain shadow-2xl rounded-sm animate-in zoom-in-95 duration-300"
                    onClick={(e) => e.stopPropagation()}
                />

                {/* Controls */}
                {images.length > 1 && (
                    <>
                        <button
                            onClick={prev}
                            className="absolute left-2 md:left-8 text-white/50 hover:text-accent transition-all hover:scale-110 z-[1010]"
                            aria-label="Previous image"
                        >
                            <ChevronLeft className="w-10 h-10" />
                        </button>
                        <button
                            onClick={next}
                            className="absolute right-2 md:right-8 text-white/50 hover:text-accent transition-all hover:scale-110 z-[1010]"
                            aria-label="Next image"
                        >
                            <ChevronRight className="w-10 h-10" />
                        </button>
                    </>
                )}

                {/* Counter */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm tracking-widest font-mono">
                    {currentIndex + 1} / {images.length}
                </div>
            </div>
        </div>
    );
};
