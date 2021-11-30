const path = require('path');

module.exports = (env) => {
  const isProduction = env === 'production';
  return {
    entry: './src/index.tsx',
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /(node_modules)/,
          loader: 'babel-loader',
          options: { presets: ['@babel/env'] },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    resolve: { extensions: ['*', '.ts', '.tsx', '.js', '.jsx'] },
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/dist/',
      filename: 'bundle.js',
    },
    devServer: {
      static: path.resolve(__dirname, 'public'),
      port: 8000,
      hot: 'only',
    },
    devtool: isProduction ? 'source-map' : 'inline-source-map',
  };
};
