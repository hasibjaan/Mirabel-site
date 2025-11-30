import { Sparkles, Heart, Scissors, Palette, X, Star } from 'lucide-react';
import { useState } from 'react';
import { servicesContent } from '../lib/content';

export default function Service() {
  const [selectedService, setSelectedService] = useState(null);

  const { title, subtitle, services, testimonials, bookButton } = servicesContent;

  // Map services to include icons
  const servicesWithIcons = services.map((service) => {
    let icon;
    if (service.name === 'Hair Styling') icon = <Scissors className="w-8 h-8 text-pink-500" />;
    else if (service.name === 'Makeup Artistry') icon = <Palette className="w-8 h-8 text-pink-500" />;
    else if (service.name === 'Nail Care' || service.name === 'Lash Extensions') icon = <Sparkles className="w-8 h-8 text-pink-500" />;
    else icon = <Heart className="w-8 h-8 text-pink-500" />;

    return { ...service, icon };
  });

  return (
    <section id="services" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-gray-600 text-lg">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesWithIcons.map((service, index) => (
            <div
              key={index}
              onClick={() => setSelectedService(service)}
              className="p-0 rounded-2xl bg-gradient-to-br from-pink-50 to-purple-50 hover:shadow-xl transition transform hover:scale-105 border border-pink-100 flex flex-col sm:flex-row h-full overflow-hidden cursor-pointer group"
            >
              <div className="sm:w-40 w-full h-40 sm:h-full flex-shrink-0">
                <img
                  src={service.image}
                  alt={service.name + ' example'}
                  className="object-cover w-full h-full group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="flex-1 p-6 flex flex-col justify-center">
                <div className="mb-2">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-1">{service.name}</h3>
                <p className="text-pink-600 font-semibold text-xl mb-1">{service.price}</p>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <>
          <style jsx>{`
            @keyframes modalSlideUp {
              from {
                opacity: 0;
                transform: translateY(30px) scale(0.95);
              }
              to {
                opacity: 1;
                transform: translateY(0) scale(1);
              }
            }
            
            @keyframes backdropFade {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }
            
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            
            .modal-content {
              animation: modalSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            }
            
            .modal-backdrop {
              animation: backdropFade 0.3s ease-out;
            }
            
            .scroll-container {
              animation: scroll 25s linear infinite;
            }
            
            .scroll-container:hover {
              animation-play-state: paused;
            }
          `}</style>

          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              className="modal-backdrop absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedService(null)}
            ></div>
            <div className="modal-content relative bg-white rounded-3xl shadow-2xl max-w-5xl w-full overflow-hidden">
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white text-gray-600 hover:text-pink-600 transition z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-2/5 h-80 md:h-auto relative">
                  <img
                    src={selectedService.image}
                    alt={selectedService.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:hidden"></div>
                </div>
                <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                  <div className="mb-4">{selectedService.icon}</div>
                  <h3 className="text-4xl font-bold text-gray-800 mb-3">{selectedService.name}</h3>
                  <p className="text-2xl font-semibold text-pink-600 mb-6">{selectedService.price}</p>
                  <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                    {selectedService.details}
                  </p>
                  <button
                    onClick={() => {
                      setSelectedService(null);
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition transform hover:scale-105 text-lg"
                  >
                    {bookButton}
                  </button>
                </div>
              </div>


              {/* Scrolling Feedback Banner */}
              <div className="w-full bg-gray-50 py-6 overflow-hidden border-t border-gray-200">
                <div className="scroll-container flex whitespace-nowrap">
                  {/* First set */}
                  <div className="flex items-center space-x-4 px-4">
                    <div className="inline-block bg-white rounded-xl shadow-md p-4 min-w-[300px]">
                      <div className="flex items-center mb-2 gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <p className="text-gray-700 text-sm mb-2">"Amazing service! Highly recommend!"</p>
                      <p className="text-pink-600 font-semibold text-sm">- Sarah Johnson</p>
                    </div>
                    <div className="inline-block bg-white rounded-xl shadow-md p-4 min-w-[300px]">
                      <div className="flex items-center mb-2 gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <p className="text-gray-700 text-sm mb-2">"Best experience ever! Will definitely return."</p>
                      <p className="text-pink-600 font-semibold text-sm">- Emily Chen</p>
                    </div>
                    <div className="inline-block bg-white rounded-xl shadow-md p-4 min-w-[300px]">
                      <div className="flex items-center mb-2 gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <p className="text-gray-700 text-sm mb-2">"Professional and friendly staff. Love my results!"</p>
                      <p className="text-pink-600 font-semibold text-sm">- Jessica Martinez</p>
                    </div>
                    <div className="inline-block bg-white rounded-xl shadow-md p-4 min-w-[300px]">
                      <div className="flex items-center mb-2 gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <p className="text-gray-700 text-sm mb-2">"Exceeded all my expectations. Thank you!"</p>
                      <p className="text-pink-600 font-semibold text-sm">- Maria Rodriguez</p>
                    </div>
                  </div>
                  {/* Duplicate set for seamless loop */}
                  <div className="flex items-center space-x-4 px-4">
                    <div className="inline-block bg-white rounded-xl shadow-md p-4 min-w-[300px]">
                      <div className="flex items-center mb-2 gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <p className="text-gray-700 text-sm mb-2">"Amazing service! Highly recommend!"</p>
                      <p className="text-pink-600 font-semibold text-sm">- Sarah Johnson</p>
                    </div>
                    <div className="inline-block bg-white rounded-xl shadow-md p-4 min-w-[300px]">
                      <div className="flex items-center mb-2 gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <p className="text-gray-700 text-sm mb-2">"Best experience ever! Will definitely return."</p>
                      <p className="text-pink-600 font-semibold text-sm">- Emily Chen</p>
                    </div>
                    <div className="inline-block bg-white rounded-xl shadow-md p-4 min-w-[300px]">
                      <div className="flex items-center mb-2 gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <p className="text-gray-700 text-sm mb-2">"Professional and friendly staff. Love my results!"</p>
                      <p className="text-pink-600 font-semibold text-sm">- Jessica Martinez</p>
                    </div>
                    <div className="inline-block bg-white rounded-xl shadow-md p-4 min-w-[300px]">
                      <div className="flex items-center mb-2 gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <p className="text-gray-700 text-sm mb-2">"Exceeded all my expectations. Thank you!"</p>
                      <p className="text-pink-600 font-semibold text-sm">- Maria Rodriguez</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  )
}