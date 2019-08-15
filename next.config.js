if (typeof require !== 'undefined') {
  require.extensions['.less'] = () => {}
  require.extensions['.css'] = file => {}
}

module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.png$/,
      loader: require.resolve('url-loader'),
    })
    config.module.rules.push({
      test: /\.css$/,
      loader: [
        require.resolve('style-loader'),
        require.resolve('css-loader'),
        require.resolve('postcss-loader'),
      ],
    })
    return config
  },
  distDir: 'build',
}

