/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': 'radial-gradient(#ccd5ae 1.5px, transparent 0)',
      },
      backgroundSize: {
        'custom-size': '40px 40px',
      },
      backgroundPosition: {
        'custom-position': '4px 4px',
      },
    },
  },
  plugins: [],
}

