import { useEffect, useRef, useState } from 'react'

const useReveal = (threshold = 0.1) => {
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

const Reveal = ({ children, delay = 0, direction = 'up', className = '' }) => {
  const [ref, visible] = useReveal()
  const transforms = {
    up: 'translateY(32px)',
    left: 'translateX(-40px)',
    right: 'translateX(40px)',
    none: 'none',
  }
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'none' : transforms[direction],
      transition: `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
    }}>
      {children}
    </div>
  )
}

const management = [
  { name: 'Mr.K.Pandurangan', role: 'CHAIRMAN', initials: 'KP' },
  { name: 'Mr.P.Sureshbabu', role: 'CORRESPONDENT', initials: 'PS' },
  { name: 'Ms.P.Rameshbabu', role: 'SECRETARY', initials: 'PR' },
  { name: 'Ms.Jayanthi Suresh', role: 'ACADEMIC DIRECTOR', initials: 'JS' },
  { name: 'Mrs.J.Yuvarani', role: 'PRINCIPAL', initials: 'JY' },
]

export default function Management() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
          <h2 className="serif text-4xl md:text-5xl font-normal mb-16 text-center" style={{ color: '#c0392b' }}>Management</h2>
        </Reveal>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {management.map((m, i) => (
            <Reveal key={m.name} delay={i * 100} direction="up">
              <div className="flex flex-col items-center text-center group">
                <div className="relative mb-6">
                  {/* Circle frame as seen in screenshot */}
                  <div className="w-32 h-44 md:w-40 md:h-52 rounded-[100px] border-2 border-gray-100 flex items-center justify-center overflow-hidden bg-gray-50 group-hover:border-red-600 transition-colors duration-300">
                    <span className="text-4xl font-black text-gray-200 serif group-hover:text-red-600/20 transition-colors">{m.initials}</span>
                  </div>
                  {/* In a real app, images would go here */}
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">{m.name}</h3>
                <p className="text-[0.6rem] tracking-widest uppercase font-semibold text-gray-400">{m.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
