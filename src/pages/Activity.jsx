import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const imgPass = "https://www.figma.com/api/mcp/asset/cfe9b86b-7d2f-4140-84e1-467128a52263"
const imgPass1 = "https://www.figma.com/api/mcp/asset/aa59c741-4330-4c74-b9f3-6905ea091bb4"

const passes = [
  { event: 'Equinox 2026', date: 'July 10–12', venue: 'MLRIT Campus', code: 'EQ2026-001', img: imgPass },
  { event: 'HackMania', date: 'July 18–19', venue: 'CS Block', code: 'HM2026-042', img: imgPass1 },
  { event: 'TechTalks', date: 'July 25', venue: 'Auditorium', code: 'TT2026-018', img: imgPass1 },
]

const achievements = [
  { icon: '🏆', title: 'First Event!', desc: 'Attended your first event' },
  { icon: '💻', title: 'Hackathon Hero', desc: 'Participated in a hackathon' },
]

export default function Activity() {
  return (
    <div style={{ backgroundColor: '#FFFDF5', minHeight: '100vh' }}>
      <Navbar />

      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '48px 40px' }}>

        <h1 style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 800,
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          letterSpacing: '-2px',
          marginBottom: 8,
          color: '#1E293B',
        }}>Your Activity</h1>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '1rem',
          color: '#64748B',
          marginBottom: 48,
          fontStyle: 'italic',
        }}>Every event you attend adds a new chapter to your story.</p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'start' }}>

          {/* ── LEFT: Registered Passes ── */}
          <div style={{
            backgroundColor: '#8B5CF6',
            border: '2px solid #1E293B',
            borderRadius: 24,
            boxShadow: '8px 8px 0 #E2E8F0',
            padding: '36px 32px',
          }}>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: '1.8rem',
              letterSpacing: '-0.5px',
              color: '#FFFFFF',
              marginBottom: 28,
            }}>Registered Passes</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {passes.map((pass, i) => (
                <div key={i} style={{
                  backgroundColor: '#FFFDF5',
                  border: '2px solid #1E293B',
                  borderRadius: 12,
                  display: 'flex',
                  overflow: 'hidden',
                  boxShadow: '4px 4px 0 rgba(0,0,0,0.15)',
                }}>
                  {/* Left ticket body */}
                  <div style={{ flex: 1, padding: '18px 20px', borderRight: '2px dashed rgba(30,41,59,0.25)', position: 'relative' }}>
                    {/* notch top */}
                    <div style={{
                      position: 'absolute', right: -10, top: -10,
                      width: 20, height: 20, borderRadius: '50%',
                      backgroundColor: '#8B5CF6', border: '2px solid #1E293B',
                    }} />
                    {/* notch bottom */}
                    <div style={{
                      position: 'absolute', right: -10, bottom: -10,
                      width: 20, height: 20, borderRadius: '50%',
                      backgroundColor: '#8B5CF6', border: '2px solid #1E293B',
                    }} />
                    <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.1rem', marginBottom: 4, color: '#1E293B' }}>{pass.event}</p>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: '#64748B' }}>{pass.date}</p>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: '#64748B' }}>{pass.venue}</p>
                  </div>
                  {/* Right stub */}
                  <div style={{
                    width: 70, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    padding: '10px 0',
                  }}>
                    <p style={{
                      fontFamily: 'var(--font-body)', fontWeight: 600,
                      fontSize: '0.65rem', color: '#64748B',
                      writingMode: 'vertical-rl', letterSpacing: '1px',
                    }}>{pass.code}</p>
                  </div>
                </div>
              ))}
            </div>

            <button style={{
              marginTop: 20, background: 'none', border: 'none',
              cursor: 'pointer', fontFamily: 'var(--font-body)',
              fontSize: '0.9rem', color: '#FFFFFF',
              textDecoration: 'underline', textUnderlineOffset: 4,
            }}>View More</button>
          </div>

          {/* ── RIGHT: Achievements + CTA ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>

            {/* Achievements card */}
            <div style={{
              backgroundColor: '#F472B6',
              border: '2px solid #1E293B',
              borderRadius: 24,
              boxShadow: '8px 8px 0 #E2E8F0',
              padding: '36px 32px',
            }}>
              <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '1.8rem',
                letterSpacing: '-0.5px',
                color: '#FFFFFF',
                marginBottom: 24,
              }}>Achievements</h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {achievements.map((a, i) => (
                  <div key={i} style={{
                    backgroundColor: '#FFFDF5',
                    border: '2px solid #1E293B', borderRadius: 12,
                    padding: '16px 20px',
                    display: 'flex', alignItems: 'center', gap: 16,
                    boxShadow: '4px 4px 0 rgba(0,0,0,0.15)',
                  }}>
                    <div style={{
                      width: 52, height: 52, borderRadius: 10,
                      backgroundColor: '#FBBF24', border: '2px solid #1E293B',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1.5rem', flexShrink: 0,
                    }}>{a.icon}</div>
                    <div>
                      <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem', color: '#1E293B' }}>{a.title}</p>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: '#64748B' }}>{a.desc}</p>
                    </div>
                  </div>
                ))}
                {/* Locked slots */}
                {[0, 1].map(i => (
                  <div key={i} style={{
                    border: '2px dashed rgba(30,41,59,0.25)', borderRadius: 12,
                    padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 16,
                    opacity: 0.5,
                  }}>
                    <div style={{
                      width: 52, height: 52, borderRadius: 10,
                      border: '2px dashed rgba(30,41,59,0.3)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1.3rem', flexShrink: 0, color: '#fff',
                    }}>?</div>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)' }}>Locked achievement</p>
                  </div>
                ))}
              </div>

              <button style={{
                marginTop: 16, background: 'none', border: 'none',
                cursor: 'pointer', fontFamily: 'var(--font-body)',
                fontSize: '0.9rem', color: '#FFFFFF',
                textDecoration: 'underline', textUnderlineOffset: 4,
              }}>View More</button>
            </div>

            {/* CTA: View Events */}
            <Link to="/events" style={{ textDecoration: 'none' }}>
              <div style={{
                border: '2px solid #1E293B', borderRadius: 16,
                overflow: 'hidden', cursor: 'pointer',
                boxShadow: '6px 6px 0 #1E293B',
                transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translate(-2px,-2px)'; e.currentTarget.style.boxShadow = '8px 8px 0 #1E293B' }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '6px 6px 0 #1E293B' }}
              >
                <div style={{ backgroundColor: '#1E293B', padding: '24px 32px' }}>
                  <p style={{
                    fontFamily: 'var(--font-body)', fontWeight: 600,
                    fontSize: '1.2rem', color: '#fff',
                  }}>View Events Calendar →</p>
                </div>
                <div style={{ backgroundColor: '#FBBF24', padding: '12px 32px' }}>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: '#1E293B', fontWeight: 500 }}>Discover upcoming events at MLRIT</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
