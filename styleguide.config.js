const path = require('path');
const glob = require('glob');

module.exports = {
  // title: 'React Router Redux TypeScript Boilerplate Styleguide',
  sections: [
    {
      name: 'Application',
      components: './src/app/**/*.{js,jsx,ts,tsx}'
    },
    {
      name: 'Store',
      components: './src/store/**/*.{js,jsx,ts,tsx}'
    },
    {
      name: 'Library',
      components: './src/lib/**/*.{js,jsx,ts,tsx}'
    }
  ],
  propsParser: require('react-docgen-typescript').withCustomConfig('./tsconfig.json').parse,
  webpackConfig: require('./config/webpack.config.dev.js'),
  resolver: require('react-docgen').resolver.findAllComponentDefinitions,
};

