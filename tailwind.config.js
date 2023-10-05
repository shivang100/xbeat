/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        pe: "#d00404",
        or: "#161819",
        lp: "#FFC288",
        do: "#183D3D",
        lb: "#0C1E25",
        br: "#F7EFE5",
        rm: "#ECF9FF",
        rmo: "#F5EFE7",
        yl: "#F9D949",
        of: "#a9afc3",
        rd: "#141414",
    },
    },
  },
  plugins: [],
}
