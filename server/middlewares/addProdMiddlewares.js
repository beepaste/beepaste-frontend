const path = require('path');
const express = require('express');
const compression = require('compression');
const getPaste = require('../pages/getPaste');

module.exports = function addProdMiddlewares(app, options) {
  const publicPath = options.publicPath || '/';
  const outputPath = options.outputPath || path.resolve(process.cwd(), 'build');

  // compression middleware compresses your server responses which makes them
  // smaller (applies also to assets). You can read more about that technique
  // and other good practices on official Express.js docs http://mxs.is/googmy
  app.use(compression());
  app.set('view engine', 'pug');
  app.use(publicPath, express.static(outputPath));
  app.use(express.static('static'));

  /**
   * @return raw view of paste
   * @param id: id of paste
   */
  app.get('/view/raw/:id', (req, res) => {
    getPaste(req.params.id, (response) => {
      if (response.status === 'success') {
        res.send(response.paste.raw);
      } else {
        res.send('Something\'s not right');
      }
    });
  });

  /**
   * @return embed view of paste
   * @param id: id of paste
   */
  app.get('/view/embed/:id', (req, res) => {
    getPaste(req.params.id, (response) => {
      if (response.status === 'success') {
        res.render('embed', { paste: response.paste });
      } else {
        res.send('Something\'s not right');
      }
    });
  });
  app.get('*', (req, res) => res.sendFile(path.resolve(outputPath, 'index.html')));
};
