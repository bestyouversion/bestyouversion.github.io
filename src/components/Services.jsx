import { Link } from 'react-router-dom'
import { BrainIllustration, TherapyRoomIllustration, ConsultationIllustration } from './Illustrations'

const SERVICES = [
  { title: 'Neuro-Linguistic Programming', desc: 'Reprogram limiting thought patterns and behaviors through language-based techniques that unlock your mind\'s potential for positive change.', icon: '◇', link: '/therapy/nlp' },
  { title: 'Cognitive Behavioral Therapy', desc: 'Evidence-based approach to identify and restructure negative thinking patterns, building healthier emotional responses and coping strategies.', icon: '○', link: '/therapy/cbt' },
  { title: 'EMDR Therapy', desc: 'Process and heal from traumatic experiences through guided bilateral stimulation, reducing emotional distress tied to difficult memories.', icon: '△', link: '/therapy/emdr' },
  { title: 'Hypnotherapy', desc: 'Access your subconscious mind in a safe, guided state of deep relaxation to address anxiety, habits, pain, and emotional blocks.', icon: '□', link: '/therapy/hypnotherapy' },
]

export default function Services() {
  return (
    <section id="services" style={{ background: 'var(--bg-primary)', padding: '120px 32px' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.3em', color: 'var(--accent)', marginBottom: 20 }}>Services</div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(28px, 4vw, 44px)', lineHeight: 1.2, color: 'var(--text-primary)', margin: '0 0 24px', maxWidth: 500 }}>
          Tailored <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>therapeutic</span> modalities
        </h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.7, color: 'var(--text-muted)', margin: '0 0 48px', maxWidth: 560 }}>
          We offer a range of services, including anxiety and depression management, pain management, performance enhancement, and more.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 40 }}>
          <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--accent-border)' }}><BrainIllustration /></div>
          <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--accent-border)' }}><TherapyRoomIllustration /></div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
          {SERVICES.map((s, i) => {
            const CardWrapper = s.link ? Link : 'div'
            const cardProps = s.link ? { to: s.link, style: { textDecoration: 'none' } } : {}
            return (
              <CardWrapper key={i} {...cardProps}>
                <div style={{
                  padding: '36px 28px', background: 'var(--bg-card)', border: '1px solid var(--accent-border)',
                  borderRadius: 'var(--radius-lg)', transition: 'all 0.4s cubic-bezier(.4,0,.2,1)',
                  cursor: s.link ? 'pointer' : 'default', height: '100%',
                  boxShadow: 'var(--shadow-card)',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg-card-hover)'; e.currentTarget.style.borderColor = 'rgba(233,75,124,0.25)'; e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = 'var(--shadow-card-hover)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg-card)'; e.currentTarget.style.borderColor = 'var(--accent-border)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-card)' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 32, color: 'rgba(233,75,124,0.3)', marginBottom: 16, lineHeight: 1 }}>{s.icon}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 8 }}>{s.title}</div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.7, color: 'var(--text-muted)', margin: 0 }}>{s.desc}</p>
                  {s.link && <div style={{ marginTop: 16, fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 500, color: 'var(--accent)' }}>Learn more →</div>}
                </div>
              </CardWrapper>
            )
          })}
        </div>

        <div style={{ marginTop: 48, borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--accent-border)' }}>
          <ConsultationIllustration />
        </div>
      </div>
    </section>
  )
}
