import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const imgBrick1 = "https://www.figma.com/api/mcp/asset/047d2305-3392-4d00-9e95-638322683e47"
const imgBRick3 = "https://www.figma.com/api/mcp/asset/3253db4a-2b85-4dc1-a4d3-a163513d9a3f"
const imgVector1 = "https://www.figma.com/api/mcp/asset/5e536937-38e5-4283-86da-9f93fefc10c3"
const imgCenterLogo = "https://www.figma.com/api/mcp/asset/d9eb3ba9-29d4-437f-826e-0db7d18d94bc"

// Hero card stack — rotate accent colors (violet/pink/amber) for each tag pill
const heroCards = [
  { title: 'Equinox 2026', cat: 'Innovation', date: 'Jul 10–12', bg: '#8B5CF6', tagBg: '#8B5CF6' },
  { title: 'HackMania', cat: 'Hackathon', date: 'Jul 18–19', bg: '#F472B6', tagBg: '#F472B6' },
  { title: 'TechTalks', cat: 'Seminar', date: 'Jul 25', bg: '#FBBF24', tagBg: '#FBBF24' },
]

export default function Home() {
  return (
    <div style={{ backgroundColor: '#FFFDF5', minHeight: '100vh' }}>
      <Navbar />

      {/* ── HERO ── */}
      <section style={{
        borderBottom: '2px solid #1E293B',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#FFFDF5',
      }}>
        {/* Decorative shapes (kept from original, subtle background) */}
        <div style={{ position:'absolute', left:-20, top:40, width:130, height:60, opacity:0.15 }}>
          <img src={imgBrick1} alt="" style={{ width:'100%', height:'100%', objectFit:'contain' }} />
        </div>
        <div style={{ position:'absolute', right:40, top:40, width:110, height:55, opacity:0.2 }}>
          <img src={imgBRick3} alt="" style={{ width:'100%', height:'100%', objectFit:'contain' }} />
        </div>
        <div style={{ position:'absolute', left:60, bottom:30, width:90, height:45, opacity:0.12 }}>
          <img src={imgBrick1} alt="" style={{ width:'100%', height:'100%', objectFit:'contain', transform:'rotate(6deg)' }} />
        </div>

        {/* Large yellow circle decoration behind text (Playful Geometric spec) */}
        <div style={{
          position: 'absolute',
          left: '-10%',
          top: '20%',
          width: 500,
          height: 500,
          borderRadius: '50%',
          backgroundColor: '#FBBF24',
          opacity: 0.25,
          zIndex: 0,
        }} />

        <div style={{
          maxWidth: 1400, margin: '0 auto',
          padding: '80px 40px 100px',
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 80, alignItems: 'center',
          position: 'relative',
          zIndex: 2,
        }}>
          {/* Left — Hero Text */}
          <div>
            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              fontSize: 'clamp(3rem, 7vw, 6rem)',
              lineHeight: 1,
              letterSpacing: '-3px',
              color: '#1E293B',
              marginBottom: 20,
            }}>
              Every Event{' '}
              <span style={{ color: '#8B5CF6' }}>One</span>{' '}
              Platform.
            </h1>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(1rem, 1.5vw, 1.4rem)',
              fontWeight: 400,
              color: '#64748B',
              marginBottom: 40,
            }}>
              MLRIT's Unified Event Management Platform
            </p>
            {/* Primary Candy Button */}
            <Link to="/events" style={{ textDecoration: 'none' }}>
              <button className="candy-btn" style={{
                backgroundColor: '#8B5CF6',
                color: '#fff',
                fontSize: '1.1rem',
                padding: '14px 36px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
              }}>
                View Events Calendar
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 24,
                  height: 24,
                  borderRadius: '50%',
                  backgroundColor: '#fff',
                  color: '#8B5CF6',
                  fontSize: '1rem',
                  fontWeight: 700,
                }}>→</span>
              </button>
            </Link>
          </div>

          {/* Right — Sticker card stack */}
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', alignItems: 'flex-end', paddingBottom: 20 }}>
            {heroCards.map((c, i) => (
              <div key={i} style={{
                backgroundColor: c.bg,
                border: '2px solid #1E293B',
                borderRadius: 24,
                boxShadow: '8px 8px 0 #1E293B',
                width: 180, height: 260,
                padding: 20,
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                transform: `rotate(${(i - 1) * 3}deg)`,
                marginBottom: i === 1 ? 0 : 20,
                flexShrink: 0,
                transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
                onMouseEnter={e => e.currentTarget.style.transform = `rotate(${(i - 1) * 3}deg) scale(1.05)`}
                onMouseLeave={e => e.currentTarget.style.transform = `rotate(${(i - 1) * 3}deg)`}
              >
                <span className="tag-pill" style={{
                  display: 'inline-block',
                  border: '2px solid #1E293B',
                  borderRadius: 20,
                  padding: '4px 12px',
                  fontSize: '0.7rem',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  backgroundColor: '#FFFFFF',
                  color: '#1E293B',
                  width: 'fit-content',
                }}>{c.cat}</span>
                <div>
                  <p style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    lineHeight: 1.1,
                    color: '#1E293B',
                  }}>{c.title}</p>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.8rem',
                    opacity: 0.7,
                    marginTop: 4,
                    color: '#1E293B',
                  }}>{c.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT / BRAND SECTION ── */}
      <section style={{
        borderBottom: '2px solid #1E293B',
        padding: '60px 40px',
        maxWidth: 1400, margin: '0 auto',
        display: 'flex', alignItems: 'center', gap: 60,
      }}>
        {/* Rotated logo with pop shadow */}
        <div style={{
          width: 120, height: 120,
          transform: 'rotate(10deg)',
          flexShrink: 0,
          border: '2px solid #1E293B',
          borderRadius: 24,
          boxShadow: '6px 6px 0 #F472B6',
          padding: 12,
          backgroundColor: '#FFFFFF',
        }}>
          <img src={imgCenterLogo} alt="LaunchPad Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </div>
        <div>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 800,
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            letterSpacing: '-2px',
            lineHeight: 1,
            color: '#1E293B',
            marginBottom: 12,
          }}>LaunchPad</h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1rem, 1.3vw, 1.2rem)',
            color: '#64748B',
            maxWidth: 600,
          }}>MLRIT's Unified Event Management Platform</p>
        </div>
        <div style={{ marginLeft: 'auto' }}>
          <div style={{ position: 'relative', width: 80, height: 40, opacity: 0.4 }}>
            <img src={imgVector1} alt="" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </section>

      {/* ── UPCOMING EVENTS ── */}
      <section style={{ padding: '60px 40px', maxWidth: 1400, margin: '0 auto' }}>
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 700,
          fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
          letterSpacing: '-1px',
          marginBottom: 32,
          color: '#1E293B',
        }}>Upcoming Events</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
          {[
            { title: 'Equinox 2026', cat: 'Innovation', date: 'Jul 10–12', color: '#8B5CF6' },
            { title: 'HackMania', cat: 'Hackathon', date: 'Jul 18–19', color: '#F472B6' },
            { title: 'TechTalks', cat: 'Seminar', date: 'Jul 25', color: '#FBBF24' },
            { title: 'Design Jam', cat: 'Workshop', date: 'Aug 2', color: '#34D399' },
          ].map((ev, i) => (
            <Link key={i} to="/events" style={{ textDecoration: 'none' }}>
              <div style={{
                backgroundColor: ev.color,
                border: '2px solid #1E293B',
                borderRadius: 24,
                boxShadow: '6px 6px 0 #E2E8F0',
                padding: 24, height: 220,
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                cursor: 'pointer',
                transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform='rotate(-1deg) scale(1.02)'; e.currentTarget.style.boxShadow='8px 8px 0 #E2E8F0' }}
                onMouseLeave={e => { e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='6px 6px 0 #E2E8F0' }}
              >
                <span style={{
                  display:'inline-block', border:'2px solid #1E293B',
                  borderRadius:20, padding:'3px 12px',
                  fontSize:'0.75rem', fontFamily:'var(--font-body)',
                  fontWeight:600, backgroundColor:'rgba(255,255,255,0.95)',
                  color:'#1E293B', width:'fit-content',
                }}>{ev.cat}</span>
                <div>
                  <p style={{ fontFamily:'var(--font-heading)', fontWeight:700, fontSize:'1.3rem', lineHeight:1.1, color:'#1E293B' }}>{ev.title}</p>
                  <p style={{ fontFamily:'var(--font-body)', fontSize:'0.85rem', opacity:0.75, marginTop:4, color:'#1E293B' }}>{ev.date} · MLRIT</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── HACKATHONS ── */}
      <section style={{ padding: '0 40px 80px', maxWidth: 1400, margin: '0 auto' }}>
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 700,
          fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
          letterSpacing: '-1px',
          marginBottom: 32,
          color: '#1E293B',
        }}>Hackathons</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
          {[
            { title: 'HackMania', date: 'Jul 18–19', color: '#F472B6' },
            { title: 'CodeSprint', date: 'Aug 8–9', color: '#8B5CF6' },
            { title: 'BuildFest', date: 'Aug 15', color: '#FBBF24' },
            { title: 'DevHunt', date: 'Sep 1–2', color: '#34D399' },
          ].map((ev, i) => (
            <div key={i} style={{
              backgroundColor: ev.color,
              border: '2px solid #1E293B',
              borderRadius: 24,
              boxShadow: '6px 6px 0 #E2E8F0',
              padding: 24, height: 200,
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              cursor: 'pointer',
              transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform='rotate(-1deg) scale(1.02)'; e.currentTarget.style.boxShadow='8px 8px 0 #E2E8F0' }}
              onMouseLeave={e => { e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='6px 6px 0 #E2E8F0' }}
            >
              <span style={{
                display:'inline-block', border:'2px solid #1E293B',
                borderRadius:20, padding:'3px 12px',
                fontSize:'0.75rem', fontFamily:'var(--font-body)',
                fontWeight:600, backgroundColor:'#fff', color:'#1E293B', width:'fit-content',
              }}>Hackathon</span>
              <div>
                <p style={{ fontFamily:'var(--font-heading)', fontWeight:700, fontSize:'1.3rem', lineHeight:1.1, color:'#1E293B' }}>{ev.title}</p>
                <p style={{ fontFamily:'var(--font-body)', fontSize:'0.85rem', opacity:0.75, marginTop:4, color:'#1E293B' }}>{ev.date}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <Link to="/events" style={{ textDecoration: 'none' }}>
            <button className="btn-secondary" style={{
              backgroundColor: 'transparent',
              color: '#1E293B',
              border: '2px solid #1E293B',
              borderRadius: 9999,
              padding: '12px 40px',
              fontSize: '1rem',
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'background-color 0.2s, color 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor='#FBBF24' }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor='transparent' }}
            >
              View More
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}
