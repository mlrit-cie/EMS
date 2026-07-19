import { useEffect, useState } from 'react'

// Wraps each Figma page in a scaled viewport that matches the original 2926×1646 canvas
export default function FigmaCanvas({ children, height = 1646 }) {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const update = () => {
      setScale(window.innerWidth / 2926)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return (
    <div style={{ width: '100vw', height: height * scale, overflow: 'hidden', position: 'relative' }}>
      <div style={{
        width: 2926,
        height,
        transformOrigin: 'top left',
        transform: `scale(${scale})`,
        position: 'absolute',
        top: 0,
        left: 0,
      }}>
        {children}
      </div>
    </div>
  )
}
