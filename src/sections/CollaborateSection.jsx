'use client'
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
      id="reach-out"
      aria-labelledby="collab-h"
      style={{
        position: 'relative',
        overflow: 'clip',
        paddingBlock: 'clamp(84px, 13vh, 170px)',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: '-20% -15% -20%',
          background: 'radial-gradient(ellipse 58% 52% at 46% 50%, rgba(135,35,65,.2), transparent 66%)',
          pointerEvents: 'none',
        }}
      />

      <div className="shell" style={{ position: 'relative' }}>
        <ScrollReveal className="prose" style={{ maxWidth: '62ch' }}>
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
          <p style={{ marginTop: '1.1em', color: 'var(--parchment-dim)' }}>
            Kairos is early and still finding its footing. We want people willing to challenge
            our assumptions and ask difficult questions, people willing to say:
          </p>

          <ScrollReveal tag="ul" stagger className="challenges-list" style={{ marginTop: '.6em' }}>
            {challenges.map(c => <li key={c}>{c}</li>)}
          </ScrollReveal>

          <p style={{ marginTop: '1.4em', fontSize: '1.05em', color: 'var(--parchment)' }}>
            <strong style={{ fontWeight: 400, color: 'var(--ember-bright)' }}>Good criticism saves years.</strong>{' '}
            Perspective compounds. That is why this form is right here, not a click away.
          </p>
        </ScrollReveal>

        <ScrollReveal style={{ marginTop: 'clamp(40px, 6vh, 64px)' }}>
          <div
            style={{
              border: '1px solid var(--hairline-strong)',
              background: 'linear-gradient(180deg, rgba(var(--ink-raised-rgb),.96), rgba(var(--ink-page-rgb),.98))',
              boxShadow: '0 22px 64px rgba(0,0,0,.28)',
              borderRadius: '18px',
              overflow: 'hidden',
              maxWidth: '920px',
              paddingTop: '14px',
            }}
          >
            <iframe
              data-tally-src="https://tally.so/embed/ob1D6x?transparentBackground=1&dynamicHeight=1"
              src="https://tally.so/embed/ob1D6x?transparentBackground=1&dynamicHeight=1"
              width="100%"
              height="900"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              loading="lazy"
              title="Reach Out | Kairos Labs"
              style={{
                display: 'block',
                width: '100%',
                background: 'transparent',
              }}
            >
              Loading&hellip;
            </iframe>
          </div>
          <Script
            src="https://tally.so/widgets/embed.js"
            strategy="afterInteractive"
            onLoad={() => {
              if (typeof window !== 'undefined' && window.Tally) {
                window.Tally.loadEmbeds()
              }
            }}
          />
          <p
            className="metaline"
            style={{ marginTop: '1em', color: 'var(--parchment-dim)' }}
          >
            or email directly:{' '}
            <a
              href="mailto:kairoslabs.tech@gmail.com?subject=Hello%20Kairos"
              style={{
                color: 'var(--ember-bright)',
                backgroundImage: 'linear-gradient(currentColor, currentColor)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '0 100%',
                backgroundSize: '0% 1px',
                transition: 'background-size .2s ease',
                paddingBottom: '2px',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundSize = '100% 1px'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundSize = '0% 1px'
              }}
            >
              kairoslabs.tech@gmail.com
            </a>
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
