import { Instagram, Facebook, Sparkles, Youtube } from 'lucide-react';
import { footerContent } from '../lib/content';

export default function Footer() {
  const { brandName, tagline, quickLinks, social, contact, copyright } = footerContent;

  return (
    <footer className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="w-6 h-6" />
              <span className="text-2xl font-bold">{brandName}</span>
            </div>
            <p className="text-pink-100">{tagline}</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{quickLinks.title}</h4>
            <div className="space-y-2">
              {quickLinks.links.map((link, idx) => (
                <a key={idx} href={link.href} className="block text-pink-100 hover:text-white transition">{link.name}</a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{social.title}</h4>
            <div className="flex flex-wrap gap-3 mb-4">
              <a href={social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={social.snapchat} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.5 0a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11zm0 16.5c-1.5 0-3.5.5-5 2V24c1.5-1.5 3.5-2 5-2s3.5.5 5 2v-5.5c-1.5-1.5-3.5-2-5-2z" />
                </svg>
              </a>
              <a href={social.tiktok} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>              </a>
              <a href={social.youtube} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition">
                <Youtube className="w-5 h-5" />
              </a>
              <a href={social.pinterest} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0zm0 19a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 12 19zm3.5-7.5a3.54 3.54 0 0 1-1.41 2.64A3.34 3.34 0 0 0 13 16.5h-2a3.34 3.34 0 0 0-1.09-2.36A3.54 3.54 0 0 1 8.5 11.5a3.5 3.5 0 0 1 7 0z" />
                </svg>
              </a>
            </div>
            <p className="text-pink-100">{contact.email}</p>
            <p className="text-pink-100">{contact.phone}</p>
          </div>
        </div>

        <div className="border-t border-pink-400 pt-8 text-center">
          <p className="text-pink-100">{copyright}</p>
        </div>
      </div>
    </footer>
  )
}
