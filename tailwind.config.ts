import type { Config } from 'tailwindcss'


const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'desktop': '1440px'
    },

    colors: {
      'purple': 'hsl(259, 100%, 65%)',
      'light-red': 'hsl(0, 100%, 67%)',
      'white': 'hsl(0, 0%, 100%)',
      'off-white': 'hsl(0, 0%, 94%)',
      'light-grey': 'hsl(0, 0%, 86%)',
      'smokey-grey': 'hsl(0, 1%, 44%)',
      'off-black': 'hsl(0, 0%, 8%)',
    },

    fontSize: {
      'mobile-lg' : ['56px', {lineHeight: '110%', letterSpacing: '-2%'}], 
      'mobile-md' : ['20px', {lineHeight: '100%', letterSpacing: '1%'}], 
      'mobile-sm' : ['12px', {lineHeight: '100%', letterSpacing: '25%'}], 
      'mobile-error' : ['12px', {lineHeight: '100%', letterSpacing: '0%'}], 
    },

    fontFamily: {
      'poppins': ['var(--font-poppins)']
    },


    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
export default config
