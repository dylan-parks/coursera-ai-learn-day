import { useState, useEffect } from 'react'

const phases = [
  { id: 'phase-0', label: 'Setup' },
  { id: 'phase-1', label: 'Phase 1' },
  { id: 'phase-2', label: 'Phase 2' },
  { id: 'phase-3', label: 'Phase 3' },
  { id: 'phase-4', label: 'Phase 4' },
]

export default function PhaseNav() {
  const [activeId, setActiveId] = useState('phase-0')

  useEffect(() => {
    const els = phases.map(p => document.getElementById(p.id)).filter(Boolean) as HTMLElement[]
    if (!els.length) return

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible.length) {
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: '-120px 0px -60% 0px', threshold: 0 }
    )

    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <nav className="phase-nav">
      <div className="phase-nav-inner">
        {phases.map(p => (
          <a key={p.id} href={`#${p.id}`} className={activeId === p.id ? 'active' : ''}>
            {p.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
