import webpack from 'webpack';
import path from 'path';
import LiveReloadPlugin from 'webpack-livereload-plugin';

const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'src/client');
const ENV = process.env.ENV;

let devtoolSetting = 'eval';
let livePluginSetting = [];
if (ENV === 'production') {
  devtoolSetting = 'cheap-module-source-map';
  livePluginSetting = [new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
    },
  })];
} else {
  livePluginSetting = [new LiveReloadPlugin()];
}

const config = {
  devtool: devtoolSetting,
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
  plugins: livePluginSetting,
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

export default config;
