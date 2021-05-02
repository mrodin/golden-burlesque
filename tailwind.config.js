module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      heading: ["Train One", "cursive"],
      serif: ["Playfair Display", "serif"],
    },
    extend: {
      backgroundColor: (theme) => ({
        wine: "#4d0000",
      }),
      backgroundImage: (theme) => ({
        intro: "url('/img/intro.jpg')",
      }),
      gridTemplateColumns: {
        logo: "repeat(auto-fit, 10rem)",
      },
      gridTemplateRows: {
        gallery: "100vw 100vw",
        "gallery-full": "50vw",
      },
      textColor: {
        gold: "#e0d2bd",
      },
      width: {
        "5xl": "64rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
