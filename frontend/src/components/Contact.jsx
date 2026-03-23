export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600">We'd love to hear from you. Contact us anytime.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Location */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 text-center">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-xl font-bold text-blue-900 mb-2">Address</h3>
            <p className="text-gray-600 leading-relaxed">
              Future School Campus<br/>
              Ambur, Tamil Nadu<br/>
              India - 635802
            </p>
          </div>

          {/* Phone */}
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl p-8 text-center">
            <div className="text-4xl mb-4">📞</div>
            <h3 className="text-xl font-bold text-blue-900 mb-2">Phone</h3>
            <p className="text-gray-600">
              +91 XXXXX XXXXX<br/>
              +91 XXXXX XXXXX<br/>
              <span className="text-sm">Ext: Admin, Admissions</span>
            </p>
          </div>

          {/* Email */}
          <div className="bg-gradient-to-br from-blue-200 to-blue-300 rounded-xl p-8 text-center">
            <div className="text-4xl mb-4">✉️</div>
            <h3 className="text-xl font-bold text-blue-900 mb-2">Email</h3>
            <p className="text-gray-600">
              info@futureschool.edu<br/>
              admissions@futureschool.edu<br/>
              support@futureschool.edu
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-blue-900 mb-6">Send us a Message</h3>
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <input 
              type="text" 
              placeholder="Subject" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea 
              rows="5" 
              placeholder="Your Message" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button 
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
