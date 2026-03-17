import { useState } from 'react'
import type { PageId } from '../types'

interface LandingPageProps {
  navigate: (id: PageId) => void
}

export default function LandingPage({ navigate }: LandingPageProps) {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    setSubmitted(true)
    setTimeout(() => {
      document.getElementById('gallery-section')?.scrollIntoView({ behavior: 'smooth' })
    }, 0)
  }

  return (
    <>
      <div className="lhero">
        <div className="lhero-eyebrow">March 23 – April 3</div>
        <div className="lhero-title">AI Prototyping<br /><em>Learning Day.</em></div>
        <div className="lhero-sub">A full workday to learn Cursor — one of the leading AI prototyping tools right now. Pick a surface, follow a tutorial, build something real using Cursor and the Figma MCP workflow.</div>
        <button
          onClick={() => document.getElementById('surface-section')?.scrollIntoView({ behavior: 'smooth' })}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#0056D2', color: '#fff', border: 'none', borderRadius: '8px', padding: '12px 20px', fontSize: '14px', fontWeight: 500, cursor: 'pointer', fontFamily: 'inherit' }}
        >Choose your surface →</button>
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
            <div className="setup-title">Download Google Drive for Mac</div>
            <div className="setup-body">You will use Google Drive for Desktop to access and manage your boilerplate files.
              <ul className="setup-steps">
                <li><span className="n">1.</span> Download Google Drive for Desktop from <strong>drive.google.com/download</strong>.</li>
                <li><span className="n">2.</span> Sign in with your Coursera Google account via <strong>OKTA</strong>.</li>
                <li><span className="n">3.</span> Once running, a Google Drive folder will appear in your Finder sidebar. Your boilerplate files will live here.</li>
              </ul>
            </div>
          </div></div>
          <div className="setup-item"><div className="setup-num">3</div><div>
            <div className="setup-title">Block your calendar and loop in your manager</div>
            <div className="setup-body">Pick one day between March 23 and April 3, block it in your calendar, and let your manager know. If you are having trouble getting the time approved, post in the Slack channel.</div>
          </div></div>
        </div>
      </div>

      <div className="ls" id="surface-section">
        <div className="sec-label">Cursor · Choose your template</div>
        <div className="sec-title">What do you want to build?</div>
        <div className="sec-body">Each boilerplate is a working starting point. Pick the template closest to your area of work, or simply the one you're most energized by.</div>
        <div className="surface-grid">
          <div className="sc"><div className="sc-thumb a"><div className="sc-tag">A · Discovery</div></div><div className="sc-body"><div className="sc-label">Boilerplate A</div><div className="sc-title">Course Discovery</div><div className="sc-desc">A conversational landing page. Build the AI-powered discovery experience — loading state, results view, and course grid.</div><div className="sc-from">Starting from: <span>Coursera homepage · conversational input</span></div><button className="sc-btn" onClick={() => navigate('tutorial-discovery')}>Start tutorial →</button></div></div>
          <div className="sc"><div className="sc-thumb b"><div className="sc-tag">B · Learning</div></div><div className="sc-body"><div className="sc-label">Boilerplate B</div><div className="sc-title">My Learning Dashboard</div><div className="sc-desc">The logged-in home page. Redesign how learners track progress, pick up where they left off, and see what's next.</div><div className="sc-from">Starting from: <span>Logged-in home · My Learning</span></div><button className="sc-btn" onClick={() => navigate('tutorial-dashboard')}>Start tutorial →</button></div></div>
          <div className="sc"><div className="sc-thumb c"><div className="sc-tag">C · Course Frame</div></div><div className="sc-body"><div className="sc-label">Boilerplate C</div><div className="sc-title">Learning Environment</div><div className="sc-desc">A three-panel course shell: reading, video, and a working AI chatbot. Challenge the hierarchy.</div><div className="sc-from">Starting from: <span>Course frame · Data, Data, Everywhere</span></div><button className="sc-btn" onClick={() => navigate('tutorial-courseframe')}>Start tutorial →</button></div></div>
          <div className="sc"><div className="sc-thumb d"><div className="sc-tag">D · Internal</div></div><div className="sc-body"><div className="sc-label">Boilerplate D</div><div className="sc-title">Design Team Hub</div><div className="sc-desc">This site. An internal resource and community hub for Design and Research, aimed at design managers and leadership.</div><div className="sc-from">Starting from: <span>coursera.design · this page</span></div><button className="sc-btn" onClick={() => navigate('tutorial-internal')}>Start tutorial →</button></div></div>
        </div>
      </div>

      <div className="ls">
        <div className="sec-label">Help</div>
        <div className="sec-title">Stuck? Ask in Slack.</div>
        <div className="sec-body">Post errors, questions, and things that surprised you. Others will likely have the same questions.</div>
        <div className="slack-box"><strong>Slack: #design-ai-prototyping [TBD]</strong><p>Join before your learning day.</p></div>
      </div>

      <div className="ls">
        <div className="sec-label">End of day</div>
        <div className="sec-title">Share what you made</div>
        <div className="sec-body">Submit a short reflection. Your submission appears in the gallery below so others can see who has been through this, what they built, and reach out directly.</div>
        <div className="submit-form">
          <div className="sf-row">
            <div className="sf-field"><div className="sf-label">What did you like or learn?</div><textarea placeholder="What clicked, surprised you, or felt genuinely useful..."></textarea></div>
            <div className="sf-field"><div className="sf-label">What did you struggle with?</div><textarea placeholder="Friction points are the most useful feedback..."></textarea></div>
          </div>
          <div className="sf-field"><div className="sf-label">Describe what you built</div><input type="text" placeholder="A short description — required even without a file..." /></div>
          <div className="sf-upload">Drop a screenshot, GIF, or screen recording here · optional</div>
          <button className="sf-btn" onClick={handleSubmit}>Submit reflection →</button>
        </div>
      </div>

      <div className="ls" id="gallery-section">
        <div className="sec-label">From the team</div>
        <div className="sec-title">What people built</div>
        <div className="sec-body">Submissions appear here as people complete the day.</div>
        {submitted ? (
          <div className="gallery-grid">
            <div className="gallery-card">
              <div className="gallery-thumb">🖥️</div>
              <div className="gallery-body">
                <div className="gallery-name">You</div>
                <div className="gallery-desc">Just submitted — your work will appear here.</div>
                <div className="gallery-ts">Today · just now</div>
              </div>
            </div>
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
