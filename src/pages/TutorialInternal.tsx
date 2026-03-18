import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SubmitDialog from '../components/SubmitDialog'
import PhaseNav from '../components/PhaseNav'
import TutorialEnd from '../components/TutorialEnd'
import { useSubmissions } from '../lib/submissions'

export default function TutorialInternal() {
  const navigate = useNavigate()
  const { submitProject } = useSubmissions()
  const [dialogOpen, setDialogOpen] = useState(false)
  return (
    <>
      <div className="t-hero">
        <div className="t-hero-tag">Cursor · Boilerplate D</div>
        <h1>Redesign the Tutorial</h1>
        <div className="t-hero-meta">Responsive web · 3 to 6 hours</div>
      </div>
      <PhaseNav />
      <div className="t-body">
        <div className="brief"><div className="brief-lbl">Brief</div><div className="brief-txt">You've spent the day following a tutorial. Now redesign one. The boilerplate is the coursera.design learning day page you started from this morning — a structured, linear, phase-by-phase guide built for humans who don't write code. Your provocation: what would this look like if it was built for AI? Not AI-assisted — AI-native. Adaptive to who you are, what you already know, where you got stuck. Personalized without being generic. Guided without being rigid. The hardest constraint: it still has to work for a first-time learner who has never opened Cursor before.</div></div>
        <div className="t-img"><span style={{ fontSize: '24px' }}>🖼️</span><span className="lbl">Screenshot placeholder · Boilerplate D running in browser</span></div>

        <div id="phase-0" className="phase-header"><div className="sec-label">Phase 0</div><div className="phase-title">Get set up before your first prompt</div><div className="phase-desc">These steps get Cursor open, your project running, and your brain oriented. Do them in order.</div></div>
        <div className="tstep"><div className="tstep-head"><div className="sn grey">A</div><div><div className="tstep-action">Download the boilerplate and save your project</div><div className="tstep-body">Download the starter file for this tutorial and unzip it on your machine. You will be working locally for the whole day — no cloud setup needed right now.<ul><li>Download the zip file from <strong>[link TBD]</strong></li><li>Unzip it — you should see a folder called <strong>boilerplate-d-tutorial</strong></li><li>Rename it to something like <strong>tutorial-yourname</strong></li><li>Move it somewhere easy to find, like your <strong>Desktop</strong> or <strong>Documents</strong> folder</li></ul>At the end of the day, you can upload your project folder to your personal Google Drive as a backup, or follow the advanced Phase 4 steps to push it to GitHub. Don't worry about that now.</div></div></div></div>
        <div className="tstep"><div className="tstep-head"><div className="sn grey">B</div><div><div className="tstep-action">Open the folder in Cursor</div><div className="tstep-body">Open Cursor. Go to <strong>File › Open Folder</strong> and navigate to your renamed project folder. Select it and click Open.<ul><li>Wait for the spinner in the bottom-left to stop before moving on</li></ul></div></div></div><div className="tstep-img"><span style={{ fontSize: '20px' }}>🖥️</span><span className="tstep-img-lbl">Screenshot placeholder · Cursor with folder open</span></div></div>
        <div className="tstep"><div className="tstep-head"><div className="sn grey">C</div><div><div className="tstep-action">Get your bearings in the Cursor interface</div><div className="tstep-body"><ul><li><strong>Left panel:</strong> file explorer — you will mostly work in <code>app</code> and <code>components</code></li><li><strong>Centre:</strong> the code editor — and where your Simple Browser lives. You'll rarely type here directly.</li><li><strong>Right panel / Cmd+L:</strong> the chat panel</li></ul></div></div></div><div className="tstep-img"><span style={{ fontSize: '20px' }}>🗂️</span><span className="tstep-img-lbl">Screenshot placeholder · Cursor interface annotated</span></div></div>
        <div className="tstep"><div className="tstep-head"><div className="sn grey">D</div><div><div className="tstep-action">Set your model to Claude</div><div className="tstep-body"><ul><li>Click the model selector and switch to one of the Claude models — Opus is a top performer right now if it's available</li><li>Auto rotates between models unpredictably — a fixed model gives you consistent results all day</li></ul></div></div></div><div className="tstep-img"><span style={{ fontSize: '20px' }}>🤖</span><span className="tstep-img-lbl">Screenshot placeholder · Model selector</span></div></div>
        <div className="tstep"><div className="tstep-head"><div className="sn grey">E</div><div><div className="tstep-action">Understand the four chat modes</div><div className="tstep-body"><ul><li><strong>Agent</strong> — reads files, writes code, makes changes. Use this for most prompts</li><li><strong>Ask</strong> — answers questions without changing anything</li><li><strong>Plan</strong> — previews what it will do before doing it</li><li><strong>Debug</strong> — tracks down errors</li></ul></div></div></div><div className="tstep-img"><span style={{ fontSize: '20px' }}>💬</span><span className="tstep-img-lbl">Screenshot placeholder · Chat mode selector</span></div></div>
        <div className="tstep"><div className="tstep-head"><div className="sn grey">F</div><div><div className="tstep-action">Start the project and open it inside Cursor</div><div className="tstep-body">Make sure you are in <strong>Agent</strong> mode. Then send this prompt:</div></div></div><div className="tstep-prompt"><div className="prompt-lbl">Send this prompt</div><div className="prompt-text">"Open my simple browser and start my development server."</div></div><div className="tstep-head" style={{ paddingTop: '12px' }}><div style={{ width: '28px', flexShrink: 0 }}></div><div className="tstep-body">Cursor will install dependencies, start the server, and open your project in the Simple Browser — all in one go. If it asks you to confirm anything, click <strong>Accept</strong>.</div></div><div className="tstep-img"><span style={{ fontSize: '20px' }}>🌐</span><span className="tstep-img-lbl">Screenshot placeholder · Simple Browser open inside Cursor</span></div></div>
        <div className="tstep"><div className="tstep-head"><div className="sn grey">G</div><div><div className="tstep-action">Try your first prompt and see the loop in action</div><div className="tstep-body">In <strong>Agent</strong> mode, send this:</div></div></div><div className="tstep-prompt"><div className="prompt-lbl">Send this prompt</div><div className="prompt-text">"Change the hero headline on the landing page to something more provocative — something that would make a designer stop and think about what learning could look like."</div></div><div className="tstep-head" style={{ paddingTop: '12px' }}><div style={{ width: '28px', flexShrink: 0 }}></div><div className="tstep-body">Watch the change appear in the browser. That loop is the entire workflow for the day: write a prompt, see the update, react to what you got.</div></div><div className="callout info"><div className="callout-icon">💡</div><div className="callout-text">If the browser does not refresh automatically, click the reload icon inside the Simple Browser panel.</div></div></div>

        <hr className="divider" />
        <div id="phase-1" className="phase-header"><div className="sec-label">Phase 1</div><div className="phase-title">Understand what you're critiquing</div><div className="phase-desc">Before changing anything, spend time with the thing you're redesigning — as a learner, not a designer.</div></div>
        <div className="tstep"><div className="tstep-head"><div className="sn blue">1</div><div><div className="tstep-action">Ask Cursor to explain the project</div><div className="tstep-body">Switch to <strong>Ask</strong> mode and send this prompt. Read the full response before moving on.</div></div></div><div className="tstep-prompt"><div className="prompt-lbl">Send this prompt</div><div className="prompt-text">"Explain this project to me like I am a designer who does not write code. What does each file and folder do? What would I see in the browser if I changed something in each one?"</div></div></div>
        <div className="tstep"><div className="tstep-head"><div className="sn blue">2</div><div><div className="tstep-action">Question the assumptions</div><div className="tstep-body">Stay in <strong>Ask</strong> mode and send this prompt.</div></div></div><div className="tstep-prompt"><div className="prompt-lbl">Send this prompt</div><div className="prompt-text">"What assumptions does this design make about how people learn? What would break if the learner already knew some of this, or if they were moving through it at half the pace?"</div></div></div>
        <div className="tstep"><div className="tstep-head"><div className="sn blue">3</div><div><div className="tstep-action">Experience it as a learner</div><div className="tstep-body">Spend five minutes using the tutorial as a learner would — from the landing page, choosing a surface, reading Phase 0. Write down three things that feel rigid, three things that feel right, and one thing that feels like it belongs to a different era of the web.<br /><br />Then sit with this question before moving on: <em>if this tutorial lived inside a conversation rather than a webpage, what would stay? What would disappear?</em></div></div></div></div>

        <hr className="divider" />
        <div id="phase-2" className="phase-header"><div className="sec-label">Phase 2 · Optional</div><div className="phase-title">Sketch your direction in Figma</div><div className="phase-desc">No spec to build toward — just a space to think before you build. Spend no more than 20 minutes here. The point is to have a position, not a design.</div></div>
        <div className="tstep"><div className="tstep-head"><div className="sn blue">4</div><div><div className="tstep-action">Connect the Figma MCP to Cursor</div><div className="tstep-body">Once connected, Cursor can read any frame in your Figma file directly — layout, styles, content — without you having to describe any of it.<ul><li>Open Cursor Settings with <strong>Cmd+,</strong> and go to the <strong>MCP</strong> tab</li><li>Click <strong>Add MCP Server</strong> and select <strong>Figma</strong></li><li>Follow the authentication steps and return to the chat panel</li></ul></div></div></div><div className="tstep-img"><span style={{ fontSize: '20px' }}>🔗</span><span className="tstep-img-lbl">Screenshot placeholder · Cursor MCP settings with Figma connected</span></div></div>
        <div className="tstep"><div className="tstep-head"><div className="sn blue">5</div><div><div className="tstep-action">Open the Figma file and sketch a direction</div><div className="tstep-body">Your companion Figma file has one frame: the boilerplate as-is. Use it as a starting point. Sketch a direction — a rough layout, an annotated screenshot, a flow diagram, a set of questions. Whatever helps you figure out what you want to build before you start prompting.<br /><br /><em>Suggested thinking prompt: Where does this experience break down for someone who learns differently? What's the first thing I'd change, and what would that change unlock?</em></div></div></div></div>

        <hr className="divider" />
        <div id="phase-3" className="phase-header"><div className="sec-label">Phase 3</div><div className="phase-title">Build something that shouldn't exist yet</div><div className="phase-desc">Three directions. Pick one. These aren't safe.</div></div>
        <div className="dir-grid">
          <div className="dir-card"><div className="dir-label">Direction 1</div><div className="dir-title">The tutorial that knows you</div><div className="dir-prompt">"Redesign the Phase 0 setup experience so it adapts to what the learner already knows. Add an intake step at the start — three questions max — and use the answers to change what they see. A designer who's used Figma MCP before should skip Step 4. Someone who's never written code should get a different version of Step C. The tutorial should feel like it was written for one person."</div></div>
          <div className="dir-card"><div className="dir-label">Direction 2</div><div className="dir-title">Learning without a page</div><div className="dir-prompt">"Imagine this tutorial as a conversation rather than a document. The learner types what they want to do. The experience responds, asks one question at a time, and gives them exactly what they need — no more. There are no phases, no steps, no scroll. Build the smallest possible version of this that actually works. It doesn't need to be complete. It needs to feel like a different thing entirely."</div></div>
          <div className="dir-card"><div className="dir-label">Direction 3</div><div className="dir-title">The tutorial that watches you work</div><div className="dir-prompt">"Add a persistent AI layer to the boilerplate that observes what the learner is doing in the tutorial — which step they're on, how long they've spent there, whether they've sent a prompt yet — and responds proactively. Not a chatbot. More like a presence that notices. 'You've been on Step 3 for a while. Want a different way to think about this?' Build whatever version of this you can in the time you have."</div></div>
        </div>

        <div className="optional-block">
          <div className="optional-block-head">
            <div style={{ fontSize: '13px', fontWeight: 500 }}>Optional · Send your concepts back to Figma</div>
            <div style={{ fontSize: '10px', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase' as const, color: '#9AA0AA' }}>Experimental</div>
          </div>
          <div className="optional-block-body">
            <div style={{ fontSize: '13px', color: '#5F6B7A', lineHeight: 1.6 }}>You can send your concepts from your Cursor prototype directly to Figma as editable layers — not a screenshot. The result may not be pixel-perfect, but it gives you real frames you can annotate, duplicate, and design on top of. For best results, switch your model to <strong>claude-opus-4-6</strong> before running this step.</div>
            <div className="optional-inner-prompt tstep-prompt"><div className="prompt-lbl">Send this prompt</div><div className="prompt-text">"Capture the UI in a new frame in Figma here: [link to page in Figma]."</div></div>
            <div style={{ fontSize: '13px', color: '#5F6B7A', lineHeight: 1.6 }}>Cursor may ask you to approve or run something — click through whatever it needs. A small Figma capture toolbar will appear at the top of your browser. Navigate to the state you want to capture, then click <strong>Entire screen</strong> to send it to Figma.</div>
            <div style={{ background: '#FFFBF0', borderRadius: '6px', padding: '10px 14px', fontSize: '12px', color: '#92600A', lineHeight: 1.55 }}>The layers in Figma will be editable but may not match your design system exactly. Treat this as a starting point for refinement, not a finished handoff.</div>
          </div>
        </div>

        <hr className="divider" />
        <div className="tips-box">
          <div className="sec-label" style={{ marginBottom: '12px' }}>Prompting tips</div>
          <div className="ri">Describe what you <em>see</em>, not what you think the code should do. "The loading state feels too abrupt" beats "add a 300ms delay".</div>
          <div className="ri">One change at a time. Multi-part prompts produce messy results.</div>
          <div className="ri">If something breaks: "That broke the layout. Undo that change and let's try a different approach."</div>
          <div className="ri">If the output is close: "That's close. The AI overview should feel more like a response and less like a label." Iterate from what it gave you.</div>
          <div className="ri">Cmd+Z undoes Cursor's changes like any other edit.</div>
        </div>
        <div className="reflect">
          <div className="reflect-lbl">Reflect</div>
          <div className="ri">You've been a learner and a designer today. Where did those two perspectives agree? Where did they clash?</div>
          <div className="ri">Which assumption in the original tutorial bothered you most? Did your prototype address it?</div>
          <div className="ri">If your VP asked you "what does learning feel like within an LLM?" — what would you show them from what you built today?</div>
          <div className="ri">What would you need that doesn't exist yet to take this further?</div>
        </div>
        <TutorialEnd onSubmit={() => setDialogOpen(true)} />
      </div>
      <SubmitDialog open={dialogOpen} onClose={() => setDialogOpen(false)} onSubmit={(data) => { submitProject(data); navigate('/', { state: { scrollTo: 'gallery-section' } }) }} />
    </>
  )
}
