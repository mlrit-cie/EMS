import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const imgBrick1 = "https://www.figma.com/api/mcp/asset/047d2305-3392-4d00-9e95-638322683e47"
const imgBRick3 = "https://www.figma.com/api/mcp/asset/3253db4a-2b85-4dc1-a4d3-a163513d9a3f"
const imgVector1 = "https://www.figma.com/api/mcp/asset/5e536937-38e5-4283-86da-9f93fefc10c3"
const imgCenterLogo = "https://www.figma.com/api/mcp/asset/d9eb3ba9-29d4-437f-826e-0db7d18d94bc"

const cards = [
  { title: 'Equinox 2026', cat: 'Innovation', date: 'Jul 10–12', color: '#f45b49' },
  { title: 'HackMania', cat: 'Hackathon', date: 'Jul 18–19', color: '#f1a242' },
  { title: 'TechTalks', cat: 'Seminar', date: 'Jul 25', color: '#fef7f1' },
]

export default function Home() {
  return (
    <div style={{ backgroundColor: '#fef7f1', minHeight: '100vh' }}>
      <Navbar />

      {/* ── HERO ── */}
      <section style={{
        borderBottom: '2px solid #000',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* decorative bricks */}
        <div style={{ position:'absolute', left:-20, top:40, width:130, height:60, opacity:0.35 }}>
          <img src={imgBrick1} alt="" style={{ width:'100%', height:'100%', objectFit:'contain' }} />
        </div>
        <div style={{ position:'absolute', right:40, top:40, width:110, height:55, opacity:0.4 }}>
          <img src={imgBRick3} alt="" style={{ width:'100%', height:'100%', objectFit:'contain' }} />
        </div>
        <div style={{ position:'absolute', left:60, bottom:30, width:90, height:45, opacity:0.25 }}>
          <img src={imgBrick1} alt="" style={{ width:'100%', height:'100%', objectFit:'contain', transform:'rotate(6deg)' }} />
        </div>

        <div style={{
          maxWidth: 1400, margin: '0 auto',
          padding: '60px 40px 80px',
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 60, alignItems: 'center',
        }}>
          {/* Left */}
          <div>
            <h1 style={{
              fontFamily: 'Fraunces, serif', fontWeight: 700,
              fontSize: 'clamp(3rem, 7vw, 6rem)',
              lineHeight: 1, letterSpacing: '-3px', color: '#000',
              marginBottom: 20,
            }}>
              Every Event{' '}
              <span style={{ color: '#f45b49' }}>One</span>{' '}
              Platform.
            </h1>
            <p style={{
              fontFamily: 'Anek Telugu, sans-serif',
              fontSize: 'clamp(1rem, 1.5vw, 1.4rem)',
              color: 'rgba(0,0,0,0.6)', marginBottom: 40,
            }}>
              MLRIT's Unified Event Management Platform
            </p>
            <Link to="/events" style={{ textDecoration: 'none' }}>
              <button className="neo-btn" style={{
                backgroundColor: '#f45b49', color: '#fff',
                fontSize: '1.1rem', padding: '14px 36px',
              }}>
                View Events Calendar →
              </button>
            </Link>
          </div>

          {/* Right — event cards stack */}
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', alignItems: 'flex-end', paddingBottom: 20 }}>
            {cards.map((c, i) => (
              <div key={i} className="neo-card" style={{
                backgroundColor: c.color,
                width: 180, height: 260,
                padding: 20,
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                transform: `rotate(${(i - 1) * 3}deg)`,
                marginBottom: i === 1 ? 0 : 20,
                flexShrink: 0,
              }}>
                <span style={{
                  display: 'inline-block',
                  border: '2px solid #000', borderRadius: 20,
                  padding: '2px 10px', fontSize: '0.7rem',
                  fontFamily: 'Anek Telugu, sans-serif', fontWeight: 600,
                  backgroundColor: '#fff',
                }}>{c.cat}</span>
                <div>
                  <p style={{ fontFamily: 'Fraunces, serif', fontWeight: 700, fontSize: '1.1rem', lineHeight: 1.1 }}>{c.title}</p>
                  <p style={{ fontFamily: 'Anek Telugu, sans-serif', fontSize: '0.8rem', opacity: 0.6, marginTop: 4 }}>{c.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT / BRAND SECTION ── */}
      <section style={{
        borderBottom: '2px solid #000',
        padding: '60px 40px',
        maxWidth: 1400, margin: '0 auto',
        display: 'flex', alignItems: 'center', gap: 60,
      }}>
        <div style={{ width: 120, height: 120, transform: 'rotate(10deg)', flexShrink: 0 }}>
          <img src={imgCenterLogo} alt="LaunchPad Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </div>
        <div>
          <h2 style={{
            fontFamily: 'Fraunces, serif', fontWeight: 700,
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            letterSpacing: '-2px', lineHeight: 1, color: '#000', marginBottom: 12,
          }}>LaunchPad</h2>
          <p style={{
            fontFamily: 'Anek Telugu, sans-serif',
            fontSize: 'clamp(1rem, 1.3vw, 1.2rem)',
            color: 'rgba(0,0,0,0.55)', maxWidth: 600,
          }}>MLRIT's Unified Event Management Platform</p>
        </div>
        <div style={{ marginLeft: 'auto' }}>
          <div style={{ position: 'relative', width: 80, height: 40 }}>
            <img src={imgVector1} alt="" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </section>

      {/* ── UPCOMING EVENTS ── */}
      <section style={{ padding: '60px 40px', maxWidth: 1400, margin: '0 auto' }}>
        <h2 style={{
          fontFamily: 'Fraunces, serif', fontWeight: 700,
          fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
          letterSpacing: '-1px', marginBottom: 32,
        }}>Upcoming Events</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
          {[
            { title: 'Equinox 2026', cat: 'Innovation', date: 'Jul 10–12', color: '#f45b49' },
            { title: 'HackMania', cat: 'Hackathon', date: 'Jul 18–19', color: '#f1a242' },
            { title: 'TechTalks', cat: 'Seminar', date: 'Jul 25', color: '#f45b49' },
            { title: 'Design Jam', cat: 'Workshop', date: 'Aug 2', color: '#f1a242' },
          ].map((ev, i) => (
            <Link key={i} to="/events" style={{ textDecoration: 'none' }}>
              <div className="neo-card" style={{
                backgroundColor: ev.color, padding: 24, height: 220,
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                cursor: 'pointer', transition: 'transform 0.1s, box-shadow 0.1s',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform='translate(3px,3px)'; e.currentTarget.style.boxShadow='3px 3px 0 #000' }}
                onMouseLeave={e => { e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='6px 6px 0 #000' }}
              >
                <span style={{
                  display:'inline-block', border:'2px solid #000',
                  borderRadius:20, padding:'3px 12px',
                  fontSize:'0.75rem', fontFamily:'Anek Telugu, sans-serif',
                  fontWeight:600, backgroundColor:'rgba(255,255,255,0.85)', width:'fit-content',
                }}>{ev.cat}</span>
                <div>
                  <p style={{ fontFamily:'Fraunces, serif', fontWeight:700, fontSize:'1.3rem', lineHeight:1.1 }}>{ev.title}</p>
                  <p style={{ fontFamily:'Anek Telugu, sans-serif', fontSize:'0.85rem', opacity:0.65, marginTop:4 }}>{ev.date} · MLRIT</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── HACKATHONS ── */}
      <section style={{ padding: '0 40px 80px', maxWidth: 1400, margin: '0 auto' }}>
        <h2 style={{
          fontFamily: 'Fraunces, serif', fontWeight: 700,
          fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
          letterSpacing: '-1px', marginBottom: 32,
        }}>Hackathons</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
          {[
            { title: 'HackMania', date: 'Jul 18–19' },
            { title: 'CodeSprint', date: 'Aug 8–9' },
            { title: 'BuildFest', date: 'Aug 15' },
            { title: 'DevHunt', date: 'Sep 1–2' },
          ].map((ev, i) => (
            <div key={i} className="neo-card" style={{
              backgroundColor: i % 2 === 0 ? '#f1a242' : '#fef7f1',
              padding: 24, height: 200,
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              cursor: 'pointer',
            }}>
              <span style={{
                display:'inline-block', border:'2px solid #000',
                borderRadius:20, padding:'3px 12px',
                fontSize:'0.75rem', fontFamily:'Anek Telugu, sans-serif',
                fontWeight:600, backgroundColor:'#fff', width:'fit-content',
              }}>Hackathon</span>
              <div>
                <p style={{ fontFamily:'Fraunces, serif', fontWeight:700, fontSize:'1.3rem', lineHeight:1.1 }}>{ev.title}</p>
                <p style={{ fontFamily:'Anek Telugu, sans-serif', fontSize:'0.85rem', opacity:0.65, marginTop:4 }}>{ev.date}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <Link to="/events" style={{ textDecoration: 'none' }}>
            <button className="neo-btn" style={{ backgroundColor: '#f1a242', color: '#000', padding: '12px 40px', fontSize: '1rem' }}>
              View More
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}
