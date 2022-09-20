
const settings = {
  "apiOrigin": "http://localhost:3001",

  "domain": "tgm.piousbox.com", // required! 20210831

  "debug": false,

  GOOGLE_MAPS_KEY: '<some-key>',

  APP_ENV: 'development_web',
  "homePath": "/en/locations/show/root",

  "requireLogin": false,
};

const defaultSettings = require('../default.js')
module.exports = { ...defaultSettings, ...settings }