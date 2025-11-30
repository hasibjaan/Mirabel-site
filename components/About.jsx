'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { aboutContent } from '../lib/content';

// Count up animation hook
function easeOutQuad(t) {
  return t < 1 ? 1 - (1 - t) * (1 - t) : 1;
}
function useCountUp(to, inView, duration = 1800) {
  const [value, setValue] = useState(0);
  const startTimestamp = useRef(null);
  useEffect(() => {
    if (!inView) return;
    setValue(0);
    let frame;
    function animateCount(timestamp) {
      if (!startTimestamp.current) startTimestamp.current = timestamp;
      const rawProgress = Math.min((timestamp - startTimestamp.current) / duration, 1);
      const smoothProgress = easeOutQuad(rawProgress);
      setValue(Math.floor(smoothProgress * to));
      if (rawProgress < 1) {
        frame = requestAnimationFrame(animateCount);
      } else {
        setValue(to);
      }
    }
    frame = requestAnimationFrame(animateCount);
    return () => {
      cancelAnimationFrame(frame);
      startTimestamp.current = null;
    };
  }, [to, inView, duration]);
  return value;
}

export default function About() {
  const { title, paragraphs, stats, images } = aboutContent;
  const slides = images;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState({});
  const intervalRef = useRef(null);

  // Auto-switch every 8 seconds
  useEffect(() => {
    // Set up interval
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 8000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [slides.length]);

  const resetTimer = () => {
    // Clear existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    // Restart the timer
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 8000);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    resetTimer();
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    resetTimer();
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    resetTimer();
  };

  // Animation: reveal stats when in view
  const statsRef = useRef(null);
  const [statsInView, setStatsInView] = useState(false);
  useEffect(() => {
    function handleScroll() {
      if (!statsRef.current) return;
      const rect = statsRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setStatsInView(true);
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
          <div className="flex-1 w-full">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              {title}
            </h2>
            {paragraphs.map((para, idx) => (
              <p key={idx} className="text-gray-700 text-lg mb-6 max-w-3xl">
                {para}
              </p>
            ))}
            <div ref={statsRef} className="grid grid-cols-3 gap-6 max-w-2xl">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl font-bold text-pink-600 mb-2">
                    {useCountUp(stat.value, statsInView).toLocaleString()}{stat.value >= 1000 ? '+' : ''}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Image slider on the right */}
          <div className="flex-1 w-full max-w-lg">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              {/* Image slider */}
              <div className="relative w-full h-full">
                {slides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                      }`}
                  >
                    {imageErrors[slide.id] ? (
                      <div className="w-full h-full bg-gradient-to-br from-pink-200 to-purple-300 flex items-center justify-center">
                        <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                    ) : (
                      <img
                        src={slide.src}
                        alt={slide.alt}
                        className="w-full h-full object-cover"
                        onError={() => setImageErrors(prev => ({ ...prev, [slide.id]: true }))}
                      />
                    )}
                  </div>
                ))}
              </div>
              {/* Navigation buttons */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-pink-600 p-2 rounded-full shadow-lg transition-all hover:scale-110 z-20"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-pink-600 p-2 rounded-full shadow-lg transition-all hover:scale-110 z-20"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              {/* Dots indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
                      ? 'bg-white w-8'
                      : 'bg-white/50 hover:bg-white/75'
                      }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}