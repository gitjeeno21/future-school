export default function Admissions() {
  const steps = [
    {
      num: '01',
      title: 'Registration',
      description: 'Fill online registration form with basic details'
    },
    {
      num: '02',
      title: 'Entrance Test',
      description: 'Appear for entrance exam (if applicable for your class)'
    },
    {
      num: '03',
      title: 'Interview',
      description: 'Face-to-face interview with school management'
    },
    {
      num: '04',
      title: 'Admission Offer',
      description: 'Receive admission letter and complete formalities'
    }
  ]

  return (
    <section id="admissions" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Admissions Process</h2>
            <p className="text-gray-600 text-lg mb-8">
              We welcome motivated students who are committed to academic excellence and personal growth.
            </p>
            
            <div className="space-y-6">
              {steps.map((step, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-900 text-lg">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-8 px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition">
              Apply Now
            </button>
          </div>

          <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 h-full flex flex-col justify-center">
            <div className="text-center">
              <div className="inline-block bg-white rounded-full p-3 mb-4">
                <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Ready to Join Us?</h3>
              <p className="text-gray-700 mb-6">
                Admissions are open for Classes I-XII. Limited seats available.
              </p>
              <div className="space-y-2">
                <p className="text-sm text-gray-600"><strong>Application Fee:</strong> ₹500</p>
                <p className="text-sm text-gray-600"><strong>Admission Deadline:</strong> June 30, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
