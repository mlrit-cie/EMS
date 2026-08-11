import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FigmaCanvas from '../components/FigmaCanvas'

// Exact Figma assets — screen 1:531 (Personal Info Page)
const imgBrick2 = "https://www.figma.com/api/mcp/asset/bdbf9c19-2a7d-4431-849a-2242972ad425"
const imgBRick3 = "https://www.figma.com/api/mcp/asset/2c4446af-c0e6-4924-86af-c2ede83cdacf"
const imgBRick4 = "https://www.figma.com/api/mcp/asset/cab57d65-3be9-47a7-abc5-94e2edf486b7"
const imgVector1 = "https://www.figma.com/api/mcp/asset/aceb1103-de1a-4bea-a139-90ca29771fcd"

export default function PersonalInfo() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ fullName:'', rollNumber:'', mobile:'', email:'', deptSection:'' })

  const fields = [
    { key:'fullName', label:'Full Name' },
    { key:'rollNumber', label:'Roll Number' },
    { key:'mobile', label:'Mobile Number' },
    { key:'email', label:'Email' },
    { key:'deptSection', label:'Dept and Section' },
  ]

  return (
    <FigmaCanvas height={1646}>
      <div className="bg-[#fef7f1] relative" style={{ width:2926, height:1646 }}>

        {/* LEFT BORDER */}
        <div style={{ position:'absolute', left:80, top:3, width:0, height:1646, borderLeft:'2px solid black' }} />

        {/* BRICKS */}
        <div style={{ position:'absolute', left:144, top:147, width:220, height:105 }}>
          <img src={imgBrick2} alt="" style={{ width:'100%', height:'100%', objectFit:'contain' }} />
        </div>
        <div style={{ position:'absolute', left:1578, top:783, width:202, height:106 }}>
          <img src={imgBRick3} alt="" style={{ width:'100%', height:'100%', objectFit:'contain' }} />
        </div>
        <div style={{ position:'absolute', left:2682, top:740, width:202, height:106, transform:'rotate(180deg)' }}>
          <img src={imgBRick4} alt="" style={{ width:'100%', height:'100%', objectFit:'contain' }} />
        </div>
        <div style={{ position:'absolute', left:2174, top:1463, width:220, height:105 }}>
          <img src={imgBrick2} alt="" style={{ width:'100%', height:'100%', objectFit:'contain' }} />
        </div>
        <div style={{ position:'absolute', left:1236, top:1443, width:150, height:53, border:'4px solid black', borderRadius:8 }} />
        <div style={{ position:'absolute', left:1280, top:1493, width:150, height:53, border:'4px solid black', borderRadius:8 }} />

        {/* VECTORS */}
        <div style={{ position:'absolute', left:1295, top:661, width:120, height:50 }}>
          <img src={imgVector1} alt="" style={{ width:'100%', height:'100%' }} />
        </div>
        <div style={{ position:'absolute', left:159, top:1248, width:120, height:50 }}>
          <img src={imgVector1} alt="" style={{ width:'100%', height:'100%' }} />
        </div>
        <div style={{ position:'absolute', left:2114, top:221, width:120, height:50 }}>
          <img src={imgVector1} alt="" style={{ width:'100%', height:'100%' }} />
        </div>

        {/* RIGHT GREY PANEL */}
        <div style={{ position:'absolute', left:1463, top:0, width:1473, height:1649, backgroundColor:'#d9d9d9' }} />
        <div style={{ position:'absolute', left:2246, top:39, width:464, height:108, backgroundColor:'#d9d9d9' }} />

        {/* CROSS MARKS */}
        {[[1131,1073],[1988,634],[2626,1297],[726,1556],[2578,247]].map(([l,t],i) => (
          <div key={i} style={{ position:'absolute', left:l-11, top:t-11, width:23, height:23 }}>
            <div style={{ position:'absolute', left:11, top:0, width:0, height:23, borderLeft:'2px solid black' }} />
            <div style={{ position:'absolute', left:0, top:11, width:23, height:0, borderTop:'2px solid black' }} />
          </div>
        ))}

        {/* ── WHITE CARD ── */}
        <div style={{ position:'absolute', left:306, top:295, width:930, height:1062, backgroundColor:'#fff', border:'3px solid #000', borderRadius:4 }}>

          {/* Profile pic placeholder */}
          <div style={{ position:'absolute', left:370, top:108, width:165, height:172, borderRadius:'50%', backgroundColor:'#FBBF24', border:'2px solid #1E293B', display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer' }}>
            <svg width="60" height="60" viewBox="0 0 24 24" fill="#000">
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
            </svg>
          </div>

          {/* Form fields */}
          <div style={{ position:'absolute', left:150, top:391, width:604 }}>
            {fields.map(({ key, label }, i) => (
              <div key={key} style={{ marginBottom: i < fields.length - 1 ? 84 : 0 }}>
                <label style={{ fontFamily:'var(--font-body)', fontSize:14, color:'#64748B' }}>{label}</label>
                <input
                  type="text"
                  placeholder={label}
                  value={form[key]}
                  onChange={e => setForm({ ...form, [key]: e.target.value })}
                  style={{
                    display:'block', width:'100%', background:'transparent',
                    border:'none', borderBottom:'2px solid #1E293B', paddingBottom:8, marginTop:4,
                    fontFamily:'var(--font-body)', fontSize:40,
                    letterSpacing:'-2px', color:'rgba(30,41,59,0.6)', outline:'none'
                  }}
                />
              </div>
            ))}
          </div>

          {/* SAVE BUTTON */}
          <button
            onClick={() => navigate('/signup/interests')}
            style={{
              position:'absolute', left:375, top:1096, width:181, height:38,
              backgroundColor:'#FBBF24', border:'2px solid #1E293B', borderRadius:9999,
              fontFamily:'var(--font-body)', fontWeight:700, fontSize:29, cursor:'pointer',
              boxShadow:'4px 4px 0 #1E293B', transition:'transform 0.2s, box-shadow 0.2s',
              display:'flex', alignItems:'center', justifyContent:'center'
            }}
          >Save</button>
        </div>

        {/* Subtitle outside card */}
        <p style={{
          position:'absolute', left:476, top:586,
          fontFamily:'var(--font-heading)', fontWeight:700, fontSize:36,
          color:'#1E293B', width:590
        }}>We want to know you!</p>

      </div>
    </FigmaCanvas>
  )
}
