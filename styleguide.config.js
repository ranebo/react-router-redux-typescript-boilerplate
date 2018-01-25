const path = require('path');
const glob = require('glob');

module.exports = {
  // title: 'React Router Redux TypeScript Boilerplate Styleguide',
  sections: [
    {
      name: 'Application',
      components: './src/app/**/*.{js,jsx,ts,tsx}',
      sections: [
        {
          name: 'Containers',
          components: './src/app/containers/**/*.{js,jsx,ts,tsx}'
        },
        {
          name: 'Routes',
          components: './src/app/routes/**/*.{js,jsx,ts,tsx}'
        }
      ]
    },
    {
      name: 'Store',
      components: './src/store/**/*.{js,jsx,ts,tsx}',
      sections: [
        {
          name: 'Actions',
          components: './src/store/actions/**/*.{js,jsx,ts,tsx}'
        },
        {
          name: 'Middleware',
          components: './src/store/middleware/**/*.{js,jsx,ts,tsx}'
        },
        {
          name: 'reducers',
          components: './src/store/reducers/**/*.{js,jsx,ts,tsx}'
        },
        {
          name: 'types',
          components: './src/store/types/**/*.{js,jsx,ts,tsx}'
        }
      ]
    },
    {
      name: 'Library',
      components: './src/lib/**/*.{js,jsx,ts,tsx}',
      sections: [
        {
          name: 'Components',
          components: './src/lib/components/**/*.{js,jsx,ts,tsx}'
        },
        {
          name: 'HoCs',
          components: './src/lib/hocs/**/*.{js,jsx,ts,tsx}'
        },
        {
          name: 'Utils',
          components: './src/lib/utils/**/*.{js,jsx,ts,tsx}'
        }
      ]
    }
  ],
  propsParser: require('react-docgen-typescript').withCustomConfig('./tsconfig.json').parse,
  webpackConfig: require('./config/webpack.config.dev.js'),
  resolver: require('react-docgen').resolver.findAllComponentDefinitions,
};

