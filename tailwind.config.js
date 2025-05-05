/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', // Path to your main HTML file
    './assets/**/*.{js,ts,jsx,tsx,mjs,css}', // Scan assets folder
    // Add paths to other components/templates if they exist outside assets
    // Example: './src/**/*.{js,ts,jsx,tsx}' if you have a src directory
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3498db', // --primary-color
          dark: '#4fa3e0',    // --primary-color em dark mode
        },
        secondary: {
          DEFAULT: '#2c3e50', // --secondary-color
          dark: '#1a2530',    // --secondary-color em dark mode
        },
        accent: {
          DEFAULT: '#1abc9c', // --accent-color
          dark: '#2ecc71',    // --accent-color em dark mode
        },
        // Cores neutras
        text: {
          DEFAULT: '#333',     // --text-color
          dark: '#e0e0e0',     // --text-color em dark mode
        },
        background: {
          DEFAULT: '#ffffff',  // --bg-color
          light: '#f9f9f9',    // --light-bg
          dark: '#121212',     // --bg-color em dark mode
          'dark-light': '#1e1e1e', // --light-bg em dark mode
        },
        gray: {
          DEFAULT: '#666',     // --gray
          light: '#ddd',       // --light-gray
          dark: '#a0a0a0',     // --gray em dark mode
          'dark-light': '#333', // --light-gray em dark mode
        },
        border: {
          DEFAULT: '#eaeaea',  // --border-color
          dark: '#333',        // --border-color em dark mode
        },
      },
      boxShadow: {
        DEFAULT: '0 5px 15px rgba(0, 0, 0, 0.1)', // --box-shadow
        dark: '0 5px 15px rgba(0, 0, 0, 0.3)',    // --box-shadow em dark mode
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      transitionProperty: {
        DEFAULT: 'background-color, color, border-color',
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
    },
  },
  // Plugins personalizados
  plugins: [
    require('./plugins/tailwind-theme-plugin'),
  ],
  // Habilitar o modo dark
  darkMode: 'class' // Complementado pelo plugin personalizado
}
