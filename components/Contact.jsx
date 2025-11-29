import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react';

export default function Contact(){
    return (
        <section id="contact" className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-gray-600 text-lg">We'd love to help you look and feel your best</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-pink-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-gray-900">Location</h3>
                  <p className="text-gray-600">
                    Near muraba lulu centre<br/>
                    Welcome Trade Building floor no 2<br/>
                    New York, NY 10001
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-pink-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-gray-900">Hours</h3>
                  <p className="text-gray-600">Mon - Fri: 9:00 AM - 7:00 PM<br/>Sat: 10:00 AM - 6:00 PM<br/>Sun: Closed</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-pink-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-gray-900">Phone</h3>
                  <p className="text-gray-600">+971 50 535 0637</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-pink-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-gray-900">Email</h3>
                  <p className="text-gray-600">Mirabelbc@gmail.com</p>
                </div>
              </div>

              <div className="flex space-x-4 pt-4">
                <a 
                  href="https://www.instagram.com/mirabel_alain?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white hover:shadow-lg transition transform hover:scale-110"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.facebook.com/mirabelalain" 
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white hover:shadow-lg transition transform hover:scale-110"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Send us a message</h3>
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-4 py-3 rounded-lg border border-pink-200 focus:outline-none focus:border-pink-500 text-gray-800 placeholder-gray-400"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full px-4 py-3 rounded-lg border border-pink-200 focus:outline-none focus:border-pink-500 text-gray-800 placeholder-gray-400"
                />
                <input 
                  type="tel" 
                  placeholder="Your Phone" 
                  className="w-full px-4 py-3 rounded-lg border border-pink-200 focus:outline-none focus:border-pink-500 text-gray-800 placeholder-gray-400"
                />
                <textarea 
                  placeholder="Your Message" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-pink-200 focus:outline-none focus:border-pink-500 text-gray-800 placeholder-gray-400"
                ></textarea>
                <button 
                  onClick={() => alert('Thank you for your message! We will get back to you soon.')}
                  className="w-full px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg font-semibold hover:shadow-lg transition transform hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}