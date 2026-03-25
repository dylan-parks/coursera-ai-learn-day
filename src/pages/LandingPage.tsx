import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { BackgroundPaths } from '../components/ui/background-paths'

type SectionImageMedia = {
  src: string
  alt: string
  caption: string
}

type SectionVideoMedia = {
  sources: readonly { src: string; type: string }[]
  alt: string
  caption: string
}

const sectionMedia = {
  'core-concepts': {
    src: '/images/course/Section-1-image.png',
    alt: 'Illustration for core concepts: skills, rules, agents, and MCP',
    caption: 'Core concepts: how skills, rules, agents, and MCP fit together.',
  },
  'understanding-automation': {
    src: '/images/course/Section-2-image.png',
    alt: 'Illustration for deciding when to automate and what to document',
    caption: 'Understanding automation: repeatability, context, and human checkpoints.',
  },
  'building-cursor-skill-set': {
    src: '/images/course/Section-3-image.png',
    alt: 'Illustration for building a practical Cursor skill workflow',
    caption: 'Building a skill set: context, tools, MCP, and review loops.',
  },
  'worked-example-toast': {
    sources: [{ src: '/images/course/Section-4-video.mp4', type: 'video/mp4' }],
    alt: 'Screen recording walking through toast component documentation',
    caption: 'Final result of the AI generated content and structure from the documentation skill I made.',
  },
  'closing-what-next': {
    src: '/images/course/Section-5-image.png',
    alt: 'Illustration for next steps: one workflow and iteration',
    caption: 'Closing: start with one workflow and refine the system over time.',
  },
} as const satisfies Record<
  | 'core-concepts'
  | 'understanding-automation'
  | 'building-cursor-skill-set'
  | 'worked-example-toast'
  | 'closing-what-next',
  SectionImageMedia | SectionVideoMedia
>

function CourseIcon({
  name,
  size = 'lg',
  className,
}: {
  name: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}) {
  const sizeClass = size === 'sm' ? 'course-icon-sm' : size === 'md' ? 'course-icon-md' : 'course-icon-lg'
  return (
    <span className={`material-symbols-rounded ${sizeClass} text-blue-700 ${className ?? ''}`} aria-hidden>
      {name}
    </span>
  )
}

export default function LandingPage() {
  const location = useLocation()

  useEffect(() => {
    const scrollTo = (location.state as { scrollTo?: string })?.scrollTo
    if (!scrollTo) return

    setTimeout(() => {
      document.getElementById(scrollTo)?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }, [location.state])

  const renderSectionMedia = (id: keyof typeof sectionMedia) => {
    const block = sectionMedia[id]
    if ('sources' in block) {
      const downloadHref =
        block.sources.find((s) => s.src.endsWith('.mp4'))?.src ?? block.sources[0]?.src ?? '#'
      return (
        <figure className="section-image section-image--video">
          <video controls playsInline preload="metadata" aria-label={block.alt}>
            {block.sources.map((s) => (
              <source key={s.src} src={s.src} type={s.type} />
            ))}
            <a href={downloadHref} className="text-blue-700 underline">
              Download the video
            </a>
          </video>
          <figcaption className="section-image-video-caption">
            <span>{block.caption}</span>{' '}
            <a href={downloadHref} className="cds-body-secondary text-blue-700 underline" download>
              Download video
            </a>
          </figcaption>
        </figure>
      )
    }
    return (
      <figure className="section-image">
        <img src={block.src} alt={block.alt} loading="lazy" />
        <figcaption>{block.caption}</figcaption>
      </figure>
    )
  }

  return (
    <>
      <div className="lhero">
        <BackgroundPaths title="" hideContent className="lhero-bg-component" />
        <div className="lhero-title">Create Cursor Skills for Real Design Work</div>
        <div className="lhero-sub">
          A practical course on turning repeated workflow friction into reusable Cursor instructions, rules, and context.
        </div>
        <div className="lhero-sub" style={{ marginBottom: 24 }}>
          This course teaches a simple idea: do not start with automation for its own sake. Start with a repeated task, a repeated question, or a repeated content pattern. Then capture the context, define the boundaries, and turn that process into something Cursor can help execute consistently.
        </div>
      </div>

      <div className="course-layout">
        <aside className="course-sidenav">
          <div className="course-sidenav-title">Course Sections</div>

          <a href="#core-concepts" className="course-sidenav-item">1. Core Concepts</a>
          <a href="#core-1-1" className="course-sidenav-subitem">1.1 What is a Cursor Skill?</a>
          <a href="#core-1-2" className="course-sidenav-subitem">1.2 What is a Cursor Rule?</a>
          <a href="#core-1-3" className="course-sidenav-subitem">1.3 What is a Cursor Agent?</a>
          <a href="#core-1-4" className="course-sidenav-subitem">1.4 How do they work together?</a>

          <a href="#understanding-automation" className="course-sidenav-item">2. Understanding Automation</a>
          <a href="#automation-2-1" className="course-sidenav-subitem">2.1 Is it repeatable?</a>
          <a href="#automation-2-2" className="course-sidenav-subitem">2.2 Is context documented?</a>
          <a href="#automation-2-3" className="course-sidenav-subitem">2.3 Does this pattern exist elsewhere?</a>
          <a href="#automation-2-4" className="course-sidenav-subitem">2.4 What is the flow?</a>
          <a href="#automation-2-5" className="course-sidenav-subitem">2.5 What needs human intervention?</a>

          <a href="#building-cursor-skill-set" className="course-sidenav-item">3. Building a Cursor Skill Set</a>
          <a href="#build-3-1" className="course-sidenav-subitem">3.1 Collect context and specs</a>
          <a href="#build-3-2" className="course-sidenav-subitem">3.2 Choose the right tool</a>
          <a href="#build-3-3" className="course-sidenav-subitem">3.3 Use MCPs</a>
          <a href="#build-3-4" className="course-sidenav-subitem">3.4 Generate and refine</a>
          <a href="#build-3-5" className="course-sidenav-subitem">3.5 Keep skills evolving</a>

          <a href="#worked-example-toast" className="course-sidenav-item">4. Real-world example: CDS Documentation Skill</a>
          <a href="#toast-4-1" className="course-sidenav-subitem">4.1 The friction</a>
          <a href="#toast-4-2" className="course-sidenav-subitem">4.2 The first pass</a>
          <a href="#toast-4-3" className="course-sidenav-subitem">4.3 The refinement loop</a>
          <a href="#toast-4-4" className="course-sidenav-subitem">4.4 The generalized lesson</a>

          <a href="#closing-what-next" className="course-sidenav-item">5. Closing: What to build next</a>
          <a href="#closing-5-1" className="course-sidenav-subitem">5.1 Start with one workflow</a>
        </aside>

        <div className="course-content">
      <div className="ls course-section" id="core-concepts">
        <div className="sec-title">Core Concepts</div>
        <div className="sec-body">Before building anything, define the pieces clearly. The goal is not to memorize Cursor terminology. The goal is to understand which tool solves which kind of problem.</div>
        {renderSectionMedia('core-concepts')}
        <div className="mt-24 flex flex-wrap gap-12">
          {[
            { icon: 'psychology', label: 'Skill' },
            { icon: 'gavel', label: 'Rule' },
            { icon: 'smart_toy', label: 'Agent' },
            { icon: 'hub', label: 'MCP' },
          ].map((row) => (
            <div
              key={row.label}
              className="flex items-center gap-8"
            >
              <CourseIcon name={row.icon} size="md" />
              <span className="cds-body-secondary text-grey-700">{row.label}</span>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 24 }} id="core-1-1" className="course-anchor">
          <div className="tstep-action">1.1 What is a Cursor Skill?</div>
          <div className="tstep-body">
            In this course, a Cursor Skill is a reusable package of domain knowledge and instructions for a task Cursor may need to perform more than once.
            <br />
            <br />
            A good skill does not try to replace thinking. It reduces repeated setup. It gives Cursor enough structure, examples, and constraints to produce a stronger first draft.
            <br />
            <br />
            Skills are most useful when a workflow has:
            <ul className="course-icon-list">
              <li>
                <CourseIcon name="input" size="md" className="mt-2 shrink-0" />
                <span className="course-icon-li-text">recurring inputs</span>
              </li>
              <li>
                <CourseIcon name="account_tree" size="md" className="mt-2 shrink-0" />
                <span className="course-icon-li-text">recurring structure</span>
              </li>
              <li>
                <CourseIcon name="verified" size="md" className="mt-2 shrink-0" />
                <span className="course-icon-li-text">recurring quality standards</span>
              </li>
              <li>
                <CourseIcon name="fact_check" size="md" className="mt-2 shrink-0" />
                <span className="course-icon-li-text">recurring review criteria</span>
              </li>
            </ul>
            A skill is not just a shortcut. It is a way to make good decisions more repeatable.
          </div>
          <div className="callout info standalone" style={{ marginTop: 12 }}>
            <div className="callout-header">
              <span className="callout-icon">💡</span>
              <span className="callout-label">Best use case</span>
            </div>
            <div className="callout-text">
              Best use case: repeated workflows where the output format, tone, or evaluation criteria stay mostly stable.
            </div>
          </div>
          <div className="callout info standalone" style={{ marginTop: 12 }}>
            <div className="callout-header">
              <span className="callout-icon">💡</span>
              <span className="callout-label">Teaching note</span>
            </div>
            <div className="callout-text">
              Since Cursor publicly describes Skills as a way to add domain knowledge so Cursor can discover and run specialized prompts and code, your framing is directionally aligned with the product while still leaving room for your course's practical interpretation.
            </div>
          </div>
        </div>

        <div style={{ marginTop: 24 }} id="core-1-2" className="course-anchor">
          <div className="tstep-action">1.2 What is a Cursor Rule?</div>
          <div className="tstep-body">
            A Cursor Rule is persistent instruction context.
            <br />
            <br />
            Rules tell Cursor how to behave in a given project or workflow. They are useful when guidance should apply repeatedly, not just in one chat. Examples include formatting expectations, architecture constraints, documentation structure, naming conventions, and review standards.
            <br />
            <br />
            Project Rules live in .cursor/rules. They are version-controlled with the repo. They can be:
            <div className="course-card-grid">
              {[
                { icon: 'bolt', title: 'Always applied', body: 'Runs whenever it matches project scope.' },
                { icon: 'link', title: 'File-attached', body: 'Activates when matching files are in play.' },
                { icon: 'support_agent', title: 'Agent-requested', body: 'Available for the agent to pull in.' },
                { icon: 'touch_app', title: 'Manual', body: 'Invoked explicitly when you need it.' },
              ].map((c) => (
                <div
                  key={c.title}
                  className="flex flex-col gap-8"
                >
                  <CourseIcon name={c.icon} size="lg" />
                  <div className="cds-subtitle-sm text-grey-975">{c.title}</div>
                  <div className="cds-body-secondary text-grey-600">{c.body}</div>
                </div>
              ))}
            </div>
            <br />
            For simpler cases, AGENTS.md can act as a plain-language instruction file at the project root.
          </div>

          <div className="callout info standalone" style={{ marginTop: 12 }}>
            <div className="callout-header">
              <span className="callout-icon">💡</span>
              <span className="callout-label">Key takeaway</span>
            </div>
            <div className="callout-text">Use rules for stable guidance. Use prompts for one-off requests.</div>
          </div>

          <div className="callout info standalone" style={{ marginTop: 12 }}>
            <div className="callout-header">
              <span className="callout-icon">💡</span>
              <span className="callout-label">Instructor note</span>
            </div>
            <div className="callout-text">
              This distinction is directly grounded in Cursor's docs. Project Rules are .mdc files in .cursor/rules; AGENTS.md is a simpler markdown alternative with less structure and no scoping.
            </div>
          </div>
        </div>

        <div style={{ marginTop: 24 }} id="core-1-3" className="course-anchor">
          <div className="tstep-action">1.3 What is a Cursor Agent?</div>
          <div className="tstep-body">
            <div className="flex flex-col gap-16 sm:flex-row sm:items-start">
              <CourseIcon name="smart_toy" size="lg" className="shrink-0" />
              <div>
                <div className="cds-subtitle-md text-grey-975">Autonomy with boundaries</div>
                <div className="cds-body-secondary mt-8 text-grey-600">
                  The agent can inspect files, run tools, and edit code — so trust and review criteria matter as much as capability.
                </div>
              </div>
            </div>
            <br />
            The Cursor Agent is the part of Cursor that can carry out more complete tasks.
            <br />
            <br />
            Instead of only answering a question, the agent can inspect files, make edits, use tools, and help execute a workflow. That makes it useful when a task involves multiple steps, not just one response.
            <br />
            <br />
            For this course, the important question is not "what can the agent do?" The important question is "what should the agent be trusted to do on its own, and what still needs human review?"
          </div>
          <div className="callout info standalone" style={{ marginTop: 12 }}>
            <div className="callout-header">
              <span className="callout-icon">💡</span>
              <span className="callout-label">Key takeaway</span>
            </div>
            <div className="callout-text">The more autonomous the tool, the more important the review criteria.</div>
          </div>
          <div className="callout info standalone" style={{ marginTop: 12 }}>
            <div className="callout-header">
              <span className="callout-icon">💡</span>
              <span className="callout-label">Instructor note</span>
            </div>
            <div className="callout-text">
              Cursor describes Agent as able to complete complex tasks, run terminal commands, and edit code, which supports this framing.
            </div>
          </div>
        </div>

        <div style={{ marginTop: 24 }} id="core-1-4" className="course-anchor">
          <div className="tstep-action">1.4 How do they work together?</div>
          <div className="tstep-body">
            Think of the system in layers:
            <div className="course-card-grid">
              {[
                { icon: 'smart_toy', title: 'Agent', body: 'Executes multi-step work and edits.' },
                { icon: 'gavel', title: 'Rules', body: 'Shape default behavior and guardrails.' },
                { icon: 'psychology', title: 'Skills', body: 'Package domain knowledge and workflows.' },
                { icon: 'hub', title: 'MCP', body: 'Connect external tools and live context.' },
              ].map((layer) => (
                <div
                  key={layer.title}
                  className="flex gap-12"
                >
                  <CourseIcon name={layer.icon} size="lg" className="shrink-0" />
                  <div>
                    <div className="cds-subtitle-sm text-grey-975">{layer.title}</div>
                    <div className="cds-body-secondary mt-4 text-grey-600">{layer.body}</div>
                  </div>
                </div>
              ))}
            </div>
            When these are combined well, Cursor stops acting like a blank chat box and starts acting more like a collaborator with memory, boundaries, and references.
          </div>
        </div>
      </div>

      <div className="ls course-section" id="understanding-automation">
        <div className="sec-title">Understanding Automation</div>
        <div className="sec-body">Not every inconvenience deserves automation. This section helps learners decide whether a task is a good candidate for a skill.</div>
        {renderSectionMedia('understanding-automation')}

        <div style={{ marginTop: 24 }} id="automation-2-1" className="course-anchor">
          <div className="tstep-action">2.1 Is it a repeatable pattern or task?</div>
          <div className="tstep-body">
            Start here. A skill is rarely justified by a one-off annoyance. It becomes worthwhile when the same structure keeps showing up.
            <br />
            <br />
            Signs of a repeatable pattern:
            <ul className="course-icon-list">
              <li>
                <CourseIcon name="forum" size="md" className="mt-2 shrink-0" />
                <span className="course-icon-li-text">the same question gets answered multiple times</span>
              </li>
              <li>
                <CourseIcon name="description" size="md" className="mt-2 shrink-0" />
                <span className="course-icon-li-text">the same doc sections get rebuilt from scratch</span>
              </li>
              <li>
                <CourseIcon name="checklist" size="md" className="mt-2 shrink-0" />
                <span className="course-icon-li-text">the same checks happen during every review</span>
              </li>
              <li>
                <CourseIcon name="swap_horiz" size="md" className="mt-2 shrink-0" />
                <span className="course-icon-li-text">the same handoff structure keeps re-appearing</span>
              </li>
              <li>
                <CourseIcon name="error_outline" size="md" className="mt-2 shrink-0" />
                <span className="course-icon-li-text">the same quality issues keep needing correction</span>
              </li>
            </ul>
            A useful rule of thumb: if the same process appears three times, it is probably worth documenting. If it appears often and still causes friction, it may be worth turning into a skill.
          </div>
        </div>

        <div style={{ marginTop: 24 }} id="automation-2-2" className="course-anchor">
          <div className="tstep-action">2.2 Is there already documented context?</div>
          <div className="tstep-body">
            Before writing anything new, gather what already exists.
            <br />
            <br />
            Good inputs might include:
            <div className="course-card-grid">
              {[
                { icon: 'menu_book', text: 'internal docs' },
                { icon: 'palette', text: 'design principles' },
                { icon: 'policy', text: 'content standards' },
                { icon: 'label', text: 'naming guidance' },
                { icon: 'fact_check', text: 'QA checklists' },
                { icon: 'accessibility_new', text: 'accessibility expectations' },
                { icon: 'history_edu', text: 'previous examples' },
                { icon: 'comment_bank', text: 'review comments from past work' },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-12"
                >
                  <CourseIcon name={item.icon} size="md" className="shrink-0" />
                  <span className="cds-body-secondary text-grey-975">{item.text}</span>
                </div>
              ))}
            </div>
            The goal is not to create more documentation. The goal is to centralize the minimum context needed for a good result.
          </div>
        </div>

        <div style={{ marginTop: 24 }} id="automation-2-3" className="course-anchor">
          <div className="tstep-action">2.3 Does this pattern already exist out in the world?</div>
          <div className="tstep-body">
            <div className="flex gap-16">
              <CourseIcon name="public" size="lg" className="shrink-0" />
              <div>
                <div className="cds-subtitle-md text-grey-975">Borrow before you invent</div>
                <div className="cds-body-secondary mt-8 text-grey-600">
                  External examples reveal edge cases, states, and accessibility gaps your first draft might miss.
                </div>
              </div>
            </div>
            <br />
            Do not reinvent a pattern just because the local implementation is new.
            <br />
            <br />
            If a workflow, UI pattern, content pattern, or interaction model already exists elsewhere, reference it. External examples help reveal missing edge cases, missing states, missing content rules, and implementation gaps.
            <br />
            <br />
            This matters because teams often overfit to their first draft of specs. Good references widen the aperture.
            <br />
            <br />
            A toast pattern may be local work in one repo, but the underlying behavior, states, timing, and accessibility concerns are already well understood across products.
          </div>
        </div>

        <div style={{ marginTop: 24 }} id="automation-2-4" className="course-anchor">
          <div className="tstep-action">2.4 What is the overall flow or timeline?</div>
          <div className="tstep-body">
            A skill works better when the workflow is broken into stages.
            <br />
            <br />
            For each task, map:
            <div className="course-step-flow">
              {[
                'trigger',
                'inputs',
                'decision points',
                'generation step',
                'review step',
                'revision loop',
                'final output',
              ].map((label, i) => (
                <div key={label} className="course-step-flow-item">
                  <span className="course-step-flow-num cds-action-secondary">{i + 1}</span>
                  <span className="cds-body-primary text-grey-975">{label}</span>
                </div>
              ))}
            </div>
            This prevents a common failure mode: asking Cursor to solve a vague end state without enough process structure.
          </div>
        </div>

        <div style={{ marginTop: 24 }} id="automation-2-5" className="course-anchor">
          <div className="tstep-action">2.5 What steps require human intervention?</div>
          <div className="tstep-body">
            Automation works best when human judgment is explicit.
            <br />
            <br />
            Common human checkpoints include:
            <ul className="course-icon-list">
              <li>
                <CourseIcon name="inventory_2" size="md" className="mt-2 shrink-0" />
                <span className="course-icon-li-text">validating whether the source context is complete</span>
              </li>
              <li>
                <CourseIcon name="visibility" size="md" className="mt-2 shrink-0" />
                <span className="course-icon-li-text">checking for hallucinations</span>
              </li>
              <li>
                <CourseIcon name="record_voice_over" size="md" className="mt-2 shrink-0" />
                <span className="course-icon-li-text">correcting tone</span>
              </li>
              <li>
                <CourseIcon name="groups" size="md" className="mt-2 shrink-0" />
                <span className="course-icon-li-text">deciding whether the output matches the audience</span>
              </li>
              <li>
                <CourseIcon name="edit_note" size="md" className="mt-2 shrink-0" />
                <span className="course-icon-li-text">approving final wording</span>
              </li>
              <li>
                <CourseIcon name="design_services" size="md" className="mt-2 shrink-0" />
                <span className="course-icon-li-text">confirming the implementation reflects the intended design</span>
              </li>
            </ul>
          </div>
          <div className="callout info standalone" style={{ marginTop: 12 }}>
            <div className="callout-header">
              <span className="callout-icon">💡</span>
              <span className="callout-label">Key takeaway</span>
            </div>
            <div className="callout-text">A good skill does not remove the human. It makes human review more targeted.</div>
          </div>
        </div>
      </div>

      <div className="ls course-section" id="building-cursor-skill-set">
        <div className="sec-title">Building a Cursor Skill Set</div>
        <div className="sec-body">This section is the practical method. It should feel like a repeatable workflow learners can apply to their own domain.</div>
        {renderSectionMedia('building-cursor-skill-set')}

        <div style={{ marginTop: 24 }} id="build-3-1" className="course-anchor">
          <div className="tstep-action">3.1 Collect context, references, and individual knowledge into specs</div>
          <div className="tstep-body">
            Start by writing down what the task needs in order to succeed.
            <br />
            <br />
            Include:
            <ul className="course-icon-list">
              <li>
                <CourseIcon name="output" size="md" className="mt-2 shrink-0" />
                <span className="course-icon-li-text">what the output is</span>
              </li>
              <li>
                <CourseIcon name="person" size="md" className="mt-2 shrink-0" />
                <span className="course-icon-li-text">who the audience is</span>
              </li>
              <li>
                <CourseIcon name="grade" size="md" className="mt-2 shrink-0" />
                <span className="course-icon-li-text">what good looks like</span>
              </li>
              <li>
                <CourseIcon name="block" size="md" className="mt-2 shrink-0" />
                <span className="course-icon-li-text">what must not happen</span>
              </li>
              <li>
                <CourseIcon name="thumb_up" size="md" className="mt-2 shrink-0" />
                <span className="course-icon-li-text">examples to imitate</span>
              </li>
              <li>
                <CourseIcon name="thumb_down" size="md" className="mt-2 shrink-0" />
                <span className="course-icon-li-text">examples to avoid</span>
              </li>
              <li>
                <CourseIcon name="abc" size="md" className="mt-2 shrink-0" />
                <span className="course-icon-li-text">terminology that must stay consistent</span>
              </li>
              <li>
                <CourseIcon name="warning" size="md" className="mt-2 shrink-0" />
                <span className="course-icon-li-text">edge cases or exceptions</span>
              </li>
            </ul>
            Do not wait for perfect specs. Start with enough context to generate a usable first pass.
          </div>
        </div>

        <div style={{ marginTop: 24 }} id="build-3-2" className="course-anchor">
          <div className="tstep-action">3.2 Understand what tools are best for the job</div>
          <div className="tstep-body">
            Different tasks need different levels of structure.
            <br />
            <br />
            <div className="course-card-grid course-card-grid--spacious">
              <div className="course-tool-stack">
                <div className="course-tool-stack-head">
                  <CourseIcon name="chat" size="lg" />
                  <div className="cds-subtitle-sm text-grey-975">Prompt</div>
                </div>
                <ul className="course-icon-list course-icon-list--after-heading">
                  <li>
                    <CourseIcon name="looks_one" size="sm" className="mt-2 shrink-0 text-grey-600" />
                    <span className="course-icon-li-text">the task is one-off</span>
                  </li>
                  <li>
                    <CourseIcon name="compress" size="sm" className="mt-2 shrink-0 text-grey-600" />
                    <span className="course-icon-li-text">the context is small</span>
                  </li>
                  <li>
                    <CourseIcon name="replay" size="sm" className="mt-2 shrink-0 text-grey-600" />
                    <span className="course-icon-li-text">the result does not need to be reused</span>
                  </li>
                </ul>
              </div>
              <div className="course-tool-stack">
                <div className="course-tool-stack-head">
                  <CourseIcon name="gavel" size="lg" />
                  <div className="cds-subtitle-sm text-grey-975">Rule</div>
                </div>
                <ul className="course-icon-list course-icon-list--after-heading">
                  <li>
                    <CourseIcon name="pin_drop" size="sm" className="mt-2 shrink-0 text-grey-600" />
                    <span className="course-icon-li-text">the instruction should persist</span>
                  </li>
                  <li>
                    <CourseIcon name="shield" size="sm" className="mt-2 shrink-0 text-grey-600" />
                    <span className="course-icon-li-text">the project needs stable guidance</span>
                  </li>
                  <li>
                    <CourseIcon name="repeat" size="sm" className="mt-2 shrink-0 text-grey-600" />
                    <span className="course-icon-li-text">the same standards apply repeatedly</span>
                  </li>
                </ul>
              </div>
              <div className="course-tool-stack">
                <div className="course-tool-stack-head">
                  <CourseIcon name="psychology" size="lg" />
                  <div className="cds-subtitle-sm text-grey-975">Skill</div>
                </div>
                <ul className="course-icon-list course-icon-list--after-heading">
                  <li>
                    <CourseIcon name="account_tree" size="sm" className="mt-2 shrink-0 text-grey-600" />
                    <span className="course-icon-li-text">the workflow has multiple moving parts</span>
                  </li>
                  <li>
                    <CourseIcon name="school" size="sm" className="mt-2 shrink-0 text-grey-600" />
                    <span className="course-icon-li-text">the task needs domain-specific examples</span>
                  </li>
                  <li>
                    <CourseIcon name="tune" size="sm" className="mt-2 shrink-0 text-grey-600" />
                    <span className="course-icon-li-text">the agent needs help producing consistent outputs</span>
                  </li>
                </ul>
              </div>
              <div className="course-tool-stack">
                <div className="course-tool-stack-head">
                  <CourseIcon name="article" size="lg" />
                  <div className="cds-subtitle-sm text-grey-975">AGENTS.md</div>
                </div>
                <ul className="course-icon-list course-icon-list--after-heading">
                  <li>
                    <CourseIcon name="home" size="sm" className="mt-2 shrink-0 text-grey-600" />
                    <span className="course-icon-li-text">simple, root-level project instructions</span>
                  </li>
                  <li>
                    <CourseIcon name="speed" size="sm" className="mt-2 shrink-0 text-grey-600" />
                    <span className="course-icon-li-text">full rule metadata and scoping are unnecessary</span>
                  </li>
                </ul>
              </div>
            </div>
            <br />
            This maps cleanly to Cursor's official setup: Project Rules are structured .mdc files with scoped behavior, while AGENTS.md is the simpler project-wide alternative.
          </div>
        </div>

        <div style={{ marginTop: 24 }} id="build-3-3" className="course-anchor">
          <div className="tstep-action">3.3 Utilize MCPs for rich context</div>
          <div className="tstep-body">
            When the source of truth lives outside the repo, bring it in.
            <br />
            <br />
            MCP helps Cursor connect to external tools and data sources. That matters when the work depends on things like design files, issue trackers, docs, or internal tools.
            <br />
            <br />
            For designers, this is often the difference between vague generation and grounded generation. If Cursor can inspect the real source material, it has a better chance of producing something accurate.
            <br />
            <br />
            Example use cases:
            <div className="course-card-grid">
              {[
                { icon: 'design_services', text: 'pulling design context from Figma' },
                { icon: 'confirmation_number', text: 'referencing issue or ticket metadata' },
                { icon: 'library_books', text: 'connecting to documentation sources' },
                { icon: 'dataset', text: 'grounding outputs in structured external data' },
              ].map((u) => (
                <div
                  key={u.text}
                  className="flex gap-12"
                >
                  <CourseIcon name={u.icon} size="lg" className="shrink-0" />
                  <span className="cds-body-primary text-grey-975">{u.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="callout info standalone" style={{ marginTop: 12 }}>
            <div className="callout-header">
              <span className="callout-icon">💡</span>
              <span className="callout-label">Instructor note</span>
            </div>
            <div className="callout-text">
              Cursor's docs describe MCP as the way to connect external tools and data sources, with support for tools, prompts, and resources through MCP servers.
            </div>
          </div>
        </div>

        <div style={{ marginTop: 24 }} id="build-3-4" className="course-anchor">
          <div className="tstep-action">3.4 Generate, refine, and generate again</div>
          <div className="tstep-body">
            This is where most of the learning happens.
            <br />
            <br />
            First generation is rarely the final answer. The real value comes from the review loop:
            <figure className="section-image">
              <img
                src="/images/course/Section-3-4-image.png"
                alt="Visual overview of the generate, refine, and regenerate workflow"
                loading="lazy"
              />
              <figcaption>Review loop: generate, audit, refine, and repeat.</figcaption>
            </figure>
            <div className="course-step-flow">
              {[
                'generate a first pass',
                'audit for missing context and hallucinations',
                'refine the instructions',
                'regenerate',
                'repeat until the quality bar is stable',
              ].map((label, i) => (
                <div key={label} className="course-step-flow-item">
                  <span className="course-step-flow-num cds-action-secondary">{i + 1}</span>
                  <span className="cds-body-primary text-grey-975">{label}</span>
                </div>
              ))}
            </div>
            The goal is not to force perfection from the first output. The goal is to learn what the system still does not know.
          </div>
        </div>

        <div style={{ marginTop: 24 }} id="build-3-5" className="course-anchor">
          <div className="tstep-action">3.5 Treat the skill as a living system</div>
          <div className="tstep-body">
            A good skill evolves with usage.
            <br />
            <br />
            When the output fails, do not just patch the result. Improve the system:
            <ul className="course-icon-list">
              <li>
                <CourseIcon name="add_circle" size="md" className="mt-2 shrink-0" />
                <span className="course-icon-li-text">add a new rule</span>
              </li>
              <li>
                <CourseIcon name="person_search" size="md" className="mt-2 shrink-0" />
                <span className="course-icon-li-text">clarify the audience</span>
              </li>
              <li>
                <CourseIcon name="edit_note" size="md" className="mt-2 shrink-0" />
                <span className="course-icon-li-text">rename confusing concepts</span>
              </li>
              <li>
                <CourseIcon name="lightbulb" size="md" className="mt-2 shrink-0" />
                <span className="course-icon-li-text">add a better example</span>
              </li>
              <li>
                <CourseIcon name="bookmark_added" size="md" className="mt-2 shrink-0" />
                <span className="course-icon-li-text">document the edge case</span>
              </li>
              <li>
                <CourseIcon name="cleaning_services" size="md" className="mt-2 shrink-0" />
                <span className="course-icon-li-text">remove duplicated instructions</span>
              </li>
            </ul>
            The skill gets stronger when feedback turns into structure.
          </div>
        </div>
      </div>

      <div className="ls course-section" id="worked-example-toast">
        <div className="sec-title">Real-world example: CDS Documentation Skill</div>
        <div className="sec-body">
          I created our new CDS Toast component during AI learn day to learn and apply my knowledge on Skills with Cursor, and here's what I found.
        </div>
        {renderSectionMedia('worked-example-toast')}

        <div style={{ marginTop: 24 }} id="toast-4-1" className="course-anchor">
          <div className="tstep-action">4.1 The friction</div>
          <div className="tstep-body">
            The work started with repeated friction, not with a plan to automate.
            <br />
            <br />
            The same documentation decisions kept coming up:
            <ul className="course-icon-list">
              <li>
                <CourseIcon name="toc" size="md" className="mt-2 shrink-0" />
                <span className="course-icon-li-text">how to structure sections</span>
              </li>
              <li>
                <CourseIcon name="category" size="md" className="mt-2 shrink-0" />
                <span className="course-icon-li-text">how to explain variants</span>
              </li>
              <li>
                <CourseIcon name="layers" size="md" className="mt-2 shrink-0" />
                <span className="course-icon-li-text">how to separate presentation from integration</span>
              </li>
              <li>
                <CourseIcon name="draw" size="md" className="mt-2 shrink-0" />
                <span className="course-icon-li-text">how to write for designers without sounding overly technical</span>
              </li>
              <li>
                <CourseIcon name="sync_alt" size="md" className="mt-2 shrink-0" />
                <span className="course-icon-li-text">how to keep Storybook and docs aligned</span>
              </li>
            </ul>
            That repetition made the case for a skill.
          </div>
        </div>

        <div style={{ marginTop: 24 }} id="toast-4-2" className="course-anchor">
          <div className="tstep-action">4.2 The first pass</div>
          <div className="tstep-body">
            The initial version simply encoded what was already happening manually:
            <ul className="course-icon-list">
              {[
                { icon: 'sort', text: 'recurring section order' },
                { icon: 'widgets', text: 'example content blocks' },
                { icon: 'link', text: 'references to existing pattern examples' },
                { icon: 'mic', text: 'tone guidance' },
                { icon: 'format_align_left', text: 'formatting guidance' },
                { icon: 'tune', text: 'early variant definitions' },
              ].map((row) => (
                <li key={row.text}>
                  <CourseIcon name={row.icon} size="md" className="mt-2 shrink-0" />
                  <span className="course-icon-li-text">{row.text}</span>
                </li>
              ))}
            </ul>
            At this stage, the objective was not elegance. It was consistency.
          </div>
        </div>

        <div style={{ marginTop: 24 }} id="toast-4-3" className="course-anchor">
          <div className="tstep-action">4.3 The refinement loop</div>
          <div className="tstep-body">
            Then came the important part: review.
            <br />
            <br />
            The generated documentation was audited for:
            <ul className="course-icon-list">
              <li>
                <CourseIcon name="psychology_alt" size="md" className="mt-2 shrink-0" />
                <span className="course-icon-li-text">hallucinations</span>
              </li>
              <li>
                <CourseIcon name="translate" size="md" className="mt-2 shrink-0" />
                <span className="course-icon-li-text">wrong terminology</span>
              </li>
              <li>
                <CourseIcon name="account_tree" size="md" className="mt-2 shrink-0" />
                <span className="course-icon-li-text">unclear hierarchy</span>
              </li>
              <li>
                <CourseIcon name="terminal" size="md" className="mt-2 shrink-0" />
                <span className="course-icon-li-text">overly technical phrasing</span>
              </li>
              <li>
                <CourseIcon name="help_outline" size="md" className="mt-2 shrink-0" />
                <span className="course-icon-li-text">missing context</span>
              </li>
              <li>
                <CourseIcon name="warning_amber" size="md" className="mt-2 shrink-0" />
                <span className="course-icon-li-text">missing edge cases</span>
              </li>
            </ul>
            That feedback was then turned into better instructions and better examples.
          </div>
        </div>

        <div style={{ marginTop: 24 }} id="toast-4-4" className="course-anchor">
          <div className="tstep-action">4.4 The generalized lesson</div>
          <div className="tstep-body">
            Most designers are not writing toast documentation. That is not the point.
            <br />
            <br />
            The transferable lesson is this:
            <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2">
              <div className="flex flex-col gap-12">
                <div className="cds-subtitle-sm text-grey-975">The method</div>
                <ul className="course-icon-list">
                  <li>
                    <CourseIcon name="refresh" size="md" className="mt-2 shrink-0" />
                    <span className="course-icon-li-text">notice repeated work</span>
                  </li>
                  <li>
                    <CourseIcon name="folder_open" size="md" className="mt-2 shrink-0" />
                    <span className="course-icon-li-text">gather the real context</span>
                  </li>
                  <li>
                    <CourseIcon name="library_books" size="md" className="mt-2 shrink-0" />
                    <span className="course-icon-li-text">reference existing patterns</span>
                  </li>
                  <li>
                    <CourseIcon name="balance" size="md" className="mt-2 shrink-0" />
                    <span className="course-icon-li-text">define what requires human judgment</span>
                  </li>
                  <li>
                    <CourseIcon name="cycle" size="md" className="mt-2 shrink-0" />
                    <span className="course-icon-li-text">iterate until the workflow becomes reliable</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-12">
                <div className="cds-subtitle-sm text-grey-975">Apply it elsewhere</div>
                <div className="flex flex-col gap-8">
                  {[
                    'research readouts',
                    'critique templates',
                    'accessibility reviews',
                    'UX writing structures',
                    'handoff checklists',
                    'design QA workflows',
                  ].map((label) => (
                    <div key={label} className="flex items-center gap-8">
                      <CourseIcon name="arrow_forward" size="sm" className="shrink-0" />
                      <span className="cds-body-secondary text-grey-975">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ls course-section" id="closing-what-next">
        <div className="sec-title">Closing: What to build next</div>
        <div className="sec-body">
          The best Cursor skills do not come from abstract brainstorming. They come from repeated friction, one real use case, and careful revision.
        </div>
        {renderSectionMedia('closing-what-next')}

        <div style={{ marginTop: 24 }} id="closing-5-1" className="course-anchor">
          <div className="tstep-action">Start with one workflow, not ten</div>
          <div className="tstep-body">
            <div className="flex flex-wrap items-start gap-16">
              <CourseIcon name="track_changes" size="lg" className="shrink-0" />
              <div>
                The best Cursor skills do not come from abstract brainstorming. They come from repeated friction, one real use case, and careful revision.
              </div>
            </div>
            <br />
            <br />
            Choose one task that keeps returning. Define the quality bar. Capture the context. Generate a first version. Review what breaks. Then improve the system, not just the output.
            <br />
            <br />
            That is how a personal workflow turns into a reusable skill set.
          </div>
        </div>
      </div>
        </div>
      </div>
    </>
  )
}
