/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'plus-jakarta-sans': ['var(--font-plus-jakarta-sans)'],
      },
      backgroundImage: {
        'background-gradient': 'radial-gradient(64.06% 111.76% at 50% -20%, rgba(44, 199, 97, 0.3) 0%, rgba(255, 255, 255, 0) 100%)',
        'join-us-background': `url('/banners/join-us.png')`,
        'launch-image': `url('/games/launch-image.png')`
      },
      colors: {
        'background-dark': '#000212',
        'border-light': '#FFFFFF14',
      },
    },
  },
  plugins: [],
};
