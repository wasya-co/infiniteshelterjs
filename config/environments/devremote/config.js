
const all = {
  "apiOrigin": "https://manager.piousbox.com",
  "appIndexPath": "src/index",

  "domain": "tgm.piousbox.com", // required! 20210831
  "debug": false,

  "homeLocation": "/en/locations/show/construct0",

  "requireLogin": false,

};

const default = require('../default.js')
module.exports = { ...default, ...all }
