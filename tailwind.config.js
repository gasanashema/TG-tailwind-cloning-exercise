/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",],
  theme: {
    extend: {
      borderRadius:{
        'bottom-150':'0px 0px 150px 150px',
        'top-150': '150px 150px 0px 0px',
        'tb-150' : '150px',
      }
    },
  },
  plugins: [],
};

