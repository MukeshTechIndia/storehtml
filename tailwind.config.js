module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    fontFamily: {
      gotham: ["Gotham Pro", "sans-serif"],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1590px",
    },
    colors: {
      white: "#ffffff",
      orange: {
        100: "#FEEDD3",
        200: "#FE7865",
        300: "#E6604D",
        400: "#EE5040",
      },
      blue: {
        100: "#F5F8FC",
        200: "#EFEDFE",
        300: "#5BD5E6",
      },
      gray: {
        100: "#ECECEE",
        200: "#DFDAFE",
        300: "#83838B",
        400: "#D8D5DA",
      },
      pink: {
        100: "#FEDAE8",
      },
      black: {
        100: "#2C2E3F",
        200: "#141517",
        300: "#2C2E3F",
        400: "#1D2539",
      },
      yellow: {
        100: "#FEC365",
      },
      green: {
        100: "#",
        200: "#E2F7F4",
        300: "#66E1A9",
      },
    },
    extend: {
      fontSize: {
        "8xl": "6rem",
      },
      spacing: {
        144: "36rem",
      },
    },
  },
  variants: {},
  plugins: [],
};
