const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = (config, context) => {
  config.devServer.port = 8080
  config.devServer.allowedHosts = ['.amazonaws.com']
  config.optimization.runtimeChunk = false;
 
  return {
    ...config,
    plugins: [
      ...config.plugins,
       new ModuleFederationPlugin({
      name: "shell",
      filename: "remoteEntry.js",
      remotes: {
          kyc: 'kyc@http://localhost:8081/remoteEntry.js',
        },
      exposes: {}
    })
    ]
  };
};