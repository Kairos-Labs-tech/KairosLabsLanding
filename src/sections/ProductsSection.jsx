'use client'
import { BtnPrimary } from '@/components/Btn'
import { ScrollReveal } from '@/components/ScrollReveal'

const products = [
  {
    greek: 'Α΄',
    slug: 'wavecraft',
    category: 'Audio Intelligence',
    status: 'Working Demo',
    name: 'WaveCraft',
    tagline: 'Raw sound in. Mastered art out.',
    desc: `WaveCraft is an AI audio editor. Describe the edit you want in plain language, and it cleans up the sound, balances levels, and masters the file, checking its own output against real audio-quality metrics before handing it back. The long-term goal is a full content pipeline: record, edit, and publish from one place. Audio is where it started and where it's strongest today; video, clipping, and publishing come next.`,
    pitch: `Recording is easy now. Editing still is not. Most creators stall before publishing, not from a lack of skill, but because the tools slow them down. WaveCraft removes that friction.`,
    specs: [
      { dt: 'Capabilities', dd: 'Transcription · speaker separation · intent-driven editing · conversational workflows · workflow graphs · branching outputs' },
      { dt: 'Team', dd: 'Nikhil Y N · Utkarsh P · Sanjay J', mono: true },
      { dt: 'Feedback wanted from', dd: 'Podcast creators, audio engineers, video editors, and people who abandoned content creation.' },
    ],
    note: <>started V.2026 as a college project<br />status: working demo, real editing, not yet public</>,
  },
  {
    greek: 'Β΄',
    slug: 'citeweave',
    category: 'Knowledge Intelligence',
    status: 'API Only, No App Yet',
    name: 'CiteWeave',
    tagline: "Understanding a field shouldn't require fifty browser tabs.",
    desc: `CiteWeave is a research tool. Submit a paper, and it maps exactly where that work sits in its field: what it builds on, what it contradicts, and what is genuinely new. It works by tracing the actual citation trail between papers, not by matching similar-sounding language. Today it runs as a developer API; a web interface is next.`,
    pitch: `CiteWeave does not guess at relevance. It follows the real citation chain to determine which papers matter most, the same ranking logic search engines use for web pages, then extracts the exact sentences that back each claim.`,
    specs: [
      { dt: 'Orientation, not retrieval', dd: 'Comparable buckets · novelty · research gaps · foundational & emerging works · datasets · metrics' },
      { dt: 'Team', dd: 'Nikhil Y N · Praneel S · Karan R A · Manichandan M', mono: true },
      { dt: 'Feedback wanted from', dd: 'Researchers, academics, lawyers, and anyone conducting literature reviews or dissatisfied with existing discovery systems.' },
    ],
    note: <>status: works today, but only if you're a developer<br />no web page yet, that's the next thing we build</>,
  },
  {
    greek: 'Γ΄',
    slug: 'causalcity',
    category: 'Urban Intelligence',
    status: 'Research',
    name: 'CausalCityAI',
    tagline: 'Cities behave less like maps and more like living systems.',
    desc: `CausalCityAI began as a Google hackathon project and became a deeper pursuit. People who live in a city read its patterns in ways software rarely does: the friction points, the rhythms, the way one change ripples into the next. Traffic shapes people, people shape traffic, and weather sits underneath both. The goal is a continuously updated model of how a city actually behaves, built for understanding, forecasting, and simulation, not turn-by-turn directions.`,
    pitch: `We are building a working model of a city's traffic, detailed enough to test a new road or transit line against it before spending real money. That is the destination. Today it generates realistic traffic; it does not yet run those tests.`,
    specs: [
      { dt: 'Current stage', dd: 'Architecture · simulation concepts · state representation · forecasting concepts · system design' },
      { dt: 'Team', dd: 'Nikhil Y N · Prithvi K M · Karan S J · M. Talha N · Anoushka P · Ahad U B', mono: true },
      { dt: 'Feedback wanted from', dd: 'Urban planners, transportation researchers, traffic engineers, and people who think this idea cannot work.' },
    ],
    note: <>origin: Google hackathon, challenge problem to obsession<br />status: research</>,
  },
]

export function ProductsSection() {
  return (
    <section
      className="products"
      id="products"
      aria-labelledby="products-h"
      style={{
        position: 'relative',
        paddingBlock: 'clamp(72px, 10vh, 150px) clamp(40px, 6vh, 80px)',
      }}
    >
      <div className="shell">
        <ScrollReveal className="prose">
          <p className="eyebrow">
            <span className="greek">ΕΡΓΑ</span> &mdash; What We&rsquo;re Building
          </p>
          <h2
            id="products-h"
            style={{
              fontFamily: 'var(--serif-display)',
              fontWeight: 600,
              fontSize: 'clamp(1.9rem, 1.3rem + 2.2vw, 2.75rem)',
              lineHeight: 1.12,
              marginTop: '.5em',
            }}
          >
            Three products. One belief.
          </h2>
          <p style={{ marginTop: '1.3em', color: 'var(--parchment-dim)', maxWidth: '58ch' }}>
            Each one explores a different problem, for different users. What ties them together:{' '}
            <em style={{ color: 'var(--parchment)' }}>
              people deserve tools that move them forward, not ones that make them feel behind.
            </em>
          </p>
        </ScrollReveal>

        {products.map((p, i) => (
          <ScrollReveal
            key={p.slug}
            tag="article"
            className="cols-layout"
            aria-labelledby={`p-${p.slug}`}
            style={{
              position: 'relative',
              paddingBlock: 'clamp(52px, 8vh, 96px)',
              marginTop: 'clamp(40px, 6vh, 72px)',
              borderTop: '1px solid var(--hairline)',
            }}
          >
            <span
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: '.1em',
                right: '-.06em',
                fontFamily: 'var(--serif-display)',
                fontWeight: 600,
                fontSize: 'clamp(8rem, 18vw, 15rem)',
                lineHeight: 1,
                color: 'var(--ember-deep)',
                opacity: .05,
                pointerEvents: 'none',
                userSelect: 'none',
              }}
              lang="el"
            >
              {p.greek}
            </span>

            <div className="prose" style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px 14px', marginBottom: '1.2em' }}>
                <p className="eyebrow">
                  <span className="greek">ΕΡΓΟΝ {p.greek}</span>
                </p>
                <span className="badge">{p.category}</span>
                <span className="badge badge-status">{p.status}</span>
              </div>

              <h3
                id={`p-${p.slug}`}
                style={{
                  fontFamily: 'var(--serif-display)',
                  fontWeight: 600,
                  fontSize: 'clamp(2.1rem, 1.4rem + 2.8vw, 3.1rem)',
                  letterSpacing: '-.01em',
                  lineHeight: 1.1,
                }}
              >
                {p.name}
              </h3>

              <p
                style={{
                  fontFamily: 'var(--serif-body)',
                  fontStyle: 'italic',
                  fontWeight: 300,
                  fontSize: 'clamp(1.3rem, 1.05rem + 1.1vw, 1.7rem)',
                  lineHeight: 1.45,
                  color: 'var(--parchment)',
                  marginTop: '.6em',
                  maxWidth: '30ch',
                  textIndent: '-.45em',
                }}
              >
                <span style={{ color: 'var(--ember-bright)' }}>&ldquo;</span>
                {p.tagline}
                <span style={{ color: 'var(--ember-bright)' }}>&rdquo;</span>
              </p>

              <p style={{ marginTop: '1.4em', color: 'var(--parchment)' }}>{p.desc}</p>

              <p style={{ marginTop: '1em', color: 'var(--parchment-dim)', fontStyle: 'italic', fontSize: '.95em' }}>
                {p.pitch}
              </p>

              <dl style={{ marginTop: '1.8em', display: 'grid', gap: '1.05em', maxWidth: 'var(--measure)' }}>
                {p.specs.map(({ dt, dd, mono }) => (
                  <div key={dt}>
                    <dt
                      style={{
                        fontFamily: 'var(--mono)',
                        fontSize: '.68rem',
                        fontWeight: 500,
                        letterSpacing: '.16em',
                        textTransform: 'uppercase',
                        color: 'var(--parchment-dim)',
                        marginBottom: '.25em',
                      }}
                    >
                      {dt}
                    </dt>
                    <dd
                      style={
                        mono
                          ? {
                              fontFamily: 'var(--mono)',
                              fontSize: '.78rem',
                              letterSpacing: '.06em',
                              color: 'var(--parchment-dim)',
                              lineHeight: 2,
                            }
                          : { color: 'var(--parchment)' }
                      }
                    >
                      {dd}
                    </dd>
                  </div>
                ))}
              </dl>

              <div style={{ marginTop: '2em' }}>
                <BtnPrimary href={`/products/${p.slug}`}>Deep dive</BtnPrimary>
              </div>
            </div>

            <aside className="margin-note">{p.note}</aside>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
