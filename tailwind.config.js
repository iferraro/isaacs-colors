module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(.41,.33,.55,.91)",
        "out-expo": "cubic-bezier(.41,.33,.55,.91)",
      },
    },
  },
  plugins: [],
};
