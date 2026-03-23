export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">About Future School</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Empowering young minds through quality education and character building since 2010
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative h-96 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl shadow-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-blue-400 opacity-30">
                  <svg className="w-32 h-32 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14l9-5-9-5-9 5 9 5zm0 4l-9-5v5a9 9 0 0018 0v-5l-9 5zm0 4l9-5-9-5-9 5 9 5z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-3">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide comprehensive education that develops students into responsible citizens with academic excellence, moral values, and skills for the 21st century.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-3">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                Creating a nurturing environment where every student realizes their full potential, demonstrates leadership, and contributes positively to society.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-600">5000+</div>
                <p className="text-sm text-gray-600 mt-2">Students</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-600">200+</div>
                <p className="text-sm text-gray-600 mt-2">Faculty</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-600">15+</div>
                <p className="text-sm text-gray-600 mt-2">Years</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
