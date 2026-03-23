export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-white text-blue-900 rounded flex items-center justify-center font-bold">FS</span>
              Future School
            </h4>
            <p className="text-blue-200 text-sm leading-relaxed">
              A CBSE-affiliated institution dedicated to providing world-class education with modern pedagogy and holistic development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-blue-200 text-sm">
              <li><a href="#about" className="hover:text-white transition">About Us</a></li>
              <li><a href="#programs" className="hover:text-white transition">Programs</a></li>
              <li><a href="#faculty" className="hover:text-white transition">Faculty</a></li>
              <li><a href="#admissions" className="hover:text-white transition">Admissions</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-blue-200 text-sm">
              <li><a href="#" className="hover:text-white transition">Academic Calendar</a></li>
              <li><a href="#" className="hover:text-white transition">Fee Structure</a></li>
              <li><a href="#" className="hover:text-white transition">Student Portal</a></li>
              <li><a href="#" className="hover:text-white transition">Downloads</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <div className="flex gap-3 mb-6">
              <a href="#" className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-white hover:text-blue-900 transition">
                <span>f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-white hover:text-blue-900 transition">
                <span>𝕏</span>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-white hover:text-blue-900 transition">
                <span>📷</span>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-white hover:text-blue-900 transition">
                <span>in</span>
              </a>
            </div>
            <p className="text-blue-200 text-sm">
              <strong>Email:</strong><br/>
              info@futureschool.edu
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-700 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-blue-300 text-sm">
          <p>&copy; 2024 Future School. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition">Disclaimer</a>
          </div>
        </div>

        {/* Back to Top */}
        <div className="text-center mt-8">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-700 hover:bg-white hover:text-blue-900 rounded-full transition text-sm font-semibold"
          >
            ↑ Back to Top
          </button>
        </div>
      </div>
    </footer>
  )
}
