import { IMAGES, ADE_BIO } from '../data/content'

export default function About() {
  return (
    <section id="about" style={{ background: 'var(--bg-secondary)', padding: '120px 32px' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.3em', color: 'var(--accent)', marginBottom: 20 }}>About</div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(28px, 4vw, 44px)', lineHeight: 1.2, color: 'var(--text-primary)', margin: '0 0 40px', maxWidth: 560 }}>
          Empowering minds through <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>science-backed</span> therapy
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 40, marginBottom: 60, alignItems: 'center' }}>
          <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', border: '1px solid var(--accent-border)' }}>
            <img src={IMAGES.adeProfile} alt="Ademar Cutang" style={{ width: '100%', height: 360, objectFit: 'cover', display: 'block' }} />
          </div>
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 600, color: 'var(--text-secondary)', margin: '0 0 4px' }}>{ADE_BIO.name}</h3>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--accent)', marginBottom: 4 }}>{ADE_BIO.title}</div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-faint)', marginBottom: 20 }}>{ADE_BIO.subtitle}</div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.8, color: 'var(--text-muted)', margin: '0 0 20px' }}>{ADE_BIO.intro}</p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.8, color: 'var(--text-muted)', margin: 0 }}>{ADE_BIO.experience}</p>
          </div>
        </div>

        <div style={{ padding: 32, background: 'rgba(196,149,106,0.04)', border: '1px solid var(--accent-border)', borderRadius: 'var(--radius-xl)', marginBottom: 48 }}>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--accent)', marginBottom: 20 }}>Credentials & Certifications</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 12 }}>
            {ADE_BIO.credentials.map((c, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '12px 16px', background: 'rgba(196,149,106,0.03)', borderRadius: 'var(--radius-sm)' }}>
                <span style={{ color: 'var(--accent)', fontSize: 14, marginTop: 2, flexShrink: 0 }}>&#10022;</span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.5, color: 'var(--text-secondary)' }}>{c}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 40 }}>
          <div>
            <img src={IMAGES.journey1} alt="Therapy session" style={{ width: '100%', height: 200, objectFit: 'cover', borderRadius: 'var(--radius-lg)', marginBottom: 20, border: '1px solid var(--accent-border)' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 500, color: 'var(--text-secondary)', margin: '0 0 12px' }}>Our philosophy</h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.8, color: 'var(--text-muted)', margin: 0 }}>
              At Best You Version, we believe in the power of the mind and its ability to heal and transform. Our philosophy is centered around empowering individuals to take control of their thoughts and emotions, and we use Neuro Linguistic Programming, Cognitive Behavioral Therapy, EMDR and Hypnotherapy to facilitate this process.
            </p>
          </div>
          <div>
            <img src={IMAGES.journey2} alt="Personal growth" style={{ width: '100%', height: 200, objectFit: 'cover', borderRadius: 'var(--radius-lg)', marginBottom: 20, border: '1px solid var(--accent-border)' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 500, color: 'var(--text-secondary)', margin: '0 0 12px' }}>Our approach</h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.8, color: 'var(--text-muted)', margin: 0 }}>
              Our approach to NLP, CBT, EMDR and hypnotherapy is holistic and integrative, incorporating elements of mindfulness, cognitive-behavioral therapy, and other evidence-based practices. We work collaboratively with our clients to identify their goals and develop personalized treatment plans.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
