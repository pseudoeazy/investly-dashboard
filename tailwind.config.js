module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        work: ["Work Sans", "sans-serif"],
      },
      colors: {
        logo: {
          100: "#0D0D54",
          200: "#4040f2",
        },
        nav: {
          100: "#F7F7FB",
          200: "#4040F2",
          300: "#4F5B67",
          400: "#0D0D54",
        },
        header: "#242D35",
        summary: {
          100: "#373F47",
          200: "#242D35",
        },
      },
    },
  },
  plugins: [],
};
