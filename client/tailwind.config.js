/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': 'radial-gradient(black 1px, transparent 0)',
      },
      backgroundSize: {
        'custom-size': '40px 40px',
      },
    },
  },
  plugins: [],
}

