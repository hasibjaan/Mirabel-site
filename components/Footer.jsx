import { Instagram, Facebook, Sparkles } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="w-6 h-6" />
                <span className="text-2xl font-bold">Mirabel</span>
              </div>
              <p className="text-pink-100">Your destination for beauty and elegance. We're dedicated to making you look and feel amazing.</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#home" className="block text-pink-100 hover:text-white transition">Home</a>
                <a href="#services" className="block text-pink-100 hover:text-white transition">Services</a>
                <a href="#about" className="block text-pink-100 hover:text-white transition">About</a>
                <a href="#testimonials" className="block text-pink-100 hover:text-white transition">Testimonials</a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4 mb-4">
                <a href="https://www.instagram.com/mirabel_alain?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.facebook.com/mirabelalain" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
              <p className="text-pink-100">Mirabelbc@gmail.com</p>
              <p className="text-pink-100">+971 50 535 0637</p>
            </div>
          </div>
          
          <div className="border-t border-pink-400 pt-8 text-center">
            <p className="text-pink-100">© 2024 Mirabel Beauty Salon. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
}