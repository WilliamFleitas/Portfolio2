/** @type {import('tailwindcss').Config} */


export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        'lekton': ['Lekton', 'sans-serif'],
      },
      colors: {
        primaryMainColor: "#4b4a4b",
        primaryMainHoverColor: "#9333ea",
        primaryBgColor: "#313031",
        secondaryBgColor: "#27252696",
        primaryButtonColor: "#c084fc"
      },
      backgroundImage: {
        'gradient-custom': "linear-gradient(to bottom, transparent 0%, transparent 0%, #4b4a4b 0%, transparent 90%, transparent 100%)",
      },
    },
    screens: {
      'fh': '470px',
      // => @media (min-width: 400px) { ... }
      'ssm': '550px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '950px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
}
