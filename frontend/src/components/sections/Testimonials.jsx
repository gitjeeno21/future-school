import { Reveal } from '../../utils/reveal'

export default function Testimonials() {
  return (
    <section className="py-20 md:py-24" style={{ background: '#111' }}>
      <div className="max-w-3xl mx-auto px-6 text-center">
        <Reveal>
          <p className="text-xs tracking-[0.25em] uppercase font-semibold mb-8" style={{ color: '#c0392b' }}>Parent Voices</p>
        </Reveal>
        <Reveal delay={80}>
          <p className="serif text-3xl md:text-4xl font-normal text-white leading-[1.3] italic">
            "Future School gave my daughter more than an education — it gave her confidence, discipline, and a lifelong love for learning."
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-10 flex flex-col items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
              style={{ background: '#c0392b' }}>R</div>
            <p className="text-white text-sm font-semibold">Razia Begum</p>
            <p className="text-xs" style={{ color: 'rgba(255,255,255,0.28)' }}>Parent · Grade 12 Student</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
