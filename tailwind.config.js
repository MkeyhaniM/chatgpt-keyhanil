/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        backgroundCustom:
          "url(https://s28.picofile.com/file/8465833150/10340256_13077.jpg)",
        backgroundChat:
          "url(https://s29.picofile.com/file/8465864368/_Wallpaper_4K3D_11891_.jpg)",
      },
      container: {
        center: true,
      },
      fontFamily: {
        light:['Roboto Slab', 'serif'],
        YsabeauOffice:['Ysabeau Office' ,'sans-serif'],
        Caprasimo:['Caprasimo', 'cursive']
      },
    },
  },
  plugins: [],
};
