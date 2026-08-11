import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

// Rotate accent colors for variety
const events = [
  { title: 'Equinox 2026', cat: 'Innovation', date: 'Jul 10–12', fee: '₹369', color: '#8B5CF6' },
  { title: 'HackMania', cat: 'Hackathon', date: 'Jul 18–19', fee: '₹199', color: '#F472B6' },
  { title: 'TechTalks', cat: 'Seminar', date: 'Jul 25', fee: 'Free', color: '#FBBF24' },
  { title: 'Design Jam', cat: 'Workshop', date: 'Aug 2', fee: '₹99', color: '#34D399' },
  { title: 'CodeSprint', cat: 'Hackathon', date: 'Aug 8–9', fee: '₹149', color: '#8B5CF6' },
  { title: 'BuildFest', cat: 'Hackathon', date: 'Aug 15', fee: 'Free', color: '#F472B6' },
  { title: 'PhotoWalk', cat: 'Cultural', date: 'Aug 20', fee: 'Free', color: '#FBBF24' },
  { title: 'DevHunt', cat: 'Hackathon', date: 'Sep 1–2', fee: '₹249', color: '#34D399' },
]

const filters = ['All', 'Hackathon', 'Innovation', 'Seminar', 'Workshop', 'Cultural']

export default function Events() {
  return (
    <div style={{ backgroundColor: '#FFFDF5', minHeight: '100vh' }}>
      <Navbar />

      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '48px 40px' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 32 }}>
          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            letterSpacing: '-1.5px',
            color: '#1E293B',
          }}>All Events</h1>
          <Link to="/calendar" style={{ textDecoration: 'none' }}>
            <button className="candy-btn" style={{
              backgroundColor: '#8B5CF6',
              color: '#fff',
              padding: '10px 28px',
              fontSize: '0.95rem',
            }}>
              View Calendar
            </button>
          </Link>
        </div>

        {/* Filter chips */}
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 36 }}>
          {filters.map(f => (
            <button key={f} style={{
              border: '2px solid #1E293B',
              borderRadius: 9999,
              padding: '8px 20px',
              fontSize: '0.85rem',
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              backgroundColor: f === 'All' ? '#8B5CF6' : '#FFFDF5',
              color: f === 'All' ? '#fff' : '#1E293B',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: f === 'All' ? '3px 3px 0 #1E293B' : 'none',
            }}
              onMouseEnter={e => { if (f !== 'All') { e.currentTarget.style.backgroundColor = '#8B5CF6'; e.currentTarget.style.color = '#fff' } }}
              onMouseLeave={e => { if (f !== 'All') { e.currentTarget.style.backgroundColor = '#FFFDF5'; e.currentTarget.style.color = '#1E293B' } }}
            >{f}</button>
          ))}
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
          {events.map((ev, i) => (
            <div key={i} style={{
              backgroundColor: ev.color,
              border: '2px solid #1E293B',
              borderRadius: 24,
              boxShadow: '6px 6px 0 #E2E8F0',
              padding: 24,
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              height: 260, cursor: 'pointer',
              transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'rotate(-1deg) scale(1.02)'; e.currentTarget.style.boxShadow = '8px 8px 0 #E2E8F0' }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '6px 6px 0 #E2E8F0' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span style={{
                  display: 'inline-block', border: '2px solid #1E293B', borderRadius: 20,
                  padding: '4px 12px', fontSize: '0.72rem',
                  fontFamily: 'var(--font-body)', fontWeight: 600,
                  backgroundColor: 'rgba(255,255,255,0.95)',
                  color: '#1E293B',
                }}>{ev.cat}</span>
                <span style={{
                  fontFamily: 'var(--font-body)', fontWeight: 700,
                  fontSize: '0.85rem', color: '#1E293B',
                }}>{ev.fee}</span>
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.2rem', lineHeight: 1.15, marginBottom: 4, color: '#1E293B' }}>{ev.title}</p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', opacity: 0.7, marginBottom: 12, color: '#1E293B' }}>{ev.date}</p>
                <button style={{
                  width: '100%',
                  backgroundColor: '#1E293B',
                  color: '#fff',
                  border: '2px solid #1E293B',
                  borderRadius: 9999,
                  padding: '10px 0',
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  cursor: 'pointer',
                  boxShadow: '3px 3px 0 rgba(0,0,0,0.15)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform='translate(-1px,-1px)'; e.currentTarget.style.boxShadow='4px 4px 0 rgba(0,0,0,0.2)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='3px 3px 0 rgba(0,0,0,0.15)' }}
                >Register</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
