'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function Stories() {
    const stories = [
        {
            id: 1,
            title: 'Our latest news',
            image: '/images/story-1.jpg',
            alt: 'Beauty and hair styling showcase'
        },
        {
            id: 2,
            title: 'De toutes beautés',
            image: '/images/story-2.jpg',
            alt: 'Collage of beauty products and diversity'
        },
        {
            id: 3,
            title: 'Essentiality of Beauty',
            image: '/images/story-3.jpg',
            alt: 'Diverse group of women celebrating beauty'
        },
        {
            id: 4,
            title: 'Beauty Transformation',
            image: '/images/story-4.jpg',
            alt: 'Before and after beauty transformations'
        },
        {
            id: 5,
            title: 'Luxury Experience',
            image: '/images/story-5.jpg',
            alt: 'Luxury salon experience and treatments'
        },
        {
            id: 6,
            title: 'Client Stories',
            image: '/images/story-6.jpg',
            alt: 'Client success stories and testimonials'
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [imageErrors, setImageErrors] = useState({});
    const scrollContainerRef = useRef(null);

    // Track scroll position to determine middle image and prevent page scroll
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const handleScroll = () => {
            const containerWidth = container.clientWidth;
            const scrollLeft = container.scrollLeft;
            const scrollWidth = container.scrollWidth;
            const maxScroll = scrollWidth - containerWidth;
            
            // Prevent page scroll when at boundaries
            if (scrollLeft <= 0) {
                container.scrollLeft = 0;
            } else if (scrollLeft >= maxScroll) {
                container.scrollLeft = maxScroll;
            }
            
            // Calculate which image is in the center of the visible area
            // Account for middle image being larger (260px) vs side images (240px)
            const sideImageWidth = 256; // 240px image + 16px gap
            const middleImageWidth = 276; // 260px image + 16px gap
            const paddingLeft = containerWidth / 2 - 130; // Center offset for larger middle image
            const centerPosition = scrollLeft + containerWidth / 2 - paddingLeft;
            
            // Approximate calculation - snap to nearest image
            let newIndex = 0;
            let currentPos = 0;
            for (let i = 0; i < stories.length; i++) {
                const imageWidth = i === currentIndex ? middleImageWidth : sideImageWidth;
                if (centerPosition >= currentPos && centerPosition < currentPos + imageWidth) {
                    newIndex = i;
                    break;
                }
                currentPos += imageWidth;
            }
            
            newIndex = Math.max(0, Math.min(stories.length - 1, newIndex));
            
            if (newIndex >= 0 && newIndex < stories.length && newIndex !== currentIndex) {
                setCurrentIndex(newIndex);
            }
        };

        const handleWheel = (e) => {
            const container = scrollContainerRef.current;
            if (!container) return;
            
            const { scrollLeft, scrollWidth, clientWidth } = container;
            const isAtStart = scrollLeft <= 0;
            const isAtEnd = scrollLeft >= scrollWidth - clientWidth - 1;
            
            // Prevent page scroll when at boundaries
            if ((isAtStart && e.deltaX < 0) || (isAtEnd && e.deltaX > 0)) {
                e.preventDefault();
                e.stopPropagation();
            }
        };

        container.addEventListener('scroll', handleScroll, { passive: true });
        container.addEventListener('wheel', handleWheel, { passive: false });
        handleScroll(); // Initial calculation

        return () => {
            container.removeEventListener('scroll', handleScroll);
            container.removeEventListener('wheel', handleWheel);
        };
    }, [stories.length, currentIndex]);

    // --- Auto-play slider with reset on user scroll ---
    const autoPlayTimeout = useRef();
    useEffect(() => {
        function startAutoPlay() {
            autoPlayTimeout.current = setTimeout(() => {
                // Scroll to next image
                const container = scrollContainerRef.current;
                if (!container) return;
                const containerWidth = container.clientWidth;
                const sideImageWidth = 256; // 240px image + 16px gap
                const middleImageWidth = 276; // 260px image + 16px gap
                let nextIndex = currentIndex + 1;
                if (nextIndex >= stories.length) nextIndex = 0;
                // Compute target scroll position like in scroll snap
                let snapPosition = 0;
                for (let i = 0; i < nextIndex; i++) {
                    const imageWidth = i === currentIndex ? middleImageWidth : sideImageWidth;
                    snapPosition += imageWidth;
                }
                const paddingLeft = containerWidth / 2 - 130;
                const targetScroll = snapPosition + (nextIndex === currentIndex ? middleImageWidth : sideImageWidth) / 2 - containerWidth / 2 + paddingLeft;
                container.scrollTo({ left: Math.max(0, targetScroll), behavior: 'smooth' });
                setCurrentIndex(nextIndex);
            }, 5000);
        }
        startAutoPlay();
        return () => clearTimeout(autoPlayTimeout.current);
    }, [currentIndex, stories.length]);

    // --- Reset timer on user input ---
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;
        function userInteracted() {
            clearTimeout(autoPlayTimeout.current);
            setTimeout(() => {
                autoPlayTimeout.current = setTimeout(() => {
                    // Scroll to next image same as above
                    const container = scrollContainerRef.current;
                    if (!container) return;
                    const containerWidth = container.clientWidth;
                    const sideImageWidth = 256;
                    const middleImageWidth = 276;
                    let nextIndex = currentIndex + 1;
                    if (nextIndex >= stories.length) nextIndex = 0;
                    let snapPosition = 0;
                    for (let i = 0; i < nextIndex; i++) {
                        const imageWidth = i === currentIndex ? middleImageWidth : sideImageWidth;
                        snapPosition += imageWidth;
                    }
                    const paddingLeft = containerWidth / 2 - 130;
                    const targetScroll = snapPosition + (nextIndex === currentIndex ? middleImageWidth : sideImageWidth) / 2 - containerWidth / 2 + paddingLeft;
                    container.scrollTo({ left: Math.max(0, targetScroll), behavior: 'smooth' });
                    setCurrentIndex(nextIndex);
                }, 5000);
            }, 200); // Restart timer after small delay so manual scroll animations finish
        }
        container.addEventListener('wheel', userInteracted, { passive: false });
        container.addEventListener('touchmove', userInteracted, { passive: false });
        return () => {
            container.removeEventListener('wheel', userInteracted);
            container.removeEventListener('touchmove', userInteracted);
        };
    }, [currentIndex, stories.length]);

    return (
        <section id="stories" className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Left side - Text content */}
                    <div className="flex-1 w-full">
                        <p className="text-sm uppercase tracking-wider text-pink-600 font-semibold mb-4">
                            Discover
                        </p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                            Our beautiful stories
                        </h2>
                        <p className="text-gray-700 text-lg leading-relaxed max-w-2xl">
                            At Mirabel, we believe beauty is a journey of self-discovery and empowerment. 
                            Every story we create is a celebration of individuality, confidence, and the 
                            transformative power of self-care. Join us in crafting moments that reflect 
                            your unique essence and inner radiance.
                        </p>
                    </div>

                    {/* Right side - Image slider */}
                    <div className="flex-1 w-full">
                        <div className="relative">
                            {/* Fade overlay on left side to blend with text */}
                            <div className="absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-pink-50 via-pink-50/80 via-pink-50/40 to-transparent pointer-events-none z-30 rounded-l-2xl"></div>
                            
                            {/* Fade overlay on right side */}
                            <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-pink-50 via-pink-50/80 via-pink-50/40 to-transparent pointer-events-none z-30 rounded-r-2xl"></div>
                            
                            {/* Scrollable slider container - shows 3 images initially */}
                            <div 
                                ref={scrollContainerRef}
                                className="relative h-[500px] lg:h-[600px] overflow-x-auto overflow-y-hidden scrollbar-hide mx-auto"
                                style={{ 
                                    width: '100%', 
                                    maxWidth: '752px'
                                }} // 3 images: 240px * 3 + 16px * 2 = 752px
                                onWheel={(e) => {
                                    // Prevent vertical scroll from affecting page when scrolling horizontally
                                    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
                                        e.preventDefault();
                                        scrollContainerRef.current?.scrollBy({
                                            left: e.deltaX,
                                            behavior: 'auto'
                                        });
                                    }
                                }}
                                onTouchStart={(e) => {
                                    // Prevent page scroll on touch devices
                                    const touch = e.touches[0];
                                    scrollContainerRef.current?.setAttribute('data-touch-start', touch.clientX.toString());
                                }}
                                onTouchMove={(e) => {
                                    // Allow horizontal scrolling but prevent page scroll
                                    const touch = e.touches[0];
                                    const startX = parseFloat(scrollContainerRef.current?.getAttribute('data-touch-start') || '0');
                                    const diffX = touch.clientX - startX;
                                    
                                    if (Math.abs(diffX) > 5) {
                                        e.preventDefault();
                                        scrollContainerRef.current?.scrollBy({
                                            left: -diffX,
                                            behavior: 'auto'
                                        });
                                        scrollContainerRef.current?.setAttribute('data-touch-start', touch.clientX.toString());
                                    }
                                }}
                            >
                                <div className="flex items-center h-full gap-4" style={{ minWidth: 'max-content', paddingLeft: 'calc(50% - 130px)', paddingRight: 'calc(50% - 130px)' }}>
                                    {stories.map((story, index) => {
                                        const distance = Math.abs(index - currentIndex);
                                        const isMiddle = index === currentIndex;
                                        const isSide = distance === 1 || distance === stories.length - 1;
                                        const isFarSide = distance === 2 || distance === stories.length - 2;
                                        
                                        // Middle image is slightly larger, side images same size
                                        let width = '240px';
                                        let height = '450px';
                                        let scale = 1;
                                        let opacity = 1;
                                        
                                        if (isMiddle) {
                                            width = '260px';
                                            height = '480px';
                                            scale = 1.08;
                                            opacity = 1;
                                        } else if (isSide) {
                                            opacity = 0.6;
                                        } else if (isFarSide) {
                                            opacity = 0.4;
                                        } else {
                                            opacity = 0.2;
                                        }

                                        return (
                                            <div
                                                key={story.id}
                                                className="relative flex-shrink-0 transition-all duration-700 ease-in-out"
                                                style={{
                                                    width: width,
                                                    height: height,
                                                    opacity: opacity,
                                                    transform: `scale(${scale})`,
                                                    zIndex: isMiddle ? 20 : isSide ? 10 : 5
                                                }}
                                                onMouseEnter={() => setHoveredIndex(index)}
                                                onMouseLeave={() => setHoveredIndex(null)}
                                            >
                                                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl group cursor-pointer">
                                                    {imageErrors[story.id] ? (
                                                        <div className="w-full h-full bg-gradient-to-br from-pink-200 to-purple-300 flex items-center justify-center rounded-2xl">
                                                            <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                                            </svg>
                                                        </div>
                                                    ) : (
                                                        <>
                                                            <img
                                                                src={story.image}
                                                                alt={story.alt}
                                                                className={`w-full h-full object-cover rounded-2xl transition-all duration-500 ${
                                                                    hoveredIndex !== null && hoveredIndex !== index
                                                                        ? 'grayscale'
                                                                        : isMiddle 
                                                                            ? 'grayscale-0' 
                                                                            : 'grayscale'
                                                                }`}
                                                                onError={() => setImageErrors(prev => ({ ...prev, [story.id]: true }))}
                                                            />
                                                            {/* Grey overlay for side images - fades based on distance */}
                                                            {!isMiddle && (
                                                                <div 
                                                                    className="absolute inset-0 bg-black/50 rounded-2xl transition-opacity duration-500"
                                                                    style={{ opacity: isSide ? 0.5 : isFarSide ? 0.7 : 0.8 }}
                                                                ></div>
                                                            )}
                                                            {/* Overlay text at bottom */}
                                                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-4 lg:p-6 rounded-b-2xl">
                                                                <h3 className="text-white text-lg lg:text-2xl font-bold">{story.title}</h3>
                                                            </div>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Custom scrollbar at bottom */}
                            <div className="mt-3 h-0.5 bg-gray-200 rounded-full overflow-hidden relative w-32 mx-auto">
                                <div 
                                    className="h-full bg-black rounded-full transition-all duration-300"
                                    style={{
                                        width: `${((currentIndex + 1) / stories.length) * 100}%`
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

