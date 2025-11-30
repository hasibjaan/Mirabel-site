'use client';

import { Star } from 'lucide-react';
import { testimonialsContent } from '../lib/content';

export default function Testimonial() {
  const { title, subtitle, testimonials } = testimonialsContent;

  // Duplicate testimonials to ensure seamless loop
  const allTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-pink-50 to-purple-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
          {title}
        </h2>
        <p className="text-gray-600 text-lg">{subtitle}</p>
      </div>

      <div className="relative w-full overflow-hidden group">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-pink-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-pink-50 to-transparent z-10 pointer-events-none"></div>

        {/* Marquee Container */}
        <div className="flex gap-8 animate-marquee w-max px-4 py-10">
          {allTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-[350px] md:w-[400px] flex-shrink-0"
            >
              <div className="h-full p-8 rounded-2xl bg-white border border-pink-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-h-[280px]">
                <div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-pink-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed line-clamp-4">"{testimonial.text}"</p>
                </div>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-bold text-lg shrink-0">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="font-semibold text-gray-800">{testimonial.name}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 100s linear infinite;
        }
      `}</style>
    </section>
  );
}