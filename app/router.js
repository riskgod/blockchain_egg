'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.get('/api/assets', 'asset.index')
};
