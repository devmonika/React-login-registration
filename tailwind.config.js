/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  themes: [
    {
      mytheme: {
      
    "primary": "#19c681",
          
    "secondary": "#5968d6",
          
    "accent": "#eda69e",
          
    "neutral": "#242638",
          
    "base-100": "#E7DFF1",
          
    "info": "#94C6E1",
          
    "success": "#1A894E",
          
    "warning": "#EAA53E",
          
    "error": "#DD443C",
          },
        },
      ],
  plugins: [require("daisyui")],
}
