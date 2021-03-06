module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      serif: ["Playfair Display", "serif"],
      trainOne: ["Train One", "cursive"],
    },
    extend: {
      backgroundColor: (theme) => ({
        wine: "#4d0000",
      }),
      backgroundImage: (theme) => ({
        introMobile: "url('/img/intro-mobile.jpg')",
        intro: "url('/img/intro.jpg')",
      }),
      gridTemplateColumns: {
        logo: "repeat(auto-fit, 10rem)",
      },
      textColor: {
        gold: "#e0d2bd",
      },
      width: {
        "5xl": "64rem",
      },
      padding: {
        yt: "56.25%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
