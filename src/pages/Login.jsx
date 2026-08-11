import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import DriftWall from '../components/DriftWall'

const imgBrick1 = "https://www.figma.com/api/mcp/asset/047d2305-3392-4d00-9e95-638322683e47"
const imgBRick3 = "https://www.figma.com/api/mcp/asset/3253db4a-2b85-4dc1-a4d3-a163513d9a3f"
const imgLogo = "https://www.figma.com/api/mcp/asset/df2e486d-7037-4124-b77e-fdb686fb1c3b"

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userType, setUserType] = useState(null)

  const handleEmailChange = (e) => {
    const emailValue = e.target.value
    setEmail(emailValue)
    
    // Identify user type based on email domain
    // Clubs typically use specific email domains
    if (
      emailValue.includes('@club.') || 
      emailValue.includes('@admin.') ||
      emailValue.includes('@mlrit.org') ||
      emailValue.endsWith('@mlrit.ac.in') ||
      emailValue.includes('.club@')
    ) {
      setUserType('club')
    } else if (
      emailValue.includes('@student.') ||
      emailValue.includes('@participant.') ||
      emailValue.endsWith('@student.mlrit.ac.in')
    ) {
      setUserType('participant')
    } else {
      setUserType(null)
    }
  }

  const handleLogin = (e) => {
    e.preventDefault()
    if (userType === 'club') {
      navigate('/home')
    } else if (userType === 'participant') {
      navigate('/events')
    }
  }

  return (
    <div style={{ backgroundColor: '#FFFDF5', minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      
      {/* DriftWall Background */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.4, zIndex: 0, pointerEvents: 'none' }}>
        <DriftWall
          items={[
            { image: 'https://picsum.photos/id/1015/600/400', title: 'Equinox 2026' },
            { image: 'https://picsum.photos/id/1025/600/400', title: 'HackMania' },
            { image: 'https://picsum.photos/id/1039/600/400', title: 'TechTalks' },
            { image: 'https://picsum.photos/id/1043/600/400', title: 'Design Jam' },
            { image: 'https://picsum.photos/id/1044/600/400', title: 'CodeSprint' },
            { image: 'https://picsum.photos/id/1050/600/400', title: 'BuildFest' },
            { image: 'https://picsum.photos/id/1062/600/400', title: 'DevHunt' },
            { image: 'https://picsum.photos/id/1069/600/400', title: 'WebConf' },
            { image: 'https://picsum.photos/id/1074/600/400', title: 'AI Summit' },
            { image: 'https://picsum.photos/id/1080/600/400', title: 'Cloud Day' },
            { image: 'https://picsum.photos/id/1084/600/400', title: 'Mobile Fest' },
            { image: 'https://picsum.photos/id/106/600/400', title: 'Security Talk' },
            { image: 'https://picsum.photos/id/110/600/400', title: 'Data Science' },
            { image: 'https://picsum.photos/id/133/600/400', title: 'DevOps' },
            { image: 'https://picsum.photos/id/164/600/400', title: 'FullStack' },
          ]}
          columns={8}
          tileWidth={200}
          tileHeight={132}
          gap={18}
          radius={14}
          tilt={16}
          turn={-14}
          perspective={1200}
          depth={120}
          speed={42}
          direction="up"
          variance={0.45}
          parallax={0.6}
          lift={64}
          fade={0.6}
          dim={0.55}
          overlayColor="#FFFDF5"
        />
      </div>

      {/* Top bar */}
      <header style={{ borderBottom: '2px solid #1E293B', padding: '0 40px', height: 72, display: 'flex', alignItems: 'center', position: 'relative', zIndex: 10 }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{ width: 38, height: 38, transform: 'rotate(10deg)' }}>
            <img src={imgLogo} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.5rem', letterSpacing: '-1px', color: '#1E293B' }}>LaunchPad</span>
        </Link>
      </header>

      {/* Main content */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '48px 24px', position: 'relative', overflow: 'hidden', zIndex: 5 }}>

        <div style={{ width: '100%', maxWidth: 480, textAlign: 'center', position: 'relative', zIndex: 1, backgroundColor: 'transparent', padding: '40px 32px', borderRadius: 24, border: '2px solid #1E293B', boxShadow: '8px 8px 0 #1E293B' }}>

          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 800,
            fontSize: '2.5rem',
            letterSpacing: '-1.5px',
            marginBottom: 8,
            color: '#1E293B',
          }}>Welcome back</h1>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            color: '#64748B',
            marginBottom: 48,
          }}>Log in to your LaunchPad account</p>

          {/* Login Form */}
          <form onSubmit={handleLogin}>
            {/* Email Input */}
            <div style={{ marginBottom: 24, textAlign: 'left' }}>
              <label style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '0.95rem',
                color: '#1E293B',
                display: 'block',
                marginBottom: 8,
              }}>Email Address</label>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                required
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '2px solid #1E293B',
                  borderRadius: 12,
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  boxSizing: 'border-box',
                  transition: 'border-color 0.2s',
                }}
                onFocus={e => { e.target.style.borderColor = '#8B5CF6' }}
                onBlur={e => { e.target.style.borderColor = '#1E293B' }}
              />
              {userType && (
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8rem',
                  marginTop: 6,
                  color: userType === 'club' ? '#8B5CF6' : '#34D399',
                  fontWeight: 600,
                }}>
                  {userType === 'club' ? '🏛️ Club Official' : '🎓 Student'}
                </p>
              )}
            </div>

            {/* Password Input */}
            <div style={{ marginBottom: 32, textAlign: 'left' }}>
              <label style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '0.95rem',
                color: '#1E293B',
                display: 'block',
                marginBottom: 8,
              }}>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '2px solid #1E293B',
                  borderRadius: 12,
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  boxSizing: 'border-box',
                  transition: 'border-color 0.2s',
                }}
                onFocus={e => { e.target.style.borderColor = '#8B5CF6' }}
                onBlur={e => { e.target.style.borderColor = '#1E293B' }}
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={!userType}
              style={{
                width: '100%',
                backgroundColor: userType ? '#8B5CF6' : '#E2E8F0',
                color: userType ? '#fff' : '#94A3B8',
                border: '2px solid #1E293B',
                borderRadius: 12,
                padding: '14px 24px',
                fontFamily: 'var(--font-body)',
                fontSize: '1.1rem',
                fontWeight: 600,
                cursor: userType ? 'pointer' : 'not-allowed',
                transition: 'transform 0.2s, box-shadow 0.2s',
                boxShadow: userType ? '6px 6px 0 #1E293B' : 'none',
              }}
              onMouseEnter={e => {
                if (userType) {
                  e.currentTarget.style.transform = 'scale(1.02)'
                  e.currentTarget.style.boxShadow = '8px 8px 0 #1E293B'
                }
              }}
              onMouseLeave={e => {
                if (userType) {
                  e.currentTarget.style.transform = ''
                  e.currentTarget.style.boxShadow = '6px 6px 0 #1E293B'
                }
              }}
            >
              {userType ? 'Log In' : 'Enter email to continue'}
            </button>
          </form>

          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: '#64748B', marginTop: 40 }}>
            Don't have an account?{' '}
            <Link to="/signup/info" style={{ color: '#8B5CF6', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 3 }}>
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
