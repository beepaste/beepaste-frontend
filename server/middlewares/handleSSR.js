/* eslint-disable global-require */
require('isomorphic-fetch');

const assets = require('./generated.assets.json'); // eslint-disable-line import/no-unresolved

const serverEntry = require('./generated.serverEntry'); // eslint-disable-line import/no-unresolved
const renderAppToStringAtLocation = serverEntry.renderAppToStringAtLocation;

function extractWebpackDllNamesFromPackage() {
  if (process.env.NODE_ENV === 'production') return [];

  const dllPlugin = require('./dllPlugin');
  return dllPlugin.dlls ? Object.keys(dllPlugin.dlls) : ['reactBoilerplateDeps'];
}

function printError(e) {
  console.error((e.stack && e.stack) || e); // eslint-disable-line no-console
}

module.exports = function handleSSR(req, res) {
  const options = {
    assets,
    webpackDllNames: extractWebpackDllNamesFromPackage(),
  };

  renderAppToStringAtLocation(req.url, options, (response) => {
    response.html.then((r) => {
      if (r === false) {
        res.status(404).send();
      } else {
        res.status(200).send(r);
      }
    });
  });
};
