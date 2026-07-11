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
  transition: 'transform .2s ease, box-shadow .2s ease, letter-spacing .2s ease, filter .2s ease, background-color .2s ease, color .2s ease, border-color .2s ease',
  fontFeatureSettings: 'normal',
  textDecoration: 'none',
}

export function BtnPrimary({ href, onClick, children, arrow = true }) {
  const style = {
    ...baseStyle,
    background: 'var(--ember-bright)',
    color: 'var(--ink-page)',
    boxShadow: '0 0 0 rgba(0,0,0,0)',
  }
  const inner = <>{children}{arrow && <ArrowIcon />}</>
  const className = 'btn btn-primary'
  if (href) return <Link href={href} className={className} style={style}>{inner}</Link>
  return <button className={className} style={style} onClick={onClick}>{inner}</button>
}

export function BtnGhost({ href, onClick, children }) {
  const style = {
    ...baseStyle,
    background: 'transparent',
    color: 'var(--parchment)',
    borderColor: 'var(--hairline)',
    boxShadow: '0 0 0 rgba(0,0,0,0)',
  }
  const className = 'btn btn-ghost'
  if (href) return <Link href={href} className={className} style={style}>{children}</Link>
  return <button className={className} style={style} onClick={onClick}>{children}</button>
}

export function CtaQuiet({ href, children }) {
  return (
    <Link
      href={href}
      className="btn btn-quiet"
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
        padding: '14px 6px',
        backgroundImage: 'linear-gradient(var(--ember-bright), var(--ember-bright))',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '6px calc(100% - 12px)',
        backgroundSize: '0% 1px',
        transition: 'color .2s ease, background-size .2s ease',
        fontFeatureSettings: 'normal',
        textDecoration: 'none',
      }}
    >
      {children}
    </Link>
  )
}
