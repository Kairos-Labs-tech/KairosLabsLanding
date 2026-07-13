import { ScrollReveal } from '@/components/ScrollReveal'

export const metadata = {
  title: 'Team — Kairos Labs',
  description: 'The people building WaveCraft, CiteWeave, and CausalCityAI at Kairos Labs.',
}

const teamMembers = [
  {
    name: 'Nikhil Y N',
    role: 'CEO & Technical Lead',
    skills: ['AI/ML', 'Systems Engineering', 'Optimization', 'Deep Learning', 'Mathematics', 'Physics'],
    products: ['WaveCraft', 'CiteWeave', 'CausalCity'],
    summary: 'Sets the technical direction across all three products. Background in deep learning, physics, and optimization engineering.',
    github: 'nikhil-yn-aix',
  },
  {
    name: 'Utkarsh P',
    role: 'Co-founder & CFO',
    skills: ['Python', 'Frontend', 'Marketing', 'Content'],
    products: ['WaveCraft', 'CiteWeave', 'CausalCity'],
    summary: 'Co-founder across all three products, splitting time between finance, backend Python, and WaveCraft\'s marketing. Also builds parts of this site.',
    github: 'Utkarsh-patel26',
  },
  {
    name: 'Praneel S',
    role: 'COO & Manager',
    skills: ['Frontend', 'Design/UX', 'Marketing', 'SEO'],
    products: ['WaveCraft', 'CiteWeave', 'CausalCity'],
    summary: 'Runs operations and frontend across all three products, from SEO strategy to deployment, strongest on the design/UX side.',
    github: 'Praneel7015',
  },
  {
    name: 'Sanjay J',
    role: 'Lead Engineer',
    skills: ['CI/CD & DevOps', 'Security', 'Backend', 'Python'],
    products: ['WaveCraft'],
    summary: 'Leads WaveCraft\'s engineering. CI/CD and security are where he\'s sharpest, rated top of the team on both.',
    github: 'ChrompyCoder',
  },
  {
    name: 'Anoushka P',
    role: 'Engineer',
    skills: ['Python', 'JavaScript/TypeScript', 'AI/ML'],
    products: ['CausalCity'],
    summary: 'Works across CausalCity\'s AI/ML pipeline and backend, one of the broader generalists on the team.',
    github: 'Anoushka-Paul',
  },
  {
    name: 'M. Talha',
    role: 'Engineer',
    skills: ['Data Engineering', 'SQL', 'Backend'],
    products: ['CausalCity'],
    summary: 'Designs the database and data pipelines CausalCity\'s generator runs on. Data engineering and SQL are his strongest skills.',
    github: 'talhaishere2411',
  },
  {
    name: 'Karan R A',
    role: 'Engineer',
    skills: ['Python', 'SQL', 'Backend'],
    products: ['CiteWeave'],
    summary: 'Python backend engineer on CiteWeave, strongest in SQL and backend systems, working AI/ML integration on top.',
    github: 'Karan-R-A',
  },
  {
    name: 'Manichandan M',
    role: 'Engineer',
    skills: ['Java', 'SQL', 'Backend'],
    products: ['CiteWeave'],
    summary: 'Builds CiteWeave\'s web layer. Java and SQL are his sharpest tools, both rated top of the team.',
    github: 'Manichandan26',
  },
  {
    name: 'Karan S J',
    role: 'Engineer',
    skills: ['Frontend', 'Backend', 'JavaScript/TypeScript', 'SQL'],
    products: ['CausalCity'],
    summary: 'Full-stack on CausalCity\'s web layer, rated top of the team across frontend, backend, and SQL alike.',
    github: 'KaranSJ22',
  },
  {
    name: 'Prithvi K M',
    role: 'Engineer',
    skills: ['Cloud Infrastructure', 'Python', 'Backend'],
    products: ['CausalCity'],
    summary: 'Focused on cloud architecture and Python engineering for CausalCity.',
    github: 'PrithviKiran791',
  },
  {
    name: 'Ahad U B',
    role: 'Engineer',
    skills: ['AI/ML', 'Python'],
    products: ['CausalCity'],
    summary: 'Integrates and deploys the AI/ML models CausalCity depends on.',
    github: 'ahadullabaig',
  },
]

const productColorMap = {
  WaveCraft: 'rgba(240,89,65,.18)',
  CiteWeave: 'rgba(143,176,161,.18)',
  CausalCity: 'rgba(215,187,144,.18)',
}

export default function TeamPage() {
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
        <div className="shell" style={{ position: 'relative' }}>
          <ScrollReveal>
            <p className="eyebrow" style={{ marginBottom: '1em' }}>
              <span className="greek">ΟΜΑΔΑ</span> &mdash; Team
            </p>
            <h1
              style={{
                fontFamily: 'var(--serif-display)',
                fontWeight: 600,
                fontSize: 'clamp(2.6rem, 1.4rem + 4.8vw, 5rem)',
                lineHeight: 1.07,
                letterSpacing: '-.015em',
                maxWidth: '18ch',
                textWrap: 'balance',
              }}
            >
              The people building Kairos.
            </h1>
            <p style={{ marginTop: '1.4em', color: 'var(--parchment-dim)', maxWidth: '58ch' }}>
              Eleven of us, spread across three products, all pulling toward the same idea: software should absorb the hard parts, not the person using it.
            </p>
            <p className="metaline" style={{ marginTop: '2.4em' }}>
              Est. VI.2026 &nbsp;&middot;&nbsp; {teamMembers.length} team members &nbsp;&middot;&nbsp; Three products in progress
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Team grid */}
      <section style={{ paddingBlock: 'clamp(40px, 6vh, 80px) clamp(72px, 10vh, 130px)' }}>
        <div className="shell">
          <ScrollReveal
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: 'clamp(1.5rem, 3vw, 2.5rem)',
            }}
          >
            {teamMembers.map(member => (
              <article
                key={member.name}
                style={{
                  border: '1px solid var(--hairline)',
                  padding: 'clamp(24px, 4vw, 36px)',
                  background: 'var(--ink-raised)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Product color accent */}
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: `linear-gradient(90deg, ${member.products.map(p => productColorMap[p] || 'transparent').join(', ')})`,
                  }}
                />

                <p
                  style={{
                    fontFamily: 'var(--serif-display)',
                    fontWeight: 600,
                    fontSize: 'clamp(1.2rem, 1rem + .8vw, 1.5rem)',
                    color: 'var(--parchment)',
                    lineHeight: 1.2,
                  }}
                >
                  {member.name}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: '.72rem',
                    letterSpacing: '.08em',
                    color: 'var(--ember-bright)',
                    marginTop: '.4em',
                  }}
                >
                  {member.role}
                </p>

                <p style={{ marginTop: '1em', color: 'var(--parchment-dim)', fontSize: '.95em' }}>
                  {member.summary}
                </p>

                <div style={{ marginTop: '1.2em' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {member.skills.map(s => (
                      <span
                        key={s}
                        style={{
                          fontFamily: 'var(--mono)',
                          fontSize: '.65rem',
                          letterSpacing: '.08em',
                          textTransform: 'uppercase',
                          color: 'var(--parchment-dim)',
                          border: '1px solid var(--hairline)',
                          padding: '3px 8px',
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  style={{
                    marginTop: '1.4em',
                    paddingTop: '1em',
                    borderTop: '1px solid var(--hairline)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '8px',
                  }}
                >
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    {member.products.map(p => (
                      <span
                        key={p}
                        style={{
                          fontFamily: 'var(--mono)',
                          fontSize: '.65rem',
                          letterSpacing: '.1em',
                          textTransform: 'uppercase',
                          color: 'var(--ember-bright)',
                          opacity: .8,
                        }}
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                  {member.github && (
                    <span
                      style={{
                        fontFamily: 'var(--mono)',
                        fontSize: '.65rem',
                        color: 'var(--parchment-dim)',
                        letterSpacing: '.04em',
                      }}
                    >
                      @{member.github}
                    </span>
                  )}
                </div>
              </article>
            ))}
          </ScrollReveal>

          {/* Join CTA */}
          <ScrollReveal
            tag="aside"
            style={{
              marginTop: 'clamp(48px, 8vh, 80px)',
              borderTop: '1px solid var(--hairline)',
              paddingTop: 'clamp(40px, 6vh, 64px)',
              maxWidth: '52ch',
            }}
          >
            <p className="eyebrow" style={{ marginBottom: '1em' }}>
              <span className="greek">ΣΥΜΜΕΤΟΧΗ</span> &mdash; Join
            </p>
            <p
              style={{
                fontFamily: 'var(--serif-display)',
                fontWeight: 600,
                fontSize: 'clamp(1.55rem, 1.2rem + 1.4vw, 2.15rem)',
                lineHeight: 1.15,
                color: 'var(--parchment)',
              }}
            >
              We&rsquo;re not hiring formally. But we&rsquo;re always interested in people who think clearly.
            </p>
            <p style={{ marginTop: '1em', color: 'var(--parchment-dim)' }}>
              If you have perspective on what we&rsquo;re building (criticism, questions, ideas) reach out. That&rsquo;s how most conversations here start.
            </p>
            <p style={{ marginTop: '1.4em' }}>
              <a
                href="mailto:kairoslabs.tech@gmail.com?subject=Hello%20Kairos"
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '.78rem',
                  fontWeight: 500,
                  letterSpacing: '.14em',
                  textTransform: 'uppercase',
                  color: 'var(--ember-bright)',
                  textDecoration: 'none',
                  borderBottom: '1px solid rgba(240,89,65,.35)',
                  paddingBottom: '2px',
                }}
              >
                kairoslabs.tech@gmail.com &rarr;
              </a>
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
