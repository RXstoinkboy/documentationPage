module.exports = {
  entry: {
    index: ['babel-polyfill', './src/js/index.js'],
  },
  output: {
    path: `${__dirname}/dist/js`,
    filename: 'legacy-[name].js',
  },
  watch: false,
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ['env', {
              targets: {
                browsers: ['> 1%'],
              },
            }],
          ],
        },
      },
    }],
  },
};
