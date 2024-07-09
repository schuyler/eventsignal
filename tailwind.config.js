module.exports = {
  content: [
    "./app/views/**/*.html.erb",
    "./app/helpers/**/*.rb",
    "./app/assets/stylesheets/**/*.css",
    "./app/javascript/**/*.{js,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-blue": "#007bff",
      },
    },
  },
};
