import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Reveal } from '../utils/reveal'

const heroSlides = [
  { kicker: 'Est. 1998 · Ambur', heading: 'Shape Your\nBrightest\nFuture.', sub: 'Future Senior Secondary School — CBSE Affiliated, nurturing excellence for 25 years.' },
  { kicker: 'Admissions 2026–27', heading: 'Every\nStudent\nBelongs.', sub: 'Smart classrooms, expert faculty, and a campus that inspires discovery every day.' },
  { kicker: '25 Years of Trust',  heading: 'Academic\nExcellence,\nHolistic Growth.', sub: 'Limited seats available for Classes I–XII. Applications now open.' },
]

export default function Hero() {
  const [heroIdx, setHeroIdx] = useState(0)
  const [heroVisible, setHeroVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setHeroVisible(true), 60)
    const t = setInterval(() => setHeroIdx(i => (i + 1) % heroSlides.length), 5500)
    return () => clearInterval(t)
  }, [])

  const fd = (d) => ({
    opacity: heroVisible ? 1 : 0,
    transform: heroVisible ? 'none' : 'translateY(24px)',
    transition: `opacity 1s cubic-bezier(0.16,1,0.3,1) ${d}ms, transform 1s cubic-bezier(0.16,1,0.3,1) ${d}ms`,
  })

  return (
    <>
      <section className="relative h-screen min-h-[640px] max-h-[980px] overflow-hidden flex flex-col justify-between"
        style={{ background: '#0d0d0d' }}>

        {/* Noise overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundSize: '160px' }} />

        {/* Crimson glow */}
        <div className="absolute pointer-events-none select-none"
          style={{ bottom: '-10%', left: '-10%', width: '60vw', height: '60vw', maxWidth: 700, maxHeight: 700, background: 'radial-gradient(circle, rgba(192,57,43,0.16) 0%, transparent 68%)', borderRadius: '50%' }} />

        {/* Top bar */}
        <div style={fd(0)} className="relative z-10 flex items-center justify-between px-6 md:px-12 pt-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center text-white font-black text-sm serif"
              style={{ background: '#c0392b' }}>FS</div>
            <span className="text-white/50 text-xs tracking-[0.2em] uppercase font-medium">Future School</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white/35 text-xs tracking-wider">Admissions Open</span>
          </div>
        </div>

        {/* Headline */}
        <div className="relative z-10 px-6 md:px-12">
          <div style={fd(100)} className="mb-3">
            <span className="text-white/30 text-xs tracking-[0.28em] uppercase font-medium">{heroSlides[heroIdx].kicker}</span>
          </div>
          <h1 className="serif text-white mb-6 leading-[0.96] tracking-tight whitespace-pre-line" style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', ...fd(200) }}>
            {heroSlides[heroIdx].heading}
          </h1>
          <div style={fd(340)} className="max-w-sm">
            <p className="text-sm leading-relaxed font-light" style={{ color: 'rgba(255,255,255,0.4)' }}>{heroSlides[heroIdx].sub}</p>
          </div>
          <div style={fd(440)} className="flex items-center gap-4 mt-8">
            <Link to="/admissions"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-px hover:brightness-110"
              style={{ background: '#c0392b' }}>
              Apply Now
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={fd(580)} className="relative z-10 flex items-end justify-between px-6 md:px-12 pb-8 pt-8">
          <div className="flex items-center gap-8">
            {[['3,000+', 'Students'], ['97.8%', 'Pass Rate'], ['25 yrs', 'Legacy']].map(([n, l]) => (
              <div key={l} className="flex flex-col gap-1">
                <span className="serif text-white text-xl font-normal leading-none">{n}</span>
                <span className="text-[0.58rem] tracking-[0.2em] uppercase" style={{ color: 'rgba(255,255,255,0.22)' }}>{l}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2">
            {heroSlides.map((_, i) => (
              <button key={i} onClick={() => setHeroIdx(i)}
                style={{
                  width: i === heroIdx ? '2rem' : '0.4rem',
                  height: '2px',
                  background: i === heroIdx ? '#c0392b' : 'rgba(255,255,255,0.2)',
                  transition: 'all 0.4s ease',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>

        {/* Side label */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4 z-10">
          <div className="w-px h-14" style={{ background: 'rgba(255,255,255,0.08)' }} />
          <span className="text-[0.52rem] tracking-[0.35em] uppercase"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', color: 'rgba(255,255,255,0.18)' }}>
            Ambur · Tamil Nadu
          </span>
          <div className="w-px h-14" style={{ background: 'rgba(255,255,255,0.08)' }} />
        </div>
      </section>

      {/* ══ TICKER ══ */}
      <div style={{ background: '#c0392b' }} className="py-2.5 overflow-hidden">
        <div className="ticker-track flex gap-16 whitespace-nowrap">
          {[...Array(2)].flatMap((_, ri) =>
            ['🏆 District Kabaddi Champions 2025', '📚 97.8% Board Pass Rate 2024', '🔬 5 Students — National Olympiad Top 100', '🎭 State Cultural Fest First Prize', '🥇 Athletics Championship — 3 Gold', '📋 Admissions Open 2026–27 · Limited Seats']
              .map((t, i) => <span key={`${ri}-${i}`} className="text-white text-xs font-semibold tracking-wide flex-shrink-0">{t}</span>)
          )}
        </div>
      </div>
    </>
  )
}