import { Link } from 'react-router-dom'
import { PRIVACY_POLICY } from '../data/content'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function PrivacyPage() {
  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
      <Navbar />
      <section style={{ padding: '140px 32px 80px', maxWidth: 700, margin: '0 auto' }}>
        <Link to="/" style={{
          fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--text-faint)',
          textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 32, display: 'inline-block',
        }}>← Back to Home</Link>

        <div style={{
          fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 500,
          textTransform: 'uppercase', letterSpacing: '0.3em',
          color: 'var(--accent)', marginBottom: 16,
        }}>Legal</div>

        <h1 style={{
          fontFamily: 'var(--font-display)', fontWeight: 300,
          fontSize: 'clamp(32px, 5vw, 48px)', lineHeight: 1.15,
          color: 'var(--text-primary)', margin: '0 0 16px',
        }}>Data Privacy Notice</h1>

        <p style={{
          fontFamily: 'var(--font-body)', fontSize: 13,
          color: 'var(--text-faint)', margin: '0 0 48px',
        }}>Last updated: {PRIVACY_POLICY.lastUpdated}</p>

        <p style={{
          fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.8,
          color: 'var(--text-muted)', margin: '0 0 40px',
        }}>
          Best You Version is committed to protecting your privacy and personal data.
          This notice explains how we collect, use, and safeguard your information
          in compliance with the Philippine Data Privacy Act of 2012 (RA 10173).
        </p>

        {PRIVACY_POLICY.sections.map((s, i) => (
          <div key={i} style={{ marginBottom: 36 }}>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 500,
              color: 'var(--text-secondary)', margin: '0 0 12px',
            }}>{s.heading}</h2>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.8,
              color: 'var(--text-muted)', margin: 0,
            }}>{s.content}</p>
          </div>
        ))}
      </section>
      <Footer />
    </div>
  )
}