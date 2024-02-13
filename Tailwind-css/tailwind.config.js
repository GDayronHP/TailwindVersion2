/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App/**/*.{html,js}"],
  theme: {
    extend: {
      transitionDuration: {
        2000: "2000ms", // Duración de la transición de 2000 milisegundos (2 segundos)
      },
    },
  },
  plugins: [],
};
