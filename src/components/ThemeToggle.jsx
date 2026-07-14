'use client'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme || 'dark')
  }, [])

  if (!theme) return <span style={{ display: 'inline-block', width: '38px', height: '38px' }} aria-hidden="true" />

  const next = theme === 'light' ? 'dark' : 'light'

  const toggle = () => {
    document.documentElement.dataset.theme = next
    try {
      window.localStorage.setItem('kairos-theme', next)
    } catch {
      // storage unavailable — theme just won't persist across reloads
    }
    setTheme(next)
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${next} mode`}
      title={`Switch to ${next} mode`}
      className="unset-btn"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '38px',
        height: '38px',
        cursor: 'pointer',
        color: 'var(--parchment-dim)',
        transition: 'color .2s ease',
      }}
      onMouseEnter={e => { e.currentTarget.style.color = 'var(--ember-bright)' }}
      onMouseLeave={e => { e.currentTarget.style.color = 'var(--parchment-dim)' }}
    >
      {next === 'dark' ? (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M12 2.5v2.4M12 19.1v2.4M4.9 4.9l1.7 1.7M17.4 17.4l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.9 19.1l1.7-1.7M17.4 6.6l1.7-1.7"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      )}
    </button>
  )
}
