import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const events = [
  { title: 'Equinox 2026', cat: 'Innovation', date: 'Jul 10–12', fee: '₹369', color: '#f45b49' },
  { title: 'HackMania', cat: 'Hackathon', date: 'Jul 18–19', fee: '₹199', color: '#f1a242' },
  { title: 'TechTalks', cat: 'Seminar', date: 'Jul 25', fee: 'Free', color: '#fef7f1' },
  { title: 'Design Jam', cat: 'Workshop', date: 'Aug 2', fee: '₹99', color: '#f1a242' },
  { title: 'CodeSprint', cat: 'Hackathon', date: 'Aug 8–9', fee: '₹149', color: '#f45b49' },
  { title: 'BuildFest', cat: 'Hackathon', date: 'Aug 15', fee: 'Free', color: '#fef7f1' },
  { title: 'PhotoWalk', cat: 'Cultural', date: 'Aug 20', fee: 'Free', color: '#f1a242' },
  { title: 'DevHunt', cat: 'Hackathon', date: 'Sep 1–2', fee: '₹249', color: '#f45b49' },
]

const filters = ['All', 'Hackathon', 'Innovation', 'Seminar', 'Workshop', 'Cultural']

export default function Events() {
  return (
    <div style={{ backgroundColor: '#fef7f1', minHeight: '100vh' }}>
      <Navbar />

      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '48px 40px' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 32 }}>
          <h1 style={{
            fontFamily: 'Fraunces, serif', fontWeight: 700,
            fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-1.5px',
          }}>All Events</h1>
          <Link to="/calendar" style={{ textDecoration: 'none' }}>
            <button className="neo-btn" style={{ backgroundColor: '#f45b49', color: '#fff', padding: '10px 28px', fontSize: '0.95rem' }}>
              View Calendar
            </button>
          </Link>
        </div>

        {/* Filter chips */}
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 36 }}>
          {filters.map(f => (
            <button key={f} style={{
              border: '2px solid #000', borderRadius: 20,
              padding: '6px 18px', fontSize: '0.85rem',
              fontFamily: 'Anek Telugu, sans-serif', fontWeight: 500,
              backgroundColor: f === 'All' ? '#000' : '#fef7f1',
              color: f === 'All' ? '#fff' : '#000',
              cursor: 'pointer',
              transition: 'all 0.15s',
            }}
              onMouseEnter={e => { if (f !== 'All') { e.currentTarget.style.backgroundColor = '#f45b49'; e.currentTarget.style.color = '#fff' } }}
              onMouseLeave={e => { if (f !== 'All') { e.currentTarget.style.backgroundColor = '#fef7f1'; e.currentTarget.style.color = '#000' } }}
            >{f}</button>
          ))}
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
          {events.map((ev, i) => (
            <div key={i} className="neo-card" style={{
              backgroundColor: ev.color, padding: 24,
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              height: 240, cursor: 'pointer',
              transition: 'transform 0.1s, box-shadow 0.1s',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translate(3px,3px)'; e.currentTarget.style.boxShadow = '3px 3px 0 #000' }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '6px 6px 0 #000' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span style={{
                  display: 'inline-block', border: '2px solid #000', borderRadius: 20,
                  padding: '3px 12px', fontSize: '0.72rem',
                  fontFamily: 'Anek Telugu, sans-serif', fontWeight: 600,
                  backgroundColor: 'rgba(255,255,255,0.9)',
                }}>{ev.cat}</span>
                <span style={{
                  fontFamily: 'Anek Telugu, sans-serif', fontWeight: 600,
                  fontSize: '0.8rem', color: '#000',
                }}>{ev.fee}</span>
              </div>
              <div>
                <p style={{ fontFamily: 'Fraunces, serif', fontWeight: 700, fontSize: '1.2rem', lineHeight: 1.15, marginBottom: 4 }}>{ev.title}</p>
                <p style={{ fontFamily: 'Anek Telugu, sans-serif', fontSize: '0.8rem', opacity: 0.6, marginBottom: 12 }}>{ev.date}</p>
                <button className="neo-btn" style={{
                  width: '100%', backgroundColor: '#000', color: '#fff',
                  padding: '8px 0', fontSize: '0.85rem',
                  boxShadow: '3px 3px 0 rgba(0,0,0,0.3)',
                }}>Register</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
