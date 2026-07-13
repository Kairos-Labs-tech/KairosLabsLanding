'use client'
import { useState } from 'react'
import { ScrollReveal } from '@/components/ScrollReveal'
import { AmbientDot } from '@/components/TimelineRail'

const milestones = [
  { date: '2026-05-02', product: 'CiteWeave', accent: '#8FB0A1', what: 'First line of the retrieval engine written.' },
  { date: '2026-06-08', product: 'WaveCraft', accent: '#F05941', what: 'First working build: agent harness and DSP loop run end to end.' },
  { date: '2026-06-18', product: 'CausalCity', accent: '#D7BB90', what: 'Synthetic traffic generator and cityviz built from scratch.' },
  { date: '2026-07-04', product: 'CiteWeave', accent: '#8FB0A1', what: 'Engine rebuilt to be vertical-agnostic, legal research proven end to end.' },
  { date: '2026-07-09', product: 'WaveCraft', accent: '#F05941', what: 'The self-audit loop shipped: output gets measured and repaired automatically.' },
  { date: '2026-07-13', product: 'CausalCity', accent: '#D7BB90', what: 'Automated PR review shipped into CI.' },
]

export function TimelineStrip() {
  const [hovered, setHovered] = useState(null)
  const todayDate = milestones[milestones.length - 1].date

  return (
    <section aria-label="Build history across all products" style={{ paddingBlock: 'clamp(48px, 7vh, 84px)' }}>
      <div className="shell">
        <ScrollReveal>
          <p className="eyebrow" style={{ marginBottom: '1.4em' }}>
            <span className="greek">ΧΡΟΝΟΣ</span> &mdash; Real Work, Dated
          </p>
          <div style={{ position: 'relative', maxWidth: '620px' }}>
            <div style={{ position: 'relative', height: '20px', display: 'flex', alignItems: 'center' }}>
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  left: '10px',
                  right: '10px',
                  height: '1px',
                  background: 'linear-gradient(90deg, transparent, rgba(234,224,213,.25) 6%, rgba(234,224,213,.25) 94%, transparent)',
                }}
              />
              <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                {milestones.map((m, i) => {
                  const key = `m${i}`
                  const isToday = m.date === todayDate
                  return (
                    <AmbientDot
                      key={key}
                      isToday={isToday}
                      accent={m.accent}
                      active={hovered === key}
                      onEnter={() => setHovered(key)}
                      onLeave={() => setHovered(null)}
                      label={`${m.product}, ${m.date}${isToday ? ' · today' : ''} — ${m.what}`}
                    />
                  )
                })}
              </div>
            </div>
          </div>
          <p style={{ marginTop: '1em', fontFamily: 'var(--mono)', fontSize: '.68rem', letterSpacing: '.04em', color: 'var(--parchment-dim)' }}>
            One line per product, all three below. Each has the full history.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
