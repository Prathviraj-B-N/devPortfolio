import  plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
const neonPlugin = plugin(({theme,addUtilities}) => {
  const neonUtils = {};
  const colors = theme('colors');

  for(const color in colors){
    if(typeof colors[color] === 'object'){
      const color1 = colors[color]['500'];
      const color2 = colors[color]['700'];

      neonUtils[`.neon-${color}`] = { boxShadow: `0 0 15px ${color1}, 0 0 60px ${color2}`,};
    }
    addUtilities(neonUtils);
  }
});

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [neonPlugin],
}
