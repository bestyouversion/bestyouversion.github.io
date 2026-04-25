const PACKAGES = [
  {
    name: 'Consultation',
    tagline: '1-hour individual session',
    price: '₱1,500',
    priceUnit: 'per session',
    description:
      'Online or in-person consultation. Ideal for ongoing therapy, single-session support, or initial assessment.',
    features: [
      'NLP, CBT, EMDR, or Hypnotherapy approaches',
      'Online via Google Meet, or in-person',
      'Confidential, evidence-based care',
    ],
    cta: 'Book online',
    ctaHref: '#book',
    ctaPrimary: true,
  },
  {
    name: 'Couples Therapy',
    tagline: '5-session package',
    price: '₱12,000',
    priceUnit: 'for 5 sessions',
    description:
      'A structured 5-session program for couples seeking to strengthen communication, resolve conflict, and rebuild connection.',
    features: [
      '5 × 1-hour sessions',
      'Designed for committed couples',
      'Personalised treatment plan',
      '20% savings vs. individual session pricing',
    ],
    cta: 'Inquire to book',
    ctaHref: '#contact',
    ctaPrimary: false,
    badge: 'Save 20%',
  },
  {
    name: 'Annulment Evaluation',
    tagline: 'Psychological incapacity assessment',
    price: '₱45,000',
    priceUnit: 'package + ₱20,000 acceptance fee',
    description:
      'Comprehensive psychological evaluation for annulment cases under Article 36. Includes assessments, interviews, and a legally defensible written report.',
    features: [
      'Multi-session psychological evaluation',
      'Detailed clinical report for court submission',
      'Court appearance support if required',
      'Child custody assessment available on request',
    ],
    cta: 'Inquire to book',
    ctaHref: '#contact',
    ctaPrimary: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" style={{
      background: 'var(--bg-primary)', padding: '120px 32px',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 500,
          textTransform: 'uppercase', letterSpacing: '0.3em',
          color: 'var(--accent)', marginBottom: 20,
        }}>Packages &amp; Pricing</div>

        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 300,
          fontSize: 'clamp(28px, 4vw, 44px)', lineHeight: 1.2,
          color: 'var(--text-primary)', margin: '0 0 24px', maxWidth: 720,
        }}>
          Care plans <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>tailored</span> to your journey
        </h2>

        <p style={{
          fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.7,
          color: 'var(--text-muted)', margin: '0 0 56px', maxWidth: 640,
        }}>
          Transparent pricing for individual sessions, couples therapy, and specialised
          assessments. All sessions are conducted by a Licensed Clinical Psychologist.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 24,
        }}>
          {PACKAGES.map((p, i) => (
            <div key={i} style={{
              padding: '36px 32px',
              background: 'var(--bg-card)',
              border: p.ctaPrimary ? '2px solid var(--accent)' : '1px solid var(--accent-border)',
              borderRadius: 'var(--radius-xl)',
              boxShadow: 'var(--shadow-card)',
              transition: 'all 0.4s cubic-bezier(.4,0,.2,1)',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-6px)'
              e.currentTarget.style.boxShadow = 'var(--shadow-card-hover)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'var(--shadow-card)'
            }}>
              {p.badge && (
                <div style={{
                  position: 'absolute',
                  top: 16, right: 16,
                  padding: '4px 12px',
                  fontFamily: 'var(--font-body)',
                  fontSize: 10,
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'var(--text-on-accent)',
                  background: 'linear-gradient(135deg, var(--accent), var(--accent-dark))',
                  borderRadius: 'var(--radius-pill)',
                }}>{p.badge}</div>
              )}

              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 22,
                fontWeight: 600,
                color: 'var(--text-primary)',
                marginBottom: 4,
              }}>{p.name}</div>

              <div style={{
                fontFamily: 'var(--font-body)',
                fontSize: 13,
                color: 'var(--text-muted)',
                marginBottom: 24,
              }}>{p.tagline}</div>

              <div style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: 8,
                marginBottom: 6,
                flexWrap: 'wrap',
              }}>
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 38,
                  fontWeight: 700,
                  color: 'var(--accent)',
                  lineHeight: 1,
                }}>{p.price}</span>
              </div>
              <div style={{
                fontFamily: 'var(--font-body)',
                fontSize: 12,
                color: 'var(--text-faint)',
                marginBottom: 24,
                lineHeight: 1.5,
              }}>{p.priceUnit}</div>

              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 13.5,
                lineHeight: 1.7,
                color: 'var(--text-muted)',
                margin: '0 0 20px',
              }}>{p.description}</p>

              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: '0 0 28px',
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                flex: 1,
              }}>
                {p.features.map((f, j) => (
                  <li key={j} style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 13.5,
                    lineHeight: 1.5,
                    color: 'var(--text-secondary)',
                    paddingLeft: 22,
                    position: 'relative',
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: 0, top: 4,
                      width: 14, height: 14,
                      borderRadius: '50%',
                      background: 'var(--accent-light)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent)',
                      fontSize: 9,
                      fontWeight: 700,
                    }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a href={p.ctaHref} style={{
                display: 'block',
                textAlign: 'center',
                padding: '14px 24px',
                background: p.ctaPrimary
                  ? 'linear-gradient(135deg, var(--accent), var(--accent-dark))'
                  : 'transparent',
                color: p.ctaPrimary ? 'var(--text-on-accent)' : 'var(--accent)',
                border: p.ctaPrimary ? 'none' : '1px solid var(--accent-border-hover)',
                borderRadius: 'var(--radius-pill)',
                textDecoration: 'none',
                fontFamily: 'var(--font-body)',
                fontSize: 13,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                boxShadow: p.ctaPrimary ? 'var(--shadow-button)' : 'none',
                transition: 'all 0.3s',
              }}>{p.cta}</a>
            </div>
          ))}
        </div>

        <p style={{
          marginTop: 40,
          textAlign: 'center',
          fontFamily: 'var(--font-body)',
          fontSize: 12,
          color: 'var(--text-faint)',
          lineHeight: 1.7,
          maxWidth: 600,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
          Online consultations are paid through PayMongo (GCash, Maya, online banking, QR Ph, card).
          Package fees for couples therapy and annulment evaluations are arranged via direct
          payment after an initial conversation. All amounts are in Philippine Pesos.
        </p>
      </div>
    </section>
  )
}
