import { useState, useEffect } from 'react'

/**
 * Floating Messenger button — opens Messenger in a new tab/app on click.
 * No FB SDK, no domain whitelist, no Page ID env var needed.
 */
const MESSENGER_URL = 'https://m.me/bestyouversion'

export default function MessengerChat() {
  const [visible, setVisible] = useState(false)

  // Slight delay so it doesn't pop in during initial page load
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 800)
    return () => clearTimeout(t)
  }, [])

  return (
    <a
      href={MESSENGER_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on Messenger"
      style={{
        position: 'fixed',
        bottom: 24, right: 24,
        zIndex: 1000,
        width: 60, height: 60,
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #00C6FF 0%, #0084FF 50%, #A033FF 100%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 6px 24px rgba(0,132,255,0.4)',
        textDecoration: 'none',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.8)',
        transition: 'opacity 0.4s ease, transform 0.4s cubic-bezier(.4,0,.2,1), box-shadow 0.3s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)'
        e.currentTarget.style.boxShadow = '0 10px 32px rgba(0,132,255,0.55)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)'
        e.currentTarget.style.boxShadow = '0 6px 24px rgba(0,132,255,0.4)'
      }}
    >
      {/* Messenger logo (official lightning bolt mark) */}
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 2C6.477 2 2 6.146 2 11.265c0 2.917 1.452 5.515 3.722 7.215V22l3.401-1.866c.91.252 1.875.387 2.877.387 5.523 0 10-4.146 10-9.256C22 6.146 17.523 2 12 2z"
          fill="#FFFFFF"
        />
        <path
          d="M5.846 13.665l2.93-4.65 3 2.25 2.62-2.25 3.31 4.65-3.13 1.65-2.74-1.95-2.79 1.95-3.2-1.65z"
          fill="url(#msg-gradient)"
        />
        <defs>
          <linearGradient id="msg-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00C6FF" />
            <stop offset="100%" stopColor="#0084FF" />
          </linearGradient>
        </defs>
      </svg>

      {/* Tooltip — shows on hover (desktop only) */}
      <span className="msg-tooltip" style={{
        position: 'absolute',
        right: 70, top: '50%', transform: 'translateY(-50%)',
        background: '#1A0810', color: '#FFFFFF',
        padding: '8px 14px', borderRadius: 'var(--radius-pill, 40px)',
        fontFamily: 'var(--font-body, sans-serif)', fontSize: 13, fontWeight: 500,
        whiteSpace: 'nowrap',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        opacity: 0, pointerEvents: 'none',
        transition: 'opacity 0.3s, transform 0.3s',
      }}>
        Chat on Messenger
      </span>

      <style>{`
        a:hover .msg-tooltip {
          opacity: 1 !important;
          transform: translateY(-50%) translateX(-4px) !important;
        }
        @media (max-width: 640px) {
          .msg-tooltip { display: none; }
        }
      `}</style>
    </a>
  )
}
