import { Link } from 'react-router-dom'
import StrokeText from '../components/StrokeText'
import DriftWall from '../components/DriftWall'

export default function Landing() {
  return (
    <div style={{ width: '100%', minHeight: '100vh', backgroundColor: 'transparent', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      {/* BACKGROUND - Continuously Moving DriftWall */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.7, zIndex: 0, pointerEvents: 'none' }}>
        <DriftWall
          items={[
            { image: 'https://picsum.photos/id/1015/600/400', title: 'Event 1' },
            { image: 'https://picsum.photos/id/1025/600/400', title: 'Event 2' },
            { image: 'https://picsum.photos/id/1039/600/400', title: 'Event 3' },
            { image: 'https://picsum.photos/id/1043/600/400', title: 'Event 4' },
            { image: 'https://picsum.photos/id/1044/600/400', title: 'Event 5' },
            { image: 'https://picsum.photos/id/1050/600/400', title: 'Event 6' },
            { image: 'https://picsum.photos/id/1062/600/400', title: 'Event 7' },
            { image: 'https://picsum.photos/id/1069/600/400', title: 'Event 8' },
            { image: 'https://picsum.photos/id/1074/600/400', title: 'Event 9' },
            { image: 'https://picsum.photos/id/1080/600/400', title: 'Event 10' },
            { image: 'https://picsum.photos/id/1084/600/400', title: 'Event 11' },
            { image: 'https://picsum.photos/id/106/600/400', title: 'Event 12' },
          ]}
          columns={6}
          tileWidth={200}
          tileHeight={132}
          gap={18}
          radius={14}
          tilt={16}
          turn={-14}
          perspective={1200}
          depth={120}
          speed={25}
          direction="up"
          variance={0.45}
          parallax={0}
          lift={64}
          fade={0}
          dim={0.3}
          overlayColor="transparent"
        />
      </div>

      {/* CONTENT - All content sits above the background */}
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* NAVIGATION */}
      <header style={{ borderBottom: '2px solid #1E293B', padding: '0 40px', height: 72, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', position: 'relative', zIndex: 20 }}>
        <nav style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
          <Link to="/events" style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: '#1E293B', textDecoration: 'none' }}>Events</Link>
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <button style={{
              backgroundColor: '#8B5CF6',
              color: '#fff',
              border: '2px solid #1E293B',
              borderRadius: 9999,
              padding: '10px 28px',
              fontSize: '1rem',
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'transform 0.2s, box-shadow 0.2s',
              boxShadow: '4px 4px 0 #1E293B',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.boxShadow = '6px 6px 0 #1E293B' }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '4px 4px 0 #1E293B' }}
            >
              Login
            </button>
          </Link>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section style={{
        borderBottom: '2px solid #1E293B',
        padding: '80px 40px',
        backgroundColor: 'transparent',
      }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
          {/* Left - Hero Copy */}
          <div>
            <StrokeText
              text="Discover Campus Events"
              strokeColor="#8B5CF6"
              fillColor="#1E293B"
              strokeWidth={1.2}
              drawDuration={1.4}
              fillDelay={0.1}
              stagger={0.04}
              ease="power2.out"
              trigger="mount"
              fillMode="wipe"
              fontSize={48}
              fontWeight={800}
              letterSpacing={-2}
            />
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.1rem',
              fontWeight: 400,
              color: '#64748B',
              marginBottom: 32,
              lineHeight: 1.7,
              marginTop: 24,
            }}>
              Explore workshops, hackathons, seminars, and cultural events happening at MLRIT. Stay connected with your campus community.
            </p>
            
            <Link to="/events" style={{ textDecoration: 'none' }}>
              <button style={{
                backgroundColor: '#FBBF24',
                color: '#1E293B',
                border: '2px solid #1E293B',
                borderRadius: 12,
                padding: '14px 36px',
                fontSize: '1.1rem',
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'transform 0.3s, box-shadow 0.3s',
                boxShadow: '6px 6px 0 #1E293B',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '8px 8px 0 #1E293B' }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '6px 6px 0 #1E293B' }}
              >
                Explore Events
              </button>
            </Link>
          </div>

          {/* Right - Image/Stats */}
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '100%',
              height: 400,
              backgroundColor: '#8B5CF6',
              borderRadius: 20,
              border: '2px solid #1E293B',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 24,
            }}>
              <div>
                <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '3.5rem', color: '#fff', margin: 0 }}>50+</p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'rgba(255,255,255,0.9)', margin: '8px 0 0 0' }}>Events per semester</p>
              </div>
              <div style={{ width: '80%', height: '1px', backgroundColor: 'rgba(255,255,255,0.3)' }} />
              <div>
                <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '3.5rem', color: '#fff', margin: 0 }}>5000+</p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'rgba(255,255,255,0.9)', margin: '8px 0 0 0' }}>Active students</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF / KEY FEATURES */}
      <section style={{
        borderBottom: '2px solid #1E293B',
        padding: '80px 40px',
        backgroundColor: 'transparent',
      }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 800,
            fontSize: '2rem',
            letterSpacing: '-1px',
            marginBottom: 60,
            color: '#1E293B',
            textAlign: 'center',
          }}>Why Join LaunchPad?</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40 }}>
            {[
              { title: 'Easy Registration', desc: 'Sign up for events in seconds', icon: '📝' },
              { title: 'Live Updates', desc: 'Get real-time event notifications', icon: '🔔' },
              { title: 'Community', desc: 'Connect with fellow students', icon: '👥' },
            ].map((feature, i) => (
              <div key={i} style={{
                backgroundColor: '#fff',
                border: '2px solid #1E293B',
                borderRadius: 16,
                padding: 32,
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>{feature.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.2rem', color: '#1E293B', marginBottom: 12, margin: '0 0 12px 0' }}>{feature.title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: '#64748B', margin: 0 }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEAD MAGNET / CTA */}
      <section style={{
        borderBottom: '2px solid #1E293B',
        padding: '80px 40px',
        backgroundColor: 'transparent',
      }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
          {/* Left - Text */}
          <div>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              fontSize: '2rem',
              letterSpacing: '-1px',
              marginBottom: 16,
              color: '#1E293B',
            }}>Never Miss an Event</h2>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.05rem',
              color: '#64748B',
              marginBottom: 32,
              lineHeight: 1.7,
            }}>
              Get personalized event recommendations based on your interests. Join thousands of MLRIT students discovering amazing opportunities on campus.
            </p>
            <Link to="/signup/info" style={{ textDecoration: 'none' }}>
              <button style={{
                backgroundColor: '#8B5CF6',
                color: '#fff',
                border: '2px solid #1E293B',
                borderRadius: 12,
                padding: '14px 36px',
                fontSize: '1.1rem',
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'transform 0.3s, box-shadow 0.3s',
                boxShadow: '6px 6px 0 #1E293B',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '8px 8px 0 #1E293B' }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '6px 6px 0 #1E293B' }}
              >
                Create Account
              </button>
            </Link>
          </div>

          {/* Right - Visual */}
          <div style={{
            backgroundColor: '#F472B6',
            borderRadius: 20,
            border: '2px solid #1E293B',
            height: 300,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '4rem', marginBottom: 12 }}>🎯</div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: '#1E293B', fontWeight: 600 }}>Personalized for You</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        backgroundColor: '#1E293B',
        color: '#F8FAFC',
        padding: '40px',
        textAlign: 'center',
      }}>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', margin: 0 }}>
          © 2026 LaunchPad - MLRIT's Event Management Platform. All rights reserved.
        </p>
      </footer>
      </div>
    </div>
  )
}
