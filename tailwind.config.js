module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      heading: ["Train One", "cursive"],
      serif: ["Playfair Display", "serif"],
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      wine: "#4d0000",
    }),
    extend: {
      backgroundImage: (theme) => ({
        intro: "url('/img/intro.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
