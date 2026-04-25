const ASSESSMENTS = [
  {
    title: 'Mental Health & Addiction Assessment',
    icon: '◐',
    items: [
      'Anxiety, depression, and addiction-related concerns',
      'Mood-related disorders and emotional regulation',
      'Behavioral pattern identification',
    ],
  },
  {
    title: 'Personality & Self-Understanding',
    icon: '◈',
    items: [
      'Core traits, values, and coping mechanisms',
      'Deeper understanding of emotional triggers',
      'Identification of strengths and growth areas',
    ],
  },
  {
    title: 'Trauma & Abuse (VAWC Cases)',
    icon: '♡',
    items: [
      'Psychological documentation and stability',
      'Expert support for legal procedures',
      'Gentle, safe assessment for recovery',
      'Support for emotional stability',
    ],
  },
  {
    title: 'Annulment Psychological Evaluation',
    icon: '⚖',
    items: [
      'Evaluation of psychological incapacity',
      'Assessment of marital cases and causes',
      'Detailed, legally defensible documentation',
      'Child custody assessment (as needed)',
    ],
  },
  {
    title: 'Development & Neurodiversity Screening',
    icon: '◬',
    items: [
      'ASD, learning differences, and sensory processing',
      'Supportive guidance for school and home',
      'Resources and strategies for diverse developmental needs',
    ],
  },
  {
    title: 'Other Specialized Areas',
    icon: '✦',
    items: [
      'Anger management',
      'Eating disorders, OCD, PTSD',
      'Complex grief and dissociative states',
    ],
  },
]

export default function Assessments() {
  return (
    <section id="assessments" style={{
      background: 'var(--bg-secondary)', padding: '120px 32px',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{
          fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 500,
          textTransform: 'uppercase', letterSpacing: '0.3em',
          color: 'var(--accent)', marginBottom: 20,
        }}>Psychological Assessments</div>

        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 300,
          fontSize: 'clamp(28px, 4vw, 44px)', lineHeight: 1.2,
          color: 'var(--text-primary)', margin: '0 0 24px', maxWidth: 720,
        }}>
          Comprehensive <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>evidence-based</span> evaluations
        </h2>

        <p style={{
          fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.7,
          color: 'var(--text-muted)', margin: '0 0 56px', maxWidth: 640,
        }}>
          Feeling overwhelmed? Beyond therapy, we offer professional psychological assessments
          for personal growth, clinical diagnosis, and legal proceedings — each designed to
          give you and your family clarity and confidence.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 20,
        }}>
          {ASSESSMENTS.map((a, i) => (
            <div key={i} style={{
              padding: '32px 28px',
              background: 'var(--bg-card)',
              border: '1px solid var(--accent-border)',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-card)',
              transition: 'all 0.4s cubic-bezier(.4,0,.2,1)',
              height: '100%',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-6px)'
              e.currentTarget.style.boxShadow = 'var(--shadow-card-hover)'
              e.currentTarget.style.borderColor = 'rgba(233,75,124,0.25)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'var(--shadow-card)'
              e.currentTarget.style.borderColor = 'var(--accent-border)'
            }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 36,
                color: 'var(--accent)',
                marginBottom: 14,
                lineHeight: 1,
                opacity: 0.8,
              }}>{a.icon}</div>

              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 19,
                fontWeight: 600,
                color: 'var(--text-primary)',
                margin: '0 0 14px',
                lineHeight: 1.3,
              }}>{a.title}</h3>

              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
              }}>
                {a.items.map((item, j) => (
                  <li key={j} style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 13.5,
                    lineHeight: 1.6,
                    color: 'var(--text-muted)',
                    paddingLeft: 16,
                    position: 'relative',
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: 0,
                      top: 9,
                      width: 5,
                      height: 5,
                      borderRadius: '50%',
                      background: 'var(--accent)',
                      opacity: 0.6,
                    }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 56,
          padding: '32px 28px',
          background: 'var(--bg-card)',
          border: '1px solid var(--accent-border)',
          borderRadius: 'var(--radius-xl)',
          boxShadow: 'var(--shadow-card)',
          textAlign: 'center',
        }}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 14,
            color: 'var(--text-muted)',
            margin: '0 0 16px',
            maxWidth: 560,
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: 1.7,
          }}>
            Not sure which assessment fits your situation? Reach out and we'll guide you to the
            right service for your needs.
          </p>
          <a href="#contact" style={{
            display: 'inline-block',
            fontFamily: 'var(--font-body)',
            fontSize: 13,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: 'var(--accent)',
            textDecoration: 'none',
          }}>Get in touch →</a>
        </div>
      </div>
    </section>
  )
}
