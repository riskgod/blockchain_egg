'use strict';

module.exports = app => {
  class AssetController extends app.Controller {
    * index() {
      client.assets.queryAll({
        filter: 'is_local=$1',
        filterParams: ['yes'],
      }, (asset, next) => {
        console.log('Local asset: ' + asset.alias)
        next()
      })
    }
  }
  return AssetController;
};
