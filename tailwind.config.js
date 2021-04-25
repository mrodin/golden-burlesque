module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      heading: ["Train One", "cursive"],
      serif: ["Playfair Display", "serif"],
    },
    extend: {
      backgroundImage: (theme) => ({
        intro: "url('/img/intro.jpg')",
      }),
      backgroundColor: (theme) => ({
        wine: "#4d0000",
      }),
      textColor: {
        gold: "#e0d2bd",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
