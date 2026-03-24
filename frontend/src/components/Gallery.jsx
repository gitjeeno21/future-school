import { useEffect, useRef, useState } from 'react'

/* ─── Scroll-reveal hook ─── */
function useReveal(threshold = 0.1) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, visible]
}

function Reveal({ children, delay = 0, direction = 'up', className = '' }) {
  const [ref, visible] = useReveal()
  const transforms = { up: 'translateY(36px)', left: 'translateX(-40px)', right: 'translateX(40px)', none: 'none' }
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'none' : transforms[direction],
      transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
    }}>
      {children}
    </div>
  )
}

/* ─── Gallery data ─── */
const categories = ['All', 'Campus', 'Facilities', 'Sports', 'Events', 'Achievements']

const images = [
  { id: 1,  title: 'Main Campus Building',     category: 'Campus',       emoji: '🏫', span: 'col-span-2 row-span-2', bg: 'from-red-100 to-red-200' },
  { id: 2,  title: 'Science Laboratory',       category: 'Facilities',   emoji: '🔬', span: '',                      bg: 'from-slate-100 to-slate-200' },
  { id: 3,  title: 'Smart Classrooms',         category: 'Facilities',   emoji: '💻', span: '',                      bg: 'from-red-50 to-red-100' },
  { id: 4,  title: 'School Library',           category: 'Facilities',   emoji: '📚', span: '',                      bg: 'from-amber-50 to-amber-100' },
  { id: 5,  title: 'Sports Ground',            category: 'Sports',       emoji: '⚽', span: 'col-span-2',            bg: 'from-green-50 to-green-100' },
  { id: 6,  title: 'Annual Sports Day',        category: 'Events',       emoji: '🏆', span: '',                      bg: 'from-yellow-50 to-yellow-100' },
  { id: 7,  title: 'Cricket Team',             category: 'Sports',       emoji: '🏏', span: '',                      bg: 'from-red-50 to-rose-100' },
  { id: 8,  title: 'Annual Day Celebration',   category: 'Events',       emoji: '🎭', span: '',                      bg: 'from-purple-50 to-purple-100' },
  { id: 9,  title: 'School Assembly',          category: 'Events',       emoji: '🎤', span: '',                      bg: 'from-sky-50 to-sky-100' },
  { id: 10, title: 'Board Exam Toppers',       category: 'Achievements', emoji: '🥇', span: 'col-span-2',            bg: 'from-red-100 to-red-200' },
  { id: 11, title: 'Basketball Court',         category: 'Sports',       emoji: '🏀', span: '',                      bg: 'from-orange-50 to-orange-100' },
  { id: 12, title: 'Cultural Fest',            category: 'Events',       emoji: '🎨', span: '',                      bg: 'from-pink-50 to-pink-100' },
]

/* ─── Single gallery card ─── */
function GalleryCard({ image, delay, onClick }) {
  const [ref, visible] = useReveal(0.08)
  return (
    <div
      ref={ref}
      onClick={() => onClick(image)}
      className={`${image.span} relative rounded-2xl overflow-hidden cursor-pointer group`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(30px) scale(0.97)',
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
        minHeight: image.span.includes('row-span-2') ? '360px' : '200px',
      }}
    >
      {/* Placeholder bg — replace with <img src="..." className="w-full h-full object-cover" /> */}
      <div className={`absolute inset-0 bg-gradient-to-br ${image.bg} transition-transform duration-500 group-hover:scale-105`}>
        {/* Subtle dot pattern */}
        <div className="absolute inset-0"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
        {/* Big emoji placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="transition-transform duration-500 group-hover:scale-110 select-none"
            style={{ fontSize: image.span.includes('row-span-2') ? '6rem' : image.span.includes('col-span-2') ? '4rem' : '3rem', opacity: 0.35 }}
          >
            {image.emoji}
          </span>
        </div>
      </div>

      {/* Category tag */}
      <div className="absolute top-3 left-3 z-10">
        <span className="px-2.5 py-1 rounded-full bg-white/90 text-red-600 text-[0.62rem] font-bold tracking-wide shadow-sm">
          {image.category}
        </span>
      </div>

      {/* Zoom icon */}
      <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center shadow-md">
          <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Bottom overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10 bg-gradient-to-t from-black/60 via-black/20 to-transparent translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <p className="text-white font-bold text-sm leading-tight">{image.title}</p>
      </div>

      {/* Red border on hover */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-red-400/60 transition-all duration-300 pointer-events-none" />
    </div>
  )
}

/* ─── Lightbox ─── */
function Lightbox({ image, onClose, onPrev, onNext }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNext()
      if (e.key === 'ArrowLeft') onPrev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, onNext, onPrev])

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image area */}
        <div className={`relative h-80 bg-gradient-to-br ${image.bg} flex items-center justify-center`}>
          <div className="absolute inset-0"
            style={{ backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
          <span className="relative z-10 select-none" style={{ fontSize: '8rem', opacity: 0.4 }}>{image.emoji}</span>

          {/* Nav arrows */}
          <button onClick={onPrev} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-lg hover:bg-white transition-colors">
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button onClick={onNext} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-lg hover:bg-white transition-colors">
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Info */}
        <div className="p-5 flex items-center justify-between">
          <div>
            <p className="font-bold text-gray-900">{image.title}</p>
            <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full bg-red-50 text-red-600 text-xs font-semibold">{image.category}</span>
          </div>
          <button onClick={onClose} className="w-9 h-9 rounded-full bg-gray-100 hover:bg-red-50 hover:text-red-600 flex items-center justify-center transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* keyboard hint */}
        <p className="text-center text-[0.65rem] text-gray-300 pb-3 tracking-wide">← → arrow keys to navigate · Esc to close</p>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════
   GALLERY PAGE
══════════════════════════════════════════ */
export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = activeFilter === 'All'
    ? images
    : images.filter((img) => img.category === activeFilter)

  const openLightbox = (image) => setLightbox(image)
  const closeLightbox = () => setLightbox(null)

  const navigate = (dir) => {
    const idx = filtered.findIndex((i) => i.id === lightbox.id)
    const next = (idx + dir + filtered.length) % filtered.length
    setLightbox(filtered[next])
  }

  return (
    <main className="bg-white overflow-x-hidden">

      {/* ══ PAGE HEADER ══ */}
      <section className="relative bg-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(185,28,28,0.05) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-50/60 to-transparent pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-red-100/50 blur-[90px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <p className="text-xs font-bold tracking-widest uppercase text-red-600 mb-4">Visual Tour</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-4xl md:text-6xl font-light text-gray-900 leading-tight mb-5" style={{ fontFamily: "'Georgia', serif" }}>
              Our <em className="text-red-600 not-italic">Gallery</em>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <div className="w-12 h-0.5 bg-gradient-to-r from-red-600 to-transparent mx-auto mb-5" />
          </Reveal>
          <Reveal delay={300}>
            <p className="text-base md:text-lg text-gray-500 max-w-xl mx-auto leading-relaxed font-light">
              A glimpse into life at Future School — our campus, classrooms, sports, events, and proud moments.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══ STATS BAND ══ */}
      <section className="bg-red-600">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-red-500">
            {[['12+', 'Facilities'], ['50+', 'Annual Events'], ['10 Acres', 'Campus Area'], ['Since 1998', 'Our Legacy']].map(([n, l]) => (
              <div key={l} className="flex flex-col items-center py-5 px-4">
                <span className="text-xl md:text-2xl font-bold text-white" style={{ fontFamily: "'Georgia', serif" }}>{n}</span>
                <span className="text-red-200 text-[0.62rem] tracking-wider uppercase font-medium text-center mt-1">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FILTER + GRID ══ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Filter tabs */}
          <Reveal>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                    activeFilter === cat
                      ? 'bg-red-600 text-white border-red-600 shadow-[0_4px_16px_rgba(185,28,28,0.3)]'
                      : 'bg-white text-gray-500 border-gray-200 hover:border-red-300 hover:text-red-600 hover:bg-red-50'
                  }`}
                >
                  {cat}
                  {activeFilter === cat && (
                    <span className="ml-2 text-xs bg-white/20 px-1.5 py-0.5 rounded-full">
                      {cat === 'All' ? images.length : images.filter(i => i.category === cat).length}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Masonry-style grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-4">
            {filtered.map((image, i) => (
              <GalleryCard
                key={image.id}
                image={image}
                delay={i * 60}
                onClick={openLightbox}
              />
            ))}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-4xl mb-3">📷</p>
              <p className="text-gray-400 text-sm">No images in this category yet.</p>
            </div>
          )}

          {/* View more */}
          <Reveal delay={200}>
            <div className="text-center mt-12">
              <button className="flex items-center gap-2 px-8 py-3 bg-red-600 text-white text-sm font-bold rounded-lg hover:bg-red-700 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(185,28,28,0.3)] transition-all duration-200 mx-auto">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Load More Photos
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ VIDEO SECTION ══ */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Reveal><p className="text-xs font-bold tracking-widest uppercase text-red-600 mb-3">Watch</p></Reveal>
            <Reveal delay={100}>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
                School <em className="text-red-600 not-italic">Highlights</em>
              </h2>
            </Reveal>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'Annual Day 2024', dur: '4:32', emoji: '🎭' },
              { title: 'Sports Meet 2024', dur: '6:15', emoji: '🏆' },
              { title: 'Campus Tour', dur: '3:48', emoji: '🏫' },
            ].map(({ title, dur, emoji }, i) => (
              <Reveal key={title} delay={i * 100} direction="up">
                <div className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden cursor-pointer hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all duration-300">
                  <div className="h-44 flex items-center justify-center relative">
                    <span className="text-6xl opacity-20 select-none">{emoji}</span>
                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(185,28,28,0.5)] transition-all duration-300">
                        <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    {/* Duration badge */}
                    <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/60 text-white text-xs font-mono">{dur}</span>
                  </div>
                  <div className="p-4 border-t border-white/10">
                    <p className="text-white font-semibold text-sm">{title}</p>
                    <p className="text-gray-400 text-xs mt-0.5">Future School · Ambur</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <Lightbox
          image={lightbox}
          onClose={closeLightbox}
          onPrev={() => navigate(-1)}
          onNext={() => navigate(1)}
        />
      )}
    </main>
  )
}