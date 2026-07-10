'use client'
import Link from 'next/link'
import { ScrollReveal } from '@/components/ScrollReveal'

const products = [
  {
    greek: 'Α΄',
    slug: 'wavecraft',
    category: 'Audio Intelligence',
    status: 'Working MVP',
    name: 'WaveCraft',
    tagline: 'Raw sound in. Mastered art out.',
    desc: `An AI-powered audio workspace built to strip the intimidation out of audio production. Recording has become easy; editing remains difficult — and many creators stop before publishing, not for lack of creativity, but because tools create hesitation. WaveCraft began with a simple question: what if editing felt conversational — if the workflow emerged from intent, not the other way around?`,
    pitch: `Unlike generic AI tools or traditional DAW software, WaveCraft bridges the gap between intent and execution. We use a deterministic feedback loop — if the AI makes a mistake, it catches its own errors via mathematical DSP audits, not "vibes".`,
    specs: [
      { dt: 'Capabilities', dd: 'Transcription · speaker separation · intent-driven editing · conversational workflows · workflow graphs · branching outputs' },
      { dt: 'Team', dd: 'Nikhil Y N · Utkarsh P · Sanjay J', mono: true },
      { dt: 'Feedback wanted from', dd: 'Podcast creators, audio engineers, video editors — and people who abandoned content creation.' },
    ],
    note: <>started V.2026 as a college project<br />status: working MVP &mdash; interactive editor, editable pipelines</>,
  },
  {
    greek: 'Β΄',
    slug: 'citeweave',
    category: 'Knowledge Intelligence',
    status: 'Working MVP',
    name: 'CiteWeave',
    tagline: "Understanding a field shouldn't require fifty browser tabs.",
    desc: `CiteWeave helps people understand where information lives within a larger landscape. Finding information is not difficult; understanding it is. Unlike API-limited systems, CiteWeave works over a local corpus now exceeding 2.5 TB of research material — deeper analysis, better clustering, more meaningful synthesis. The research domain is operational; medical and legal expansions are in development.`,
    pitch: `CiteWeave does not guess. It crawls the actual citation graph (using PageRank-style algorithms) to determine foundational impact, and mathematically clusters exact sentences from papers. 100% verifiable truth grounded in the actual structural hierarchy of science.`,
    specs: [
      { dt: 'Orientation, not retrieval', dd: 'Comparable buckets · novelty · research gaps · foundational & emerging works · datasets · metrics' },
      { dt: 'Team', dd: 'Nikhil Y N · Praneel S · Karan R A · Manichandan M', mono: true },
      { dt: 'Feedback wanted from', dd: 'Researchers, academics, lawyers — anyone conducting literature reviews or dissatisfied with existing discovery systems.' },
    ],
    note: <>local corpus: 2.5 TB and growing<br />domains: research &rarr; medical, legal; compliance planned</>,
  },
  {
    greek: 'Γ΄',
    slug: 'causalcity',
    category: 'Urban Intelligence',
    status: 'Research',
    name: 'CausalCityAI',
    tagline: 'Cities behave less like maps and more like living systems.',
    desc: `Born in a Google hackathon; eventually an obsession. Locals understand cities in ways software does not — patterns, hidden behaviors, temporal rhythms. What if systems could learn them? Traffic affects people; people affect traffic; weather affects movement; everything interacts. The vision is a continuously evolving software twin of urban behavior. Not navigation. Not maps. Understanding, prediction, simulation, decision support.`,
    pitch: `We build a digital twin of your city. Don't wait months for your sensor deployment to finish — generate massive, highly realistic, causally-linked traffic datasets rapidly. Test your infrastructure changes in our Counterfactual Simulator before you pour the concrete.`,
    specs: [
      { dt: 'Current stage', dd: 'Architecture · simulation concepts · state representation · forecasting concepts · system design' },
      { dt: 'Team', dd: 'Nikhil Y N · Prithvi K M · Karan S J · M. Talha N · Anoushka P · Ahad U B', mono: true },
      { dt: 'Feedback wanted from', dd: 'Urban planners, transportation researchers, traffic engineers — and people who think this idea cannot work.' },
    ],
    note: <>origin: Google hackathon &mdash; challenge problem &rarr; obsession<br />status: research</>,
  },
]

export function ProductsSection() {
  return (
    <section
      className="products"
      id="products"
      aria-labelledby="products-h"
      style={{ paddingBlock: 'clamp(72px, 10vh, 150px) clamp(40px, 6vh, 80px)' }}
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
                <Link
                  href={`/products/${p.slug}`}
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: '.72rem',
                    fontWeight: 500,
                    letterSpacing: '.14em',
                    textTransform: 'uppercase',
                    color: 'var(--ember-bright)',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '.6em',
                    borderBottom: '1px solid rgba(240,89,65,.35)',
                    paddingBottom: '2px',
                    transition: 'border-color .2s ease',
                  }}
                >
                  Deep dive &rarr;
                </Link>
              </div>
            </div>

            <aside className="margin-note">{p.note}</aside>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
