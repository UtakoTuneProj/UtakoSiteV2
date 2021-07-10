const path = require('path')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
          options: {
            transpileOnly: true,
            appendTsSuffixTo: [
              '\\.vue$'
            ],
          },
        },
      ],
    }, {
      test: /\.s[ca]ss$/,
      use: [
        "style-loader",
        "vue-style-loader",
        "css-loader",
        {
          'loader': 'sass-loader',
          options: {
            implementation: require('sass'),
          }
        }
      ],
    }, {
      test: /\.(png|jpe?g|gif|svg|ico)$/i,
      use: [
        {
          loader: 'file-loader',
        }
      ],
    });
    config.plugins.push(new VuetifyLoaderPlugin())
    config.resolve.alias = {
      vue: "vue/dist/vue.esm.js",
      "@": path.resolve(__dirname, '../'),
      "~": path.resolve(__dirname, '../'),
    };
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
