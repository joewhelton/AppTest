const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:5001/apptest-964db/us-central1/',
            changeOrigin: true,
        })
    );
};