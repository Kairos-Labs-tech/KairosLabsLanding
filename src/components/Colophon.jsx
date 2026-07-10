'use client'
import Link from 'next/link'
import { ScrollReveal } from '@/components/ScrollReveal'

export function Colophon() {
  return (
    <footer
      id="contact"
      style={{
        borderTop: '1px solid var(--hairline)',
        paddingBlock: 'clamp(72px, 10vh, 130px) clamp(40px, 6vh, 64px)',
      }}
    >
      <div className="shell cols-layout">
        <div>
          <ScrollReveal>
            <p className="eyebrow" style={{ marginBottom: '1.6em' }}>
              <span className="greek">ΤΕΛΟΣ</span> &mdash; Contact
            </p>

            <a
              href="mailto:kairoslabs@gmail.com"
              style={{
                fontFamily: 'var(--serif-display)',
                fontWeight: 600,
                fontSize: 'clamp(1.55rem, 1rem + 3.2vw, 3.2rem)',
                letterSpacing: '-.01em',
                lineHeight: 1.2,
                color: 'var(--parchment)',
                display: 'inline-block',
                padding: '6px 0',
                backgroundImage: 'linear-gradient(var(--ember-bright), var(--ember-bright))',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '0 100%',
                backgroundSize: '0% 2px',
                transition: 'background-size .25s ease, color .25s ease',
                overflowWrap: 'anywhere',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundSize = '100% 2px'
                e.currentTarget.style.color = 'var(--ember-bright)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundSize = '0% 2px'
                e.currentTarget.style.color = 'var(--parchment)'
              }}
            >
              kairoslabs@gmail.com
            </a>

            <ul
              style={{
                listStyle: 'none',
                marginTop: '2.4em',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px 34px',
              }}
            >
              {[
                { label: 'GitHub', href: 'https://github.com/Kairos-Labs-tech' },
                { label: 'Instagram', href: 'https://www.instagram.com/kairoslabs.tech/' },
                { label: 'Reddit', href: 'https://www.reddit.com/user/Gold-Refrigerator810/' },
                { label: 'LinkedIn', soon: true },
                { label: 'Twitter / X', soon: true },
              ].map(({ label, href, soon }) => (
                <li
                  key={label}
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: '.72rem',
                    letterSpacing: '.14em',
                    textTransform: 'uppercase',
                    padding: '12px 0',
                  }}
                >
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: 'var(--parchment-dim)',
                        transition: 'color .2s ease',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.color = 'var(--ember-bright)' }}
                      onMouseLeave={e => { e.currentTarget.style.color = 'var(--parchment-dim)' }}
                    >
                      {label}
                    </a>
                  ) : (
                    <span style={{ color: 'var(--parchment-dim)' }}>
                      {label}{' '}
                      <span style={{ color: 'var(--ember-bright)', opacity: .7 }}>
                        &mdash; coming soon
                      </span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal
            tag="p"
            style={{
              marginTop: 'clamp(48px, 7vh, 72px)',
              fontStyle: 'italic',
              fontSize: '1.06em',
              color: 'var(--parchment)',
              maxWidth: '52ch',
              borderLeft: '1px solid var(--hairline)',
              paddingLeft: 'clamp(18px, 3vw, 34px)',
            }}
          >
            Kairos exists because people shouldn&rsquo;t have to give up on their ambitions
            simply because tools feel intimidating.
          </ScrollReveal>

          <ScrollReveal
            style={{
              marginTop: 'clamp(48px, 7vh, 72px)',
              paddingTop: '26px',
              borderTop: '1px solid var(--hairline)',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              gap: '10px 24px',
            }}
          >
            <p className="metaline">Set in Cormorant Garamond, Source Serif 4 &amp; JetBrains Mono</p>
            <p className="metaline">
              Kairos Labs &middot;{' '}
              <span lang="el" style={{ color: 'var(--ember-bright)' }}>καιρός</span>{' '}
              &middot; MMXXVI
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal tag="aside" className="margin-note">
          est. VI.2026 &mdash; independent product laboratory
        </ScrollReveal>
      </div>
    </footer>
  )
}
