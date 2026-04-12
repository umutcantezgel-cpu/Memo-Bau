import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../../core/constants';
import { Reveal } from '../common/Reveal';

const StarRating = ({ rating }: { rating: number }) => {
    return (
        <div className="flex gap-1" aria-label={`Bewertung: ${rating} von 5 Sternen`}>
            {[1, 2, 3, 4, 5].map((star) => (
                <svg
                    key={star}
                    className={`w-4 h-4 ${star <= rating ? 'text-accent-base fill-accent-base' : 'text-neutral-lightgray fill-none'}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
            ))}
        </div>
    );
};

export const TestimonialCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
    };

    if (!TESTIMONIALS || TESTIMONIALS.length === 0) return null;

    return (
        <section className="py-space-20 md:py-space-24 bg-neutral-offwhite border-y border-neutral-lightgray overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
                <Reveal animation="fade-in-up">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-space-16 gap-8">
                        <div>
                            <span className="text-accent-base text-xs font-bold uppercase tracking-widest mb-space-4 block">Referenzen</span>
                            <h2 className="text-h2 md:text-h1 font-heading text-neutral-darkgray font-bold">Kundenstimmen</h2>
                        </div>
                        
                        {TESTIMONIALS.length > 1 && (
                            <div className="flex gap-4">
                                <button
                                    onClick={handlePrev}
                                    className="w-12 h-12 rounded-full border border-neutral-lightgray bg-neutral-white flex items-center justify-center text-neutral-darkgray hover:text-accent-base hover:border-accent-base transition-colors duration-[var(--default-transition-duration)] shadow-elevation-1 focus:outline-none"
                                    aria-label="Vorherige Kundenstimme"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="w-12 h-12 rounded-full border border-neutral-lightgray bg-neutral-white flex items-center justify-center text-neutral-darkgray hover:text-accent-base hover:border-accent-base transition-colors duration-[var(--default-transition-duration)] shadow-elevation-1 focus:outline-none"
                                    aria-label="Nächste Kundenstimme"
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>
                        )}
                    </div>
                </Reveal>

                <div className="relative">
                    <div className="overflow-hidden">
                        <div 
                            className="flex transition-transform duration-[var(--motion-standard-duration)] ease-[var(--motion-standard-easing)]"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {TESTIMONIALS.map((testimonial) => (
                                <div key={testimonial.id} className="w-full shrink-0">
                                    <div className="bg-neutral-white p-space-12 rounded-[var(--radius-xl)] shadow-elevation-2 border border-neutral-lightgray relative">
                                        <Quote className="absolute top-8 left-8 w-12 h-12 text-accent-base/10" />
                                        <div className="relative z-10 flex flex-col items-center text-center">
                                            <StarRating rating={testimonial.rating || 5} />
                                            <p className="text-lg md:text-xl text-neutral-darkgray font-serif italic leading-relaxed my-space-8 font-normal text-balance max-w-4xl mx-auto">
                                                "{testimonial.text}"
                                            </p>
                                            <div className="w-12 h-px bg-accent-base mb-space-6"></div>
                                            <h4 className="font-bold text-neutral-darkgray text-lg font-sans mb-1">{testimonial.name}</h4>
                                            {testimonial.role && (
                                                <p className="text-sm text-neutral-midgray uppercase tracking-widest font-semibold">{testimonial.role}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Dots indicator */}
                    {TESTIMONIALS.length > 1 && (
                        <div className="flex justify-center gap-3 mt-space-10">
                            {TESTIMONIALS.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`h-2 rounded-full transition-all duration-[var(--motion-micro-duration)] focus:outline-none focus:ring-2 focus:ring-accent-base focus:ring-offset-2 ${
                                        idx === currentIndex ? 'w-8 bg-accent-base' : 'w-2 bg-neutral-lightgray hover:bg-neutral-midgray'
                                    }`}
                                    aria-label={`Gehe zu Kundenstimme ${idx + 1}`}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};
