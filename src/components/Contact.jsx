import { useState } from 'react'

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || ''
const CONTACT_EMAIL = 'ade@bestyouversion.com'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!name || !email || !message) return
    setStatus('sending')
    setError(null)

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `New contact form message from ${name}`,
          from_name: 'Best You Version Website',
          to: CONTACT_EMAIL,
          name,
          email,
          phone,
          message,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('sent')
        setName(''); setEmail(''); setPhone(''); setMessage('')
      } else {
        throw new Error(data.message || 'Failed to send')
      }
    } catch (err) {
      setStatus('error')
      setError(err.message || 'Something went wrong. Please try again or email us directly.')
    }
  }

  const inputStyle = {
    width: '100%', padding: '14px 16px',
    background: 'var(--bg-card)',
    border: '1px solid var(--accent-border)',
    borderRadius: 'var(--radius-md)', color: 'var(--text-primary)',
    fontFamily: 'var(--font-body)', fontSize: 14,
    outline: 'none', transition: 'border-color 0.3s',
    boxSizing: 'border-box',
  }

  return (
    <section id="contact" style={{
      background: 'var(--bg-primary)', padding: '120px 32px',
    }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <div style={{
          fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 500,
          textTransform: 'uppercase', letterSpacing: '0.3em',
          color: 'var(--accent)', marginBottom: 20,
        }}>Contact</div>

        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 300,
          fontSize: 'clamp(28px, 4vw, 44px)', lineHeight: 1.2,
          color: 'var(--text-primary)', margin: '0 0 24px', maxWidth: 560,
        }}>
          Reach out — we'd <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>love to hear</span> from you
        </h2>

        <p style={{
          fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.7,
          color: 'var(--text-muted)', margin: '0 0 56px', maxWidth: 560,
        }}>
          Have a question about our services or want to learn more before booking?
          Send us a message and Ade will get back to you within 24 hours.
        </p>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 40,
          alignItems: 'start',
        }}>
          {/* Contact details */}
          <div style={{
            padding: 32, background: 'var(--bg-card)',
            border: '1px solid var(--accent-border)', borderRadius: 'var(--radius-xl)',
            boxShadow: 'var(--shadow-card)',
          }}>
            <h3 style={{
              fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 600,
              color: 'var(--text-primary)', margin: '0 0 24px',
            }}>Get in touch</h3>

            <div style={{ marginBottom: 20 }}>
              <div style={{
                fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 500,
                textTransform: 'uppercase', letterSpacing: '0.15em',
                color: 'var(--accent)', marginBottom: 6,
              }}>Email</div>
              <a href={`mailto:${CONTACT_EMAIL}`} style={{
                fontFamily: 'var(--font-body)', fontSize: 15,
                color: 'var(--text-primary)', textDecoration: 'none',
              }}>{CONTACT_EMAIL}</a>
            </div>

            <div style={{ marginBottom: 20 }}>
              <div style={{
                fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 500,
                textTransform: 'uppercase', letterSpacing: '0.15em',
                color: 'var(--accent)', marginBottom: 6,
              }}>Phone · Viber · WhatsApp</div>
              <a href="tel:+639193746888" style={{
                fontFamily: 'var(--font-body)', fontSize: 15,
                color: 'var(--text-primary)', textDecoration: 'none',
              }}>+63 919 374 6888</a>
            </div>

            <div style={{ marginBottom: 20 }}>
              <div style={{
                fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 500,
                textTransform: 'uppercase', letterSpacing: '0.15em',
                color: 'var(--accent)', marginBottom: 6,
              }}>Location</div>
              <div style={{
                fontFamily: 'var(--font-body)', fontSize: 15,
                color: 'var(--text-primary)',
              }}>Cebu City, Philippines</div>
            </div>

            <div style={{ marginBottom: 24 }}>
              <div style={{
                fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 500,
                textTransform: 'uppercase', letterSpacing: '0.15em',
                color: 'var(--accent)', marginBottom: 6,
              }}>Hours</div>
              <div style={{
                fontFamily: 'var(--font-body)', fontSize: 15,
                color: 'var(--text-primary)',
              }}>Mon – Fri: 10:00 AM – 1:00 PM<br />Sat – Sun: 9:00 PM – 11:00 PM</div>
            </div>

            <div>
              <div style={{
                fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 500,
                textTransform: 'uppercase', letterSpacing: '0.15em',
                color: 'var(--accent)', marginBottom: 10,
              }}>Follow us</div>
              <a
                href="https://www.facebook.com/bestyouversion"
                target="_blank" rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  padding: '10px 16px', borderRadius: 'var(--radius-pill)',
                  background: 'rgba(24,119,242,0.08)',
                  color: '#1877F2', textDecoration: 'none',
                  fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600,
                  transition: 'all 0.3s', border: '1px solid rgba(24,119,242,0.2)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#1877F2'
                  e.currentTarget.style.color = '#FFFFFF'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(24,119,242,0.08)'
                  e.currentTarget.style.color = '#1877F2'
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Bestyouversion
              </a>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{
            padding: 32, background: 'var(--bg-card)',
            border: '1px solid var(--accent-border)', borderRadius: 'var(--radius-xl)',
            boxShadow: 'var(--shadow-card)',
          }}>
            {status === 'sent' ? (
              <div style={{ textAlign: 'center', padding: '32px 0' }}>
                <div style={{
                  width: 64, height: 64, borderRadius: '50%', margin: '0 auto 20px',
                  background: 'rgba(80,180,100,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 28, color: '#3D9D55',
                }}>✓</div>
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 500,
                  color: 'var(--text-primary)', margin: '0 0 8px',
                }}>Message sent</h3>
                <p style={{
                  fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.7,
                  color: 'var(--text-muted)', margin: 0,
                }}>Thank you. We'll be in touch within 24 hours.</p>
                <button type="button" onClick={() => setStatus('idle')} style={{
                  marginTop: 24, padding: '10px 24px',
                  background: 'transparent', color: 'var(--accent)',
                  border: '1px solid var(--accent-border-hover)',
                  borderRadius: 'var(--radius-pill)', cursor: 'pointer',
                  fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 500,
                }}>Send another message</button>
              </div>
            ) : (
              <>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 20 }}>
                  <input required placeholder="Your name" value={name}
                    onChange={e => setName(e.target.value)} style={inputStyle} />
                  <input required type="email" placeholder="Email address" value={email}
                    onChange={e => setEmail(e.target.value)} style={inputStyle} />
                  <input placeholder="Phone (optional)" value={phone}
                    onChange={e => setPhone(e.target.value)} style={inputStyle} />
                  <textarea required placeholder="How can we help?" value={message}
                    onChange={e => setMessage(e.target.value)} rows={4}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: 100 }} />
                </div>

                {error && (
                  <div style={{
                    padding: '12px 16px', marginBottom: 16, borderRadius: 'var(--radius-sm)',
                    background: 'rgba(220,60,60,0.08)', border: '1px solid rgba(220,60,60,0.2)',
                    color: '#C73848', fontSize: 13,
                  }}>{error}</div>
                )}

                {!ACCESS_KEY && (
                  <div style={{
                    padding: '12px 16px', marginBottom: 16, borderRadius: 'var(--radius-sm)',
                    background: 'rgba(220,180,60,0.08)', border: '1px solid rgba(220,180,60,0.25)',
                    color: '#9D7820', fontSize: 12,
                  }}>
                    Form not yet activated. Set <code>VITE_WEB3FORMS_ACCESS_KEY</code> in your .env file.
                    Until then, please email us directly at {CONTACT_EMAIL}.
                  </div>
                )}

                <button type="submit" disabled={status === 'sending' || !ACCESS_KEY} style={{
                  width: '100%', padding: '16px',
                  background: status === 'sending' || !ACCESS_KEY
                    ? 'rgba(233,75,124,0.4)'
                    : 'linear-gradient(135deg, var(--accent), var(--accent-dark))',
                  color: 'var(--text-on-accent)', border: 'none', borderRadius: 'var(--radius-pill)',
                  cursor: status === 'sending' || !ACCESS_KEY ? 'not-allowed' : 'pointer',
                  fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600,
                  textTransform: 'uppercase', letterSpacing: '0.1em',
                  boxShadow: status === 'sending' || !ACCESS_KEY ? 'none' : 'var(--shadow-button)',
                  transition: 'all 0.3s',
                }}>
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
