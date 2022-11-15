const config = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    require('path').join(require.resolve('@brainandbones/skeleton'), '../**/*.{html,js,svelte,ts}')
  ],

  theme: {
    extend: {},
  },

  plugins: [
    require('@brainandbones/skeleton/tailwind/theme.cjs')
  ],
};

module.exports = config;
