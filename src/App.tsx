import { useState, useCallback } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import LandingPage from './pages/LandingPage'
import TutorialDiscovery from './pages/TutorialDiscovery'
import TutorialDashboard from './pages/TutorialDashboard'
import TutorialCourseFrame from './pages/TutorialCourseFrame'
import TutorialInternal from './pages/TutorialInternal'
import type { PageId } from './types'

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('landing')

  const navigate = useCallback((id: PageId) => {
    setCurrentPage(id)
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Nav currentPage={currentPage} navigate={navigate} />
      <div className={`page ${currentPage === 'landing' ? 'active' : ''}`}>
        <LandingPage navigate={navigate} />
      </div>
      <div className={`page ${currentPage === 'tutorial-discovery' ? 'active' : ''}`}>
        <TutorialDiscovery navigate={navigate} />
      </div>
      <div className={`page ${currentPage === 'tutorial-dashboard' ? 'active' : ''}`}>
        <TutorialDashboard navigate={navigate} />
      </div>
      <div className={`page ${currentPage === 'tutorial-courseframe' ? 'active' : ''}`}>
        <TutorialCourseFrame navigate={navigate} />
      </div>
      <div className={`page ${currentPage === 'tutorial-internal' ? 'active' : ''}`}>
        <TutorialInternal navigate={navigate} />
      </div>
      <Footer />
    </>
  )
}
