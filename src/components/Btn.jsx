import Link from 'next/link'

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M2 8h11M9.5 3.5 14 8l-4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const baseStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '.7em',
  minHeight: '52px',
  padding: '14px 30px',
  fontFamily: 'var(--mono)',
  fontSize: '.78rem',
  fontWeight: 500,
  letterSpacing: '.14em',
  textTransform: 'uppercase',
  border: '1px solid transparent',
  cursor: 'pointer',
  transition: 'letter-spacing .2s ease, filter .2s ease, background-color .2s ease, color .2s ease',
  fontFeatureSettings: 'normal',
  textDecoration: 'none',
}

export function BtnPrimary({ href, onClick, children, arrow = true }) {
  const style = {
    ...baseStyle,
    background: 'var(--ember-bright)',
    color: 'var(--ink-page)',
  }
  const inner = <>{children}{arrow && <ArrowIcon />}</>
  if (href) return <Link href={href} style={style}>{inner}</Link>
  return <button style={style} onClick={onClick}>{inner}</button>
}

export function BtnGhost({ href, onClick, children }) {
  const style = {
    ...baseStyle,
    background: 'transparent',
    color: 'var(--parchment)',
    borderColor: 'var(--hairline)',
  }
  if (href) return <Link href={href} style={style}>{children}</Link>
  return <button style={style} onClick={onClick}>{children}</button>
}

export function CtaQuiet({ href, children }) {
  return (
    <Link
      href={href}
      style={{
        fontFamily: 'var(--mono)',
        fontSize: '.78rem',
        fontWeight: 500,
        letterSpacing: '.14em',
        textTransform: 'uppercase',
        color: 'var(--parchment)',
        display: 'inline-flex',
        alignItems: 'center',
        minHeight: '52px',
        padding: '14px 4px',
        backgroundImage: 'linear-gradient(var(--ember-bright), var(--ember-bright))',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '4px calc(100% - 12px)',
        backgroundSize: 'calc(100% - 8px) 1px',
        transition: 'color .2s ease',
        fontFeatureSettings: 'normal',
        textDecoration: 'none',
      }}
    >
      {children}
    </Link>
  )
}
