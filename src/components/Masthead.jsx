'use client'
import { useState } from 'react'
import Link from 'next/link'
import { RhombusLogo } from './RhombusLogo'

const navLinks = [
  { href: '/#philosophy', label: 'Philosophy' },
  { href: '/#products',   label: 'Products' },
  { href: '/team',        label: 'Team' },
  { href: '/#reach-out',  label: 'Collaborate' },
  { href: '/#contact',    label: 'Contact' },
]

export function Masthead() {
  const [open, setOpen] = useState(false)

  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        background: 'rgba(16,10,18,.86)',
        WebkitBackdropFilter: 'blur(9px)',
        backdropFilter: 'blur(9px)',
        borderColor: 'var(--hairline)',
      }}
    >
      <div className="shell">
        <div
          className="flex items-center justify-between gap-4"
          style={{ minHeight: 'var(--masthead-h)', paddingBlock: '6px' }}
        >
          {/* Wordmark */}
          <Link
            href="/"
            className="inline-flex items-center gap-3 py-3"
            style={{
              fontFamily: 'var(--mono)',
              fontWeight: 500,
              fontSize: '.8rem',
              letterSpacing: '.22em',
              textTransform: 'uppercase',
              color: 'var(--parchment)',
              whiteSpace: 'nowrap',
              textDecoration: 'none',
            }}
          >
            <RhombusLogo className="h-6 w-auto flex-none" />
            <span>
              Kairos Labs{' '}
              <span
                style={{
                  fontFamily: 'var(--serif-display)',
                  fontStyle: 'italic',
                  fontWeight: 500,
                  fontSize: '1.15rem',
                  letterSpacing: 0,
                  textTransform: 'none',
                  color: 'var(--ember-bright)',
                }}
                lang="el"
              >
                καιρός
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Primary" className="hidden sm:block">
            <ul className="flex flex-wrap" style={{ gap: 'clamp(4px, 2vw, 22px)', listStyle: 'none' }}>
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    style={{
                      fontFamily: 'var(--mono)',
                      fontSize: '.72rem',
                      letterSpacing: '.14em',
                      textTransform: 'uppercase',
                      color: 'var(--parchment-dim)',
                      display: 'inline-block',
                      padding: '15px 6px',
                      textDecoration: 'none',
                      backgroundImage: 'linear-gradient(var(--ember-bright), var(--ember-bright))',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: '6px calc(100% - 11px)',
                      backgroundSize: '0% 1px',
                      transition: 'color .2s ease, background-size .2s ease',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = 'var(--parchment)'
                      e.currentTarget.style.backgroundSize = 'calc(100% - 12px) 1px'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = 'var(--parchment-dim)'
                      e.currentTarget.style.backgroundSize = '0% 1px'
                    }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile menu button — inline display must not be set; Tailwind sm:hidden handles visibility */}
          <button
            className="sm:hidden"
            onClick={() => setOpen(o => !o)}
            aria-expanded={open}
            aria-label="Toggle menu"
            style={{
              fontFamily: 'var(--mono)',
              fontSize: '.72rem',
              fontWeight: 500,
              letterSpacing: '.18em',
              textTransform: 'uppercase',
              color: 'var(--parchment)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '15px 2px',
              alignItems: 'center',
              gap: '.6em',
            }}
          >
            Menu
            <span
              style={{
                fontSize: '1rem',
                color: 'var(--ember-bright)',
                transition: 'transform .25s ease',
                transform: open ? 'rotate(45deg)' : 'none',
                display: 'inline-block',
              }}
            >
              +
            </span>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <nav
          aria-label="Mobile navigation"
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: '100%',
            background: 'rgba(16,10,18,.97)',
            WebkitBackdropFilter: 'blur(9px)',
            backdropFilter: 'blur(9px)',
            borderBottom: '1px solid var(--hairline)',
            padding: '4px clamp(20px, 6vw, 72px) 14px',
          }}
        >
          <ul style={{ listStyle: 'none' }}>
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  style={{
                    display: 'block',
                    padding: '13px 0',
                    fontFamily: 'var(--mono)',
                    fontSize: '.78rem',
                    letterSpacing: '.16em',
                    textTransform: 'uppercase',
                    color: 'var(--parchment)',
                    textDecoration: 'none',
                  }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
