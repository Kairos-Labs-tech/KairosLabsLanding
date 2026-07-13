'use client'
import { ScrollReveal } from '@/components/ScrollReveal'
import { BtnPrimary } from '@/components/Btn'

const proofs = [
  'Every product page opens with what’s real, not what’s planned.',
  'Every open question listed is one we don’t have the answer to.',
  'Every “coming soon” is a placeholder for something in production — not a permanent prop.',
]

export function PerspectiveSection() {
  return (
    <section
      className="perspective"
      id="perspective"
      aria-labelledby="perspective-h"
      style={{ paddingBlock: 'clamp(64px, 9vh, 130px)' }}
    >
      <div className="shell cols-layout">
        <ScrollReveal className="prose">
          <p className="eyebrow">
            <span className="greek">ΣΤΑΣΗ</span> &mdash; Stance
          </p>
          <h2
            id="perspective-h"
            style={{
              fontFamily: 'var(--serif-display)',
              fontWeight: 600,
              fontSize: 'clamp(1.9rem, 1.2rem + 2.6vw, 2.9rem)',
              lineHeight: 1.14,
              letterSpacing: '-.01em',
              textWrap: 'balance',
              marginTop: '.5em',
              maxWidth: '18ch',
            }}
          >
            <span style={{ color: 'var(--ember-bright)' }}>&ldquo;</span>
            We&rsquo;re looking for perspective. Not validation.
            <span style={{ color: 'var(--ember-bright)' }}>&rdquo;</span>
          </h2>

          <p style={{ marginTop: '1.4em', color: 'var(--parchment)', maxWidth: '58ch' }}>
            Everything above is early. None of it has real users yet. We&rsquo;d rather hear exactly
            what&rsquo;s wrong with it now &mdash; from people who&rsquo;d actually use it &mdash; than
            collect polite agreement and find out later.
          </p>

          <ScrollReveal tag="ul" stagger className="pairs-list" style={{ marginTop: '1.8em', maxWidth: '58ch' }}>
            {proofs.map(p => (
              <li key={p}>
                <span className="yes" style={{ fontSize: '1em' }}>{p}</span>
              </li>
            ))}
          </ScrollReveal>

          <div style={{ marginTop: '2em' }}>
            <BtnPrimary href="/#reach-out">Tell us what&rsquo;s wrong with it</BtnPrimary>
          </div>
        </ScrollReveal>

        <ScrollReveal tag="aside" className="margin-note">
          this is a research stage &mdash; not a launch<br />
          criticism is the product we want most right now
        </ScrollReveal>
      </div>
    </section>
  )
}
