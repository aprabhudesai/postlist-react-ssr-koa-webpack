const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function(env, argv) {
  
  // default to the server configuration
  const base = {
    mode: 'development',
    entry: './src/server.tsx',
    output: {
      filename: 'js/server.js',
      // path needs to be an ABSOLUTE file path
      path: path.resolve(process.cwd(), 'dist'),
      publicPath: '/',
    },
    resolve: {
      // Add '.ts' and '.tsx' as resolvable extensions.
      extensions: [".ts", ".tsx", ".js", ".json"],
    },
    plugins: [new MiniCssExtractPlugin()],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            plugins: [
              'fbt',
              'fbt-runtime',
            ]
          }
        },
        // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'ts-loader',
            }
          ]
        },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
      ]
    },
    watch: true,
  };
  
  // server-specific configuration
  if (env.platform === 'server') {
    base.target = 'node';
  }

  // client-specific configurations
  if (env.platform === 'web') {
    base.entry = './src/client.tsx';
    base.output.filename = 'js/client.js';
  }

  return base;
};