export default function Gallery() {
  const images = [
    { title: 'Campus Building', category: 'campus' },
    { title: 'Science Lab', category: 'facilities' },
    { title: 'Smart Classrooms', category: 'facilities' },
    { title: 'Sports Ground', category: 'sports' },
    { title: 'Library', category: 'facilities' },
    { title: 'Annual Event', category: 'events' },
    { title: 'Annual Day', category: 'events' },
    { title: 'Cricket Team', category: 'sports' },
    { title: 'School Assembly', category: 'events' }
  ]

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Gallery</h2>
          <p className="text-lg text-gray-600">Glimpses of our school life and facilities</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {images.map((image, idx) => (
            <div 
              key={idx}
              className="relative h-64 bg-gradient-to-br from-blue-200 to-blue-400 rounded-xl overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 flex items-center justify-center bg-opacity-20">
                <div className="text-white text-center transition group-hover:scale-110">
                  <svg className="w-12 h-12 mx-auto mb-2 opacity-70" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition">
                <p className="font-bold">{image.title}</p>
                <p className="text-sm text-gray-300">{image.category}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition">
            View Full Gallery
          </button>
        </div>
      </div>
    </section>
  )
}
