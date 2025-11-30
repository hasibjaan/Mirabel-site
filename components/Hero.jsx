'use client';

import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { heroContent } from '../lib/content';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const { slides, buttons } = heroContent;

  // Function to go to next slide - wrapped in useCallback to be used in useEffect
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-play timer
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 8000); // 8 seconds
    return () => clearInterval(timer);
  }, [nextSlide, currentSlide]); // Reset timer when slide changes

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center overflow-hidden group">
      {/* Background Slider */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          style={{ zIndex: 0 }}
        >
          {slide.type === 'video' ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              poster={slide.poster}
              className="w-full h-full object-cover"
            >
              <source src={slide.src} type="video/mp4" />
            </video>
          ) : (
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          )}
          {/* Dark Overlay for text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Text Transition Container - Grid Stack for smooth cross-fade */}
        <div className="grid grid-cols-1 grid-rows-1 mb-12">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`col-start-1 row-start-1 flex flex-col items-center transition-all duration-1000 ease-in-out ${index === currentSlide
                ? 'opacity-100 translate-y-0 blur-0'
                : 'opacity-0 translate-y-8 blur-sm pointer-events-none'
                }`}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight drop-shadow-lg">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto drop-shadow-md">
                {slide.subtitle}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full text-lg font-semibold hover:shadow-xl transition transform hover:scale-105 border border-transparent"
          >
            {buttons.bookNow}
          </button>
          <button
            onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-full text-lg font-semibold hover:bg-white hover:text-pink-600 transition"
          >
            {buttons.learnMore}
          </button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/30 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
        aria-label="Previous slide"
      >
        <ChevronLeft size={40} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/30 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
        aria-label="Next slide"
      >
        <ChevronRight size={40} />
      </button>

      {/* Slider Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/80'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}