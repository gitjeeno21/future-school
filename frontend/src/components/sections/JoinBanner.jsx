import { Link } from 'react-router-dom'

export default function JoinBanner() {
  return (
    <section className="relative h-[480px] overflow-hidden group">
      <div className="absolute inset-0 bg-[#0d0d0d]/40 z-10" />
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
         {/* Background placeholder for the student kids image */}
         <div className="w-full h-full bg-red-900/20" />
      </div>
      
      <div className="relative z-20 h-full flex items-center lg:justify-end max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-red-600 p-12 md:p-16 max-w-xl text-white shadow-2xl skew-x-[-2deg]">
           <div className="skew-x-[2deg]">
              <h2 className="serif text-4xl md:text-5xl font-normal leading-[1.1] mb-6">Join with us for a good future.</h2>
              <Link to="/contact" className="inline-flex px-8 py-3.5 bg-white text-red-600 text-sm font-bold uppercase tracking-widest hover:bg-gray-100 transition-colors">
                Contact Us
              </Link>
           </div>
        </div>
      </div>
    </section>
  )
}
