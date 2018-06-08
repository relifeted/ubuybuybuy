const Dotenv = require('dotenv-webpack')

module.exports = {
  webpack: (config, options, webpack) => {
    config.plugins.push(new Dotenv())
    return config
  },
}
