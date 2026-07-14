'use client'
import { useEffect, useRef, useState } from 'react'

export function MermaidDiagram({ chart, label }) {
  const ref = useRef(null)
  const [svg, setSvg] = useState('')
  const [error, setError] = useState(false)
  const [theme, setTheme] = useState(() =>
    typeof document !== 'undefined' ? document.documentElement.dataset.theme : 'dark'
  )

  // Diagram colors are baked into the rendered SVG string at render time —
  // toggling the theme afterward doesn't touch the DOM it produced, so we
  // have to watch for the toggle and re-render, not just read theme once.
  useEffect(() => {
    const root = document.documentElement
    const observer = new MutationObserver(() => setTheme(root.dataset.theme))
    observer.observe(root, { attributes: true, attributeFilter: ['data-theme'] })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    let cancelled = false
    const cs = getComputedStyle(document.documentElement)
    const v = name => cs.getPropertyValue(name).trim()
    const isLight = theme === 'light'
    import('mermaid').then(({ default: mermaid }) => {
      // Dark mode: nodes are ink stamps (dark wine fill, fixed light text) —
      // reads fine against the near-black page as-is. Light mode reuses the
      // same wine as a *fill* used to break: dark wine + dark ink text is
      // unreadable. On paper the node has to invert to a raised parchment
      // card with the wine as its ink/border instead, or it just looks like
      // a smear. Two genuinely different node treatments, not one reused.
      const nodeFill = isLight ? (v('--ink-raised') || '#F1E4CC') : (v('--ember-deep') || '#872341')
      const nodeText = isLight ? (v('--ember-deep') || '#7A1F3D') : (v('--on-ember') || '#F3E7DC')
      const nodeBorder = isLight ? (v('--ember-bright') || '#B23A28') : 'transparent'
      mermaid.initialize({
        startOnLoad: false,
        theme: 'base',
        themeVariables: {
          background: v('--ink-raised') || '#17101A',
          primaryColor: nodeFill,
          primaryTextColor: nodeText,
          primaryBorderColor: nodeBorder,
          lineColor: isLight ? 'rgba(43,27,30,.45)' : 'rgba(234,224,213,.35)',
          secondaryColor: v('--ink-page') || '#100A12',
          tertiaryColor: v('--ink-raised') || '#17101A',
          edgeLabelBackground: v('--ink-page') || '#100A12',
          textColor: v('--parchment') || '#EAE0D5',
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: '13px',
        },
        flowchart: { curve: 'basis', htmlLabels: true },
      })
      const id = `mmd-${Math.random().toString(36).slice(2)}`
      mermaid.render(id, chart).then(({ svg: rendered }) => {
        if (!cancelled) setSvg(rendered)
      }).catch(() => {
        if (!cancelled) setError(true)
      })
    })
    return () => { cancelled = true }
  }, [chart, theme])

  if (error) return null

  if (!svg) {
    return (
      <div
        aria-label={label}
        style={{
          marginTop: '1.8em',
          padding: 'clamp(20px, 3vw, 36px)',
          border: '1px solid var(--hairline)',
          background: 'var(--ink-raised)',
          overflowX: 'auto',
          lineHeight: 1,
        }}
      >
        <p
          style={{
            fontFamily: 'var(--mono)',
            fontSize: '.72rem',
            letterSpacing: '.08em',
            color: 'var(--parchment-dim)',
            textTransform: 'uppercase',
          }}
        >
          Loading diagram…
        </p>
      </div>
    )
  }

  return (
    <div
      aria-label={label}
      style={{
        marginTop: '1.8em',
        padding: 'clamp(20px, 3vw, 36px)',
        border: '1px solid var(--hairline)',
        background: 'var(--ink-raised)',
        overflowX: 'auto',
        lineHeight: 1,
      }}
      dangerouslySetInnerHTML={svg ? { __html: svg } : undefined}
    />
  )
}
