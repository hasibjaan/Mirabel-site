'use client';

import { useState } from 'react';
import { storiesContent } from '../lib/content';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

export default function Stories() {
    const { label, title, description, stories } = storiesContent;
    const [imageErrors, setImageErrors] = useState({});

    return (
        <section id="stories" className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Left side - Text content */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6">
                        <div className="space-y-4 w-full max-w-xl">
                            <span className="inline-block px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-semibold">
                                {label}
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                                {title}
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                {description}
                            </p>
                        </div>
                    </div>

                    {/* Right side - Image slider */}
                    <div className="w-full lg:w-1/2 relative">
                        {/* Fade overlay on left side */}
                        <div className="absolute left-0 top-0 bottom-0 w-12 z-20 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
                        {/* Fade overlay on right side */}
                        <div className="absolute right-0 top-0 bottom-0 w-12 z-20 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

                        <Swiper
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={'auto'}
                            loop={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            coverflowEffect={{
                                rotate: 0,
                                stretch: 0,
                                depth: 100,
                                modifier: 2.5,
                                slideShadows: false,
                            }}
                            pagination={{
                                clickable: true,
                                dynamicBullets: true,
                            }}
                            modules={[EffectCoverflow, Pagination, Autoplay]}
                            className="w-full py-10"
                        >
                            {stories.map((story) => (
                                <SwiperSlide
                                    key={story.id}
                                    className="!w-[280px] !h-[450px]"
                                >
                                    {({ isActive }) => (
                                        <div
                                            className={`relative w-full h-full rounded-2xl overflow-hidden shadow-xl bg-white transition-all duration-500 ${isActive ? 'scale-100 grayscale-0' : 'scale-90 grayscale opacity-60'}`}
                                        >
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
                                                        className="w-full h-full object-cover"
                                                        onError={() => setImageErrors(prev => ({ ...prev, [story.id]: true }))}
                                                    />

                                                    {/* Dark overlay for inactive items */}
                                                    {!isActive && (
                                                        <div className="absolute inset-0 bg-black/10"></div>
                                                    )}

                                                    {/* Text overlay */}
                                                    <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                                                        <h3 className="text-white text-xl font-bold">{story.title}</h3>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    )}
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Custom CSS for Swiper Pagination to match theme */}
                        <style jsx global>{`
                            .swiper-pagination-bullet {
                                background: #e5e7eb;
                                opacity: 1;
                            }
                            .swiper-pagination-bullet-active {
                                background: #db2777 !important;
                                width: 24px;
                                border-radius: 4px;
                            }
                        `}</style>
                    </div>
                </div>
            </div>
        </section>
    );
}
