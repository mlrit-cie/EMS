import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const imgHeart = "https://www.figma.com/api/mcp/asset/818732b2-a469-4a6d-98d0-395813d27c68"
const imgEllipse9 = "https://www.figma.com/api/mcp/asset/944a89b1-fab2-4b4d-8d55-113e89834f1a"

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const DATES = [
  [null, 1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12, 13],
  [14, 15, 16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25, 26, 27],
  [28, 29, 30, 31, null, null, null],
]
const EVENT_DAYS = [10, 11, 12]

export default function Calendar() {
  const [selected, setSelected] = useState(10)

  return (
    <div style={{ backgroundColor: '#fef7f1', minHeight: '100vh' }}>
      <Navbar />

      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '48px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '420px 1fr', gap: 40, alignItems: 'start' }}>

          {/* ── LEFT: Calendar card ── */}
          <div>
            <div className="neo-card" style={{ backgroundColor: '#f45b49', padding: '28px 24px', overflow: 'hidden' }}>

              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                <p style={{ fontFamily: 'Anek Telugu, sans-serif', fontWeight: 300, fontSize: '1rem', color: '#fff', opacity: 0.85 }}>Event Calendar</p>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                  <button style={{ background: 'none', border: 'none', color: '#fff', fontSize: '1.2rem', cursor: 'pointer' }}>‹</button>
                  <button style={{ background: 'none', border: 'none', color: '#fff', fontSize: '1.2rem', cursor: 'pointer' }}>›</button>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 20 }}>
                <h2 style={{ fontFamily: 'Anek Telugu, sans-serif', fontWeight: 700, fontSize: '3rem', color: '#fff', letterSpacing: '-2px' }}>July</h2>
                <span style={{ fontFamily: 'Anek Telugu, sans-serif', fontWeight: 700, fontSize: '2rem', color: '#fff', letterSpacing: '-1px', opacity: 0.8 }}>2026</span>
              </div>

              <div style={{ borderTop: '2px solid rgba(255,255,255,0.4)', paddingTop: 16 }}>
                {/* Day headers */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', marginBottom: 8 }}>
                  {DAYS.map(d => (
                    <div key={d} style={{ textAlign: 'center', fontFamily: 'Anek Telugu, sans-serif', fontWeight: 600, fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', padding: '4px 0' }}>{d}</div>
                  ))}
                </div>
                {/* Date grid */}
                {DATES.map((week, wi) => (
                  <div key={wi} style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)' }}>
                    {week.map((date, di) => {
                      const isEvent = date && EVENT_DAYS.includes(date)
                      const isSel = date === selected
                      return (
                        <div
                          key={di}
                          onClick={() => date && setSelected(date)}
                          style={{
                            textAlign: 'center', padding: '8px 0',
                            fontFamily: 'Anek Telugu, sans-serif', fontWeight: 500,
                            fontSize: '0.9rem',
                            color: date ? (isSel ? '#f45b49' : '#fff') : 'transparent',
                            cursor: date ? 'pointer' : 'default',
                            borderRadius: 8,
                            backgroundColor: isSel ? '#fff' : isEvent ? 'rgba(255,255,255,0.25)' : 'transparent',
                            fontWeight: isEvent ? 700 : 500,
                            transition: 'background 0.15s',
                          }}
                        >{date || ''}</div>
                      )
                    })}
                  </div>
                ))}
              </div>
            </div>

            {/* Duration card */}
            <div className="neo-card" style={{ backgroundColor: '#f45b49', padding: '20px 24px', marginTop: 20 }}>
              <p style={{ fontFamily: 'Anek Telugu, sans-serif', fontWeight: 400, fontSize: '0.85rem', color: 'rgba(255,255,255,0.75)', marginBottom: 4 }}>Duration</p>
              <p style={{ fontFamily: 'Anek Telugu, sans-serif', fontWeight: 700, fontSize: '1.6rem', color: '#fff', letterSpacing: '-0.5px' }}>10th – 12th July</p>
            </div>
          </div>

          {/* ── RIGHT: Event detail panel ── */}
          <div>
            {/* Big event header card */}
            <div className="neo-card" style={{
              backgroundColor: '#f45b49', padding: '40px 36px',
              marginBottom: 24, position: 'relative',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <h2 style={{
                  fontFamily: 'Anek Telugu, sans-serif', fontWeight: 600,
                  fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                  color: '#fff', letterSpacing: '-2px', lineHeight: 1,
                }}>Equinox</h2>
                <button style={{
                  width: 52, height: 52,
                  backgroundColor: '#fff', border: '2px solid #000',
                  borderRadius: '50%', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '3px 3px 0 #000', flexShrink: 0,
                  transition: 'transform 0.1s',
                }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={e => e.currentTarget.style.transform = ''}
                >
                  <img src={imgHeart} alt="Favourite" style={{ width: 22, height: 22, objectFit: 'contain' }} />
                </button>
              </div>

              <p style={{
                fontFamily: 'Anek Telugu, sans-serif', fontWeight: 300,
                fontSize: '1rem', color: 'rgba(255,255,255,0.9)',
                lineHeight: 1.6, marginTop: 24, maxWidth: 600,
              }}>
                Equinox is MLRIT's flagship innovation and entrepreneurship event, bringing together
                students, creators, problem-solvers, and aspiring entrepreneurs under one platform.
              </p>

              <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
                {[['📅', 'Jul 10–12, 2026'], ['📍', 'MLRIT Campus'], ['💰', '₹369']].map(([icon, text]) => (
                  <span key={text} style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    backgroundColor: 'rgba(255,255,255,0.2)', border: '1.5px solid rgba(255,255,255,0.5)',
                    borderRadius: 20, padding: '6px 14px',
                    fontFamily: 'Anek Telugu, sans-serif', fontSize: '0.85rem', color: '#fff',
                  }}>{icon} {text}</span>
                ))}
              </div>
            </div>

            {/* Entry fee + actions */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 16 }}>
              <p style={{ fontFamily: 'Anek Telugu, sans-serif', fontWeight: 600, fontSize: '1.1rem' }}>Entry Fee : ₹369/-</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
              <button className="neo-btn" style={{
                backgroundColor: '#fef7f1', color: '#000',
                padding: '16px', fontSize: '1rem', width: '100%',
              }}>View Details</button>
              <button className="neo-btn" style={{
                backgroundColor: '#f45b49', color: '#fff',
                padding: '16px', fontSize: '1rem', width: '100%',
              }}>Register</button>
            </div>

            <div style={{ textAlign: 'center' }}>
              <button style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: 'Anek Telugu, sans-serif', fontSize: '0.9rem',
                color: 'rgba(0,0,0,0.5)',
                textDecoration: 'underline', textUnderlineOffset: 4,
              }}>View More Events</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
