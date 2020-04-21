const path = require('path');

module.exports = function(env, argv) {
  
  // default to the server configuration
  const base = {
    mode: 'development',
    entry: './src/server.ts',
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
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
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
    base.entry = './src/App.tsx';
    base.output.filename = 'js/client.js';
  }

  return base;
};
