import { Sparkles, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Services', href: '#services' },
        { name: 'About', href: '#about' },
        { name: 'Stories', href: '#stories' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Contact', href: '#contact' },
    ];

    const smoothScroll = (e, targetId) => {
        e.preventDefault();
        const target = document.querySelector(targetId);
        if (!target) return;

        const targetPosition = target.getBoundingClientRect().top + window.scrollY;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        const duration = 1000; // 1 second duration
        let start = null;

        const easeInOutCubic = (t) => {
            return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        };

        const animation = (currentTime) => {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const progress = Math.min(timeElapsed / duration, 1);
            const ease = easeInOutCubic(progress);

            window.scrollTo(0, startPosition + distance * ease);

            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        };

        requestAnimationFrame(animation);
        setMobileMenuOpen(false);
    };

    return (
        <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-2 cursor-pointer" onClick={(e) => smoothScroll(e, '#home')}>
                        <Sparkles className="w-6 h-6 text-pink-500" />
                        <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                            Mirabel
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => smoothScroll(e, link.href)}
                                className="px-4 py-2 text-gray-700 hover:text-pink-600 hover:bg-pink-100 rounded-full transition-all duration-300 font-medium"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <button
                        onClick={(e) => smoothScroll(e, '#contact')}
                        className="hidden md:block px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full hover:shadow-lg transition transform hover:scale-105 font-medium"
                    >
                        Book Now
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-gray-600 hover:text-pink-500 transition"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white border-t shadow-lg">
                    <div className="px-4 pt-2 pb-4 space-y-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => smoothScroll(e, link.href)}
                                className="block px-4 py-3 text-gray-700 hover:bg-pink-100 hover:text-pink-600 rounded-xl transition-colors font-medium"
                            >
                                {link.name}
                            </a>
                        ))}
                        <button
                            onClick={(e) => smoothScroll(e, '#contact')}
                            className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl font-medium shadow-md"
                        >
                            Book Now
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}