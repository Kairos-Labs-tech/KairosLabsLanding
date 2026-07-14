'use client'
import { useEffect, useRef, useState } from 'react'

export function MermaidDiagram({ chart, label }) {
  const ref = useRef(null)
  const [svg, setSvg] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    let cancelled = false
    const cs = getComputedStyle(document.documentElement)
    const v = name => cs.getPropertyValue(name).trim()
    const isLight = document.documentElement.dataset.theme === 'light'
    import('mermaid').then(({ default: mermaid }) => {
      mermaid.initialize({
        startOnLoad: false,
        theme: 'base',
        themeVariables: {
          background: v('--ink-raised') || '#17101A',
          primaryColor: v('--ember-deep') || '#872341',
          primaryTextColor: v('--parchment') || '#EAE0D5',
          primaryBorderColor: v('--hairline') || 'rgba(234,224,213,.14)',
          lineColor: isLight ? 'rgba(36,26,30,.35)' : 'rgba(234,224,213,.35)',
          secondaryColor: v('--ink-page') || '#100A12',
          tertiaryColor: v('--ink-raised') || '#17101A',
          edgeLabelBackground: v('--ink-page') || '#100A12',
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
  }, [chart])

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
