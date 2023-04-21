module.exports = {
  content: ['./src/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': {
          400: '#202041',
          500: '#131132'
        },
        'accent-pink': {
          500: '#FC2E7E',
          700: '#FF0264'
        },
        'accent-blue': {
          50: 'rgba(82, 170, 225, 0.05)',
          500: '#52A9E1',
        },
        'accent-purple': {
          50: 'rgba(148, 97, 248, 0.05)',
          500: '#9361F8',
        },
        'accent-grey': '#D7D5F5'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        poppinsBold: ['Poppins', 'sans-serif', 'bold'],
        poppinsMedium: ['Poppins', 'sans-serif', 'medium'],
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('tailwind-scrollbar-hide'),
  ],
  variants: {
    extend: {},
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui']
    }
  },
};
