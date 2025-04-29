const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        brightblue: '#57b5eb',
        darkblue: '#0d2d52',
        lightblue: '#b1d9f5',
        difred: '#fd261b',
        difoffwhite: '#f6f2f2',
        diuprimary: '#ba0c2f',
        diusecondary: '#8b0822',
        diuaccent: '#d9233c',
        pink: '#c94790',
        gray: '#666666',
        bueblue: '#264997',
      },
    },
  },
  plugins: [],
};
