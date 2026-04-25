import { Link } from 'react-router-dom'

const QUICK_LINKS = [
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Assessments', href: '/#assessments' },
  { label: 'Articles', href: '/articles' },
  { label: 'Book a Session', href: '/#book' },
  { label: 'Contact', href: '/#contact' },
]

const SERVICES = [
  { label: 'Neuro-Linguistic Programming', href: '/therapy/nlp' },
  { label: 'Cognitive Behavioral Therapy', href: '/therapy/cbt' },
  { label: 'EMDR Therapy', href: '/therapy/emdr' },
  { label: 'Hypnotherapy', href: '/therapy/hypnotherapy' },
]

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg-tertiary)', padding: '64px 24px 28px',
      borderTop: '1px solid rgba(255,255,255,0.06)',
    }}>
      <div className="footer-inner" style={{
        maxWidth: 1100, margin: '0 auto',
      }}>
        <div className="footer-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1fr 1.2fr',
          gap: 48, marginBottom: 48,
        }}>
          {/* Brand column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="Best You Version" style={{
                width: 40, height: 40, borderRadius: '50%', objectFit: 'cover',
              }} />
              <span style={{
                fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 18,
                color: '#FFFFFF',
              }}>Best You Version</span>
            </div>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: 13, lineHeight: 1.7,
              color: 'rgba(255,255,255,0.65)', margin: '0 0 16px', maxWidth: 280,
            }}>
              Mental health & well-being through Neuro-Linguistic Programming,
              CBT, EMDR, and Hypnotherapy.
            </p>
            <a
              href="https://www.facebook.com/bestyouversion"
              target="_blank" rel="noopener noreferrer"
              aria-label="Visit our Facebook page"
              style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: 40, height: 40, borderRadius: '50%',
                background: 'rgba(255,255,255,0.08)',
                color: '#FFFFFF', textDecoration: 'none',
                transition: 'all 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#1877F2' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>

          {/* Quick links */}
          <div>
            <div style={{
              fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 600,
              textTransform: 'uppercase', letterSpacing: '0.18em',
              color: 'rgba(255,255,255,0.5)', marginBottom: 18,
            }}>Explore</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {QUICK_LINKS.map(l => (
                <li key={l.label}>
                  <Link to={l.href.startsWith('/#') ? '/' : l.href} style={{
                    fontFamily: 'var(--font-body)', fontSize: 13,
                    color: 'rgba(255,255,255,0.75)', textDecoration: 'none',
                    transition: 'color 0.3s',
                  }}
                  onMouseEnter={e => { e.target.style.color = '#FFFFFF' }}
                  onMouseLeave={e => { e.target.style.color = 'rgba(255,255,255,0.75)' }}
                  >{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div style={{
              fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 600,
              textTransform: 'uppercase', letterSpacing: '0.18em',
              color: 'rgba(255,255,255,0.5)', marginBottom: 18,
            }}>Services</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {SERVICES.map(s => (
                <li key={s.label}>
                  <Link to={s.href} style={{
                    fontFamily: 'var(--font-body)', fontSize: 13,
                    color: 'rgba(255,255,255,0.75)', textDecoration: 'none',
                    transition: 'color 0.3s',
                  }}
                  onMouseEnter={e => { e.target.style.color = '#FFFFFF' }}
                  onMouseLeave={e => { e.target.style.color = 'rgba(255,255,255,0.75)' }}
                  >{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div style={{
              fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 600,
              textTransform: 'uppercase', letterSpacing: '0.18em',
              color: 'rgba(255,255,255,0.5)', marginBottom: 18,
            }}>Get in touch</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <li>
                <a href="mailto:ade@bestyouversion.com" style={{
                  fontFamily: 'var(--font-body)', fontSize: 13,
                  color: 'rgba(255,255,255,0.85)', textDecoration: 'none',
                }}>ade@bestyouversion.com</a>
              </li>
              <li>
                <a href="tel:+639193746888" style={{
                  fontFamily: 'var(--font-body)', fontSize: 13,
                  color: 'rgba(255,255,255,0.85)', textDecoration: 'none',
                }}>+63 919 374 6888</a>
              </li>
              <li style={{
                fontFamily: 'var(--font-body)', fontSize: 13,
                color: 'rgba(255,255,255,0.65)',
              }}>
                Viber · WhatsApp · Messenger
              </li>
              <li style={{
                fontFamily: 'var(--font-body)', fontSize: 13,
                color: 'rgba(255,255,255,0.65)', marginTop: 4,
              }}>
                Cebu City, Philippines
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom" style={{
          paddingTop: 24,
          borderTop: '1px solid rgba(255,255,255,0.08)',
          display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between',
          gap: 16,
        }}>
          <div style={{
            fontFamily: 'var(--font-body)', fontSize: 12,
            color: 'rgba(255,255,255,0.5)',
          }}>
            © {new Date().getFullYear()} Best You Version. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            <Link to="/privacy" style={{
              fontFamily: 'var(--font-body)', fontSize: 12,
              color: 'rgba(255,255,255,0.65)', textDecoration: 'none',
            }}>Data Privacy Notice</Link>
            <span style={{
              fontFamily: 'var(--font-body)', fontSize: 12,
              color: 'rgba(255,255,255,0.4)',
            }}>RA 10173 Compliant</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 36px !important;
          }
        }
        @media (max-width: 540px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .footer-bottom {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </footer>
  )
}
