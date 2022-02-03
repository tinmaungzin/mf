const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = (config, context) => {
  config.devServer.port = 8081
  config.devServer.allowedHosts = ['.amazonaws.com']
  config.optimization.runtimeChunk = false;
  
  return {
    ...config,
    plugins: [
      ...config.plugins,
      new ModuleFederationPlugin({
      name: "kyc",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
          './Button':
            './src/assets/Button',
      }
    })
    ]
  };
};