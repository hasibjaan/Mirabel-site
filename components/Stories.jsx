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

    // Constants for layout
    const ITEM_WIDTH = 260; // Base width of the card
    const GAP = 16; // Gap between items
    const TOTAL_ITEM_WIDTH = ITEM_WIDTH + GAP;

    // Track scroll position to determine middle image
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const handleScroll = () => {
            const scrollLeft = container.scrollLeft;
            const containerWidth = container.clientWidth;

            // Calculate center point of the container
            const centerPosition = scrollLeft + containerWidth / 2;

            // Calculate which item index is closest to the center
            // We add half an item width to align the index calculation to the center of the item
            // The first item starts at padding-left, so we need to account for that offset if it wasn't centered via CSS
            // But with snap-center and padding, the math is simpler:

            // Simply: (Scroll Position + Half Container) / Item Width
            // But since we have large padding to center the first item, 0 scroll means first item is centered.

            const newIndex = Math.round(scrollLeft / TOTAL_ITEM_WIDTH);
            const clampedIndex = Math.max(0, Math.min(stories.length - 1, newIndex));

            if (clampedIndex !== currentIndex) {
                setCurrentIndex(clampedIndex);
            }
        };

        container.addEventListener('scroll', handleScroll, { passive: true });
        // Initial check
        handleScroll();

        return () => {
            container.removeEventListener('scroll', handleScroll);
        };
    }, [currentIndex, stories.length]);

    // --- Auto-play slider with reset on user scroll ---
    const autoPlayTimeout = useRef();

    useEffect(() => {
        function startAutoPlay() {
            autoPlayTimeout.current = setTimeout(() => {
                const container = scrollContainerRef.current;
                if (!container) return;

                let nextIndex = currentIndex + 1;
                if (nextIndex >= stories.length) nextIndex = 0;

                const targetScroll = nextIndex * TOTAL_ITEM_WIDTH;

                container.scrollTo({
                    left: targetScroll,
                    behavior: 'smooth'
                });
                // State update will happen in onScroll
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
            // Restart the timer after interaction
            autoPlayTimeout.current = setTimeout(() => {
                const container = scrollContainerRef.current;
                if (!container) return;

                let nextIndex = currentIndex + 1;
                if (nextIndex >= stories.length) nextIndex = 0;

                const targetScroll = nextIndex * TOTAL_ITEM_WIDTH;
                container.scrollTo({ left: targetScroll, behavior: 'smooth' });
            }, 5000);
        }

        container.addEventListener('touchstart', userInteracted, { passive: true });
        container.addEventListener('wheel', userInteracted, { passive: true });

        return () => {
            container.removeEventListener('touchstart', userInteracted);
            container.removeEventListener('wheel', userInteracted);
        };
    }, [currentIndex, stories.length]);

    return (
        <section id="stories" className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                    {/* Left side - Text content */}
                    <div className="flex-1 lg:flex-[2] w-full z-10">
                        <p className="text-sm uppercase tracking-wider text-pink-600 font-semibold mb-4">
                            Discover
                        </p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                            Our beautiful stories
                        </h2>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            At Mirabel, we believe beauty is a journey of self-discovery and empowerment.
                            Every story we create is a celebration of individuality, confidence, and the
                            transformative power of self-care. Join us in crafting moments that reflect
                            your unique essence and inner radiance.
                        </p>
                    </div>

                    {/* Right side - Image slider */}
                    <div className="flex-1 lg:flex-1 w-full">
                        <div className="relative">
                            {/* Fade overlay on left side - widened to blend with text */}
                            <div className="absolute left-0 top-0 bottom-0 w-32 lg:w-80 bg-gradient-to-r from-pink-50 via-pink-50/80 to-transparent pointer-events-none z-30"></div>

                            {/* Fade overlay on right side */}
                            <div className="absolute right-0 top-0 bottom-0 w-24 lg:w-32 bg-gradient-to-l from-pink-50 to-transparent pointer-events-none z-30"></div>

                            {/* Scrollable slider container */}
                            <div
                                ref={scrollContainerRef}
                                className="relative h-[500px] lg:h-[600px] overflow-x-auto overflow-y-hidden scrollbar-hide mx-auto snap-x snap-mandatory"
                                style={{
                                    width: '100%',
                                    // Make sure the container is wide enough to show context but not too wide
                                    maxWidth: '100%'
                                }}
                            >
                                <div
                                    className="flex items-center h-full gap-4"
                                    style={{
                                        // Add padding to center the first and last items
                                        // Calculation: (Container Width / 2) - (Item Width / 2)
                                        // Since container width varies, we use a large percentage padding or calc
                                        // A simple way is to use a very wide padding that ensures centering
                                        paddingLeft: 'calc(50% - 130px)',
                                        paddingRight: 'calc(50% - 130px)',
                                        width: 'max-content'
                                    }}
                                >
                                    {stories.map((story, index) => {
                                        const distance = Math.abs(index - currentIndex);
                                        const isMiddle = index === currentIndex;
                                        const isSide = distance === 1;
                                        const isFarSide = distance >= 2;

                                        // Fixed dimensions for layout
                                        const width = '260px';
                                        const height = '450px'; // Base height

                                        // Visual transformations only
                                        let scale = 1;
                                        let opacity = 1;

                                        if (isMiddle) {
                                            scale = 1.1; // Scale up the active item
                                            opacity = 1;
                                        } else if (isSide) {
                                            scale = 0.9;
                                            opacity = 0.6;
                                        } else {
                                            scale = 0.85;
                                            opacity = 0.4;
                                        }

                                        return (
                                            <div
                                                key={story.id}
                                                className="relative flex-shrink-0 snap-center transition-all duration-500 ease-out"
                                                style={{
                                                    width: width,
                                                    height: height,
                                                    // We apply scale transform instead of changing width
                                                    transform: `scale(${scale})`,
                                                    opacity: opacity,
                                                    zIndex: isMiddle ? 20 : 10 - distance
                                                }}
                                                onMouseEnter={() => setHoveredIndex(index)}
                                                onMouseLeave={() => setHoveredIndex(null)}
                                                onClick={() => {
                                                    // Allow clicking to scroll to item
                                                    scrollContainerRef.current?.scrollTo({
                                                        left: index * TOTAL_ITEM_WIDTH,
                                                        behavior: 'smooth'
                                                    });
                                                }}
                                            >
                                                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl cursor-pointer bg-white">
                                                    {imageErrors[story.id] ? (
                                                        <div className="w-full h-full bg-gradient-to-br from-pink-200 to-purple-300 flex items-center justify-center">
                                                            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                                            </svg>
                                                        </div>
                                                    ) : (
                                                        <>
                                                            <img
                                                                src={story.image}
                                                                alt={story.alt}
                                                                className={`w-full h-full object-cover transition-all duration-500 ${hoveredIndex !== null && hoveredIndex !== index
                                                                    ? 'grayscale'
                                                                    : isMiddle
                                                                        ? 'grayscale-0'
                                                                        : 'grayscale'
                                                                    }`}
                                                                onError={() => setImageErrors(prev => ({ ...prev, [story.id]: true }))}
                                                            />

                                                            {/* Dark overlay for inactive items */}
                                                            {!isMiddle && (
                                                                <div className="absolute inset-0 bg-black/20 transition-opacity duration-500"></div>
                                                            )}

                                                            {/* Text overlay */}
                                                            <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 transition-opacity duration-300 ${isMiddle ? 'opacity-100' : 'opacity-0'}`}>
                                                                <h3 className="text-white text-xl font-bold">{story.title}</h3>
                                                            </div>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Custom scrollbar / Indicator */}
                            <div className="mt-8 h-1 bg-gray-200 rounded-full overflow-hidden relative w-48 mx-auto">
                                <div
                                    className="h-full bg-pink-500 rounded-full transition-all duration-300 ease-out"
                                    style={{
                                        width: `${(1 / stories.length) * 100}%`,
                                        transform: `translateX(${currentIndex * 100}%)`
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

