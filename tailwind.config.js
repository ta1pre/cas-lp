/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    // 動的に生成されるクラス名や、Vercelでパージされる可能性のあるクラス名
    'bg-pink-50',
    'border-pink-400',
    'text-pink-500',
    'text-pink-700',
    'font-bold',
    'bg-[#f0fdf4]',
    'border-[#06C755]',
    'text-[#06C755]',
    'hover:text-[#06C755]',
    'bg-[#06C755]',
    'hover:bg-[#06C755]/90',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
