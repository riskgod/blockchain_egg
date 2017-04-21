'use strict';

module.exports = app => {
  class AssetController extends app.Controller {
    * index() {
      this.ctx.body = 'hi, egg';
    }
  }
  return AssetController;
};
