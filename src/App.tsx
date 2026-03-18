import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useAuth } from './lib/auth'
import Nav from './components/Nav'
import Footer from './components/Footer'
import LoginPage from './pages/LoginPage'
import LandingPage from './pages/LandingPage'
import TutorialDiscovery from './pages/TutorialDiscovery'
import TutorialDashboard from './pages/TutorialDashboard'
import TutorialCourseFrame from './pages/TutorialCourseFrame'
import TutorialInternal from './pages/TutorialInternal'

function ScrollToTop() {
  const { pathname, state } = useLocation()
  useEffect(() => {
    if (!(state as { scrollTo?: string })?.scrollTo) {
      window.scrollTo(0, 0)
    }
  }, [pathname, state])
  return null
}

export default function App() {
  const { user } = useAuth()

  if (!user) return <LoginPage />

  return (
    <>
      <Nav />
      <ScrollToTop />
      <main className="page-container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/tutorial/discovery" element={<TutorialDiscovery />} />
          <Route path="/tutorial/dashboard" element={<TutorialDashboard />} />
          <Route path="/tutorial/courseframe" element={<TutorialCourseFrame />} />
          <Route path="/tutorial/internal" element={<TutorialInternal />} />
        </Routes>
        <Footer />
      </main>
    </>
  )
}
