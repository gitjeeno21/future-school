export default function Programs() {
  const programs = [
    {
      id: 1,
      title: 'Primary Section',
      classes: 'Classes I - V',
      description: 'Foundation building with focus on English, Mathematics, Science, and Social Studies',
      icon: '📚',
      color: 'from-blue-400 to-blue-600'
    },
    {
      id: 2,
      title: 'Secondary Section',
      classes: 'Classes VI - VIII',
      description: 'Advanced curriculum with specialized subjects and laboratory-based learning',
      icon: '🔬',
      color: 'from-blue-500 to-blue-700'
    },
    {
      id: 3,
      title: 'Senior Secondary',
      classes: 'Classes IX - XII',
      description: 'CBSE board preparation with Science, Commerce streams and dedicated mentoring',
      icon: '🎓',
      color: 'from-blue-600 to-blue-800'
    }
  ]

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Our Programs</h2>
          <p className="text-lg text-gray-600">Comprehensive education across all levels</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div 
              key={program.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 overflow-hidden"
            >
              <div className={`bg-gradient-to-r ${program.color} h-32 flex items-center justify-center text-6xl`}>
                {program.icon}
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-2">{program.title}</h3>
                <p className="text-blue-600 font-semibold mb-4">{program.classes}</p>
                <p className="text-gray-600 leading-relaxed">{program.description}</p>
                <button className="mt-6 w-full px-4 py-2 bg-blue-50 text-blue-600 font-semibold rounded-lg hover:bg-blue-100 transition">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
