'use client'
import Script from 'next/script'
import { ScrollReveal } from '@/components/ScrollReveal'

export function ReachOutSection() {
  return (
    <section
      className="reach-out"
      id="reach-out"
      aria-labelledby="reach-out-h"
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
          background: 'radial-gradient(ellipse 58% 52% at 46% 62%, rgba(135,35,65,.15), transparent 66%)',
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
          {/* Embedded form */}
          <ScrollReveal>
            <p className="eyebrow" id="reach-out-h" style={{ marginBottom: '1.2em' }}>
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
              or email directly &mdash;{' '}
              <a
                href="mailto:kairoslabs@gmail.com?subject=Hello%20Kairos"
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
                kairoslabs@gmail.com
              </a>
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
