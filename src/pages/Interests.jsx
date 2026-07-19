import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FigmaCanvas from '../components/FigmaCanvas'

// Exact Figma assets — screen 1:589 (Interests Page)
const imgBrick2 = "https://www.figma.com/api/mcp/asset/bdbf9c19-2a7d-4431-849a-2242972ad425"
const imgBRick3 = "https://www.figma.com/api/mcp/asset/2c4446af-c0e6-4924-86af-c2ede83cdacf"
const imgBRick4 = "https://www.figma.com/api/mcp/asset/cab57d65-3be9-47a7-abc5-94e2edf486b7"
const imgVector1 = "https://www.figma.com/api/mcp/asset/aceb1103-de1a-4bea-a139-90ca29771fcd"

// Interest tags from figma (Brick Full elements arranged in a grid pattern)
const interests = [
  'Hackathons','Design','Music','Dance',
  'Sports','Tech Talks','Photography','Coding',
  'Entrepreneurship','Art',
]

// Exact positions of "Brick Full" rounded rectangles from Figma (x offsets relative to card)
// From node positions: 526,693,859 (row1), 622,787 (row2), 532,693,862 (row3), 619,784 (row4)
const brickPositions = [
  { left: 220, top: 435 },
  { left: 387, top: 435 },
  { left: 554, top: 435 },
  { left: 316, top: 501 },
  { left: 481, top: 501 },
  { left: 226, top: 567 },
  { left: 387, top: 567 },
  { left: 556, top: 567 },
  { left: 313, top: 633 },
  { left: 478, top: 633 },
]

export default function Interests() {
  const [selected, setSelected] = useState([])
  const navigate = useNavigate()

  const toggle = (interest) => {
    if (selected.includes(interest)) {
      setSelected(selected.filter(i => i !== interest))
    } else if (selected.length < 3) {
      setSelected([...selected, interest])
    }
  }

  return (
    <FigmaCanvas height={1646}>
      <div className="bg-[#fef7f1] relative" style={{ width: 2926, height: 1646 }}>

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
        <div style={{ position:'absolute', left:1463, top:-228, width:1473, height:2101, backgroundColor:'#d9d9d9' }} />
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

          {/* Profile pic */}
          <div style={{ position:'absolute', left:370, top:108, width:165, height:172, borderRadius:'50%', backgroundColor:'#f1a242', border:'2px solid #000', display:'flex', alignItems:'center', justifyContent:'center' }}>
            <svg width="60" height="60" viewBox="0 0 24 24" fill="#000">
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
            </svg>
          </div>

          {/* Interest tags — matching Figma brick positions */}
          {interests.map((interest, i) => {
            const pos = brickPositions[i]
            const isSelected = selected.includes(interest)
            return (
              <button
                key={interest}
                onClick={() => toggle(interest)}
                style={{
                  position: 'absolute',
                  left: pos.left,
                  top: pos.top,
                  width: 150,
                  height: 53,
                  border: '4px solid black',
                  borderRadius: 8,
                  backgroundColor: isSelected ? '#f45b49' : '#fef7f1',
                  color: isSelected ? '#fff' : '#000',
                  fontFamily: 'Anek Telugu, sans-serif',
                  fontSize: 22,
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.15s',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >{interest}</button>
            )
          })}

          {/* SKIP / CONTINUE BUTTON */}
          <button
            onClick={() => navigate('/')}
            style={{
              position:'absolute', left:375, top:1043, width:181, height:38,
              backgroundColor:'#f1a242', border:'1px solid #000', borderRadius:4,
              fontFamily:'Anek Telugu, sans-serif', fontSize:29, cursor:'pointer',
              display:'flex', alignItems:'center', justifyContent:'center'
            }}
          >{selected.length === 0 ? 'Skip' : 'Continue →'}</button>
        </div>

        {/* Text outside card */}
        <p style={{
          position:'absolute', left:440, top:591,
          fontFamily:'Anek Telugu, sans-serif', fontWeight:400, fontSize:36,
          color:'#000', width:663
        }}>What are your Top 3 interests</p>
        <p style={{
          position:'absolute', left:550, top:643,
          fontFamily:'Anek Telugu, sans-serif', fontWeight:400, fontSize:24,
          color:'rgba(0,0,0,0.5)', width:442
        }}>We use this info to suggest personalised events</p>

        {/* Selected count */}
        <p style={{
          position:'absolute', left:550, top:700,
          fontFamily:'Anek Telugu, sans-serif', fontSize:22,
          color:'rgba(0,0,0,0.4)'
        }}>{selected.length}/3 selected</p>

      </div>
    </FigmaCanvas>
  )
}
