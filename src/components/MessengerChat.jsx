import { useEffect } from 'react'

const PAGE_ID = import.meta.env.VITE_FB_PAGE_ID || ''

/**
 * Facebook Messenger Customer Chat widget.
 *
 * Setup required (one-time, on Facebook side):
 *   1. Find your Page ID:
 *      - Go to facebook.com/bestyouversion → About → scroll to "Page transparency"
 *        OR Meta Business Suite → Page settings → Page details → "Page ID"
 *   2. Whitelist your domain:
 *      - Meta Business Suite → Inbox → Chat plugin (or Page settings → Messaging → Advanced messaging → Chat plugin)
 *      - Add: https://bestyouversion.github.io
 *   3. Add the page ID to .env:
 *      VITE_FB_PAGE_ID=your-page-id
 *   4. Add the same as a GitHub Actions secret for the deployed site.
 */
export default function MessengerChat() {
  useEffect(() => {
    if (!PAGE_ID) return // No page ID configured — silently skip

    // Don't re-inject if already loaded (handles SPA route changes)
    if (document.getElementById('facebook-jssdk')) return

    // 1. Mount root div if not present
    let fbRoot = document.getElementById('fb-root')
    if (!fbRoot) {
      fbRoot = document.createElement('div')
      fbRoot.id = 'fb-root'
      document.body.appendChild(fbRoot)
    }

    // 2. Mount the customer-chat div
    let chatbox = document.getElementById('fb-customer-chat')
    if (!chatbox) {
      chatbox = document.createElement('div')
      chatbox.id = 'fb-customer-chat'
      chatbox.className = 'fb-customerchat'
      chatbox.setAttribute('page_id', PAGE_ID)
      chatbox.setAttribute('attribution', 'biz_inbox')
      chatbox.setAttribute('theme_color', '#E94B7C')
      chatbox.setAttribute('logged_in_greeting', 'Hi! How can we help you today?')
      chatbox.setAttribute('logged_out_greeting', 'Hi! Send us a message and we\'ll respond shortly.')
      document.body.appendChild(chatbox)
    }

    // 3. Initialise FB SDK
    window.fbAsyncInit = function () {
      window.FB.init({ xfbml: true, version: 'v18.0' })
    }

    // 4. Load the SDK script
    const script = document.createElement('script')
    script.id = 'facebook-jssdk'
    script.async = true
    script.defer = true
    script.crossOrigin = 'anonymous'
    script.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js'
    document.body.appendChild(script)
  }, [])

  return null // The widget injects its own DOM; nothing to render here
}
