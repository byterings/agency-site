/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#050816',
        surface: '#0A1020',
        mist: '#D9E7FF',
        cyanGlow: '#54F6FF',
        acid: '#C7F464',
        ember: '#FF8A65',
        violet: '#8B5CF6',
      },
      boxShadow: {
        glow: '0 0 80px rgba(84, 246, 255, 0.18)',
        card: '0 24px 90px rgba(0, 0, 0, 0.35)',
      },
      backgroundImage: {
        'radial-grid':
          'radial-gradient(circle at top left, rgba(84,246,255,0.18), transparent 34%), radial-gradient(circle at 82% 12%, rgba(199,244,100,0.12), transparent 30%), radial-gradient(circle at 58% 80%, rgba(255,138,101,0.14), transparent 34%)',
      },
    },
  },
  plugins: [],
};
