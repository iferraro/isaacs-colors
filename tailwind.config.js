module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        theme: ['"Computer Modern"', "Times New Roman"],
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(.41,.33,.55,.91)",
        "out-expo": "cubic-bezier(.41,.33,.55,.91)",
      },
    },
  },
  plugins: [],
};
