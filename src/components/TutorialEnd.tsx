interface TutorialEndProps {
  onSubmit: () => void
}

export default function TutorialEnd({ onSubmit }: TutorialEndProps) {
  return (
    <>
      <div className="done-banner">
        <div>
          <div className="cds-subtitle-md">You're done with the tutorial.</div>
          <div className="cds-body-secondary text-grey-600 mt-4">Submit your project to share what you built, or continue to Phase 4 if you want to publish your prototype as a live URL. Phase 4 requires GitHub and Vercel accounts — if you don't have access yet, just take a screenshot or recording of your project for your submission and revisit Phase 4 later.</div>
        </div>
        <button onClick={onSubmit} className="done-banner-btn">Submit your project</button>
      </div>

      <hr className="divider" />
      <div id="phase-4" className="phase-header">
        <div className="sec-label">Phase 4 · Advanced</div>
        <div className="phase-title">Share your prototype live</div>
        <div className="phase-desc">This takes 30–45 minutes and requires creating two free accounts (GitHub and Vercel). By the end, your prototype will be a live website with its own URL that you can share with anyone.</div>
      </div>

      <div className="tstep">
        <div className="tstep-head">
          <div className="sn blue">1</div>
          <div>
            <div className="tstep-action">What GitHub and Vercel do</div>
            <div className="tstep-body">
              Right now your project lives on your machine as a local folder. That is fine for building, but it cannot be shared as a live website. To publish your prototype, you need two tools:
              <ul>
                <li><strong>GitHub</strong> stores your code online with full version history — think of it as a backup that remembers every version of every file you have ever saved</li>
                <li><strong>Vercel</strong> reads from GitHub and publishes it to the web — it turns your code into a live site with its own URL</li>
              </ul>
              You push your code to GitHub, Vercel picks it up and deploys it. Every time you push again, Vercel redeploys automatically. The URL stays the same.
            </div>
          </div>
        </div>
      </div>

      <div className="tstep">
        <div className="tstep-head">
          <div className="sn blue">2</div>
          <div>
            <div className="tstep-action">Create a GitHub account</div>
            <div className="tstep-body">
              Go to <strong>github.com</strong> and sign up using your Coursera email address. You will be asked to verify your email.
              <ul>
                <li>Skip any optional onboarding screens — you do not need to set up a team or answer questions about your experience</li>
                <li>If you already have a GitHub account, you can use that instead</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="tstep">
        <div className="tstep-head">
          <div className="sn blue">3</div>
          <div>
            <div className="tstep-action">Push your project to GitHub from Cursor</div>
            <div className="tstep-body">Go back to Cursor, make sure you are in <strong>Agent</strong> mode, and send this prompt:</div>
          </div>
        </div>
        <div className="tstep-prompt">
          <div className="prompt-lbl">Send this prompt</div>
          <div className="prompt-text">"Create a new GitHub repository for this project called [your-name]-ai-prototype and push all my files to it. Walk me through any steps I need to do myself, like signing in to GitHub."</div>
        </div>
        <div className="tstep-head" style={{ paddingTop: '12px' }}>
          <div style={{ width: '28px', flexShrink: 0 }}></div>
          <div className="tstep-body">Cursor will guide you through connecting to GitHub and pushing your code. It may ask you to sign in via the browser — follow whatever it asks.</div>
        </div>
        <div className="callout info">
          <div className="callout-header"><span className="callout-icon">💡</span><span className="callout-label">Tips</span></div>
          <div className="callout-text">If Cursor gets stuck or shows an error, paste the error message back into the chat and ask: <em>"This is the error I got. What do I do?"</em> It can usually diagnose and fix it.</div>
        </div>
        <div className="callout warn">
          <div className="callout-header"><span className="callout-icon">⚠️</span><span className="callout-label">Heads up</span></div>
          <div className="callout-text"><strong>Private repos are fine for learning day.</strong> When Cursor creates the repository, it will likely be private by default — that is perfectly fine for today. Going forward, if you want to share prototypes with front-end engineers or collaborate on code, you will want to work with your team to set up a shared, more secure repository structure. For now, a private repo under your personal account is the right call.</div>
        </div>
      </div>

      <div className="tstep">
        <div className="tstep-head">
          <div className="sn blue">4</div>
          <div>
            <div className="tstep-action">Create a Vercel account</div>
            <div className="tstep-body">
              Go to <strong>vercel.com</strong> and click <strong>Sign Up</strong>. Choose <strong>Continue with GitHub</strong> — this links your GitHub and Vercel accounts in one step. Authorize the connection when prompted.
            </div>
          </div>
        </div>
      </div>

      <div className="tstep">
        <div className="tstep-head">
          <div className="sn blue">5</div>
          <div>
            <div className="tstep-action">Deploy your project</div>
            <div className="tstep-body">
              Once you are in the Vercel dashboard:
              <ul>
                <li>Click <strong>Add New › Project</strong></li>
                <li>Find your repository in the list and click <strong>Import</strong></li>
                <li>Leave all settings at their defaults</li>
                <li>Click <strong>Deploy</strong></li>
              </ul>
              Vercel will build and deploy your project. This takes about 60 seconds. When it finishes, you will get a live URL ending in <strong>.vercel.app</strong> — this is your prototype, live on the web.
            </div>
          </div>
        </div>
      </div>

      <div className="tstep">
        <div className="tstep-head">
          <div className="sn blue">6</div>
          <div>
            <div className="tstep-action">Add password protection</div>
            <div className="tstep-body">
              If you want to control who can see your prototype:
              <ul>
                <li>In the Vercel dashboard, go to your project's <strong>Settings › Deployment Protection</strong></li>
                <li>Enable <strong>Password Protection</strong> and set a password</li>
                <li>Anyone who visits your URL will need to enter this password first</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="callout warn">
          <div className="callout-header"><span className="callout-icon">⚠️</span><span className="callout-label">Heads up</span></div>
          <div className="callout-text">If Vercel asks you to upgrade to a paid plan for password protection, check with your manager before proceeding. Alternatively, skip this step and just share the URL directly with people you trust — the URL is not indexed by search engines.</div>
        </div>
      </div>

      <div className="tstep">
        <div className="tstep-head">
          <div className="sn blue">7</div>
          <div>
            <div className="tstep-action">Share your live prototype</div>
            <div className="tstep-body">
              Send the <strong>.vercel.app</strong> URL (and password, if you set one) to whoever you want to see your work — your manager, your team, or stakeholders.
              <ul>
                <li>Every time you push changes to GitHub from Cursor, Vercel automatically redeploys</li>
                <li>The URL stays the same — anyone with the link always sees the latest version</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '0.5px solid #E8E8E8', paddingTop: '32px', marginTop: '32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
        <div><div className="cds-subtitle-md">You're done. Share what you made.</div><div className="cds-body-secondary text-grey-600 mt-4">Your submission appears in the team gallery — others can see your work and reach out.</div></div>
        <button onClick={onSubmit} style={{ background: '#0056D2', color: '#fff', border: 'none', borderRadius: '8px', padding: '12px 20px', fontSize: '13px', fontWeight: 500, cursor: 'pointer', fontFamily: 'inherit', flexShrink: 0 }}>Submit your project</button>
      </div>
    </>
  )
}
