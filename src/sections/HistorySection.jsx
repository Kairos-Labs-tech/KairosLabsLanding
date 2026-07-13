'use client'
import { useState } from 'react'
import { ScrollReveal } from '@/components/ScrollReveal'

const PRODUCTS = [
  { key: 'wavecraft', name: 'WaveCraft', accent: '#F05941' },
  { key: 'citeweave', name: 'CiteWeave', accent: '#8FB0A1' },
  { key: 'causalcity', name: 'CausalCity', accent: '#D7BB90' },
]

const ERAS = ['Foundations', 'This Sprint']

const milestones = [
  // WaveCraft
  { id: 'wc1', product: 'wavecraft', era: 'Foundations', date: '2026-06-08', what: 'First working build: the editor could clean up and transcribe audio end to end.', how: 'Monorepo restructure plus a first working chain of transcription and DSP tools driven by an LLM planner.' },
  { id: 'wc2', product: 'wavecraft', era: 'Foundations', date: '2026-06-09', what: 'Interface and voice-generation groundwork.', how: 'Resizable panels, output tab, and a locked-in text-to-speech reference technique.' },
  { id: 'wc3', product: 'wavecraft', era: 'This Sprint', date: '2026-07-02', what: 'The editor rebuilt to think one step at a time, instead of planning everything upfront.', how: 'Replaced one-shot planning with a real function-calling loop instead of a single upfront plan.' },
  { id: 'wc4', product: 'wavecraft', era: 'This Sprint', date: '2026-07-03', what: 'Drag-and-drop editing timeline shipped.', how: 'A manual tool canvas alongside the existing chat mode, same backend underneath both.' },
  { id: 'wc5', product: 'wavecraft', era: 'This Sprint', date: '2026-07-04', what: 'Google login added.', how: 'Real authentication, not a stub, tested alongside S3 presigned uploads.' },
  { id: 'wc6', product: 'wavecraft', era: 'This Sprint', date: '2026-07-06', what: 'Security tightened; the two editing modes merged into one.', how: 'A four-phase audit: security, lean tooling, docs restructure, and merging drag-and-drop with chat into a single surface.' },
  { id: 'wc7', product: 'wavecraft', era: 'This Sprint', date: '2026-07-09', what: 'The self-checking system shipped.', how: 'Added a quality-judge pass and asset provisioning, so generated audio gets measured and repaired before it reaches you.', today: true },
  // CiteWeave
  { id: 'cw1', product: 'citeweave', era: 'Foundations', date: '2026-05-02', what: 'First line of the research engine written.', how: 'Started as an independent research side-project, before it became a Kairos product.' },
  { id: 'cw2', product: 'citeweave', era: 'This Sprint', date: '2026-07-04', what: 'Engine rebuilt to work across research fields, not just one.', how: 'Split the monolith into a generic core plus per-vertical plugins, then proved a second vertical, legal research, working end to end on the same core, not a fork.' },
  { id: 'cw3', product: 'citeweave', era: 'This Sprint', date: '2026-07-09', what: 'Full system check and hardening pass.', how: 'Fixed a real ETL crash on a single bad record, and a real prompt-injection gap found during a dedicated safety audit.' },
  { id: 'cw4', product: 'citeweave', era: 'This Sprint', date: '2026-07-12', what: 'Shared engineering standards adopted across all three products.', how: 'Unified lint and test gates, dependency installs, and PR review automation across all three products at once.' },
  { id: 'cw5', product: 'citeweave', era: 'This Sprint', date: '2026-07-13', what: 'Roadmap for a real, usable interface documented.', how: 'Laid out what shipping a real interface and moving to production actually takes, the next milestone planned in detail.', today: true },
  // CausalCity
  { id: 'cc1', product: 'causalcity', era: 'Foundations', date: '2026-06-18', what: 'The traffic generator and map viewer built from scratch.', how: 'Procedural city topology, weather, and calendar generators, plus a first pass of the interactive map layer.' },
  { id: 'cc2', product: 'causalcity', era: 'Foundations', date: '2026-06-21', what: 'Generator and viewer reach a stable, tested state.', how: 'Hardened the physics loop and put a real test suite around it for the first time.' },
  { id: 'cc3', product: 'causalcity', era: 'Foundations', date: '2026-06-25', what: 'A dashboard display bug fixed.', how: 'A rendering bug in the dashboard panels, caught and patched.' },
  { id: 'cc4', product: 'causalcity', era: 'This Sprint', date: '2026-07-04', what: 'Groundwork laid for the next, smarter layer.', how: 'Added the ML dependency group and a models package, the foundation the forecasting and causal-discovery engines will build on.' },
  { id: 'cc5', product: 'causalcity', era: 'This Sprint', date: '2026-07-12', what: 'Shared engineering standards adopted across all three products.', how: 'Unified lint and test gates, dependency installs, and PR review automation across all three products at once.' },
  { id: 'cc6', product: 'causalcity', era: 'This Sprint', date: '2026-07-13', what: 'Automatic code review added to catch mistakes earlier.', how: 'Every pull request now gets a real-time automated review pass before a human looks at it, catching issues earlier in the pipeline.', today: true },
]

const backlog = {
  wavecraft: ['Deploy a real, public version', 'Get it in front of real users', 'Start investor conversations'],
  citeweave: ['Ship a real screen to use it from, not just a developer connection', 'Turn on the legal research option for everyone', 'Deploy it for real, public use'],
  causalcity: ['Start building real prediction and cause-finding models', 'Wire in real data sources', 'Scale and stress-test the pipeline'],
}

const GRID_STYLE = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
  gap: '0 2.5em',
}

function MilestoneRow({ m, accent, isOpen, onToggle }) {
  const [hover, setHover] = useState(false)
  return (
    <div style={{ position: 'relative' }}>
      <span
        aria-hidden="true"
        className={m.today ? 'timeline-pulse' : undefined}
        style={{
          position: 'absolute',
          left: '-17px',
          top: '8px',
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          background: m.today ? 'var(--ember-bright)' : accent,
        }}
      />
      <button
        onClick={onToggle}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onFocus={() => setHover(true)}
        onBlur={() => setHover(false)}
        aria-expanded={isOpen}
        className="unset-btn"
        style={{
          all: 'unset',
          cursor: 'pointer',
          display: 'block',
          width: '100%',
          padding: '6px 0',
        }}
      >
        <span style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '.4em .7em' }}>
          <span style={{ fontFamily: 'var(--mono)', fontSize: '.64rem', color: 'var(--parchment-dim)', letterSpacing: '.03em' }}>
            {m.date}{m.today && <span style={{ color: 'var(--ember-bright)' }}> &middot; today</span>}
          </span>
          <span
            aria-hidden="true"
            style={{
              fontFamily: 'var(--mono)',
              fontSize: '.6rem',
              color: isOpen || hover ? accent : 'var(--parchment-dim)',
              transition: 'transform .25s ease, color .2s ease',
              transform: isOpen ? 'rotate(45deg)' : 'none',
              display: 'inline-block',
            }}
          >
            +
          </span>
        </span>
        <span
          style={{
            display: 'block',
            marginTop: '.2em',
            color: 'var(--parchment)',
            fontSize: '.86rem',
            lineHeight: 1.35,
            opacity: hover || isOpen ? 1 : .88,
            transform: hover ? 'translateX(2px)' : 'none',
            transition: 'opacity .2s ease, transform .2s ease',
          }}
        >
          {m.what}
        </span>
      </button>
      {isOpen && (
        <p className="mode-fade" style={{ color: 'var(--parchment-dim)', fontSize: '.8rem', lineHeight: 1.45, paddingBottom: '8px' }}>
          {m.how}
        </p>
      )}
    </div>
  )
}

function ProductGroup({ product, items }) {
  const [openId, setOpenId] = useState(null)
  if (items.length === 0) return <div />
  return (
    <div style={{ marginBottom: '1.2em' }}>
      <p
        style={{
          fontFamily: 'var(--mono)',
          fontSize: '.64rem',
          letterSpacing: '.1em',
          textTransform: 'uppercase',
          color: product.accent,
          marginBottom: '.4em',
        }}
      >
        {product.name}
      </p>
      <div style={{ borderLeft: `1px solid ${product.accent}40`, paddingLeft: '17px' }}>
        {items.map(m => (
          <MilestoneRow
            key={m.id}
            m={m}
            accent={product.accent}
            isOpen={openId === m.id}
            onToggle={() => setOpenId(openId === m.id ? null : m.id)}
          />
        ))}
      </div>
    </div>
  )
}

export function HistorySection() {
  return (
    <section id="history" aria-labelledby="history-h" style={{ paddingBlock: 'clamp(56px, 8vh, 110px)' }}>
      <div className="shell">
        <ScrollReveal className="prose" style={{ marginBottom: 'clamp(36px, 5vh, 56px)' }}>
          <p className="eyebrow">
            <span className="greek">ΧΡΟΝΟΣ</span> &mdash; Real Work, Dated
          </p>
          <h2
            id="history-h"
            style={{
              fontFamily: 'var(--serif-display)',
              fontWeight: 600,
              fontSize: 'clamp(1.9rem, 1.3rem + 2.2vw, 2.75rem)',
              lineHeight: 1.12,
              marginTop: '.5em',
            }}
          >
            What actually happened, in order.
          </h2>
          <p style={{ marginTop: '1.1em', color: 'var(--parchment-dim)', maxWidth: '58ch' }}>
            Every date below is real, pulled from our own commit history. Click any entry for the how.
          </p>
        </ScrollReveal>

        {ERAS.map(era => (
          <ScrollReveal key={era} style={{ marginBottom: 'clamp(24px, 4vh, 40px)' }}>
            <p className="eyebrow" style={{ marginBottom: '1em' }}>
              {era}
            </p>
            <div style={GRID_STYLE}>
              {PRODUCTS.map(product => (
                <ProductGroup
                  key={product.key}
                  product={product}
                  items={milestones.filter(m => m.era === era && m.product === product.key)}
                />
              ))}
            </div>
          </ScrollReveal>
        ))}

        <ScrollReveal>
          <p className="eyebrow" style={{ marginBottom: '1em' }}>
            Next <span style={{ opacity: .6, textTransform: 'none', letterSpacing: 0 }}>&mdash; target, not a promise</span>
          </p>
          <div style={GRID_STYLE}>
            {PRODUCTS.map(product => (
              <div key={product.key}>
                <p
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: '.64rem',
                    letterSpacing: '.1em',
                    textTransform: 'uppercase',
                    color: product.accent,
                    marginBottom: '.4em',
                  }}
                >
                  {product.name}
                </p>
                <div style={{ borderLeft: `1px dashed ${product.accent}66`, paddingLeft: '17px', display: 'grid', gap: '.4em' }}>
                  {backlog[product.key].map(item => (
                    <p key={item} style={{ color: 'var(--parchment-dim)', fontSize: '.8rem', lineHeight: 1.35 }}>
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
