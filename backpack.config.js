const Dotenv = require('dotenv-webpack')
// const WebpackBar = require('webpackbar')

module.exports = {
  webpack: (config, options, webpack) => {
    config.plugins.push(new Dotenv())
    // config.plugins.push(
    //   new WebpackBar({
    //     profile: true,
    //   })
    // )
    return config
  },
}
