'use strict';

const fs = require('fs');

const moduleName = 'CHAINCORE-API';

const clientToken = process.env.CLIENT_TOKEN_FILE
  ? fs.readFileSync(process.env.CLIENT_TOKEN_FILE, 'utf8').trim()
  : process.env.CLIENT_TOKEN;

//Chain Core Setting
const chaincore = {
  url: 'http://chaincore:1999', //'chaincore' service is a DNS service lookup on  docker-compose.yml
  token: clientToken,
};

const chain = require('chain-sdk');
const _client = new chain.Client(chaincore.url, chaincore.token);

let _signer;
let _key;

//executed in index.js
function initialize() {
  Promise.resolve().then(() => {
    let params = {
      alias: 'mockHsm'
    };

    const keyPromise = _client.mockHsm.keys.query(params);
    return keyPromise;
  }).then(keys => {
    //temporary solution - just use any existing key if it is available else create one
    if (keys.items.length > 0) {
      console.log("USING HSM EXISTING KEY");
      _key = keys.items[0];
      _signer = new chain.HsmSigner();
      _signer.addKey(_key.xpub, _client.mockHsm.signerConnection);
    } else {
      console.log("CREATING HSM KEY");

      let params = {
        alias: 'mockHsm'
      };
      _client.mockHsm.keys.create(params).then(key => {
        _key = key;
        _signer = new chain.HsmSigner();
        _signer.addKey(_key.xpub, _client.mockHsm.signerConnection);
      });
    }
  });
}

function client() {
  return _client;
}

function signer() {
  return _signer;
}

function key() {
  return _key;
}

module.exports = {
  chaincore,
  client,
  signer,
  key,
  initialize,
  moduleName
};
