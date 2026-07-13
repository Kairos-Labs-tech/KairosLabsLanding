'use client'

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
          <div style={{ display: 'grid', gap: '.65em', borderLeft: '1px dashed rgba(234,224,213,.22)', paddingLeft: '14px' }}>
            {next.map(n => (
              <p key={n} style={{ fontSize: '.8rem', color: 'var(--parchment-dim)', lineHeight: 1.4 }}>{n}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export function TimelineRail({ mode, accent, shipped, next }) {
  const todayDate = shipped[shipped.length - 1]?.date
  const grouped = groupByEra(shipped)

  if (mode !== 'grind') {
    // Ambient preview: a thin line, dots, nothing else
    return (
      <div style={{ marginTop: '2.2em', marginBottom: '.4em', maxWidth: '440px' }}>
        <div style={{ position: 'relative', height: '20px', display: 'flex', alignItems: 'center' }}>
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              height: '1px',
              background: `linear-gradient(90deg, transparent, ${accent}55 6%, ${accent}55 94%, transparent)`,
            }}
          />
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            {shipped.map((m, i) => {
              const isToday = i === shipped.length - 1
              return (
                <span
                  key={m.date}
                  title={`${m.date} — ${m.what}`}
                  className={isToday ? 'timeline-pulse' : undefined}
                  style={{
                    width: isToday ? '9px' : '6px',
                    height: isToday ? '9px' : '6px',
                    borderRadius: '50%',
                    background: isToday ? 'var(--ember-bright)' : accent,
                  }}
                />
              )
            })}
            {next.slice(0, 2).map(n => (
              <span
                key={n}
                title={n}
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  border: `1.5px dashed ${accent}`,
                  background: 'transparent',
                }}
              />
            ))}
          </div>
        </div>
        <p
          style={{
            marginTop: '.7em',
            fontFamily: 'var(--mono)',
            fontSize: '.68rem',
            letterSpacing: '.04em',
            color: 'var(--parchment-dim)',
          }}
        >
          {shipped.length} real shipments since {shipped[0].date}. Grind opens the full history.
        </p>
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
