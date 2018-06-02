import path from 'path';
import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config: Configuration = {
  mode: 'development',

  devtool: 'cheap-eval-source-map',

  entry: path.resolve(__dirname, 'src', 'index.ts'),

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js']
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hybrid Framework Example',
      template: path.resolve(__dirname, 'src', 'index.html')
    })
  ]
};

export default config;
