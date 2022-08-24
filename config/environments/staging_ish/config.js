
/*
 * NOT USED, use production_ish. _vp_ 2022-08-15
**/
const settings = {
  "apiOrigin": "https://manager.piousbox.com",

  "domain": "tgm.piousbox.com", // required! 20210831

  "debug": false,

  APP_ENV: 'development_web',
  "homePath": "/en/locations/show/root",

  "requireLogin": false,
};

const defaultSettings = require('../default.js')
module.exports = { ...defaultSettings, ...settings }
