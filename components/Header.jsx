import { Sparkles, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
                <div className="flex items-center space-x-2">
                <Sparkles className="w-6 h-6 text-pink-500" />
                <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                    Mirabel
                </span>
                </div>
                
                {/* Desktop Menu */}
                <div className="hidden md:flexs space-x-8">
                <a href="#home" className="text-gray-700 hover:text-pink-500 transition">Home</a>
                <a href="#services" className="text-gray-700 hover:text-pink-500 transition">Services</a>
                <a href="#about" className="text-gray-700 hover:text-pink-500 transition">About</a>
                <a href="#testimonials" className="text-gray-700 hover:text-pink-500 transition">Testimonials</a>
                <a href="#contact" className="text-gray-700 hover:text-pink-500 transition">Contact</a>
                </div>

                <button className="hidden md:block px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full hover:shadow-lg transition transform hover:scale-105">
                Book Now
                </button>

                {/* Mobile Menu Button */}
                <button 
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>
            </div>
            {/* Mobile Menu */}
            {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t">
                <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#home" className="block px-3 py-2 text-gray-700 hover:bg-pink-50 rounded">Home</a>
                <a href="#services" className="block px-3 py-2 text-gray-700 hover:bg-pink-50 rounded">Services</a>
                <a href="#about" className="block px-3 py-2 text-gray-700 hover:bg-pink-50 rounded">About</a>
                <a href="#testimonials" className="block px-3 py-2 text-gray-700 hover:bg-pink-50 rounded">Testimonials</a>
                <a href="#contact" className="block px-3 py-2 text-gray-700 hover:bg-pink-50 rounded">Contact</a>
                </div>
            </div>
            )}
        </header>
  );
  }