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
  { id: 'wc1', product: 'wavecraft', era: 'Foundations', date: '2026-06-08', what: 'First working build: agent harness and DSP loop run end to end.', how: 'Monorepo restructure plus a first working chain of transcription and DSP tools driven by an LLM planner.' },
  { id: 'wc2', product: 'wavecraft', era: 'Foundations', date: '2026-06-09', what: 'UI and TTS pipeline groundwork.', how: 'Resizable panels, output tab, and a locked-in text-to-speech reference technique.' },
  { id: 'wc3', product: 'wavecraft', era: 'This Sprint', date: '2026-07-02', what: 'Agent loop rebuilt on native tool-calling.', how: 'Replaced one-shot planning with a real function-calling loop instead of a single upfront plan.' },
  { id: 'wc4', product: 'wavecraft', era: 'This Sprint', date: '2026-07-03', what: 'Drag-and-drop DAW-style timeline shipped.', how: 'A manual tool canvas alongside the existing chat mode, same backend underneath both.' },
  { id: 'wc5', product: 'wavecraft', era: 'This Sprint', date: '2026-07-04', what: 'Google OAuth login added.', how: 'Real authentication, not a stub, tested alongside S3 presigned uploads.' },
  { id: 'wc6', product: 'wavecraft', era: 'This Sprint', date: '2026-07-06', what: 'Security hardening pass; the two tool canvases unified into one.', how: 'A four-phase audit: security, lean tooling, docs restructure, and merging drag-and-drop with chat into a single surface.' },
  { id: 'wc7', product: 'wavecraft', era: 'This Sprint', date: '2026-07-09', what: 'The self-audit loop shipped.', how: 'Added a quality-judge pass and asset provisioning, so generated audio gets measured and repaired before it reaches you.', today: true },
  // CiteWeave
  { id: 'cw1', product: 'citeweave', era: 'Foundations', date: '2026-05-02', what: 'First line of the retrieval engine written.', how: 'Started as an independent research side-project, before it became a Kairos product.' },
  { id: 'cw2', product: 'citeweave', era: 'This Sprint', date: '2026-07-04', what: 'Engine rebuilt to be vertical-agnostic.', how: 'Split the monolith into a generic core plus per-vertical plugins, then proved a second vertical, legal research, working end to end on the same core, not a fork.' },
  { id: 'cw3', product: 'citeweave', era: 'This Sprint', date: '2026-07-09', what: 'Full-system audit and hardening pass.', how: 'Fixed a real ETL crash on a single bad record, and a real prompt-injection gap found during a dedicated safety audit.' },
  { id: 'cw4', product: 'citeweave', era: 'This Sprint', date: '2026-07-12', what: 'Shared CI and engineering standards adopted.', how: 'Unified lint and test gates, dependency installs, and PR review automation across all three products at once.' },
  { id: 'cw5', product: 'citeweave', era: 'This Sprint', date: '2026-07-13', what: 'Frontend and productization roadmap documented.', how: 'Laid out what shipping a real interface and moving to production actually takes, the next milestone planned in detail.', today: true },
  // CausalCity
  { id: 'cc1', product: 'causalcity', era: 'Foundations', date: '2026-06-18', what: 'The generator and cityviz built from scratch.', how: 'Procedural city topology, weather, and calendar generators, plus a first pass of the interactive map layer.' },
  { id: 'cc2', product: 'causalcity', era: 'Foundations', date: '2026-06-21', what: 'Generator and viz reach a stable, tested state.', how: 'Hardened the physics loop and put a real test suite around it for the first time.' },
  { id: 'cc3', product: 'causalcity', era: 'Foundations', date: '2026-06-25', what: 'Analytics dashboard glitch fixed.', how: 'A rendering bug in the dashboard panels, caught and patched.' },
  { id: 'cc4', product: 'causalcity', era: 'This Sprint', date: '2026-07-04', what: 'Scaffolded the intelligence layer’s dependency stack.', how: 'Added the ML dependency group and a models package, the foundation the forecasting and causal-discovery engines will build on.' },
  { id: 'cc5', product: 'causalcity', era: 'This Sprint', date: '2026-07-12', what: 'Shared CI and engineering standards adopted.', how: 'Unified lint and test gates, dependency installs, and PR review automation across all three products at once.' },
  { id: 'cc6', product: 'causalcity', era: 'This Sprint', date: '2026-07-13', what: 'Automated PR review shipped into CI.', how: 'Every pull request now gets a real-time automated review pass before a human looks at it, catching issues earlier in the pipeline.', today: true },
]

const backlog = {
  wavecraft: ['Deploy a real, public MVP', 'Get it in front of real users', 'Start investor conversations'],
  citeweave: ['Ship a frontend, not just the API', 'Route the legal vertical publicly', 'Production deploy'],
  causalcity: ['Start on real forecasting and causal-discovery models', 'Wire in real data sources', 'Scale and stress-test the pipeline'],
}

function MilestoneRow({ m, accent, isOpen, onToggle }) {
  return (
    <div style={{ position: 'relative' }}>
      <span
        aria-hidden="true"
        className={m.today ? 'timeline-pulse' : undefined}
        style={{
          position: 'absolute',
          left: '-19px',
          top: '9px',
          width: '7px',
          height: '7px',
          borderRadius: '50%',
          background: m.today ? 'var(--ember-bright)' : accent,
        }}
      />
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{
          all: 'unset',
          cursor: 'pointer',
          display: 'block',
          width: '100%',
          padding: '9px 0',
        }}
      >
        <span style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '.5em .8em' }}>
          <span style={{ fontFamily: 'var(--mono)', fontSize: '.66rem', color: 'var(--parchment-dim)', letterSpacing: '.04em' }}>
            {m.date}{m.today && <span style={{ color: 'var(--ember-bright)' }}> &middot; today</span>}
          </span>
          <span
            aria-hidden="true"
            style={{
              fontFamily: 'var(--mono)',
              fontSize: '.62rem',
              color: 'var(--parchment-dim)',
              transition: 'transform .2s ease',
              transform: isOpen ? 'rotate(45deg)' : 'none',
              display: 'inline-block',
            }}
          >
            +
          </span>
        </span>
        <span style={{ display: 'block', marginTop: '.25em', color: 'var(--parchment)', fontSize: '.92rem', lineHeight: 1.4 }}>
          {m.what}
        </span>
      </button>
      {isOpen && (
        <p className="mode-fade" style={{ color: 'var(--parchment-dim)', fontSize: '.86rem', lineHeight: 1.5, paddingBottom: '10px', maxWidth: '54ch' }}>
          {m.how}
        </p>
      )}
    </div>
  )
}

function ProductGroup({ product, items }) {
  const [openId, setOpenId] = useState(null)
  if (items.length === 0) return null
  return (
    <div style={{ marginBottom: '1.6em' }}>
      <p
        style={{
          fontFamily: 'var(--mono)',
          fontSize: '.66rem',
          letterSpacing: '.1em',
          textTransform: 'uppercase',
          color: product.accent,
          marginBottom: '.5em',
        }}
      >
        {product.name}
      </p>
      <div style={{ borderLeft: `1px solid ${product.accent}40`, paddingLeft: '19px' }}>
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
    <section id="history" aria-labelledby="history-h" style={{ paddingBlock: 'clamp(72px, 10vh, 150px)' }}>
      <div className="shell">
        <ScrollReveal className="prose" style={{ marginBottom: 'clamp(48px, 7vh, 80px)' }}>
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
          <p style={{ marginTop: '1.3em', color: 'var(--parchment-dim)', maxWidth: '58ch' }}>
            Every date below is real, pulled from our own commit history, not written for this page.
            Click any entry for the how. Past the pulsing markers, it&rsquo;s target, not a promise.
          </p>
        </ScrollReveal>

        <div style={{ maxWidth: '640px' }}>
          {ERAS.map(era => (
            <ScrollReveal key={era} style={{ marginBottom: 'clamp(32px, 5vh, 52px)' }}>
              <p className="eyebrow" style={{ marginBottom: '1.2em' }}>
                {era}
              </p>
              {PRODUCTS.map(product => (
                <ProductGroup
                  key={product.key}
                  product={product}
                  items={milestones.filter(m => m.era === era && m.product === product.key)}
                />
              ))}
            </ScrollReveal>
          ))}

          <ScrollReveal>
            <p className="eyebrow" style={{ marginBottom: '1.2em' }}>
              Next <span style={{ opacity: .6, textTransform: 'none', letterSpacing: 0 }}>&mdash; target, not a promise</span>
            </p>
            {PRODUCTS.map(product => (
              <div key={product.key} style={{ marginBottom: '1.3em' }}>
                <p
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: '.66rem',
                    letterSpacing: '.1em',
                    textTransform: 'uppercase',
                    color: product.accent,
                    marginBottom: '.5em',
                  }}
                >
                  {product.name}
                </p>
                <div style={{ borderLeft: `1px dashed ${product.accent}55`, paddingLeft: '19px', display: 'grid', gap: '.5em' }}>
                  {backlog[product.key].map(item => (
                    <p key={item} style={{ color: 'var(--parchment-dim)', fontSize: '.86rem', lineHeight: 1.4 }}>
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
