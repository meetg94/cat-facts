const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(
        proxy("/api/v1/resources", {
            target: 'https://dog-facts-api.herokuapp.com',
            changeOrigin: true
        })
    )
}
