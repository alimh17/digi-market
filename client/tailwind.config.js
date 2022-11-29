module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      visibility: ["group-hover"],

      keyframes: {
        wiggle: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        }
      },

      animation: {
        wiggle: 'wiggle 0.3s linear  ',
      }

    }
  },
  plugins: [],
};
