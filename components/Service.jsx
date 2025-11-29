import { Sparkles, Heart, Scissors, Palette } from 'lucide-react';
export default function Service() {
    const services = [
    { 
      name: 'Hair Styling', 
      price: 'From $65', 
      description: 'Cuts, colors, and treatments tailored to you',
      icon: <Scissors className="w-8 h-8 text-pink-500" />, 
      image: '/images/hair.jpg'
    },
    { 
      name: 'Makeup Artistry', 
      price: 'From $85', 
      description: 'Flawless looks for any occasion',
      icon: <Palette className="w-8 h-8 text-pink-500" />,
      image: '/images/makeup.jpg'
    },
    { 
      name: 'Nail Care', 
      price: 'From $45', 
      description: 'Manicures and pedicures with luxury polish',
      icon: <Sparkles className="w-8 h-8 text-pink-500" />,
      image: '/images/nails.jpg'
    },
    { 
      name: 'Facials', 
      price: 'From $95', 
      description: 'Rejuvenating skincare treatments',
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      image: '/images/facial.jpg'
    },
    { 
      name: 'Lash Extensions', 
      price: 'From $120', 
      description: 'Beautiful, natural-looking lashes',
      icon: <Sparkles className="w-8 h-8 text-pink-500" />,
      image: '/images/lash.jpg'
    },
    { 
      name: 'Bridal Services', 
      price: 'Custom', 
      description: 'Complete packages for your special day',
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      image: '/images/bridal.jpg'
    },
  ];
    return (
        <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-gray-600 text-lg">Indulge in our range of premium beauty treatments</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="p-0 rounded-2xl bg-gradient-to-br from-pink-50 to-purple-50 hover:shadow-xl transition transform hover:scale-105 border border-pink-100 flex flex-col sm:flex-row h-full overflow-hidden"
              >
                <div className="sm:w-40 w-full h-40 sm:h-full flex-shrink-0">
                  <img
                    src={service.image}
                    alt={service.name + ' example'}
                    className="object-cover w-full h-full"
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
      </section>
    )
}