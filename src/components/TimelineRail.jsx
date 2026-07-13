'use client'
import { useState } from 'react'

function groupByEra(shipped) {
  const groups = []
  for (const item of shipped) {
    const last = groups[groups.length - 1]
    if (last && last.era === item.era) last.items.push(item)
    else groups.push({ era: item.era, items: [item] })
  }
  return groups
}

function TimelineBody({ grouped, next, accent, todayDate }) {
  return (
    <>
      <p className="eyebrow" style={{ marginBottom: '1em' }}>
        <span className="greek">ΧΡΟΝΟΣ</span> &mdash; Timeline
      </p>
      <div style={{ display: 'grid', gap: '1.7em' }}>
        {grouped.map(g => (
          <div key={g.era}>
            <p
              style={{
                fontFamily: 'var(--mono)',
                fontSize: '.62rem',
                letterSpacing: '.12em',
                textTransform: 'uppercase',
                color: accent,
                marginBottom: '.7em',
              }}
            >
              {g.era}
            </p>
            <div style={{ display: 'grid', gap: '1em', borderLeft: `1px solid ${accent}40`, paddingLeft: '14px' }}>
              {g.items.map(m => {
                const isToday = m.date === todayDate
                return (
                  <div key={m.date} style={{ position: 'relative' }}>
                    <span
                      aria-hidden="true"
                      className={isToday ? 'timeline-pulse' : undefined}
                      style={{
                        position: 'absolute',
                        left: '-18.5px',
                        top: '5px',
                        width: '7px',
                        height: '7px',
                        borderRadius: '50%',
                        background: isToday ? 'var(--ember-bright)' : accent,
                      }}
                    />
                    <p style={{ fontFamily: 'var(--mono)', fontSize: '.64rem', color: 'var(--parchment-dim)', letterSpacing: '.04em' }}>
                      {m.date}{isToday && <span style={{ color: 'var(--ember-bright)' }}> &middot; today</span>}
                    </p>
                    <p style={{ fontSize: '.86rem', color: 'var(--parchment)', lineHeight: 1.42, marginTop: '.2em' }}>
                      {m.what}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        ))}

        <div>
          <p
            style={{
              fontFamily: 'var(--mono)',
              fontSize: '.62rem',
              letterSpacing: '.12em',
              textTransform: 'uppercase',
              color: 'var(--parchment-dim)',
              marginBottom: '.7em',
            }}
          >
            Next
          </p>
          <div style={{ display: 'grid', gap: '.65em', borderLeft: '1px dashed var(--hairline-strong)', paddingLeft: '14px' }}>
            {next.map(n => (
              <p key={n} style={{ fontSize: '.8rem', color: 'var(--parchment-dim)', lineHeight: 1.4 }}>{n}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export function AmbientDot({ isToday, isBacklog, accent, label, active, onEnter, onLeave }) {
  return (
    <span
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
      tabIndex={0}
      role="button"
      aria-label={label}
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '20px',
        height: '20px',
        cursor: 'pointer',
      }}
    >
      <span
        aria-hidden="true"
        className={isToday ? 'timeline-pulse' : undefined}
        style={{
          width: isToday ? '9px' : '6px',
          height: isToday ? '9px' : '6px',
          borderRadius: '50%',
          background: isBacklog ? 'transparent' : isToday ? 'var(--ember-bright)' : accent,
          border: isBacklog ? `1.5px dashed ${accent}` : 'none',
          transform: active ? 'scale(1.7)' : 'scale(1)',
          transition: 'transform .2s ease-out',
        }}
      />
      {active && (
        <span
          role="tooltip"
          className="mode-fade"
          style={{
            position: 'absolute',
            bottom: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            marginBottom: '10px',
            background: 'var(--ink-raised)',
            border: '1px solid var(--hairline)',
            borderRadius: '6px',
            padding: '8px 11px',
            width: 'max-content',
            maxWidth: '220px',
            boxShadow: '0 8px 24px rgba(0,0,0,.4)',
            pointerEvents: 'none',
            zIndex: 5,
          }}
        >
          <span style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: '.62rem', color: accent, letterSpacing: '.04em' }}>
            {label.split(' — ')[0]}
          </span>
          <span style={{ display: 'block', fontSize: '.76rem', color: 'var(--parchment)', lineHeight: 1.35, marginTop: '.2em' }}>
            {label.split(' — ').slice(1).join(' — ')}
          </span>
        </span>
      )}
    </span>
  )
}

export function TimelineRail({ mode, accent, shipped, next }) {
  const todayDate = shipped[shipped.length - 1]?.date
  const grouped = groupByEra(shipped)
  const [hovered, setHovered] = useState(null)

  if (mode !== 'grind') {
    // Ambient preview: a thin line, dots, hover for detail
    return (
      <div style={{ marginTop: '2.2em', marginBottom: '.4em', maxWidth: '440px' }}>
        <p
          style={{
            fontFamily: 'var(--mono)',
            fontSize: '.66rem',
            letterSpacing: '.1em',
            textTransform: 'uppercase',
            color: 'var(--parchment-dim)',
            marginBottom: '.7em',
          }}
        >
          <span style={{ color: accent }}>Timeline</span>
        </p>
        <div style={{ position: 'relative', height: '20px', display: 'flex', alignItems: 'center' }}>
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              left: '10px',
              right: '10px',
              height: '1px',
              background: `linear-gradient(90deg, transparent, ${accent}55 6%, ${accent}55 94%, transparent)`,
            }}
          />
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            {shipped.map((m, i) => {
              const isToday = i === shipped.length - 1
              const key = `s${i}`
              return (
                <AmbientDot
                  key={key}
                  isToday={isToday}
                  accent={accent}
                  active={hovered === key}
                  onEnter={() => setHovered(key)}
                  onLeave={() => setHovered(null)}
                  label={`${m.date}${isToday ? ' · today' : ''} — ${m.what}`}
                />
              )
            })}
            {next.slice(0, 2).map((n, i) => {
              const key = `n${i}`
              return (
                <AmbientDot
                  key={key}
                  isBacklog
                  accent={accent}
                  active={hovered === key}
                  onEnter={() => setHovered(key)}
                  onLeave={() => setHovered(null)}
                  label={`Next — ${n}`}
                />
              )
            })}
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Inline expanded version — default, hides on very wide screens where the sticky rail takes over */}
      <div className="timeline-inline-expanded" style={{ marginTop: '2.2em', marginBottom: '1em', maxWidth: '440px' }}>
        <TimelineBody grouped={grouped} next={next} accent={accent} todayDate={todayDate} />
      </div>

      {/* Sticky rail — wide screens only */}
      <aside className="timeline-rail-expanded" aria-label="Build timeline">
        <TimelineBody grouped={grouped} next={next} accent={accent} todayDate={todayDate} />
      </aside>
    </>
  )
}
