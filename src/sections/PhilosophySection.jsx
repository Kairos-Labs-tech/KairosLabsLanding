import { ScrollReveal } from '@/components/ScrollReveal'

const chapters = [
  {
    greek: 'Α΄',
    key: 'Optimization',
    title: 'Optimization is empathy.',
    dropCap: 'O',
    body: (
      <>
        ptimization is accessibility. Saving someone ten minutes a day compounds into sixty hours a year.
        Reducing cognitive overhead compounds into creativity.
      </>
    ),
    note: <>ten min/day &asymp; sixty hrs/yr</>,
  },
  {
    greek: 'Β΄',
    key: 'Complexity',
    title: 'Complexity never disappears. Someone always absorbs it.',
    dropCap: 'E',
    body: (
      <>
        ither software absorbs complexity, or people do. Good systems absorb it; bad systems export it.
        People should think about outcomes &mdash; not implementation details.
      </>
    ),
    note: <>complexity is conserved; only its location changes</>,
  },
  {
    greek: 'Γ΄',
    key: 'Entropy',
    title: 'People experience entropy daily.',
    dropCap: 'E',
    litany: [
      'Too many tabs.',
      'Too many dashboards.',
      'Too many interfaces.',
      'Too many decisions.',
      'Too many notifications.',
      'Too many things competing for attention.',
    ],
    body: (
      <>
        Entropy creates hesitation, exhaustion, abandonment. Good systems reduce it by organizing
        information and creating confidence.
      </>
    ),
    note: <>second law &mdash; disorder &uarr; unless work is done</>,
  },
  {
    greek: 'Δ΄',
    key: 'Abstraction',
    title: 'Abstraction is leverage.',
    dropCap: 'A',
    body: <>bstraction lets people achieve outcomes without mastering every underlying detail.</>,
    pairs: [
      { no: "Nobody wants signal processing.", yes: "People want better audio." },
      { no: "Nobody wants citation graphs.", yes: "People want understanding." },
      { no: "Nobody wants causal models.", yes: "People want better decisions." },
    ],
    note: <>leverage &asymp; outcome &divide; required understanding</>,
  },
  {
    greek: 'Ε΄',
    key: 'Human-Centered Engineering',
    title: 'Software should invite participation. Not discourage it.',
    dropCap: 'P',
    body: (
      <>
        eople should not need expertise before they can begin, or spend months learning software
        before they create value.
      </>
    ),
    note: <>corollary: see &sect; collaborate &mdash; criticism wanted</>,
  },
]

export function PhilosophySection() {
  return (
    <section
      className="philosophy"
      id="philosophy"
      aria-labelledby="phil-h"
      style={{ paddingBlock: 'clamp(72px, 10vh, 150px) clamp(40px, 6vh, 80px)' }}
    >
      <div className="shell">
        <ScrollReveal className="prose" style={{ marginBottom: 'clamp(56px, 9vh, 110px)' }}>
          <p className="eyebrow">
            <span className="greek">ΜΕΡΟΣ Ι</span> &mdash; Philosophy
          </p>
          <h2
            id="phil-h"
            style={{
              fontFamily: 'var(--serif-display)',
              fontWeight: 600,
              fontSize: 'clamp(1.9rem, 1.3rem + 2.2vw, 2.75rem)',
              lineHeight: 1.12,
              letterSpacing: '-.008em',
              textWrap: 'balance',
              marginTop: '.5em',
            }}
          >
            Five short chapters on time, tools, and attention.
          </h2>
          <p style={{ marginTop: '1.3em', color: 'var(--parchment-dim)' }}>
            People abandon goals, not for lack of motivation or intelligence, but because the
            systems around those goals become overwhelming. This treatise is our answer to that observation.
          </p>
        </ScrollReveal>

        {chapters.map((ch, i) => (
          <ScrollReveal
            key={ch.key}
            tag="article"
            className="cols-layout"
            style={{
              position: 'relative',
              paddingBlock: 'clamp(44px, 7vh, 84px)',
              borderTop: i === 0 ? 'none' : '1px solid var(--hairline)',
            }}
          >
            <span className="ghost-letter" lang="el" aria-hidden="true">{ch.greek}</span>

            <div className="prose" style={{ position: 'relative', zIndex: 1 }}>
              <p className="eyebrow" style={{ marginBottom: '1.1em' }}>
                <span className="greek">ΚΕΦ. {ch.greek}</span> &mdash; {ch.key}
              </p>
              <h3
                style={{
                  fontFamily: 'var(--serif-display)',
                  fontWeight: 600,
                  fontSize: 'clamp(1.55rem, 1.2rem + 1.4vw, 2.15rem)',
                  lineHeight: 1.15,
                  marginBottom: '.85em',
                  maxWidth: '22ch',
                }}
              >
                {ch.title}
              </h3>

              <p>
                <span className="dc" aria-hidden="true">{ch.dropCap}</span>
                <span className="sr-only">{ch.dropCap}</span>
                {ch.body}
              </p>

              {ch.litany && (
                <ScrollReveal tag="ul" stagger className="litany">
                  {ch.litany.map(item => <li key={item}>{item}</li>)}
                </ScrollReveal>
              )}

              {ch.pairs && (
                <ScrollReveal tag="ul" stagger className="pairs-list">
                  {ch.pairs.map(({ no, yes }) => (
                    <li key={no}>
                      <span className="no">{no}</span>
                      <span className="yes">{yes}</span>
                    </li>
                  ))}
                </ScrollReveal>
              )}

              {ch.bodyAfter && <p style={{ marginTop: '1.2em' }}>{ch.bodyAfter}</p>}
            </div>

            <aside className="margin-note">{ch.note}</aside>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
