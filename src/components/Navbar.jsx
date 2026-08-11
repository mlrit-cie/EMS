import { Link, useLocation } from 'react-router-dom'

const imgLogo = "https://www.figma.com/api/mcp/asset/df2e486d-7037-4124-b77e-fdb686fb1c3b"
const imgProfilePic = "https://www.figma.com/api/mcp/asset/f8e8df42-2b0b-4925-984d-ca4c45f298a2"

export default function Navbar({ profileSrc }) {
  const { pathname } = useLocation()

  const links = [
    { to: '/', label: 'About' },
    { to: '/calendar', label: 'Event Calendar' },
    { to: '/activity', label: 'Your Activity' },
  ]

  return (
    <header style={{
      backgroundColor: '#FFFDF5',
      borderBottom: '2px solid #1E293B',
      position: 'sticky', top: 0, zIndex: 100,
    }}>
      <div style={{
        maxWidth: 1400, margin: '0 auto',
        padding: '0 40px',
        height: 80,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Logo + Brand — Outfit ExtraBold wordmark */}
        <Link to="/" style={{ display:'flex', alignItems:'center', gap:12, textDecoration:'none' }}>
          <div style={{ width:42, height:42, transform:'rotate(10deg)', flexShrink:0 }}>
            <img src={imgLogo} alt="Logo" style={{ width:'100%', height:'100%', objectFit:'contain' }} />
          </div>
          <span style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 800,
            fontSize: '1.6rem',
            letterSpacing: '-1px',
            color: '#1E293B',
          }}>LaunchPad</span>
        </Link>

        {/* Nav links — active link gets violet underline */}
        <nav style={{ display:'flex', alignItems:'center', gap:40 }}>
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="nav-link"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                fontWeight: 500,
                color: pathname === to ? '#8B5CF6' : '#1E293B',
                textDecoration: 'none',
                paddingBottom: 4,
                borderBottom: pathname === to ? '3px solid #8B5CF6' : '3px solid transparent',
                transition: 'color 0.2s, border-color 0.2s',
              }}
              onMouseEnter={e => { if (pathname !== to) e.currentTarget.style.color='#8B5CF6' }}
              onMouseLeave={e => { if (pathname !== to) e.currentTarget.style.color='#1E293B' }}
            >{label}</Link>
          ))}
        </nav>

        {/* Profile avatar — pop-shadow icon circle */}
        <Link to="/login">
          <img
            src={profileSrc || imgProfilePic}
            alt="Profile"
            style={{
              width: 44,
              height: 44,
              borderRadius: '50%',
              border: '2px solid #1E293B',
              objectFit: 'cover',
              cursor: 'pointer',
              boxShadow: '4px 4px 0 #1E293B',
              transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translate(-2px, -2px)'
              e.currentTarget.style.boxShadow = '6px 6px 0 #1E293B'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = ''
              e.currentTarget.style.boxShadow = '4px 4px 0 #1E293B'
            }}
          />
        </Link>
      </div>
    </header>
  )
}
