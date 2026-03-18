import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useSubmissions } from '../lib/submissions'
import SubmitDialog from '../components/SubmitDialog'

export default function LandingPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const { submissions, pendingCard, submitProject } = useSubmissions()

  const [dialogOpen, setDialogOpen] = useState(false)

  useEffect(() => {
    const scrollTo = (location.state as { scrollTo?: string })?.scrollTo
    if (scrollTo) {
      setTimeout(() => {
        document.getElementById(scrollTo)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [location.state])

  useEffect(() => {
    if (pendingCard) {
      setTimeout(() => {
        document.getElementById('gallery-section')?.scrollIntoView({ behavior: 'smooth' })
      }, 50)
    }
  }, [pendingCard])

  const handleSubmit = (data: Parameters<typeof submitProject>[0]) => {
    submitProject(data)
  }

  const formatTimestamp = (iso: string) => {
    const d = new Date(iso)
    return `${d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} · ${d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}`
  }

  return (
    <>
      <div className="lhero">
        <div className="lhero-eyebrow">March 23 – April 3</div>
        <div className="lhero-title">AI Prototyping<br /><em>Learning Day.</em></div>
        <div className="lhero-sub">A full workday to learn Cursor — one of the leading AI prototyping tools right now. Pick a surface, follow a tutorial, build something real using Cursor and the Figma MCP workflow.</div>
        <button
          className="bg-blue-700 hover:bg-blue-800 text-white border-none rounded-8 cds-action-secondary cursor-pointer inline-flex items-center gap-8"
          style={{ padding: '12px 20px', fontFamily: 'inherit' }}
          onClick={() => document.getElementById('surface-section')?.scrollIntoView({ behavior: 'smooth' })}
        >Choose your surface</button>
        <div className="lhero-meta">
          <div><div className="stat-val">1 day</div><div className="stat-lbl">Any day, Mar 23 – Apr 3</div></div>
          <div><div className="stat-val">Cursor</div><div className="stat-lbl">Using Claude · Figma MCP</div></div>
          <div><div className="stat-val">4 templates</div><div className="stat-lbl">Choose your starting point</div></div>
        </div>
      </div>

      <div className="ls">
        <div className="sec-label">Overview</div>
        <div className="sec-title">What is this and how does it work?</div>
        <div className="wh-grid">
          <div className="wh-card"><div className="wh-icon">📅</div><div className="wh-title">Take a full day, any day</div><div className="wh-body">Block your calendar between March 23 and April 3. This is a real workday dedicated to learning. Work with your manager if you need help protecting the time.</div></div>
          <div className="wh-card"><div className="wh-icon">🛠️</div><div className="wh-title">Morning: follow a tutorial</div><div className="wh-body">Pick a surface and work through a guided tutorial. You will go from zero to a working interactive prototype using Cursor and the Figma MCP.</div></div>
          <div className="wh-card"><div className="wh-icon">🚀</div><div className="wh-title">Afternoon: build freely</div><div className="wh-body">Take what you learned and push it. Build on your morning prototype, try a second surface, or bring a concept from your actual work.</div></div>
          <div className="wh-card"><div className="wh-icon">📤</div><div className="wh-title">End of day: share what you made</div><div className="wh-body">Submit a short reflection and optionally share a screenshot or recording. It shows up in the gallery below so others can see your work and reach out.</div></div>
        </div>
      </div>

      <div className="ls">
        <div className="sec-label">Schedule</div>
        <div className="sec-title">Shape of the day</div>
        <div className="day-grid">
          <div className="day-band am">Morning · 9:00 – 12:00</div>
          <div className="day-row"><div className="day-time">9:00 – 9:30</div><div className="day-content"><strong>Read this guide</strong><span>Orientation, setup check, choose your surface.</span></div></div>
          <div className="day-row"><div className="day-time">9:30 – 10:00</div><div className="day-content"><strong>Final setup</strong><span>Get your project running. Post in Slack if anything breaks.</span></div></div>
          <div className="day-row"><div className="day-time">10:00 – 12:00</div><div className="day-content"><strong>Tutorial</strong><span>Work through your chosen tutorial start to finish. Take your time with each step.</span></div></div>
          <div className="day-band lunch">Lunch · 12:00 – 1:00</div>
          <div className="day-row lunch-row"><div className="day-time">12:00 – 1:00</div><div className="day-content"><strong>Lunch</strong><span>Step away. Let what you built settle.</span></div></div>
          <div className="day-band pm">Afternoon · 1:00 – 5:00</div>
          <div className="day-row"><div className="day-time">1:00 – 3:30</div><div className="day-content"><strong>Free exploration</strong><span>Build on the morning, try a second surface, or bring a real work concept to life.</span></div></div>
          <div className="day-row"><div className="day-time">3:30 – 4:30</div><div className="day-content"><strong>Refine and document</strong><span>Tighten what you built. Capture a screenshot, GIF, or recording.</span></div></div>
          <div className="day-row"><div className="day-time">4:30 – 5:00</div><div className="day-content"><strong>Submit</strong><span>Fill out the form below. You're done.</span></div></div>
        </div>
      </div>

      <div className="ls">
        <div className="sec-label">Before your learning day</div>
        <div className="sec-title">Get set up first</div>
        <div className="sec-body">Software installation at Coursera requires IT approval and may take a day or two. Work through these steps well before your learning day.</div>
        <div className="setup-list">
          <div className="setup-item"><div className="setup-num">1</div><div>
            <div className="setup-title">Download Cursor</div>
            <div className="setup-body">Cursor is the tool for all tutorials.
              <ul className="setup-steps">
                <li><span className="n">1.</span> Submit a software request for Cursor via <strong>ServiceNow</strong> [link TBD]. Note it is for the Design &amp; Research AI Prototyping Learning Day.</li>
                <li><span className="n">2.</span> Get approval from your manager — copy them on the ServiceNow request or send a separate note.</li>
                <li><span className="n">3.</span> Once approved, open <strong>Coursera Self Service</strong> [link TBD], search for Cursor, and install it.</li>
                <li><span className="n">4.</span> Sign in to Cursor using your Coursera credentials via <strong>OKTA</strong> when prompted on first launch.</li>
              </ul>
            </div>
          </div></div>
          <div className="setup-item"><div className="setup-num">2</div><div>
            <div className="setup-title">Block your calendar and loop in your manager</div>
            <div className="setup-body">Pick one day between March 23 and April 3, block it in your calendar, and let your manager know. If you are having trouble getting the time approved, post in the Slack channel.</div>
          </div></div>
          <div className="setup-item setup-item-optional"><div className="setup-num optional">?</div><div>
            <div className="setup-title">Optional: Set up GitHub and Vercel <span className="setup-optional-tag">Optional</span></div>
            <div className="setup-body">Not required for the learning day itself, but worth doing in advance if you want to share your prototype as a live URL with stakeholders afterward. This may require manager approval to create accounts on company devices or under a company email.
              <ul className="setup-steps">
                <li><span className="n">1.</span> Create a GitHub account at <strong>github.com</strong> using your Coursera email.</li>
                <li><span className="n">2.</span> Create a Vercel account at <strong>vercel.com</strong> — sign up with GitHub, which links both accounts in one step.</li>
              </ul>
              If you are unsure whether you need approval to create these accounts, check with your manager before the learning day.
            </div>
          </div></div>
        </div>
      </div>

      <div className="ls" id="surface-section">
        <div className="sec-label">Cursor · Choose your template</div>
        <div className="sec-title">What do you want to build?</div>
        <div className="sec-body">Each boilerplate is a working starting point. Pick the template closest to your area of work, or simply the one you're most energized by.</div>
        <div className="surface-grid">
          <div className="sc"><div className="sc-thumb a"><div className="sc-tag">A · Discovery</div></div><div className="sc-body"><div className="sc-label">Boilerplate A</div><div className="sc-title">Course Discovery</div><div className="sc-desc">A conversational landing page. Build the AI-powered discovery experience — loading state, results view, and course grid.</div><button className="sc-btn" onClick={() => navigate('/tutorial/discovery')}>Start tutorial</button></div></div>
          <div className="sc"><div className="sc-thumb b"><div className="sc-tag">B · Learning</div></div><div className="sc-body"><div className="sc-label">Boilerplate B</div><div className="sc-title">My Learning Dashboard</div><div className="sc-desc">The logged-in home page. Redesign how learners track progress, pick up where they left off, and see what's next.</div><button className="sc-btn" onClick={() => navigate('/tutorial/dashboard')}>Start tutorial</button></div></div>
          <div className="sc"><div className="sc-thumb c"><div className="sc-tag">C · Course Frame</div></div><div className="sc-body"><div className="sc-label">Boilerplate C</div><div className="sc-title">Learning Environment</div><div className="sc-desc">A three-panel course shell: reading, video, and a working AI chatbot. Challenge the hierarchy.</div><button className="sc-btn" onClick={() => navigate('/tutorial/courseframe')}>Start tutorial</button></div></div>
          <div className="sc"><div className="sc-thumb d"><div className="sc-tag">D · Meta</div></div><div className="sc-body"><div className="sc-label">Boilerplate D</div><div className="sc-title">Redesign the Tutorial</div><div className="sc-desc">The meta challenge. Redesign today's tutorial as an AI-native learning experience — adaptive, personalized, no pages.</div><button className="sc-btn" onClick={() => navigate('/tutorial/internal')}>Start tutorial</button></div></div>
        </div>
      </div>

      <div className="ls">
        <div className="sec-label">Help</div>
        <div className="sec-title">Stuck? Ask in Slack.</div>
        <div className="sec-body">Post errors, questions, and things that surprised you. Others will likely have the same questions.</div>
        <div className="slack-box"><strong>Slack: #design-research-ai-learning-day</strong><p>Join before your learning day.</p></div>
      </div>

      <div className="ls">
        <div className="sec-label">End of day</div>
        <div className="sec-title">Share what you made</div>
        <div className="sec-body">Submit a short reflection. Your submission appears in the gallery below so others can see who has been through this, what they built, and reach out directly.</div>
        <button className="sf-btn" style={{ marginTop: '24px', maxWidth: '320px' }} onClick={() => setDialogOpen(true)}>Share what you made</button>
      </div>

      <SubmitDialog open={dialogOpen} onClose={() => setDialogOpen(false)} onSubmit={handleSubmit} />

      <div className="ls" id="gallery-section">
        <div className="sec-label">From the team</div>
        <div className="sec-title">What people built</div>
        <div className="sec-body">Submissions appear here as people complete the day.</div>
        {(pendingCard || submissions.length > 0) ? (
          <div className="gallery-grid">
            {pendingCard && (
              <div className="gallery-card gallery-card-loading">
                <div className="gallery-thumb skeleton-shimmer" />
                <div className="gallery-body">
                  {pendingCard.name && <div className="gallery-name">{pendingCard.name}</div>}
                  <div className="gallery-desc">{pendingCard.description}</div>
                  <div className="gallery-ts">Uploading...</div>
                </div>
              </div>
            )}
            {submissions.map(s => (
              <div className="gallery-card" key={s.id}>
                {s.file_url ? (
                  s.file_url.match(/\.(mp4|webm|mov)$/i) ? (
                    <video className="gallery-media" src={s.file_url} muted playsInline onMouseOver={e => (e.target as HTMLVideoElement).play()} onMouseOut={e => { const v = e.target as HTMLVideoElement; v.pause(); v.currentTime = 0 }} />
                  ) : (
                    <img className="gallery-media" src={s.file_url} alt={s.description} />
                  )
                ) : (
                  <div className="gallery-thumb">🖥️</div>
                )}
                <div className="gallery-body">
                  {s.name && <div className="gallery-name">{s.name}</div>}
                  <div className="gallery-desc">{s.description}</div>
                  <div className="gallery-ts">{formatTimestamp(s.created_at)}</div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="gallery-empty">
            <div className="gallery-empty-title">No submissions yet</div>
            <div className="gallery-empty-sub">Be the first. Your work will appear here after you submit.</div>
          </div>
        )}
      </div>
    </>
  )
}
