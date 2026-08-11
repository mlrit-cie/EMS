import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const imgHeart = "https://www.figma.com/api/mcp/asset/818732b2-a469-4a6d-98d0-395813d27c68"

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
    <div style={{ backgroundColor: '#FFFDF5', minHeight: '100vh' }}>
      <Navbar />

      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '48px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '420px 1fr', gap: 40, alignItems: 'start' }}>

          {/* ── LEFT: Calendar card ── */}
          <div>
            <div style={{
              backgroundColor: '#8B5CF6',
              border: '2px solid #1E293B',
              borderRadius: 24,
              boxShadow: '8px 8px 0 #1E293B',
              padding: '28px 24px',
              overflow: 'hidden',
            }}>

              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                <p style={{ fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: '1rem', color: 'rgba(255,255,255,0.85)' }}>Event Calendar</p>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                  <button style={{ background: 'none', border: 'none', color: '#fff', fontSize: '1.2rem', cursor: 'pointer' }}>‹</button>
                  <button style={{ background: 'none', border: 'none', color: '#fff', fontSize: '1.2rem', cursor: 'pointer' }}>›</button>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 20 }}>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '3rem', color: '#fff', letterSpacing: '-2px' }}>July</h2>
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '2rem', color: '#fff', letterSpacing: '-1px', opacity: 0.8 }}>2026</span>
              </div>

              <div style={{ borderTop: '2px solid rgba(255,255,255,0.4)', paddingTop: 16 }}>
                {/* Day headers */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', marginBottom: 8 }}>
                  {DAYS.map(d => (
                    <div key={d} style={{ textAlign: 'center', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', padding: '4px 0' }}>{d}</div>
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
                            fontFamily: 'var(--font-body)', fontWeight: isSel || isEvent ? 700 : 500,
                            fontSize: '0.9rem',
                            color: date ? (isSel ? '#8B5CF6' : '#fff') : 'transparent',
                            cursor: date ? 'pointer' : 'default',
                            borderRadius: 8,
                            backgroundColor: isSel ? '#fff' : isEvent ? 'rgba(255,255,255,0.25)' : 'transparent',
                            transition: 'background 0.2s',
                          }}
                        >{date || ''}</div>
                      )
                    })}
                  </div>
                ))}
              </div>
            </div>

            {/* Duration card */}
            <div style={{
              backgroundColor: '#FBBF24',
              border: '2px solid #1E293B',
              borderRadius: 16,
              boxShadow: '6px 6px 0 #1E293B',
              padding: '20px 24px',
              marginTop: 20,
            }}>
              <p style={{ fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: '0.85rem', color: 'rgba(30,41,59,0.65)', marginBottom: 4 }}>Duration</p>
              <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.6rem', color: '#1E293B', letterSpacing: '-0.5px' }}>10th – 12th July</p>
            </div>
          </div>

          {/* ── RIGHT: Event detail panel ── */}
          <div>
            {/* Big event header card */}
            <div style={{
              backgroundColor: '#8B5CF6',
              border: '2px solid #1E293B',
              borderRadius: 24,
              boxShadow: '8px 8px 0 #1E293B',
              padding: '40px 36px',
              marginBottom: 24,
              position: 'relative',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <h2 style={{
                  fontFamily: 'var(--font-heading)', fontWeight: 800,
                  fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                  color: '#fff', letterSpacing: '-2px', lineHeight: 1,
                }}>Equinox</h2>
                {/* Heart button with pop shadow */}
                <button style={{
                  width: 52, height: 52,
                  backgroundColor: '#fff', border: '2px solid #1E293B',
                  borderRadius: '50%', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '4px 4px 0 #1E293B', flexShrink: 0,
                  transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseLeave={e => e.currentTarget.style.transform = ''}
                >
                  <img src={imgHeart} alt="Favourite" style={{ width: 22, height: 22, objectFit: 'contain' }} />
                </button>
              </div>

              <p style={{
                fontFamily: 'var(--font-body)', fontWeight: 400,
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
                    backgroundColor: 'rgba(255,255,255,0.2)', border: '2px solid rgba(255,255,255,0.5)',
                    borderRadius: 9999, padding: '6px 14px',
                    fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: '#fff',
                  }}>{icon} {text}</span>
                ))}
              </div>
            </div>

            {/* Entry fee + actions */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 16 }}>
              <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '1.1rem', color: '#1E293B' }}>Entry Fee : ₹369/-</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
              <button style={{
                backgroundColor: '#FFFDF5',
                color: '#1E293B',
                border: '2px solid #1E293B',
                borderRadius: 9999,
                padding: '16px',
                fontSize: '1rem',
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: '4px 4px 0 #1E293B',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform='translate(-1px,-1px)'; e.currentTarget.style.boxShadow='5px 5px 0 #1E293B' }}
                onMouseLeave={e => { e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='4px 4px 0 #1E293B' }}
              >View Details</button>
              <button style={{
                backgroundColor: '#8B5CF6',
                color: '#fff',
                border: '2px solid #1E293B',
                borderRadius: 9999,
                padding: '16px',
                fontSize: '1rem',
                fontFamily: 'var(--font-body)',
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: '4px 4px 0 #1E293B',
                transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform='translate(-2px,-2px)'; e.currentTarget.style.boxShadow='6px 6px 0 #1E293B' }}
                onMouseLeave={e => { e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='4px 4px 0 #1E293B' }}
              >Register</button>
            </div>

            <div style={{ textAlign: 'center' }}>
              <button style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: 'var(--font-body)', fontSize: '0.9rem',
                color: '#64748B',
                textDecoration: 'underline', textUnderlineOffset: 4,
              }}>View More Events</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
