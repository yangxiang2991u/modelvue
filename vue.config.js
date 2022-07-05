const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/wt': {
        target: 'http://t.weather.sojson.com',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/wt': '/'
        }
      },
      '/joy': {
        target: 'https://www.hlapi.cn',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '/joy': '/'
        }
      },
      '/moy': {
        target: 'https://i.maoyan.com',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '/moy': '/'
        }
      }
    }
  }
})
