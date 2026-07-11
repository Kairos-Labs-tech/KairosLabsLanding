import Link from 'next/link'
import { ScrollReveal } from '@/components/ScrollReveal'
import { BtnPrimary } from '@/components/Btn'
import { MermaidDiagram } from '@/components/MermaidDiagram'
import { ProductMediaGallery } from '@/components/ProductMediaGallery'

function SectionBlock({ eyebrowGreek, eyebrow, title, children, note }) {
  return (
    <ScrollReveal
      tag="section"
      className="cols-layout"
      style={{
        paddingBlock: 'clamp(44px, 7vh, 84px)',
        borderTop: '1px solid var(--hairline)',
      }}
    >
      <div className="prose">
        <p className="eyebrow">
          <span className="greek">{eyebrowGreek}</span>
          {eyebrow ? ` — ${eyebrow}` : ''}
        </p>
        {title && (
          <h2
            style={{
              fontFamily: 'var(--serif-display)',
              fontWeight: 600,
              fontSize: 'clamp(1.55rem, 1.2rem + 1.4vw, 2.15rem)',
              lineHeight: 1.15,
              marginTop: '.5em',
              marginBottom: '.85em',
              maxWidth: '28ch',
            }}
          >
            {title}
          </h2>
        )}
        {children}
      </div>
      {note && <aside className="margin-note">{note}</aside>}
    </ScrollReveal>
  )
}

export function ProductPage({
  greek, category, status, name, tagline,
  vision, origin, problem, observation, differentiation,
  capabilities, futureDirection, personas, openQuestions,
  feedbackFrom, team, note, architecture, flowchart, media,
}) {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          position: 'relative',
          paddingBlock: 'clamp(84px, 14vh, 168px) clamp(64px, 10vh, 120px)',
          overflow: 'clip',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: '-20% -10% auto',
            height: '120%',
            background: 'radial-gradient(ellipse 62% 48% at 38% 30%, rgba(135,35,65,.16), transparent 68%)',
            pointerEvents: 'none',
          }}
        />

        <div className="shell cols-layout" style={{ position: 'relative' }}>
          <div>
            <ScrollReveal>
              <nav aria-label="Breadcrumb" style={{ marginBottom: '1.6em' }}>
                <Link
                  href="/#products"
                  className="eyebrow"
                  style={{ color: 'var(--parchment-dim)', textDecoration: 'none' }}
                >
                  &larr; Products
                </Link>
              </nav>

              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px 14px', marginBottom: '1.2em' }}>
                <p className="eyebrow"><span className="greek">ΕΡΓΟΝ {greek}</span></p>
                <span className="badge">{category}</span>
                <span className="badge badge-status">{status}</span>
              </div>

              <h1
                style={{
                  fontFamily: 'var(--serif-display)',
                  fontWeight: 600,
                  fontSize: 'clamp(2.6rem, 1.4rem + 4.8vw, 5rem)',
                  lineHeight: 1.07,
                  letterSpacing: '-.015em',
                }}
              >
                {name}
              </h1>

              <p
                style={{
                  fontFamily: 'var(--serif-body)',
                  fontStyle: 'italic',
                  fontWeight: 300,
                  fontSize: 'clamp(1.3rem, 1.05rem + 1.1vw, 1.7rem)',
                  lineHeight: 1.45,
                  color: 'var(--parchment)',
                  marginTop: '.6em',
                  maxWidth: '36ch',
                  textIndent: '-.45em',
                }}
              >
                <span style={{ color: 'var(--ember-bright)' }}>&ldquo;</span>
                {tagline}
                <span style={{ color: 'var(--ember-bright)' }}>&rdquo;</span>
              </p>

              <p style={{ marginTop: '1.4em', color: 'var(--parchment)', maxWidth: '60ch' }}>{vision}</p>

              {flowchart && (
                <MermaidDiagram chart={flowchart} label={`${name} pipeline diagram`} />
              )}

              <div style={{ marginTop: '2.4em' }}>
                <BtnPrimary href="/#reach-out">
                  Give Feedback
                </BtnPrimary>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal tag="aside" className="margin-note">{note}</ScrollReveal>
        </div>
      </section>

      {/* Content sections */}
      <div className="shell">
        <SectionBlock eyebrowGreek="Ι" eyebrow="Origin" title="How it started." note={<>curiosity &rarr; obsession</>}>
          <p style={{ color: 'var(--parchment)' }}>{origin}</p>
        </SectionBlock>

        <SectionBlock eyebrowGreek="ΙΙ" eyebrow="The Problem" title="What we're solving." note={<>the pain is real</>}>
          <p style={{ color: 'var(--parchment)' }}>{problem}</p>
          <p style={{ marginTop: '1.2em', color: 'var(--parchment-dim)', fontStyle: 'italic' }}>{observation}</p>
        </SectionBlock>

        <SectionBlock eyebrowGreek="ΙΙΙ" eyebrow="Differentiation" title="Why this, not that." note={<>determinism, not vibes</>}>
          <p style={{ color: 'var(--parchment)' }}>{differentiation}</p>
        </SectionBlock>

        {/* Architecture section for CausalCity */}
        {architecture && (
          <SectionBlock eyebrowGreek="ΙV" eyebrow="Architecture" title="The 6-layer platform." note={<>strict separation of concerns</>}>
            <p style={{ color: 'var(--parchment-dim)', marginBottom: '1.6em' }}>
              A model that tries to predict the future, explain why it happened, and recommend a route will be terrible at all three. Each layer does one thing.
            </p>
            <ol style={{ listStyle: 'none', display: 'grid', gap: '1.2em' }}>
              {architecture.layers.map((layer, i) => (
                <li key={layer.name} style={{ display: 'grid', gridTemplateColumns: '2.4em 1fr', gap: '0 1em', alignItems: 'start' }}>
                  <span style={{
                    fontFamily: 'var(--mono)',
                    fontSize: '.72rem',
                    fontWeight: 500,
                    letterSpacing: '.14em',
                    color: 'var(--ember-bright)',
                    paddingTop: '.25em',
                  }}>
                    L{i + 1}
                  </span>
                  <div>
                    <strong style={{ fontFamily: 'var(--serif-display)', fontWeight: 600, color: 'var(--parchment)', fontSize: '1.1em' }}>
                      {layer.name}
                    </strong>
                    <p style={{ marginTop: '.25em', color: 'var(--parchment-dim)', maxWidth: 'var(--measure)' }}>{layer.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </SectionBlock>
        )}

        <SectionBlock
          eyebrowGreek={architecture ? 'V' : 'ΙV'}
          eyebrow="Capabilities"
          title="What it does today."
          note={<>current build capabilities</>}
        >
          <ul
            style={{
              listStyle: 'none',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: '.6em 2em',
              marginTop: '.5em',
            }}
          >
            {capabilities.map(c => (
              <li key={c} style={{ color: 'var(--parchment)', display: 'flex', alignItems: 'baseline', gap: '.6em' }}>
                <span style={{ color: 'var(--ember-bright)', fontFamily: 'var(--mono)', fontSize: '.72em' }}>&rsaquo;</span>
                {c}
              </li>
            ))}
          </ul>
        </SectionBlock>

        <SectionBlock
          eyebrowGreek={architecture ? 'VI' : 'V'}
          eyebrow="Target Audience"
          title="Who we're building for."
          note={<>the users who need this most</>}
        >
          <div style={{ display: 'grid', gap: '2em', maxWidth: 'var(--measure)' }}>
            {personas.map(p => (
              <div key={p.name} style={{ borderLeft: '1px solid var(--hairline)', paddingLeft: 'clamp(16px, 3vw, 28px)' }}>
                <p style={{ fontFamily: 'var(--serif-display)', fontWeight: 600, fontSize: '1.15em', color: 'var(--parchment)', marginBottom: '.4em' }}>
                  {p.name}
                </p>
                <p style={{ color: 'var(--parchment-dim)', marginBottom: '.5em' }}>{p.pain}</p>
                <p style={{ fontStyle: 'italic', color: 'var(--parchment)' }}>{p.pitch}</p>
              </div>
            ))}
          </div>
        </SectionBlock>

        <SectionBlock
          eyebrowGreek={architecture ? 'VII' : 'VI'}
          eyebrow="Open Questions"
          title="What we don't know yet."
          note={<>good criticism saves years</>}
        >
          <ScrollReveal tag="ul" stagger className="challenges-list">
            {openQuestions.map(q => <li key={q}>{q}</li>)}
          </ScrollReveal>
          <p style={{ marginTop: '1.4em', color: 'var(--parchment-dim)' }}>
            Feedback wanted from: <em style={{ color: 'var(--parchment)' }}>{feedbackFrom}</em>
          </p>
          <div style={{ marginTop: '2em' }}>
            <BtnPrimary href="/#reach-out">
              Share Your Perspective
            </BtnPrimary>
          </div>
        </SectionBlock>

        {/* Media gallery */}
        <ProductMediaGallery items={media} />

        {/* Team */}
        <ScrollReveal
          tag="section"
          style={{
            paddingBlock: 'clamp(44px, 7vh, 84px)',
            borderTop: '1px solid var(--hairline)',
          }}
        >
          <p className="eyebrow" style={{ marginBottom: '1.6em' }}>
            <span className="greek">ΟΜΑΔΑ</span> &mdash; Team
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: '1.6em 3em',
              maxWidth: '760px',
            }}
          >
            {team.map(m => (
              <div key={m.name}>
                <p style={{ fontFamily: 'var(--serif-display)', fontWeight: 600, fontSize: '1.15em', color: 'var(--parchment)' }}>
                  {m.name}
                </p>
                <p style={{ fontFamily: 'var(--mono)', fontSize: '.72rem', letterSpacing: '.06em', color: 'var(--parchment-dim)', marginTop: '.3em' }}>
                  {m.role}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Future direction */}
        <ScrollReveal
          tag="section"
          style={{
            paddingBlock: 'clamp(44px, 7vh, 84px)',
            borderTop: '1px solid var(--hairline)',
          }}
        >
          <p className="eyebrow" style={{ marginBottom: '1.2em' }}>
            <span className="greek">ΜΕΛΛΟΝ</span> &mdash; Future Direction
          </p>
          <ul style={{ listStyle: 'none', display: 'grid', gap: '.5em' }}>
            {futureDirection.map(f => (
              <li key={f} style={{ color: 'var(--parchment-dim)', display: 'flex', alignItems: 'baseline', gap: '.7em' }}>
                <span style={{ color: 'var(--ember-bright)', fontFamily: 'var(--mono)', fontSize: '.72em', flexShrink: 0 }}>&rarr;</span>
                {f}
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </>
  )
}
