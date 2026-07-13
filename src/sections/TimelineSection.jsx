'use client'
import { ScrollReveal } from '@/components/ScrollReveal'

const PRODUCT_COLOR = {
  WaveCraft: '#F05941',
  CiteWeave: '#8FB0A1',
  CausalCity: '#D7BB90',
  Kairos: 'var(--parchment-dim)',
}

const milestones = [
  { date: '2026-05-02', product: 'CiteWeave', label: 'First line of the retrieval engine written, as an independent research side-project.' },
  { date: '2026-06-08', product: 'WaveCraft', label: 'First working build: the agent harness and DSP tool loop run end to end.' },
  { date: '2026-06-18', product: 'CausalCity', label: 'Synthetic traffic generator and cityviz visualizer built from scratch.' },
  { date: '2026-07-03', product: 'WaveCraft', label: 'Drag-and-drop DAW-style timeline ships alongside the chat mode.' },
  { date: '2026-07-04', product: 'CiteWeave', label: 'Engine rebuilt to be vertical-agnostic; the legal-research vertical proven working end to end.' },
  { date: '2026-07-06', product: 'WaveCraft', label: 'Security hardening pass; the drag-and-drop and chat tool canvases unified into one.' },
  { date: '2026-07-09', product: 'WaveCraft', label: 'The self-audit loop ships: generated audio now gets measured and repaired before it reaches you.' },
  { date: '2026-07-12', product: 'Kairos', label: 'Shared CI and engineering standards rolled out across all three products at once.' },
  { date: '2026-07-13', product: 'CausalCity', label: 'Caught ourselves overstating the architecture in our own docs, and rewrote them to match what\'s actually built.' },
  { date: '2026-07-14', product: 'Kairos', label: 'This site rebuilt around one rule: nothing public says more than the code actually does.' },
]

const backlog = [
  {
    product: 'WaveCraft',
    items: ['Deploy a real, public MVP', 'Get it in front of real users', 'Start investor conversations'],
  },
  {
    product: 'CiteWeave',
    items: ['Ship a frontend, not just the API', 'Route the legal vertical publicly', 'Production deploy'],
  },
  {
    product: 'CausalCity',
    items: ['Start on real forecasting and causal-discovery models', 'Wire in real data sources', 'Scale and stress-test the pipeline'],
  },
]

function Dot({ color, today = false }) {
  const c = today ? 'var(--ember-bright)' : color
  return (
    <span
      aria-hidden="true"
      className={today ? 'timeline-pulse' : undefined}
      style={{
        position: 'absolute',
        left: '-29px',
        top: '.4em',
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        background: c,
        border: '2px solid var(--ink-page)',
        boxShadow: today ? undefined : `0 0 0 1px ${c}`,
      }}
    />
  )
}

export function TimelineSection() {
  return (
    <section
      className="timeline"
      id="timeline"
      aria-labelledby="timeline-h"
      style={{ paddingBlock: 'clamp(72px, 10vh, 150px) clamp(56px, 8vh, 110px)' }}
    >
      <div className="shell">
        <ScrollReveal className="prose" style={{ marginBottom: 'clamp(48px, 7vh, 88px)' }}>
          <p className="eyebrow">
            <span className="greek">ΧΡΟΝΟΣ</span> &mdash; Timeline
          </p>
          <h2
            id="timeline-h"
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
            Every date below is real, pulled from our own commit history. Below today, the line turns
            to what we&rsquo;re aiming at next, not what we&rsquo;ve promised.
          </p>
        </ScrollReveal>

        <div style={{ maxWidth: '640px' }}>
          <ol
            style={{
              listStyle: 'none',
              position: 'relative',
              marginLeft: '29px',
              borderLeft: '1px solid var(--hairline)',
              display: 'grid',
              gap: 'clamp(28px, 4vh, 44px)',
              paddingBlock: '4px 0',
            }}
          >
            {milestones.map((m, i) => (
              <ScrollReveal key={m.date + m.label} tag="li" style={{ position: 'relative', paddingLeft: '24px' }}>
                <Dot color={PRODUCT_COLOR[m.product]} today={i === milestones.length - 1} />
                <p style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '.5em .8em', marginBottom: '.35em' }}>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: '.72rem', letterSpacing: '.08em', color: 'var(--parchment-dim)' }}>
                    {m.date}
                  </span>
                  <span
                    className="badge"
                    style={{ borderColor: PRODUCT_COLOR[m.product], color: PRODUCT_COLOR[m.product] }}
                  >
                    {m.product}
                  </span>
                  {i === milestones.length - 1 && (
                    <span className="badge badge-status">Today</span>
                  )}
                </p>
                <p style={{ color: 'var(--parchment)', maxWidth: '52ch' }}>{m.label}</p>
              </ScrollReveal>
            ))}
          </ol>

          {/* Backlog continuation, dashed */}
          <div
            style={{
              marginLeft: '29px',
              borderLeft: '1px dashed rgba(234,224,213,.22)',
              paddingLeft: '24px',
              paddingTop: 'clamp(28px, 4vh, 44px)',
              display: 'grid',
              gap: '2em',
            }}
          >
            <p className="eyebrow" style={{ marginLeft: '-24px' }}>
              <span className="greek">ΜΕΤΑ</span> &mdash; What&rsquo;s Next (target, not a promise)
            </p>
            {backlog.map(b => (
              <ScrollReveal key={b.product}>
                <p
                  className="badge"
                  style={{ borderColor: PRODUCT_COLOR[b.product], color: PRODUCT_COLOR[b.product], marginBottom: '.8em' }}
                >
                  {b.product}
                </p>
                <ul style={{ listStyle: 'none', display: 'grid', gap: '.5em' }}>
                  {b.items.map(it => (
                    <li key={it} style={{ color: 'var(--parchment-dim)', display: 'flex', alignItems: 'baseline', gap: '.7em' }}>
                      <span style={{ color: PRODUCT_COLOR[b.product], fontFamily: 'var(--mono)', fontSize: '.72em', flexShrink: 0, opacity: .7 }}>&rarr;</span>
                      {it}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
