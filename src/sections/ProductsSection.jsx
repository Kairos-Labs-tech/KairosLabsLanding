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
    desc: `WaveCraft is an AI audio editor. Tell it what you want in plain English, and it cleans up, mixes, and masters your recording for you, checking its own work before handing it back instead of leaving mistakes for you to catch. Building toward a complete content creator platform: record, edit, and publish, all in one place. Audio is where it started; video, clipping, and publishing are next.`,
    pitch: `Recording has become easy. Editing remains difficult. Many creators stop before publishing, not for lack of creativity, but because the tools create hesitation. WaveCraft closes that gap.`,
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
    desc: `CiteWeave is a research tool: give it a paper, and it shows you where that paper actually sits in its field, what it builds on, what disagrees with it, what's genuinely new. It works by following the real trail of citations between papers, not by matching similar-sounding words. Right now it only works if you can call it directly as a developer, there's no web page to type into yet, that's next.`,
    pitch: `CiteWeave does not guess. It follows the actual chain of who-cited-who to work out which papers really mattered, the same kind of scoring approach search engines use to rank important pages, then pulls the exact sentences that matter straight out of the papers themselves.`,
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
    desc: `Born in a Google hackathon, it became an obsession. Locals understand cities in ways software never does: the patterns, the hidden behaviors, the rhythm of a place. What if a system could learn that too? Traffic affects people, people affect traffic, weather affects movement, everything touches everything else. The vision is a continuously evolving software twin of urban behavior. Not navigation. Not maps. Understanding, prediction, simulation, decision support.`,
    pitch: `We build a working copy of your city's traffic, so you could one day test a new road or transit line against it before spending real money. That's the destination. Today it's a very good traffic generator, not yet a testing tool.`,
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
            Each explores a different problem space. Each targets different users. Each exists because{' '}
            <em style={{ color: 'var(--parchment)' }}>
              people deserve systems that help them move forward &mdash; not systems that make them feel behind.
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
