/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        audiowide: ['Audiowide', 'sans-serif'],
        urbanist: ['Urbanist', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset", 
      {
        "mytheme": {
          "primary": "#1CBEC9",
          "accent": "#F19B4C",
          "secondary": "#3F4752",
          "neutral": "#1F2937",
          "base-100": "#F2F3F4",
        },
      },
    ],
    // Aqui você pode configurar o tema padrão
    darkTheme: "mytheme", // Definindo o tema escuro como padrão
  },
}

