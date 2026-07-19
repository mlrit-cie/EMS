import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const imgLogo = "https://www.figma.com/api/mcp/asset/df2e486d-7037-4124-b77e-fdb686fb1c3b"
const imgFrame1 = "https://www.figma.com/api/mcp/asset/72befb8a-27ae-4242-86a7-e381192dd5c6"
const imgBrick1 = "https://www.figma.com/api/mcp/asset/047d2305-3392-4d00-9e95-638322683e47"
const imgBRick3 = "https://www.figma.com/api/mcp/asset/2c4446af-c0e6-4924-86af-c2ede83cdacf"
const imgBRick4 = "https://www.figma.com/api/mcp/asset/cab57d65-3be9-47a7-abc5-94e2edf486b7"

export default function ParticipantLogin() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ username: '', password: '' })

  return (
    <div style={{ backgroundColor: '#fef7f1', minHeight: '100vh', display: 'flex' }}>

      {/* ── LEFT PANEL (decorative grey) ── */}
      <div style={{
        width: '45%', backgroundColor: '#d9d9d9',
        borderRight: '2px solid #000',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: '60px 48px', position: 'relative', overflow: 'hidden',
      }}>
        {/* Decorative bricks */}
        <div style={{ position:'absolute', left:20, top:40, width:130, height:62, opacity:0.4 }}>
          <img src={imgBrick1} alt="" style={{ width:'100%', height:'100%', objectFit:'contain' }} />
        </div>
        <div style={{ position:'absolute', right:20, bottom:80, width:110, height:55, opacity:0.35 }}>
          <img src={imgBRick3} alt="" style={{ width:'100%', height:'100%', objectFit:'contain', transform:'rotate(6deg)' }} />
        </div>
        <div style={{ position:'absolute', right:40, top:100, width:100, height:50, opacity:0.3, transform:'rotate(180deg)' }}>
          <img src={imgBRick4} alt="" style={{ width:'100%', height:'100%', objectFit:'contain' }} />
        </div>

        {/* Brand */}
        <div style={{ textAlign:'center', position:'relative', zIndex:1 }}>
          <div style={{ width:80, height:80, transform:'rotate(10deg)', margin:'0 auto 20px' }}>
            <img src={imgLogo} alt="Logo" style={{ width:'100%', height:'100%', objectFit:'contain' }} />
          </div>
          <h1 style={{
            fontFamily:'Fraunces, serif', fontWeight:700,
            fontSize:'3rem', letterSpacing:'-2px', color:'#000', lineHeight:1,
          }}>LaunchPad</h1>
          <p style={{
            fontFamily:'Anek Telugu, sans-serif', fontSize:'0.95rem',
            color:'rgba(0,0,0,0.55)', marginTop:12, maxWidth:260, lineHeight:1.5,
          }}>MLRIT's Unified Event Management Platform</p>
        </div>
      </div>

      {/* ── RIGHT PANEL (form) ── */}
      <div style={{
        flex:1, display:'flex', alignItems:'center', justifyContent:'center',
        padding:'60px 48px',
      }}>
        <div style={{ width:'100%', maxWidth:440 }}>

          {/* Back link */}
          <Link to="/login" style={{
            display:'inline-flex', alignItems:'center', gap:6,
            fontFamily:'Anek Telugu, sans-serif', fontSize:'0.85rem',
            color:'rgba(0,0,0,0.5)', textDecoration:'none', marginBottom:36,
          }}>
            ← Back
          </Link>

          <h2 style={{
            fontFamily:'Fraunces, serif', fontWeight:700,
            fontSize:'2.2rem', letterSpacing:'-1px', marginBottom:6,
          }}>Participant Login</h2>
          <p style={{
            fontFamily:'Anek Telugu, sans-serif', fontSize:'0.9rem',
            color:'rgba(0,0,0,0.5)', marginBottom:36,
          }}>Sign in to your student account</p>

          {/* Form card */}
          <div style={{
            backgroundColor:'#fff', border:'2px solid #000', borderRadius:16,
            padding:'36px 32px', boxShadow:'6px 6px 0 #000',
          }}>
            <form onSubmit={e => { e.preventDefault(); navigate('/signup/info') }}>

              <div style={{ marginBottom:28 }}>
                <label style={{
                  display:'block', fontFamily:'Anek Telugu, sans-serif',
                  fontSize:'0.8rem', fontWeight:600, color:'rgba(0,0,0,0.5)',
                  marginBottom:8, textTransform:'uppercase', letterSpacing:'0.5px',
                }}>Username</label>
                <input
                  type="text"
                  placeholder="Enter your username"
                  value={form.username}
                  onChange={e => setForm({ ...form, username: e.target.value })}
                  required
                  className="input-line"
                  style={{ fontSize:'1rem' }}
                />
              </div>

              <div style={{ marginBottom:12 }}>
                <label style={{
                  display:'block', fontFamily:'Anek Telugu, sans-serif',
                  fontSize:'0.8rem', fontWeight:600, color:'rgba(0,0,0,0.5)',
                  marginBottom:8, textTransform:'uppercase', letterSpacing:'0.5px',
                }}>Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={form.password}
                  onChange={e => setForm({ ...form, password: e.target.value })}
                  required
                  className="input-line"
                  style={{ fontSize:'1rem' }}
                />
              </div>

              <div style={{ textAlign:'right', marginBottom:32 }}>
                <a href="#" style={{
                  fontFamily:'Anek Telugu, sans-serif', fontSize:'0.8rem',
                  color:'rgba(0,0,0,0.45)', textDecoration:'underline',
                }}>Forgot Password?</a>
              </div>

              <button type="submit" className="neo-btn" style={{
                width:'100%', backgroundColor:'#f45b49', color:'#fff',
                padding:'14px', fontSize:'1.05rem',
              }}>Login</button>
            </form>

            {/* Divider */}
            <div style={{ display:'flex', alignItems:'center', gap:12, margin:'24px 0' }}>
              <div style={{ flex:1, height:1, backgroundColor:'rgba(0,0,0,0.15)' }} />
              <span style={{ fontFamily:'Anek Telugu, sans-serif', fontSize:'0.8rem', color:'rgba(0,0,0,0.4)' }}>Or continue with</span>
              <div style={{ flex:1, height:1, backgroundColor:'rgba(0,0,0,0.15)' }} />
            </div>

            {/* Social icons */}
            <div style={{ display:'flex', justifyContent:'center' }}>
              <img src={imgFrame1} alt="Social login" style={{ height:52, objectFit:'contain' }} />
            </div>
          </div>

          <p style={{
            textAlign:'center', marginTop:28,
            fontFamily:'Anek Telugu, sans-serif', fontSize:'0.9rem',
            color:'rgba(0,0,0,0.5)',
          }}>
            Don't have an account?{' '}
            <Link to="/signup/info" style={{ color:'#000', fontWeight:600, textDecoration:'underline', textUnderlineOffset:3 }}>
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
