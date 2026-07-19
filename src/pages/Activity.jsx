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
    <div style={{ backgroundColor: '#fef7f1', minHeight: '100vh' }}>
      <Navbar />

      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '48px 40px' }}>

        <h1 style={{
          fontFamily: 'Fraunces, serif', fontWeight: 700,
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          letterSpacing: '-2px', marginBottom: 8,
        }}>Your Activity</h1>
        <p style={{
          fontFamily: 'Anek Telugu, sans-serif', fontSize: '1rem',
          color: 'rgba(0,0,0,0.5)', marginBottom: 48,
          fontStyle: 'italic',
        }}>Every event you attend adds a new chapter to your story.</p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'start' }}>

          {/* ── LEFT: Registered Passes ── */}
          <div className="neo-card" style={{ backgroundColor: '#f45b49', padding: '36px 32px' }}>
            <h2 style={{
              fontFamily: 'Fraunces, serif', fontWeight: 700,
              fontSize: '1.8rem', letterSpacing: '-0.5px', color: '#fef7f1',
              marginBottom: 28,
            }}>Registered Passes</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {passes.map((pass, i) => (
                <div key={i} style={{
                  backgroundColor: '#fef7f1',
                  border: '2px solid #000', borderRadius: 12,
                  display: 'flex', overflow: 'hidden',
                  boxShadow: '4px 4px 0 rgba(0,0,0,0.25)',
                }}>
                  {/* Left ticket body */}
                  <div style={{ flex: 1, padding: '18px 20px', borderRight: '2px dashed rgba(0,0,0,0.25)', position: 'relative' }}>
                    {/* notch top */}
                    <div style={{
                      position: 'absolute', right: -10, top: -10,
                      width: 20, height: 20, borderRadius: '50%',
                      backgroundColor: '#f45b49', border: '2px solid #000',
                    }} />
                    {/* notch bottom */}
                    <div style={{
                      position: 'absolute', right: -10, bottom: -10,
                      width: 20, height: 20, borderRadius: '50%',
                      backgroundColor: '#f45b49', border: '2px solid #000',
                    }} />
                    <p style={{ fontFamily: 'Fraunces, serif', fontWeight: 700, fontSize: '1.1rem', marginBottom: 4 }}>{pass.event}</p>
                    <p style={{ fontFamily: 'Anek Telugu, sans-serif', fontSize: '0.8rem', color: 'rgba(0,0,0,0.55)' }}>{pass.date}</p>
                    <p style={{ fontFamily: 'Anek Telugu, sans-serif', fontSize: '0.8rem', color: 'rgba(0,0,0,0.55)' }}>{pass.venue}</p>
                  </div>
                  {/* Right stub */}
                  <div style={{
                    width: 70, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    padding: '10px 0',
                  }}>
                    <p style={{
                      fontFamily: 'Anek Telugu, sans-serif', fontWeight: 600,
                      fontSize: '0.65rem', color: 'rgba(0,0,0,0.5)',
                      writingMode: 'vertical-rl', letterSpacing: '1px',
                    }}>{pass.code}</p>
                  </div>
                </div>
              ))}
            </div>

            <button style={{
              marginTop: 20, background: 'none', border: 'none',
              cursor: 'pointer', fontFamily: 'Anek Telugu, sans-serif',
              fontSize: '0.9rem', color: '#fef7f1',
              textDecoration: 'underline', textUnderlineOffset: 4,
            }}>View More</button>
          </div>

          {/* ── RIGHT: Achievements + CTA ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>

            {/* Achievements card */}
            <div className="neo-card" style={{ backgroundColor: '#f45b49', padding: '36px 32px' }}>
              <h2 style={{
                fontFamily: 'Fraunces, serif', fontWeight: 700,
                fontSize: '1.8rem', letterSpacing: '-0.5px', color: '#fef7f1',
                marginBottom: 24,
              }}>Achievements</h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {achievements.map((a, i) => (
                  <div key={i} style={{
                    backgroundColor: '#fef7f1',
                    border: '2px solid #000', borderRadius: 12,
                    padding: '16px 20px',
                    display: 'flex', alignItems: 'center', gap: 16,
                    boxShadow: '4px 4px 0 rgba(0,0,0,0.2)',
                  }}>
                    <div style={{
                      width: 52, height: 52, borderRadius: 10,
                      backgroundColor: '#f45b49', border: '2px solid #000',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1.5rem', flexShrink: 0,
                    }}>{a.icon}</div>
                    <div>
                      <p style={{ fontFamily: 'Fraunces, serif', fontWeight: 700, fontSize: '1rem' }}>{a.title}</p>
                      <p style={{ fontFamily: 'Anek Telugu, sans-serif', fontSize: '0.8rem', color: 'rgba(0,0,0,0.5)' }}>{a.desc}</p>
                    </div>
                  </div>
                ))}
                {/* Locked slots */}
                {[0, 1].map(i => (
                  <div key={i} style={{
                    border: '2px dashed rgba(0,0,0,0.25)', borderRadius: 12,
                    padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 16,
                    opacity: 0.45,
                  }}>
                    <div style={{
                      width: 52, height: 52, borderRadius: 10,
                      border: '2px dashed rgba(0,0,0,0.3)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1.3rem', flexShrink: 0,
                    }}>?</div>
                    <p style={{ fontFamily: 'Anek Telugu, sans-serif', fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>Locked achievement</p>
                  </div>
                ))}
              </div>

              <button style={{
                marginTop: 16, background: 'none', border: 'none',
                cursor: 'pointer', fontFamily: 'Anek Telugu, sans-serif',
                fontSize: '0.9rem', color: '#fef7f1',
                textDecoration: 'underline', textUnderlineOffset: 4,
              }}>View More</button>
            </div>

            {/* CTA: View Events */}
            <Link to="/events" style={{ textDecoration: 'none' }}>
              <div style={{
                border: '2px solid #000', borderRadius: 16,
                overflow: 'hidden', cursor: 'pointer',
                boxShadow: '6px 6px 0 #000',
                transition: 'transform 0.1s, box-shadow 0.1s',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translate(3px,3px)'; e.currentTarget.style.boxShadow = '3px 3px 0 #000' }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '6px 6px 0 #000' }}
              >
                <div style={{ backgroundColor: '#000', padding: '24px 32px' }}>
                  <p style={{
                    fontFamily: 'Anek Telugu, sans-serif', fontWeight: 600,
                    fontSize: '1.2rem', color: '#fff',
                  }}>View Events Calendar →</p>
                </div>
                <div style={{ backgroundColor: '#f45b49', padding: '12px 32px' }}>
                  <p style={{ fontFamily: 'Anek Telugu, sans-serif', fontSize: '0.85rem', color: '#fff', opacity: 0.85 }}>Discover upcoming events at MLRIT</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
