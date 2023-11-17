/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      animation: {
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.1, 1) infinite',
      },

      colors: {
        gray: {
          25: '#FCFCFD',
          50: '#F9FAFB',
          100: '#F5F5F7',
          200: '#E8E9E9',
          300: '#DBDCDC',
          400: '#ACB0B1',
          500: '#7E8385',
          600: '#5C6264',
          700: '#363A3C',
          800: '#2B2F30',
          900: '#191B1B',
        },
        primary: {
          25: '#FBE6E4',
          50: '#FADFDD',
          100: '#F4C1BD',
          200: '#EFA39D',
          300: '#EA847D',
          400: '#E5665C',
          500: '#DF473C',
          600: '#DA291C',
          700: '#CA2519',
          800: '#AA2016',
          900: '#7D1810',
        },
        boxShadow: {
          'xs': '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
          'sm': '0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)',
          'md': '0px 2px 4px -2px rgba(16, 24, 40, 0.06), 0px 4px 8px -2px rgba(16, 24, 40, 0.10)',
          'lg': '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
          'xl': '0px 24px 48px -12px rgba(16, 24, 40, 0.18)',
          '2xl': '0px 32px 64px -12px rgba(16, 24, 40, 0.14)',
        },
        fontSize: {
          'xs': ['12px', { lineHeight: '18px', letterSpacing: '0' }],
          'sm': ['14px', { lineHeight: '20px', letterSpacing: '0' }],
          'md': ['16px', { lineHeight: '24px', letterSpacing: '0' }],
          'lg': ['18px', { lineHeight: '28px', letterSpacing: '0' }],
          'xl': ['20px', { lineHeight: '30px', letterSpacing: '0' }],
          'd-xs': ['24px', { lineHeight: '32px', letterSpacing: '0' }],
          'd-sm': ['30px', { lineHeight: '38px', letterSpacing: '0' }],
          'd-md': ['36px', { lineHeight: '44px', letterSpacing: '-2%' }],
          'd-lg': ['48px', { lineHeight: '60px', letterSpacing: '-2%' }],
          'd-xl': ['60px', { lineHeight: '72px', letterSpacing: '-2%' }],
          'd-2xl': ['72px', { lineHeight: '90px', letterSpacing: '-2%' }],
        },

      }
    },
  },
  plugins: [],
}

