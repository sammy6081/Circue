import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['"Lato"', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'circue-dark-1': '#0D173B',
        'circue-grey-1': '#98A5BA',
        'circue-grey-2': '#676767',
        'circue-pink': '#ff6cb0',
        'circue-blue': '#58c7ff',
      },
      width: {
        'w-100': "31rem",
      },
      height: {
        'h-100': "31rem",
      }
    },
  },
  plugins: [],
}