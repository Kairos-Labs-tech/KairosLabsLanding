import { ScrollReveal } from '@/components/ScrollReveal'
import { BtnPrimary, CtaQuiet } from '@/components/Btn'

export function HeroSection() {
  return (
    <section
      className="hero"
      aria-labelledby="hero-h"
      style={{
        position: 'relative',
        paddingBlock: 'clamp(84px, 14vh, 168px) clamp(96px, 12vh, 150px)',
        overflow: 'clip',
      }}
    >
      {/* Candlelight radial */}
      <div
        aria-hidden="true"
        style={{
          content: '',
          position: 'absolute',
          inset: '-20% -10% auto',
          height: '120%',
          background: 'radial-gradient(ellipse 62% 48% at 38% 30%, rgba(135,35,65,.16), transparent 68%)',
          pointerEvents: 'none',
        }}
      />

      <div className="shell cols-layout" style={{ position: 'relative' }}>
        <div>
          {/* Lexicon entry */}
          <ScrollReveal>
            <div
              style={{
                borderLeft: '1px solid var(--hairline)',
                paddingLeft: 'clamp(18px, 3vw, 34px)',
                marginBottom: 'clamp(44px, 7vh, 76px)',
                maxWidth: '56ch',
              }}
            >
              <p style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '.35em .6em' }}>
                <span
                  lang="el"
                  style={{
                    fontFamily: 'var(--serif-display)',
                    fontWeight: 600,
                    fontSize: 'clamp(2.9rem, 2rem + 4vw, 4.6rem)',
                    lineHeight: 1,
                    letterSpacing: '-.01em',
                    color: 'var(--parchment)',
                    textShadow: '0 0 34px rgba(190,49,68,.28)',
                  }}
                >
                  καιρός
                </span>
                <span
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: '.82rem',
                    letterSpacing: '.06em',
                    color: 'var(--parchment-dim)',
                  }}
                  aria-hidden="true"
                >
                  /kai·rós/
                </span>
                <span style={{ fontStyle: 'italic', color: 'var(--parchment-dim)', fontSize: '1rem' }}>n.</span>
              </p>
              <p style={{ marginTop: '1.1em', fontSize: '1.02em', color: 'var(--parchment)' }}>
                <span
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: '.78em',
                    color: 'var(--ember-bright)',
                    marginRight: '.5em',
                  }}
                >
                  1.
                </span>
                <span style={{ fontVariant: 'small-caps', letterSpacing: '.06em', color: 'var(--parchment-dim)' }}>
                  Ancient Greek.
                </span>{' '}
                Not chronological time. Not measured time. <em>Meaningful time</em> &mdash; the right action, at the right moment, for the right reason.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h1
              id="hero-h"
              style={{
                fontFamily: 'var(--serif-display)',
                fontWeight: 600,
                fontSize: 'clamp(2.6rem, 1.4rem + 4.8vw, 5rem)',
                lineHeight: 1.07,
                letterSpacing: '-.015em',
                maxWidth: '18ch',
                textWrap: 'balance',
              }}
            >
              Complexity should live inside systems, not inside people.
            </h1>

            <p style={{ marginTop: '1.6em', fontSize: '1.06em', color: 'var(--parchment)', maxWidth: '58ch' }}>
              Kairos Labs is an independent product laboratory building across audio,
              knowledge, and urban intelligence.{' '}
              <span style={{ color: 'var(--parchment-dim)' }}>
                Different domains. Different teams. One shared philosophy:
              </span>{' '}
              complexity should live in the software, not get handed to the person using it.
            </p>

            <aside
              style={{
                marginTop: '1.8em',
                fontStyle: 'italic',
                color: 'var(--parchment-dim)',
                borderLeft: '1px solid var(--hairline)',
                paddingLeft: 'clamp(18px, 3vw, 34px)',
                maxWidth: '52ch',
              }}
            >
              Every product here began with the same three questions.{' '}
              <em style={{ color: 'var(--parchment)' }}>
                Can this save someone time? Can this reduce uncertainty? Can this make getting started easier?
              </em>{' '}
              If the answer was yes, it was worth building.
            </aside>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '16px 28px',
                marginTop: '2.6em',
              }}
            >
              <BtnPrimary href="#products">Explore Products</BtnPrimary>
              <CtaQuiet href="#reach-out">Reach Out</CtaQuiet>
              {/* <CtaQuiet href="mailto:kairoslabs.tech@gmail.com?subject=Hello%20Kairos">Reach Out</CtaQuiet> */}
            </div>

            <p className="metaline" style={{ marginTop: '3.4em' }}>
              Est. VI.2026 &nbsp;&middot;&nbsp; Three products &nbsp;&middot;&nbsp; No users yet &nbsp;&middot;&nbsp; tell us if you&rsquo;d be one
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
