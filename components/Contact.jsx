import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { contactContent } from '../lib/content';

export default function Contact() {
  const { title, subtitle, info, form } = contactContent;

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-gray-600 text-lg">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-pink-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-1 text-gray-900">{info.location.title}</h3>
                <p className="text-gray-600">
                  {info.location.lines.map((line, idx) => (
                    <span key={idx}>{line}{idx < info.location.lines.length - 1 && <br />}</span>
                  ))}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Clock className="w-6 h-6 text-pink-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-1 text-gray-900">{info.hours.title}</h3>
                <p className="text-gray-600" style={{ whiteSpace: 'pre-line' }}>{info.hours.text}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-pink-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-1 text-gray-900">{info.phone.title}</h3>
                <p className="text-gray-600">{info.phone.value}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-pink-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-1 text-gray-900">{info.email.title}</h3>
                <p className="text-gray-600">{info.email.value}</p>
              </div>
            </div>

          </div>

          <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">{form.title}</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder={form.namePlaceholder}
                className="w-full px-4 py-3 rounded-lg border border-pink-200 focus:outline-none focus:border-pink-500 text-gray-800 placeholder-gray-400"
              />
              <input
                type="email"
                placeholder={form.emailPlaceholder}
                className="w-full px-4 py-3 rounded-lg border border-pink-200 focus:outline-none focus:border-pink-500 text-gray-800 placeholder-gray-400"
              />
              <input
                type="tel"
                placeholder={form.phonePlaceholder}
                className="w-full px-4 py-3 rounded-lg border border-pink-200 focus:outline-none focus:border-pink-500 text-gray-800 placeholder-gray-400"
              />
              <textarea
                placeholder={form.messagePlaceholder}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-pink-200 focus:outline-none focus:border-pink-500 text-gray-800 placeholder-gray-400"
              ></textarea>
              <button
                onClick={() => alert(form.successMessage)}
                className="w-full px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg font-semibold hover:shadow-lg transition transform hover:scale-105"
              >
                {form.submitButton}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}