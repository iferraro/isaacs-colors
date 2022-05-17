module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        theme: ['"Computer Modern"', "Times New Roman"],
      },
      keyframes: {
        "custom-fade": {
          "0%": {
            opacity: "0"
          },
          "100%": {
            opacity: "100"
          }
        }
      },
      animation: {
        "custom-fade": "custom-fade"
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(.41,.33,.55,.91)",
        "out-expo": "cubic-bezier(.41,.33,.55,.91)",
      },
    },
  },
  plugins: [],
};
