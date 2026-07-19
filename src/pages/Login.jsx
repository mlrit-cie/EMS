import { Link } from 'react-router-dom'

const imgBrick1 = "https://www.figma.com/api/mcp/asset/047d2305-3392-4d00-9e95-638322683e47"
const imgBRick3 = "https://www.figma.com/api/mcp/asset/3253db4a-2b85-4dc1-a4d3-a163513d9a3f"
const imgLogo = "https://www.figma.com/api/mcp/asset/df2e486d-7037-4124-b77e-fdb686fb1c3b"

export default function Login() {
  return (
    <div style={{ backgroundColor: '#fef7f1', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

      {/* Top bar */}
      <header style={{ borderBottom: '2px solid #000', padding: '0 40px', height: 72, display: 'flex', alignItems: 'center' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{ width: 38, height: 38, transform: 'rotate(10deg)' }}>
            <img src={imgLogo} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
          <span style={{ fontFamily: 'Fraunces, serif', fontWeight: 700, fontSize: '1.5rem', letterSpacing: '-1px', color: '#000' }}>LaunchPad</span>
        </Link>
      </header>

      {/* Main content */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '48px 24px', position: 'relative', overflow: 'hidden' }}>

        {/* Decorative bricks */}
        <div style={{ position: 'absolute', left: -20, top: 40, width: 120, height: 58, opacity: 0.3 }}>
          <img src={imgBrick1} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </div>
        <div style={{ position: 'absolute', right: 40, bottom: 60, width: 100, height: 50, opacity: 0.3 }}>
          <img src={imgBRick3} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </div>

        <div style={{ width: '100%', maxWidth: 480, textAlign: 'center' }}>

          <h1 style={{
            fontFamily: 'Fraunces, serif', fontWeight: 700,
            fontSize: '2.5rem', letterSpacing: '-1.5px',
            marginBottom: 8,
          }}>Welcome back</h1>
          <p style={{
            fontFamily: 'Anek Telugu, sans-serif', fontSize: '1rem',
            color: 'rgba(0,0,0,0.5)', marginBottom: 48,
          }}>Choose how you want to log in</p>

          {/* Participant card */}
          <Link to="/login/participant" style={{ textDecoration: 'none', display: 'block', marginBottom: 20 }}>
            <div style={{
              backgroundColor: '#f45b49',
              border: '2px solid #000', borderRadius: 16,
              padding: '28px 32px',
              boxShadow: '6px 6px 0 #000',
              cursor: 'pointer',
              transition: 'transform 0.1s, box-shadow 0.1s',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translate(3px,3px)'; e.currentTarget.style.boxShadow = '3px 3px 0 #000' }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '6px 6px 0 #000' }}
            >
              <div style={{ textAlign: 'left' }}>
                <p style={{ fontFamily: 'Fraunces, serif', fontWeight: 700, fontSize: '1.5rem', color: '#fff', marginBottom: 4 }}>Participant Login</p>
                <p style={{ fontFamily: 'Anek Telugu, sans-serif', fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)' }}>Students attending events</p>
              </div>
              <span style={{ fontSize: '1.8rem' }}>🎓</span>
            </div>
          </Link>

          {/* Club Official card */}
          <Link to="/login/club" style={{ textDecoration: 'none', display: 'block', marginBottom: 40 }}>
            <div style={{
              backgroundColor: '#f1a242',
              border: '2px solid #000', borderRadius: 16,
              padding: '28px 32px',
              boxShadow: '6px 6px 0 #000',
              cursor: 'pointer',
              transition: 'transform 0.1s, box-shadow 0.1s',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translate(3px,3px)'; e.currentTarget.style.boxShadow = '3px 3px 0 #000' }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '6px 6px 0 #000' }}
            >
              <div style={{ textAlign: 'left' }}>
                <p style={{ fontFamily: 'Fraunces, serif', fontWeight: 700, fontSize: '1.5rem', color: '#000', marginBottom: 4 }}>Club Official Login</p>
                <p style={{ fontFamily: 'Anek Telugu, sans-serif', fontSize: '0.85rem', color: 'rgba(0,0,0,0.6)' }}>Organizers & club members</p>
              </div>
              <span style={{ fontSize: '1.8rem' }}>🏛️</span>
            </div>
          </Link>

          <p style={{ fontFamily: 'Anek Telugu, sans-serif', fontSize: '0.9rem', color: 'rgba(0,0,0,0.5)' }}>
            New here?{' '}
            <Link to="/signup/info" style={{ color: '#000', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 3 }}>
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
