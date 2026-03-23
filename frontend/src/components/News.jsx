export default function News() {
  const news = [
    {
      date: 'March 15, 2024',
      title: 'Class XII Board Exam Results - Outstanding Performance',
      excerpt: '95% pass rate with 25 students scoring above 90%. Congratulations to all achievers!',
      category: 'Academics'
    },
    {
      date: 'March 10, 2024',
      title: 'Annual Sports Day 2024 - A Grand Success',
      excerpt: 'Over 1000 spectators witnessed thrilling sports competition. New records set in multiple events.',
      category: 'Sports'
    },
    {
      date: 'March 1, 2024',
      title: 'Science Exhibition - Innovation Showcase',
      excerpt: 'Students displayed innovative projects in robotics, renewable energy, and environmental solutions.',
      category: 'Events'
    },
    {
      date: 'February 28, 2024',
      title: 'Staff Development Workshop Conducted',
      excerpt: 'Faculty underwent training in modern pedagogical methods and digital classroom management.',
      category: 'Development'
    }
  ]

  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Latest News & Updates</h2>
          <p className="text-lg text-gray-600">Stay informed about our school activities</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {news.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 border-l-4 border-blue-600">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-white bg-blue-600 px-3 py-1 rounded-full">
                  {item.category}
                </span>
                <span className="text-xs text-gray-500">{item.date}</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.excerpt}</p>
              <button className="text-blue-600 font-semibold hover:text-blue-800 transition">
                Read More →
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition">
            View All News
          </button>
        </div>
      </div>
    </section>
  )
}
