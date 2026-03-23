export default function Achievements() {
  const achievements = [
    {
      year: '2024',
      title: '95% Board Pass Rate',
      description: 'Outstanding performance in CBSE board exams'
    },
    {
      year: '2024',
      title: 'National Science Olympiad',
      description: '5 students in top 100 nationally'
    },
    {
      year: '2023',
      title: '100% University Admissions',
      description: 'All graduates secured admission in top universities'
    },
    {
      year: '2023',
      title: 'State Sports Championship',
      description: 'Won 3 gold medals in athletics and cricket'
    },
    {
      year: '2022',
      title: 'International Accreditation',
      description: 'ISO certified for quality education standards'
    },
    {
      year: '2022',
      title: 'Best School Award',
      description: 'Award for Excellence in Education & Infrastructure'
    }
  ]

  return (
    <section id="achievements" className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Our Achievements</h2>
          <p className="text-lg text-gray-600">Celebrating excellence and success</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6 border-l-4 border-blue-600">
              <div className="text-blue-600 font-bold text-sm mb-2">{achievement.year}</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">{achievement.title}</h3>
              <p className="text-gray-600">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
