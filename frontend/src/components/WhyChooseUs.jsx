export default function WhyChooseUs() {
  const features = [
    {
      icon: '🏫',
      title: 'Modern Infrastructure',
      description: 'State-of-the-art buildings, science labs, computer centers, and digital libraries'
    },
    {
      icon: '👨‍🏫',
      title: 'Experienced Faculty',
      description: 'Qualified and dedicated teachers trained in modern teaching methodologies'
    },
    {
      icon: '🎨',
      title: 'Holistic Development',
      description: 'Sports, arts, music, and co-curricular activities for overall growth'
    },
    {
      icon: '💻',
      title: 'Digital Learning',
      description: 'Interactive e-learning platform, coding labs, and tech-enhanced classrooms'
    },
    {
      icon: '🌱',
      title: 'Values & Ethics',
      description: 'Character education and moral development as core components'
    },
    {
      icon: '🏆',
      title: 'Excellence',
      description: 'Consistent high board exam results and student achievements'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Why Choose Future School</h2>
          <p className="text-lg text-gray-600">Excellence in every aspect of education</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 hover:shadow-lg transition">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
