module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.98,-0.36,0.43,1.27)",
        "out-expo": "cubic-bezier(0.98,-0.36,0.43,1.27)",
      },
    },
  },
  plugins: [],
};
