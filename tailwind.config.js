module.exports = {
  mode: "jit",
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        seconds_bg: "url('/public/images/bg2.jpg')",
        logo_bg: "url('/public/images/logo.png')",

      },

      colors: {
				"regal-orange": "#ff6600",
				"miingo-gray": "#fafafa",
				"miingo-pink": "#c23abd",
				"miingo-cyan": "#edf7fb",
				"miingo-light-pink": "#d65799",
				"miingo-pinksh": "#d2346d",
			},
			backdropFilter: {
				none: "none",
				blur: "blur(20px)",
			},
    },
  },
  plugins: [require("tailwind-scrollbar-hide"), require("@tailwindcss/line-clamp")],
};
