/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // ─── Playful Geometric color tokens ───────────────────────────────────
      colors: {
        background:   '#FFFDF5',   // Warm Cream
        foreground:   '#1E293B',   // Slate 800
        muted:        '#F1F5F9',   // Slate 100
        'muted-fg':   '#64748B',   // Slate 500
        accent:       '#8B5CF6',   // Vivid Violet (primary brand)
        'accent-fg':  '#FFFFFF',
        secondary:    '#F472B6',   // Hot Pink
        tertiary:     '#FBBF24',   // Amber/Yellow
        quaternary:   '#34D399',   // Emerald/Mint
        border:       '#E2E8F0',
        card:         '#FFFFFF',
        ring:         '#8B5CF6',
      },
      // ─── Font families (reference CSS vars so they're swappable) ──────────
      fontFamily: {
        heading: ['var(--font-heading)', 'system-ui', 'sans-serif'],
        body:    ['var(--font-body)',    'system-ui', 'sans-serif'],
      },
      // ─── Radius tokens ────────────────────────────────────────────────────
      borderRadius: {
        sm:   '8px',
        md:   '16px',
        lg:   '24px',
        full: '9999px',
      },
      // ─── Box shadow ("Pop" shadow — hard, no blur) ─────────────────────────
      boxShadow: {
        'pop':        '4px 4px 0px 0px #1E293B',
        'pop-hover':  '6px 6px 0px 0px #1E293B',
        'pop-active': '2px 2px 0px 0px #1E293B',
        'pop-pink':   '6px 6px 0px 0px #F472B6',
        'pop-sm':     '2px 2px 0px 0px #1E293B',
      },
      // ─── Bouncy transition timing ─────────────────────────────────────────
      transitionTimingFunction: {
        bouncy: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      // ─── Wiggle animation ─────────────────────────────────────────────────
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%':      { transform: 'rotate(3deg)' },
          '75%':      { transform: 'rotate(-3deg)' },
        },
        'pop-in': {
          '0%':   { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        wiggle:  'wiggle 0.5s ease-in-out',
        'pop-in': 'pop-in 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
      },
    },
  },
  plugins: [],
}
