module.exports = {
  content: ["./pages/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
