/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['var(--font-inter)'],
        quicksand: ['var(--font-quicksand)']
      },
      backgroundImage: normal => ({
        'hero-background' : "url('../public/images/hero/eugenia-clara-kdjHwLe-r88-unsplash.jpg')",
        'contact-background' : "url('../public/images/slider/project02_01.jpg')"
      }),
      screens: {
        'xxs': '370px',
        'xs': '426px',
        's': '489px'
      },
      gridTemplateColumns: {
        // Complex site-specific column configuration
        'template': 'repeat(auto-fit, minmax(350px, 1fr))'
      }
    },
  },
  plugins: [],
}