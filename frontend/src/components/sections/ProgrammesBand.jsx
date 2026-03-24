import { Link } from 'react-router-dom'
import { Reveal } from '../../utils/reveal'

const programs = [
  { icon: '📚', grade: 'I – V',     title: 'Primary',          desc: 'Foundational literacy, numeracy, and creative inquiry through hands-on activity.', num: '01' },
  { icon: '🔬', grade: 'VI – VIII', title: 'Middle School',    desc: 'Science labs, advanced mathematics, computing, and structured critical thinking.', num: '02' },
  { icon: '🎯', grade: 'IX – X',    title: 'Secondary',        desc: 'Board-focused preparation with personal mentoring and continuous assessment.',       num: '03' },
  { icon: '🏛️', grade: 'XI – XII',  title: 'Senior Secondary', desc: 'Science & Commerce with JEE / NEET coaching and university counselling.',            num: '04' },
]

export default function ProgrammesBand() {
  return (
    <section className="py-24 md:py-28" style={{ background: '#111' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <Reveal>
              <p className="text-xs tracking-[0.25em] uppercase font-semibold mb-4" style={{ color: '#c0392b' }}>Academics</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="serif text-4xl md:text-5xl font-normal text-white">Our Programmes</h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <p className="text-sm font-light max-w-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.3)' }}>
              A seamless CBSE journey from foundational primary years to senior secondary excellence.
            </p>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: 'rgba(255,255,255,0.05)' }}>
          {programs.map((p, i) => (
            <Reveal key={p.num} delay={i * 60}>
              <div className="group flex flex-col p-7 h-full cursor-pointer transition-colors duration-300 hover:bg-[#161616]"
                style={{ background: '#111' }}>
                <div className="flex items-start justify-between mb-8">
                  <span className="serif text-5xl font-normal leading-none transition-colors duration-300 text-white/10 group-hover:text-[#c0392b]"
                    style={{  }}>{p.num}</span>
                  <div className="w-10 h-10 flex items-center justify-center text-lg transition-all duration-300 border border-white/10 group-hover:bg-[#c0392b] group-hover:border-[#c0392b]">{p.icon}</div>
                </div>
                <p className="text-[0.58rem] tracking-[0.22em] uppercase font-bold mb-2" style={{ color: '#c0392b' }}>{p.grade}</p>
                <h3 className="serif text-xl font-normal text-white mb-3">{p.title}</h3>
                <p className="text-xs leading-relaxed flex-1 font-light" style={{ color: 'rgba(255,255,255,0.36)' }}>{p.desc}</p>
                <Link to="/programs"
                  className="flex items-center gap-1.5 mt-6 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: '#c0392b' }}>
                  Explore
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
