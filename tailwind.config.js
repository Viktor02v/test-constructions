/** @type {import('tailwindcss').Config} */
export default {
  content: ['./components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',],
    theme: {
      extend: {
        colors: {
          primary: '#3490dc',  // Example color
          secondary: '#ffed4a', // Example color
          // Add any other colors you're using
        },
      },
    },
  plugins: [],
}

