import path from 'path';

const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'src/client');

const config = {
  entry: `${APP_DIR}/index.jsx`,
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: { presets: ['react', 'env'] },
    }, {
      test: /.jsx?$/,
      loader: 'eslint-loader',
      exclude: /node_modules/,
      enforce: 'pre',
    }, {
      test: /.scss$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader'],
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

export default config;
