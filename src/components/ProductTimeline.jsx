'use client'
import { ScrollReveal } from '@/components/ScrollReveal'

export function ProductTimeline({ accent, shipped, next }) {
  const todayIndex = shipped.length - 1

  return (
    <ScrollReveal
      tag="section"
      aria-label="Build timeline"
      style={{ marginTop: 'clamp(40px, 6vh, 64px)' }}
    >
      <p className="eyebrow" style={{ marginBottom: '.3em' }}>
        <span className="greek">ΧΡΟΝΟΣ</span> &mdash; Timeline
      </p>
      <p style={{ color: 'var(--parchment-dim)', fontSize: '.92em', maxWidth: '52ch', marginBottom: '1.6em' }}>
        Real dates, pulled from our own commit history. Past the pulsing marker, it&rsquo;s target, not a promise.
      </p>

      <div
        style={{
          position: 'relative',
          marginInline: 'clamp(-20px, -4vw, -40px)',
          paddingInline: 'clamp(20px, 4vw, 40px)',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '21px',
            left: 'clamp(20px, 4vw, 40px)',
            right: 'clamp(20px, 4vw, 40px)',
            height: '2px',
            background: `linear-gradient(90deg, ${accent}00, ${accent}88 6%, ${accent}88 94%, ${accent}00)`,
          }}
        />

        <div
          className="timeline-scroll"
          style={{
            display: 'flex',
            gap: '18px',
            overflowX: 'auto',
            paddingBottom: '18px',
            paddingTop: '4px',
            scrollSnapType: 'x proximity',
            WebkitMaskImage: 'linear-gradient(90deg, transparent, black 24px, black calc(100% - 24px), transparent)',
            maskImage: 'linear-gradient(90deg, transparent, black 24px, black calc(100% - 24px), transparent)',
          }}
        >
          {shipped.map((m, i) => (
            <article
              key={m.date}
              style={{
                scrollSnapAlign: 'start',
                flex: '0 0 auto',
                width: 'clamp(240px, 26vw, 280px)',
                position: 'relative',
                paddingTop: '28px',
              }}
            >
              <span
                aria-hidden="true"
                className={i === todayIndex ? 'timeline-pulse' : undefined}
                style={{
                  position: 'absolute',
                  top: '13px',
                  left: '14px',
                  width: '11px',
                  height: '11px',
                  borderRadius: '50%',
                  background: i === todayIndex ? 'var(--ember-bright)' : accent,
                  border: '2px solid var(--ink-page)',
                }}
              />
              <div
                style={{
                  border: `1px solid ${i === todayIndex ? 'var(--ember-bright)' : 'var(--hairline)'}`,
                  background: 'var(--ink-raised)',
                  padding: '16px 18px',
                  height: '100%',
                  display: 'grid',
                  gap: '.5em',
                  alignContent: 'start',
                }}
              >
                <p style={{ display: 'flex', alignItems: 'baseline', gap: '.6em', flexWrap: 'wrap' }}>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: '.7rem', letterSpacing: '.06em', color: 'var(--parchment-dim)' }}>
                    {m.date}
                  </span>
                  {i === todayIndex && (
                    <span className="badge badge-status" style={{ fontSize: '.6rem' }}>Today</span>
                  )}
                </p>
                <p style={{ fontFamily: 'var(--serif-display)', fontWeight: 600, fontSize: '1.02em', color: 'var(--parchment)', lineHeight: 1.3 }}>
                  {m.what}
                </p>
                <p style={{ color: 'var(--parchment-dim)', fontSize: '.86em', lineHeight: 1.55 }}>
                  {m.how}
                </p>
              </div>
            </article>
          ))}

          {next.map((n, i) => (
            <article
              key={n}
              style={{
                scrollSnapAlign: 'start',
                flex: '0 0 auto',
                width: 'clamp(200px, 22vw, 230px)',
                position: 'relative',
                paddingTop: '28px',
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: '13px',
                  left: '14px',
                  width: '11px',
                  height: '11px',
                  borderRadius: '50%',
                  background: 'var(--ink-page)',
                  border: `2px dashed ${accent}`,
                }}
              />
              <div
                style={{
                  border: '1px dashed rgba(234,224,213,.22)',
                  padding: '16px 18px',
                  height: '100%',
                  display: 'grid',
                  gap: '.5em',
                  alignContent: 'start',
                }}
              >
                <span
                  className="badge"
                  style={{ fontSize: '.6rem', width: 'fit-content', borderColor: accent, color: accent }}
                >
                  {i === 0 ? 'Next' : 'Later'}
                </span>
                <p style={{ color: 'var(--parchment-dim)', fontSize: '.92em', lineHeight: 1.5 }}>
                  {n}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </ScrollReveal>
  )
}
