const config = require('../../jest.config');

module.exports = {
  preset: 'jest-preset-angular',
  ...config,
  globals: {
    __TRANSFORM_HTML__: true,
    'ts-jest': {
      tsConfigFile: '<rootDir>/examples/angular-cli/src/tsconfig.spec.json',
    },
  },
  roots: [__dirname],
  transform: {
    '^.+\\.stories\\.[jt]sx?$': '@storybook/addon-storyshots/injectFileName',
    '^.+\\.jsx?$': '<rootDir>/scripts/babel-jest.js',
    '^.+[/\\\\].storybook[/\\\\]config\\.ts$': '<rootDir>/scripts/jest-ts-babel.js',
    '^.+\\.(ts|js|html)$': 'ts-jest',
    '^.+\\.mdx$': '@storybook/addon-docs/jest-transform-mdx',
  },
  moduleFileExtensions: [...config.moduleFileExtensions, 'html'],
};
