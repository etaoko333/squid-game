const { override, addBabelPlugin } = require('customize-cra');

module.exports = override(
  // Add the Babel plugin for optional chaining
  addBabelPlugin('@babel/plugin-proposal-optional-chaining'),

  // Modify Webpack configuration for handling .mjs files
  (config) => {
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
    });

    return config;
  }
);
