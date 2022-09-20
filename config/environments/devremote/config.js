
const settings = {
  "apiOrigin": "https://manager.piousbox.com",

  "domain": "tgm.piousbox.com", // required! 20210831

  "debug": false,

  APP_ENV: 'development_web',
  "homePath": "/en/locations/show/art-gallery",

  "requireLogin": false,
  stripePublicKey: 'pk_test_qr1QPmSpLdBFt1F7itdWJOj3',
};

const defaultSettings = require('../default.js')
module.exports = { ...defaultSettings, ...settings }
