export default function Hero() {
    return (
        <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent leading-tight">
            Mirabel Beauty Centre
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Where beauty meets elegance. Experience luxury treatments in a serene, modern atmosphere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full text-lg font-semibold hover:shadow-xl transition transform hover:scale-105"
              >
              Book Appointment
            </button>
            <button 
              onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-pink-500 text-pink-500 rounded-full text-lg font-semibold hover:bg-pink-50 transition"
            >
              View Services
            </button>
          </div>
        </div>
      </section>
    )
}