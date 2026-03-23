export default function Hero() {
  return (
    <section id="home" className="relative h-screen bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="grid md:grid-cols-2 gap-8 w-full items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <div className="inline-block bg-blue-500 bg-opacity-30 px-4 py-2 rounded-full text-sm font-semibold">
              Excellence in Education
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Shape the Future Leaders
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              A CBSE-affiliated institution committed to providing world-class education with modern pedagogy and holistic development.
            </p>
            <div className="flex gap-4 pt-4">
              <button className="px-8 py-3 bg-white text-blue-700 font-bold rounded-lg hover:shadow-2xl hover:scale-105 transition transform">
                Get Admission
              </button>
              <button className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-700 transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image/Illustration */}
          <div className="hidden md:block">
            <div className="relative w-full h-96 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl shadow-2xl flex items-center justify-center">
              {/* Placeholder for image - can be replaced with actual image */}
              <svg className="w-4/5 h-4/5 text-blue-200" fill="currentColor" viewBox="0 0 100 100">
                <rect x="10" y="10" width="80" height="60" rx="5"/>
                <circle cx="35" cy="35" r="8" fill="white" opacity="0.5"/>
                <circle cx="65" cy="45" r="12" fill="white" opacity="0.5"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
