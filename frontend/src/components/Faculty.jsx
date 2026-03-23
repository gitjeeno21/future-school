export default function Faculty() {
  const faculty = [
    {
      name: 'Dr. Rajesh Kumar',
      title: 'Principal',
      qualification: 'M.A., B.Ed, PhD',
      specialty: 'Education & Leadership'
    },
    {
      name: 'Prof. Priya Sharma',
      title: 'Head of Science',
      qualification: 'M.Sc Physics, B.Ed',
      specialty: 'Physics & Astronomy'
    },
    {
      name: 'Mr. Amit Patel',
      title: 'Head of Mathematics',
      qualification: 'M.Sc Mathematics, B.Ed',
      specialty: 'Advanced Mathematics'
    },
    {
      name: 'Ms. Neha Singh',
      title: 'Head of English',
      qualification: 'M.A English, B.Ed',
      specialty: 'Language & Literature'
    },
    {
      name: 'Dr. Arun Verma',
      title: 'Sports Director',
      qualification: 'M.Sc PE, National Coach Cert',
      specialty: 'Sports Development'
    },
    {
      name: 'Mrs. Anjali Gupta',
      title: 'Counselor',
      qualification: 'M.A Psychology, Diploma in Counseling',
      specialty: 'Student Guidance'
    }
  ]

  return (
    <section id="faculty" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Our Faculty</h2>
          <p className="text-lg text-gray-600">Highly qualified and dedicated educators</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faculty.map((member, idx) => (
            <div key={idx} className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md hover:shadow-lg transition p-6 border-t-4 border-blue-600">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mb-4 flex items-center justify-center text-white text-2xl font-bold">
                {member.name.charAt(0)}
              </div>
              <h3 className="text-xl font-bold text-blue-900">{member.name}</h3>
              <p className="text-blue-600 font-semibold text-sm">{member.title}</p>
              <p className="text-gray-600 text-sm mt-2">{member.qualification}</p>
              <p className="text-gray-500 text-xs mt-2 italic">{member.specialty}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
