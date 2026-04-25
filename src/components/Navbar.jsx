import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const NAV_LINKS = [
  { id: 'home', path: '/', label: 'Home' },
  { id: 'about', path: '/#about', label: 'About' },
  { id: 'services', path: '/#services', label: 'Services' },
  { id: 'assessments', path: '/#assessments', label: 'Assessments' },
  { id: 'articles', path: '/articles', label: 'Articles', isPage: true },
  { id: 'contact', path: '/#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleNav = (link) => {
    setMobileOpen(false)
    if (link.isExternal) {
      window.open(link.path, '_blank', 'noopener,noreferrer')
    } else if (link.path === '/') {
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        navigate('/')
        setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100)
      }
    } else if (location.pathname !== '/' && link.path.startsWith('/#')) {
      navigate('/')
      setTimeout(() => {
        document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else if (link.path.startsWith('/#')) {
      document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate(link.path)
    }
  }

  const goToBook = () => handleNav({ id: 'book', path: '/#book' })

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled || mobileOpen ? 'rgba(255,248,250,0.95)' : 'transparent',
      backdropFilter: scrolled || mobileOpen ? 'blur(16px)' : 'none',
      transition: 'all 0.4s cubic-bezier(.4,0,.2,1)',
      borderBottom: scrolled ? '1px solid rgba(93,43,61,0.08)' : '1px solid transparent',
    }}>
      <div className="nav-inner" style={{
        maxWidth: 1200, margin: '0 auto', padding: '0 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 72,
      }}>
        {/* Logo + brand */}
        <div
          className="nav-brand"
          style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', flexShrink: 0 }}
          onClick={() => handleNav(NAV_LINKS[0])}
        >
          <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="Best You Version" style={{
            width: 42, height: 42, borderRadius: '50%', objectFit: 'cover',
            boxShadow: '0 2px 12px rgba(233,75,124,0.18)',
          }} />
          <span className="nav-brand-text" style={{
            fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 19,
            color: 'var(--accent-plum)', letterSpacing: '0.02em',
          }}>Best You Version</span>
        </div>

        {/* Desktop links + CTA */}
        <div className="nav-desktop" style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
          {NAV_LINKS.map(link => (
            <button key={link.id} onClick={() => handleNav(link)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 500,
              color: 'var(--text-muted)',
              textTransform: 'uppercase', letterSpacing: '0.1em',
              transition: 'color 0.3s', padding: '4px 0',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--accent)'}
            onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
            >{link.label}</button>
          ))}
          <button onClick={goToBook} style={{
            fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600,
            textTransform: 'uppercase', letterSpacing: '0.12em',
            background: 'linear-gradient(135deg, var(--accent), var(--accent-dark))',
            color: 'var(--text-on-accent)', border: 'none',
            borderRadius: 'var(--radius-pill)',
            padding: '10px 22px', cursor: 'pointer',
            boxShadow: 'var(--shadow-button)',
            transition: 'transform 0.3s, box-shadow 0.3s',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)' }}
          >Book Now</button>
        </div>

        {/* Mobile toggle */}
        <button
          className="nav-mobile-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          style={{
            display: 'none', background: 'none', border: 'none',
            color: 'var(--accent-plum)', fontSize: 26, cursor: 'pointer',
            padding: 4, lineHeight: 1,
          }}
        >{mobileOpen ? '✕' : '☰'}</button>
      </div>

      {/* Mobile menu — full overlay */}
      {mobileOpen && (
        <div className="nav-mobile-menu" style={{
          background: 'rgba(255,248,250,0.98)',
          backdropFilter: 'blur(16px)',
          padding: '20px 24px 32px',
          display: 'flex', flexDirection: 'column', gap: 4,
          borderTop: '1px solid rgba(93,43,61,0.08)',
        }}>
          {NAV_LINKS.map(link => (
            <button key={link.id} onClick={() => handleNav(link)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 500,
              color: 'var(--text-primary)',
              textAlign: 'left', padding: '14px 0',
              borderBottom: '1px solid rgba(93,43,61,0.06)',
            }}>{link.label}</button>
          ))}
          <button onClick={goToBook} style={{
            marginTop: 20,
            fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600,
            textTransform: 'uppercase', letterSpacing: '0.12em',
            background: 'linear-gradient(135deg, var(--accent), var(--accent-dark))',
            color: 'var(--text-on-accent)', border: 'none',
            borderRadius: 'var(--radius-pill)',
            padding: '14px 24px', cursor: 'pointer',
            boxShadow: 'var(--shadow-button)',
          }}>Book a Session</button>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: block !important; }
          .nav-inner { padding: 0 18px !important; }
        }
        @media (max-width: 380px) {
          .nav-brand-text { display: none; }
        }
      `}</style>
    </nav>
  )
}
