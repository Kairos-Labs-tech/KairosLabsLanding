'use client'
import React from 'react'
import { MermaidDiagram } from '@/components/MermaidDiagram'

export function MarkdownRenderer({ content, onTabChange, allTabSlugs = [] }) {
  if (!content) return null

  // Helper to parse inline styles: bold, italic, wikilinks, links
  const parseInline = (text) => {
    if (!text) return ''
    
    // Escape HTML to prevent XSS
    let html = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')

    // Wikilinks: [[Slug]] or [[Slug|Label]]
    const wikilinkRegex = /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g
    html = html.replace(wikilinkRegex, (match, target, label) => {
      const displayLabel = label ? label.trim() : target.trim().replace(/_/g, ' ')
      const cleanTarget = target.trim()
      
      // Check if target matches one of our tab slugs (case-insensitive)
      const matchingSlug = allTabSlugs.find(s => s.toLowerCase() === cleanTarget.toLowerCase())
      
      if (matchingSlug) {
        return `<a class="wiki-link tab-link" data-target="${matchingSlug}" href="#" style="color: var(--ember-bright); text-decoration: underline; cursor: pointer;">${displayLabel}</a>`
      }
      
      // Render as a team member tag/pill if it looks like a person's name or is in the team
      const isPerson = cleanTarget.includes('_') || ['Nikhil_YN', 'Praneel_S', 'Utkarsh_P', 'Sanjay_J', 'Prithvi_KM', 'Karan_SA', 'Manichandan_M'].includes(cleanTarget)
      if (isPerson) {
        return `<span class="team-tag" style="background: rgba(234, 224, 213, 0.08); border: 1px solid var(--hairline); padding: 2px 8px; border-radius: 4px; font-family: var(--mono); font-size: 0.85em; color: var(--parchment); white-space: nowrap;">${displayLabel}</span>`
      }
      
      // Fallback: render as styled tag
      return `<span style="font-family: var(--mono); font-size: 0.9em; color: var(--parchment-dim);">${displayLabel}</span>`
    })

    // Standard markdown links: [label](url)
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
    html = html.replace(linkRegex, '<a href="$2" target="_blank" rel="noopener noreferrer" style="color: var(--ember-bright); text-decoration: underline;">$1</a>')

    // Bold: **text**
    html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    
    // Italic: *text*
    html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>')

    return html
  }

  // Parse markdown into blocks
  const lines = content.split(/\r?\n/)
  const blocks = []
  
  let i = 0
  while (i < lines.length) {
    const line = lines[i]
    
    // Skip empty lines
    if (line.trim() === '') {
      i++
      continue
    }

    // 1. Code blocks (``` or ```mermaid)
    if (line.startsWith('```')) {
      const lang = line.slice(3).trim().toLowerCase()
      let codeLines = []
      i++
      while (i < lines.length && !lines[i].startsWith('```')) {
        codeLines.push(lines[i])
        i++
      }
      if (i < lines.length) i++ // Skip the closing ```
      
      const codeContent = codeLines.join('\n')
      
      if (lang === 'mermaid') {
        blocks.push({
          type: 'mermaid',
          content: codeContent,
          key: `mermaid-${i}`
        })
      } else {
        blocks.push({
          type: 'code',
          lang,
          content: codeContent,
          key: `code-${i}`
        })
      }
      continue
    }

    // 2. Obsidian Callouts: > [!type] Title
    if (line.trim().startsWith('&gt;') || line.trim().startsWith('>')) {
      const cleanLine = line.trim().startsWith('&gt;') ? line.trim().substring(4).trim() : line.trim().substring(1).trim()
      
      if (cleanLine.startsWith('[!')) {
        const calloutMatch = cleanLine.match(/^\[!([^\]]+)\](.*)/)
        if (calloutMatch) {
          const type = calloutMatch[1].toLowerCase()
          const title = calloutMatch[2].trim()
          
          let calloutLines = []
          i++
          while (i < lines.length) {
            const nextLine = lines[i].trim()
            if (nextLine.startsWith('&gt;') || nextLine.startsWith('>')) {
              const nextClean = nextLine.startsWith('&gt;') ? nextLine.substring(4).trim() : nextLine.substring(1).trim()
              calloutLines.push(nextClean)
              i++
            } else {
              break
            }
          }
          
          blocks.push({
            type: 'callout',
            calloutType: type,
            title: title || type.toUpperCase(),
            content: calloutLines.join('\n'),
            key: `callout-${i}`
          })
          continue
        }
      }
      
      // Standard blockquote
      let quoteLines = [cleanLine]
      i++
      while (i < lines.length) {
        const nextLine = lines[i].trim()
        if (nextLine.startsWith('&gt;') || nextLine.startsWith('>')) {
          const nextClean = nextLine.startsWith('&gt;') ? nextLine.substring(4).trim() : nextLine.substring(1).trim()
          quoteLines.push(nextClean)
          i++
        } else {
          break
        }
      }
      blocks.push({
        type: 'blockquote',
        content: quoteLines.join('\n'),
        key: `blockquote-${i}`
      })
      continue
    }

    // 3. Headers: #, ##, ###
    if (line.startsWith('# ')) {
      blocks.push({ type: 'h1', content: line.substring(2).trim(), key: `h1-${i}` })
      i++
      continue
    }
    if (line.startsWith('## ')) {
      blocks.push({ type: 'h2', content: line.substring(3).trim(), key: `h2-${i}` })
      i++
      continue
    }
    if (line.startsWith('### ')) {
      blocks.push({ type: 'h3', content: line.substring(4).trim(), key: `h3-${i}` })
      i++
      continue
    }

    // 4. Horizontal Rule
    if (line.trim() === '---') {
      blocks.push({ type: 'hr', key: `hr-${i}` })
      i++
      continue
    }

    // 5. Lists
    if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
      const listItems = []
      while (i < lines.length) {
        const currLine = lines[i].trim()
        if (currLine.startsWith('- ') || currLine.startsWith('* ')) {
          listItems.push(currLine.substring(2).trim())
          i++
        } else if (currLine === '') {
          // Skip empty lines within list but don't break yet
          i++
        } else {
          break
        }
      }
      blocks.push({ type: 'ul', items: listItems, key: `ul-${i}` })
      continue
    }

    // 6. Default Paragraph
    blocks.push({ type: 'p', content: line, key: `p-${i}` })
    i++
  }

  // Handle click on links generated in HTML safely
  const handleHtmlClick = (e) => {
    const targetEl = e.target.closest('.tab-link')
    if (targetEl) {
      e.preventDefault()
      const targetSlug = targetEl.getAttribute('data-target')
      if (targetSlug && onTabChange) {
        onTabChange(targetSlug)
        // Scroll to the top of the product area smoothly
        const element = document.getElementById('product-content-area')
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
  }

  return (
    <div 
      onClick={handleHtmlClick}
      style={{
        display: 'grid',
        gap: '1.2em',
        color: 'var(--parchment)',
        fontFamily: 'var(--sans)',
        lineHeight: 1.6,
        maxWidth: '720px',
        margin: '0 auto',
      }}
    >
      {blocks.map((block) => {
        switch (block.type) {
          case 'h1':
            return (
              <h1
                key={block.key}
                style={{
                  fontFamily: 'var(--serif-display)',
                  fontWeight: 600,
                  fontSize: 'clamp(1.8rem, 1.4rem + 1.2vw, 2.4rem)',
                  lineHeight: 1.15,
                  marginTop: '1.4em',
                  marginBottom: '.4em',
                  borderBottom: '1px solid var(--hairline)',
                  paddingBottom: '0.3em',
                  color: 'var(--parchment)',
                }}
                dangerouslySetInnerHTML={{ __html: parseInline(block.content) }}
              />
            )
          case 'h2':
            return (
              <h2
                key={block.key}
                style={{
                  fontFamily: 'var(--serif-display)',
                  fontWeight: 600,
                  fontSize: 'clamp(1.3rem, 1.1rem + .8vw, 1.7rem)',
                  lineHeight: 1.2,
                  marginTop: '1.2em',
                  marginBottom: '.3em',
                  color: 'var(--parchment)',
                }}
                dangerouslySetInnerHTML={{ __html: parseInline(block.content) }}
              />
            )
          case 'h3':
            return (
              <h3
                key={block.key}
                style={{
                  fontFamily: 'var(--serif-display)',
                  fontWeight: 600,
                  fontSize: '1.2rem',
                  marginTop: '1em',
                  marginBottom: '.2em',
                  color: 'var(--parchment)',
                }}
                dangerouslySetInnerHTML={{ __html: parseInline(block.content) }}
              />
            )
          case 'p':
            return (
              <p
                key={block.key}
                style={{
                  color: 'var(--parchment-dim)',
                  fontSize: '1.02rem',
                  maxWidth: '72ch',
                }}
                dangerouslySetInnerHTML={{ __html: parseInline(block.content) }}
              />
            )
          case 'ul':
            return (
              <ul
                key={block.key}
                style={{
                  listStyle: 'none',
                  paddingLeft: '.2em',
                  display: 'grid',
                  gap: '0.5em',
                  marginBlock: '0.4em',
                }}
              >
                {block.items.map((item, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      gap: '0.6em',
                      color: 'var(--parchment-dim)',
                    }}
                  >
                    <span style={{ color: 'var(--ember-bright)', fontFamily: 'var(--mono)', fontSize: '.75em' }}>&rsaquo;</span>
                    <span dangerouslySetInnerHTML={{ __html: parseInline(item) }} />
                  </li>
                ))}
              </ul>
            )
          case 'blockquote':
            return (
              <blockquote
                key={block.key}
                style={{
                  borderLeft: '2px solid var(--ember)',
                  paddingLeft: '1.2em',
                  fontStyle: 'italic',
                  color: 'var(--parchment-dim)',
                  margin: '0.8em 0',
                }}
                dangerouslySetInnerHTML={{ __html: parseInline(block.content) }}
              />
            )
          case 'callout': {
            // Determine callout style based on type
            const isCaution = ['caution', 'warning', 'danger', 'bug'].includes(block.calloutType)
            const isSuccess = ['success', 'tip', 'done', 'check'].includes(block.calloutType)
            
            let borderColor = 'var(--hairline)'
            let bgColor = 'rgba(234, 224, 213, 0.04)'
            let iconColor = 'var(--parchment-dim)'
            let icon = 'ℹ'

            if (isCaution) {
              borderColor = 'rgba(240, 89, 65, 0.4)'
              bgColor = 'rgba(240, 89, 65, 0.04)'
              iconColor = 'var(--ember-bright)'
              icon = '⚠'
            } else if (isSuccess) {
              borderColor = 'rgba(46, 125, 50, 0.4)'
              bgColor = 'rgba(46, 125, 50, 0.04)'
              iconColor = '#4caf50'
              icon = '✓'
            }

            return (
              <div
                key={block.key}
                style={{
                  border: `1px solid ${borderColor}`,
                  background: bgColor,
                  borderRadius: '12px',
                  padding: '1.2em',
                  marginBlock: '1em',
                  display: 'grid',
                  gap: '0.6em',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6em' }}>
                  <span style={{ color: iconColor, fontWeight: 'bold', fontSize: '1.1em' }}>{icon}</span>
                  <strong style={{ 
                    fontFamily: 'var(--mono)', 
                    fontSize: '0.75rem', 
                    letterSpacing: '0.08em', 
                    textTransform: 'uppercase', 
                    color: isCaution ? 'var(--ember-bright)' : (isSuccess ? '#4caf50' : 'var(--parchment)') 
                  }}>
                    {block.title}
                  </strong>
                </div>
                <div 
                  style={{ color: 'var(--parchment-dim)', fontSize: '0.96rem' }}
                  dangerouslySetInnerHTML={{ __html: parseInline(block.content) }}
                />
              </div>
            )
          }
          case 'mermaid':
            return (
              <div key={block.key} style={{ marginBlock: '1.5em' }}>
                <MermaidDiagram chart={block.content} label="Mermaid Diagram" />
              </div>
            )
          case 'code':
            return (
              <pre
                key={block.key}
                style={{
                  background: 'rgba(23,16,26,.6)',
                  border: '1px solid var(--hairline)',
                  padding: '1.2em',
                  borderRadius: '8px',
                  overflowX: 'auto',
                  fontFamily: 'var(--mono)',
                  fontSize: '0.85rem',
                  lineHeight: '1.5',
                  marginBlock: '1em',
                  color: '#e6e6e6',
                }}
              >
                <code>{block.content}</code>
              </pre>
            )
          case 'hr':
            return (
              <hr 
                key={block.key} 
                style={{ 
                  border: 'none', 
                  borderTop: '1px solid var(--hairline)', 
                  marginVertical: '2em' 
                }} 
              />
            )
          default:
            return null
        }
      })}
    </div>
  )
}
