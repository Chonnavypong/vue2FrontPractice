module.exports = {
  devServer: {
    proxy: {
      '/api/v1': {
        target: 'http://127.0.0.1:4000'
      }
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}