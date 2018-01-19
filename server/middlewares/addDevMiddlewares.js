const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const httpProxy = require('http-proxy');

const dllPlugin = require('./dllPlugin');
const renderServiceProxyPort = require('../devRenderService').port;

const renderServiceUrl = `http://localhost:${renderServiceProxyPort}`;

function createWebpackMiddleware(compiler, publicPath) {
  return webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath,
    silent: true,
    stats: 'errors-only',
  });
}

function dllPluginsMiddleware(req, res) {
  const filename = req.path.replace(/^\//, '');
  res.sendFile(path.join(process.cwd(), dllPlugin.path, filename));
}

function createServerRenderProxyMiddleware(serviceUrl) {
  const renderProxy = httpProxy.createProxyServer({});

  return function serverRenderMiddleware(req, res) {
    renderProxy.web(req, res, { target: serviceUrl }, (error) => {
      if (!error || error.code !== 'ECONNREFUSED') {
        console.error('Render proxy failed', error); // eslint-disable-line no-console
      }
      res.header('Content-Type', 'text/html');
      res.status(500).send(`
        <html>
        <body>Proxying failed for page rendering service,<br>
        The service maybe restarting so the page is going to be reloaded.<br>
        Check the console for more information.</body>
        <script>window.location.reload(true)</script>
        </html>
      `);
    });
  };
}
function createWebpackMiddleware(compiler, publicPath) {
  return webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath,
    silent: true,
    stats: 'errors-only',
  });
}

module.exports = function addDevMiddlewares(app, webpackConfig) {
  const compiler = webpack(webpackConfig);
  const middleware = createWebpackMiddleware(compiler, webpackConfig.output.publicPath);

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));

  // Since webpackDevMiddleware uses memory-fs internally to store build
  // artifacts, we use it instead
  const fs = middleware.fileSystem;

  if (dllPlugin) {
    app.get(/\.dll\.js$/, dllPluginsMiddleware);
  }

  app.use(createServerRenderProxyMiddleware(renderServiceUrl));
};
