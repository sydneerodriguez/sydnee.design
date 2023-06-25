import type { Config } from 'tailwindcss'
import theme from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        // custom title font
        title: ['Poppins', ...theme.fontFamily.sans],

        sans: ['Roboto', ...theme.fontFamily.sans],
        serif: [...theme.fontFamily.serif],
        mono: [...theme.fontFamily.mono],
      },
    },
  },
  plugins: [],
} satisfies Config
