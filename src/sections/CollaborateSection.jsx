import { ScrollReveal } from '@/components/ScrollReveal'
import { BtnPrimary, CtaQuiet } from '@/components/Btn'

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
            <div
              className="cta-row"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '16px 28px',
                marginTop: '2.6em',
              }}
            >
              <BtnPrimary href="/#reach-out">
                Give Feedback
              </BtnPrimary>
              <CtaQuiet href="mailto:kairoslabs@gmail.com?subject=Collaborating%20with%20Kairos%20Labs">
                Collaborate
              </CtaQuiet>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
