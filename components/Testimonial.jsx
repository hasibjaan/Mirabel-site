import { Star } from 'lucide-react';

export default function Testimonial() {
    const testimonials = [
        {
          name: 'Sarah Johnson',
          text: 'Mirabel is absolutely amazing! The staff is so professional and my hair has never looked better. I always leave feeling like a million bucks!',
          rating: 5
        },
        {
          name: 'Emily Chen',
          text: 'Best beauty salon experience ever! The atmosphere is so relaxing and luxurious. My makeup for my wedding was flawless. Highly recommend!',
          rating: 5
        },
        {
          name: 'Jessica Martinez',
          text: 'I\'ve been coming to Mirabel for over a year now and I wouldn\'t go anywhere else. The quality of service is unmatched and the prices are fair.',
          rating: 5
        }
    ];

    return (
        <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 text-lg">Don't just take our word for it</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-purple-50 border border-pink-100 hover:shadow-xl transition"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-pink-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="font-semibold text-gray-800">{testimonial.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
    
}