import webpack from 'webpack';
import path from 'path';
import LiveReloadPlugin from 'webpack-livereload-plugin';
import CompressionPlugin from 'compression-webpack-plugin';

const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'src/client');
const ENV = process.env.NODE_ENV;

let devtoolSetting = 'eval';

const baseModuleSetting = {
  loaders: [{
    test: /.jsx?$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
    query: { presets: ['react', 'env'] },
  }, {
    test: /.scss$/,
    loaders: ['style-loader', 'css-loader', 'sass-loader'],
  }],
};
const moduleSetting = Object.assign({}, baseModuleSetting);

const basePluginSetting = [];
const pluginSetting = basePluginSetting.slice();

// Modify settings based on env
if (ENV === 'production') {
  devtoolSetting = 'cheap-module-source-map';
  pluginSetting.concat([
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      compress: {
        warnings: false,
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        screw_ie8: true,
      },
      comments: false,
      sourceMap: false,
    }),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|html)$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ]);
} else {
  moduleSetting.loaders.push({
    test: /.jsx?$/,
    loader: 'eslint-loader',
    exclude: /node_modules/,
    enforce: 'pre',
  });
  pluginSetting.concat([new LiveReloadPlugin()]);
}

const config = {
  devtool: devtoolSetting,
  entry: `${APP_DIR}/index.jsx`,
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  module: moduleSetting,
  plugins: pluginSetting,
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

export default config;
