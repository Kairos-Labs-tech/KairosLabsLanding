import Script from 'next/script'

import { ScrollReveal } from '@/components/ScrollReveal'

const challenges = [
  '"This already exists."',
  '"You\'re solving the wrong problem."',
  '"People don\'t behave this way."',
  '"Professionals won\'t trust this."',
  '"You\'re missing this use case."',
  '"Have you considered this market?"',
]

export function CollaborateSection() {
  return (
    <section
      className="collaborate"
      id="collaborate"
      aria-labelledby="collab-h"
      style={{
        position: 'relative',
        paddingBlock: 'clamp(84px, 13vh, 170px)',
        overflow: 'clip',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 'auto -15% -35%',
          height: '130%',
          background: 'radial-gradient(ellipse 58% 52% at 46% 62%, rgba(135,35,65,.2), transparent 66%)',
          pointerEvents: 'none',
        }}
      />

      <div className="shell" style={{ position: 'relative' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0,1fr)',
            gap: 'clamp(40px, 6vw, 72px)',
          }}
        >
          {/* Copy */}
          <ScrollReveal className="prose">
            <p className="eyebrow">
              <span className="greek">ΣΥΝΕΡΓΑΣΙΑ</span> &mdash; What We Want From Readers
            </p>
            <h2
              id="collab-h"
              style={{
                fontFamily: 'var(--serif-display)',
                fontWeight: 600,
                fontSize: 'clamp(1.9rem, 1.3rem + 2.2vw, 2.75rem)',
                lineHeight: 1.12,
                letterSpacing: '-.008em',
                textWrap: 'balance',
                marginTop: '.5em',
              }}
            >
              We&rsquo;re looking for perspective. Not validation.
            </h2>
            <p style={{ marginTop: '1.4em', color: 'var(--parchment-dim)' }}>
              Kairos is early. Experimental. Curious.{' '}
              <em style={{ color: 'var(--parchment)' }}>Uncertain.</em>{' '}
              We want people willing to challenge assumptions, to ask difficult questions, to say:
            </p>
          </ScrollReveal>

          <ScrollReveal tag="ul" stagger className="challenges-list">
            {challenges.map(c => <li key={c}>{c}</li>)}
          </ScrollReveal>

          <ScrollReveal className="prose">
            <p style={{ fontSize: '1.05em', color: 'var(--parchment)', maxWidth: '40ch' }}>
              <strong style={{ fontWeight: 400, color: 'var(--ember-bright)' }}>Good criticism saves years.</strong>{' '}
              Perspective compounds. That is why this website exists.
            </p>
          </ScrollReveal>

          {/* Embedded form */}
          <ScrollReveal>
            <p className="eyebrow" style={{ marginBottom: '1.2em' }}>
              <span className="greek">ΦΟΡΜΑ</span> &mdash; Share Your Perspective
            </p>
            <div
              style={{
                border: '1px solid rgba(234,224,213,.18)',
                background: 'linear-gradient(180deg, rgba(23,16,26,.96), rgba(16,10,18,.98))',
                boxShadow: '0 22px 64px rgba(0,0,0,.28)',
                borderRadius: '18px',
                overflow: 'hidden',
                maxWidth: '920px',
              }}
            >
              <iframe
                data-tally-src="https://tally.so/embed/ob1D6x?alignLeft=1&transparentBackground=1&dynamicHeight=1"
                src="https://tally.so/embed/ob1D6x?alignLeft=1&transparentBackground=1&dynamicHeight=1"
                width="100%"
                height="735"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                loading="lazy"
                title="Reach Out | Kairos Labs"
                style={{
                  display: 'block',
                  minHeight: '735px',
                  width: '100%',
                  background: 'transparent',
                }}
              >
                Loading…
              </iframe>
            </div>
            <Script
              src="https://tally.so/widgets/embed.js"
              strategy="afterInteractive"
            />
            <p
              className="metaline"
              style={{ marginTop: '1em', color: 'var(--parchment-dim)' }}
            >
              or email directly &mdash; kairoslabs@gmail.com
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
