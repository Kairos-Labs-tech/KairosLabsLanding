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
    summary: 'Technical lead architecting overarching systems and driving the core vision across all KairosLabs products. Extensive expertise in deep learning, physics, and optimization engineering.',
    github: 'nikhil-yn-aix',
  },
  {
    name: 'Utkarsh P',
    role: 'Co-founder',
    skills: ['Python Backend', 'AI/ML', 'Marketing', 'GitHub Ops'],
    products: ['WaveCraft'],
    summary: 'Co-founder managing operations bridging backend Python engineering and marketing strategy. Highly adaptable learner.',
    github: 'Utkarsh-patel26',
  },
  {
    name: 'Praneel S',
    role: 'Engineer / Manager',
    skills: ['Frontend', 'SEO', 'Deployment', 'Management'],
    products: ['CiteWeave'],
    summary: 'Frontend engineering and post-deployment operations including SEO and deployments. Capable of driving managerial tasks and team coordination.',
    github: 'Praneel7015',
  },
  {
    name: 'Sanjay J',
    role: 'Engineer',
    skills: ['Python Backend', 'CI/CD', 'Security'],
    products: ['WaveCraft'],
    summary: 'Python backend expert with strong proficiencies in CI/CD pipelines and security architecture.',
    github: 'ChrompyCoder',
  },
  {
    name: 'Karan R A',
    role: 'Engineer',
    skills: ['Python Backend', 'AI/ML'],
    products: ['CiteWeave'],
    summary: 'Fast-learning software engineer with strong proficiencies in Python backend systems and foundational AI/ML integrations.',
    github: 'kairoslabs',
  },
  {
    name: 'Manichandan M',
    role: 'Engineer',
    skills: ['Java', 'DSA', 'Web Development'],
    products: ['CiteWeave'],
    summary: 'Java expert with a strong foundation in Data Structures and Algorithms (DSA) and web development.',
    github: 'kairoslabs',
  },
  {
    name: 'Karan S J',
    role: 'Engineer',
    skills: ['Web Development'],
    products: ['CausalCity'],
    summary: 'Strong proficiency in web development technologies and frontend engineering.',
    github: 'KaranSJ22',
  },
  {
    name: 'Prithvi K M',
    role: 'Engineer',
    skills: ['Cloud Infrastructure', 'Python'],
    products: ['CausalCity'],
    summary: 'Focused on cloud architecture and Python engineering.',
    github: 'PrithviKiran791',
  },
  {
    name: 'M. Talha',
    role: 'Engineer',
    skills: ['Database Architecture', 'Data Pipelines', 'Backend'],
    products: ['CausalCity'],
    summary: 'Backend engineer with specialized expertise in database architecture and scalable data pipelines.',
    github: 'talhaishere2411',
  },
  {
    name: 'Anoushka P',
    role: 'Engineer',
    skills: ['AI/ML'],
    products: ['CausalCity'],
    summary: 'Software engineer contributing to AI/ML development and system pipelines.',
    github: 'Anoushka-Paul',
  },
  {
    name: 'Ahad U B',
    role: 'Engineer',
    skills: ['AI/ML'],
    products: ['CausalCity'],
    summary: 'Software engineer specializing in AI/ML model integration and deployment.',
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
              Eleven engineers and builders across three product teams. Different domains, different skillsets — one shared belief that complexity belongs inside software.
            </p>
            <p className="metaline" style={{ marginTop: '2.4em' }}>
              Est. VI.2026 &nbsp;&middot;&nbsp; {teamMembers.length} team members &nbsp;&middot;&nbsp; Three products
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
              If you have perspective on what we&rsquo;re building &mdash; criticism, questions, ideas &mdash; reach out. That&rsquo;s how most conversations here start.
            </p>
            <p style={{ marginTop: '1.4em' }}>
              <a
                href="mailto:kairoslabs@gmail.com?subject=Hello%20Kairos"
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
                kairoslabs@gmail.com &rarr;
              </a>
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
