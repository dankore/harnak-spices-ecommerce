module.exports = {
  purge: ['app/**/*.js', 'app/**/*.jsx'],
  plugins: [
    // ...
    require('tailwindcss'),
    require('autoprefixer'),
    // ...
  ],
};
