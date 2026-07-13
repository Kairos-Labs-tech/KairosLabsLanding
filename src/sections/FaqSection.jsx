'use client'
import { useState } from 'react'
import { ScrollReveal } from '@/components/ScrollReveal'
import { CtaQuiet } from '@/components/Btn'

const faqs = [
  {
    q: 'Why is the code private?',
    a: <>Because we&rsquo;re building products, not open-source projects. <em>We keep the code closed. What we&rsquo;re thinking about stays open.</em></>,
  },
  {
    q: 'Can I help?',
    a: (
      <>
        <em>Absolutely.</em> Start with an email. Perspective, criticism, and introductions all count.{' '}
        <a
          href="mailto:kairoslabs.tech@gmail.com?subject=I'd%20like%20to%20help"
          className="link-underline"
          style={{ color: 'var(--ember-bright)' }}
        >
          kairoslabs.tech@gmail.com
        </a>
      </>
    ),
  },
  {
    q: 'Can I test the products?',
    a: <>Eventually. Closed testing is planned &mdash; write to us if you want to be on the list.</>,
  },
  {
    q: 'Why share all this publicly?',
    a: (
      <>
        Because good criticism is incredibly valuable. People outside your bubble notice things you
        don&rsquo;t.{' '}
        <em>And we&rsquo;d rather learn early than years later.</em>
      </>
    ),
  },
]

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  const [hover, setHover] = useState(false)
  return (
    <div style={{ borderTop: '1px solid var(--hairline)' }}>
      <button
        onClick={() => setOpen(o => !o)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        aria-expanded={open}
        style={{
          width: '100%',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          gap: '20px',
          padding: '22px 4px',
          fontFamily: 'var(--serif-display)',
          fontWeight: 600,
          fontSize: 'clamp(1.2rem, 1rem + .9vw, 1.55rem)',
          lineHeight: 1.3,
          color: open || hover ? 'var(--ember-bright)' : 'var(--parchment)',
          transition: 'color .2s ease',
          textAlign: 'left',
        }}
      >
        {q}
        <span
          aria-hidden="true"
          style={{
            flexShrink: 0,
            fontFamily: 'var(--mono)',
            fontWeight: 400,
            fontSize: '1.1rem',
            color: 'var(--ember-bright)',
            transition: 'transform .25s ease',
            transform: open ? 'rotate(45deg)' : 'none',
            display: 'inline-block',
          }}
        >
          +
        </span>
      </button>
      {open && (
        <div
          style={{
            padding: '0 4px 26px',
            color: 'var(--parchment-dim)',
            maxWidth: '58ch',
          }}
        >
          <p>{a}</p>
        </div>
      )}
    </div>
  )
}

export function FaqSection() {
  return (
    <section
      className="faq"
      id="faq"
      aria-labelledby="faq-h"
      style={{ paddingBlock: 'clamp(64px, 9vh, 130px)' }}
    >
      <div className="shell cols-layout">
        <div>
          <ScrollReveal>
            <p className="eyebrow">
              <span className="greek">ΕΡΩΤΗΜΑΤΑ</span> &mdash; FAQ
            </p>
            <h2
              id="faq-h"
              style={{
                fontFamily: 'var(--serif-display)',
                fontWeight: 600,
                fontSize: 'clamp(1.9rem, 1.3rem + 2.2vw, 2.75rem)',
                lineHeight: 1.12,
                marginTop: '.5em',
              }}
            >
              Asked, and answered plainly.
            </h2>
          </ScrollReveal>

          <ScrollReveal style={{ marginTop: 'clamp(28px, 4vh, 44px)', maxWidth: '760px' }}>
            {faqs.map(faq => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
            <div style={{ borderTop: '1px solid var(--hairline)' }} />
            <p style={{ marginTop: '2em', color: 'var(--parchment-dim)' }}>
              Question not on this list? <CtaQuiet href="/#reach-out">Ask it directly</CtaQuiet>
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal tag="aside" className="margin-note">
          real shipped work, dated, on every product page
        </ScrollReveal>
      </div>
    </section>
  )
}
