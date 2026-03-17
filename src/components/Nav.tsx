import { Fragment } from 'react'
import type { PageId } from '../types'

const crumbs: Record<PageId, string[]> = {
  'landing': ['AI Prototyping'],
  'tutorial-discovery': ['AI Prototyping', 'Discovery'],
  'tutorial-dashboard': ['AI Prototyping', 'Dashboard'],
  'tutorial-courseframe': ['AI Prototyping', 'Course Frame'],
  'tutorial-internal': ['AI Prototyping', 'Internal Hub'],
}

interface NavProps {
  currentPage: PageId
  navigate: (id: PageId) => void
}

export default function Nav({ currentPage, navigate }: NavProps) {
  const parts = crumbs[currentPage]

  return (
    <nav>
      <div className="brand" onClick={() => navigate('landing')}>
        coursera<span>.design</span>
      </div>
      <div className="breadcrumb">
        {parts.map((p, i) => (
          <Fragment key={i}>
            {i < parts.length - 1 ? (
              <>
                <span>{p}</span>
                <span className="bc-sep">›</span>
              </>
            ) : (
              <span className="bc-cur">{p}</span>
            )}
          </Fragment>
        ))}
      </div>
      <div className="avatar">YN</div>
    </nav>
  )
}
