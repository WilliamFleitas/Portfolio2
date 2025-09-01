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
        primaryMainColor: "#1e2122",
        primaryMainHoverColor: "#0F2028",
        primaryBgColor: "#313031",
        secondaryBgColor: "#121212f5",
        primaryButtonColor: "#19191a",
        gradientBorder: "#112533",
        primaryBorderColor: "#9c9c9c",
        secondaryBorderColor: "#585858",
      },
      backgroundImage: {
        'gradient-custom': "linear-gradient(to bottom, transparent 0%, transparent 0%, #9c9c9c 0%, transparent 90%, transparent 100%)",
      },
    },
    screens: {
      'fh': '470px',
      // => @media (min-width: 400px) { ... }
      'ssm': '550px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'smd' : "768px",
      'md': '950px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1300px',
      // => @media (min-width: 1280px) { ... }
      'xxl': '1350px',
      '2xl': '1668px',
      // => @media (min-width: 1536px) { ... }
    }
  },
}
