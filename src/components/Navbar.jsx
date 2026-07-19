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
      backgroundColor: '#fef7f1',
      borderBottom: '2px solid #000',
      position: 'sticky', top: 0, zIndex: 100,
    }}>
      <div style={{
        maxWidth: 1400, margin: '0 auto',
        padding: '0 40px',
        height: 80,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Logo + Brand */}
        <Link to="/" style={{ display:'flex', alignItems:'center', gap:12, textDecoration:'none' }}>
          <div style={{ width:42, height:42, transform:'rotate(10deg)', flexShrink:0 }}>
            <img src={imgLogo} alt="Logo" style={{ width:'100%', height:'100%', objectFit:'contain' }} />
          </div>
          <span style={{
            fontFamily:'Fraunces, serif', fontWeight:700,
            fontSize:'1.6rem', letterSpacing:'-1px', color:'#000',
          }}>LaunchPad</span>
        </Link>

        {/* Nav links */}
        <nav style={{ display:'flex', alignItems:'center', gap:40 }}>
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              style={{
                fontFamily:'Anek Telugu, sans-serif',
                fontSize:'1rem', fontWeight:500,
                color:'#000', textDecoration:'none',
                paddingBottom:4,
                borderBottom: pathname === to ? '2px solid #000' : '2px solid transparent',
                transition: 'border-color 0.15s, color 0.15s',
              }}
              onMouseEnter={e => e.currentTarget.style.color='#f45b49'}
              onMouseLeave={e => e.currentTarget.style.color='#000'}
            >{label}</Link>
          ))}
        </nav>

        {/* Profile */}
        <Link to="/login">
          <img
            src={profileSrc || imgProfilePic}
            alt="Profile"
            style={{
              width:44, height:44, borderRadius:'50%',
              border:'2px solid #000', objectFit:'cover',
              cursor:'pointer',
              boxShadow:'3px 3px 0 #000',
              transition:'transform 0.1s, box-shadow 0.1s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform='translate(2px,2px)'; e.currentTarget.style.boxShadow='1px 1px 0 #000' }}
            onMouseLeave={e => { e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='3px 3px 0 #000' }}
          />
        </Link>
      </div>
    </header>
  )
}
