/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // font-family: 'Expletus Sans', cursive;
        // font-family: 'Inria Serif', serif;
        // font-family: 'Inter', sans-serif;
        display: ['Expletus Sans', 'cursive'],
        heading: ['Inria Serif', 'serif'],
        subheading: ['Inria Serif', 'serif'],
        text: ['Inter', 'sans-serif']
      }

    },
  },
  plugins: [],
};
