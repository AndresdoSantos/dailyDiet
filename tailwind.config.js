module.exports = {
  content: ["./App.tsx", "./src/**/*.tsx"],
  theme: {
    colors: {
      white: "#FFFFFF",
      gray: {
        7: "#FAFAFA",
        6: "#DDDEDF",
        5: "#DDDEDF",
        4: "#B9BBBC",
        3: "#5C6265",
        2: "#333638",
        1: "#1B1D1E",
      },

      green: {
        light: "#E5F0DB",
        mid: "#CBE4B4",
        dark: "#639339",
      },

      red: {
        light: "#F4E6E7",
        mid: "#F3BABD",
        dark: "#BF3B44",
      },
    },
    extend: {
      fontFamily: {
        4: "NunitoSans_400Regular",
        7: "NunitoSans_700Bold",
      },
    },
  },
  plugins: [],
};
