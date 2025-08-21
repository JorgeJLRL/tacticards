/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      rotate: {
        17: "17deg",
      },
      fontFamily: {
        CenturyGothic: ["CenturyGothic"],
        NexaThin: ["Nexa"],
        Cocogoose: ["Cocogoose"],
        Georama: ["Georama"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        "max-xs": { max: "450px" }, // 👈 breakpoint hasta 450px
      },
    },
  },
  plugins: [],
};
