import { ScrollReveal } from '@/components/ScrollReveal'

export function WhySection() {
  return (
    <section
      className="why"
      id="why"
      aria-labelledby="why-h"
      style={{ paddingBlock: 'clamp(72px, 10vh, 140px)' }}
    >
      <div className="shell cols-layout">
        <ScrollReveal className="prose">
          <p className="eyebrow">
            <span className="greek">ΑΝΤΙΘΕΣΙΣ</span> &mdash; Why Kairos
          </p>
          <h2
            id="why-h"
            style={{
              fontFamily: 'var(--serif-display)',
              fontWeight: 600,
              fontSize: 'clamp(1.9rem, 1.3rem + 2.2vw, 2.75rem)',
              lineHeight: 1.12,
              letterSpacing: '-.008em',
              maxWidth: '24ch',
              textWrap: 'balance',
            }}
          >
            Kairos is about meaningful moments.
          </h2>
          <p style={{ marginTop: '1.4em', color: 'var(--parchment-dim)' }}>
            Moments where <em style={{ color: 'var(--parchment)' }}>effort</em> matters. Where{' '}
            <em style={{ color: 'var(--parchment)' }}>information</em> matters. Where{' '}
            <em style={{ color: 'var(--parchment)' }}>timing</em> matters. Good technology should create more of those moments.
          </p>
        </ScrollReveal>

        <ScrollReveal tag="aside" className="margin-note">
          the litany opposite is the entire product strategy, compressed
        </ScrollReveal>
      </div>

      <div className="shell">
        <div>
          <div className="antithesis">
            <div style={{ textAlign: 'right', paddingRight: 'clamp(18px, 4.5vw, 52px)' }}>
              <h3
                id="less-h"
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '.72rem',
                  fontWeight: 500,
                  letterSpacing: '.18em',
                  textTransform: 'uppercase',
                  color: 'var(--parchment-dim)',
                  marginBottom: '1.4em',
                }}
              >
                <span lang="el" style={{ color: 'var(--ember-bright)' }}>ΕΛΑΣΣΟΝ</span> &mdash; Less
              </h3>
              <ScrollReveal tag="ul" stagger aria-labelledby="less-h" style={{ listStyle: 'none' }}>
                {['waiting','searching','intimidation','context switching','friction'].map(w => (
                  <li
                    key={w}
                    style={{
                      fontFamily: 'var(--serif-display)',
                      fontSize: 'clamp(1.25rem, 1rem + 1.2vw, 1.75rem)',
                      lineHeight: 1.9,
                      fontWeight: 500,
                      color: 'var(--parchment-dim)',
                      fontStyle: 'italic',
                    }}
                  >
                    {w}
                  </li>
                ))}
              </ScrollReveal>
            </div>

            <div style={{ paddingLeft: 'clamp(18px, 4.5vw, 52px)' }}>
              <h3
                id="more-h"
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '.72rem',
                  fontWeight: 500,
                  letterSpacing: '.18em',
                  textTransform: 'uppercase',
                  color: 'var(--parchment-dim)',
                  marginBottom: '1.4em',
                }}
              >
                <span lang="el" style={{ color: 'var(--ember-bright)' }}>ΠΛΕΟΝ</span> &mdash; More
              </h3>
              <ScrollReveal tag="ul" stagger aria-labelledby="more-h" style={{ listStyle: 'none' }}>
                {['clarity','confidence','creativity','action'].map(w => (
                  <li
                    key={w}
                    style={{
                      fontFamily: 'var(--serif-display)',
                      fontSize: 'clamp(1.25rem, 1rem + 1.2vw, 1.75rem)',
                      lineHeight: 1.9,
                      fontWeight: 500,
                      color: 'var(--parchment)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '.55em',
                    }}
                  >
                    {w}
                    <span
                      aria-hidden="true"
                      style={{
                        display: 'inline-block',
                        width: '.45em',
                        height: '1px',
                        background: 'var(--ember-bright)',
                        verticalAlign: 'middle',
                        opacity: .85,
                        flexShrink: 0,
                      }}
                    />
                  </li>
                ))}
              </ScrollReveal>
            </div>
          </div>
        </div>

        <ScrollReveal tag="p" style={{ marginTop: 'clamp(40px, 6vh, 60px)', fontStyle: 'italic', color: 'var(--parchment-dim)' }}>
          Less understanding systems. More using them.
        </ScrollReveal>
      </div>
    </section>
  )
}
