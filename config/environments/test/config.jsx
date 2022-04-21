
const settings = {
  "apiOrigin": "http://localhost:3001",

  "domain": "test.domain", // required! 20210831

  "debug": false,

  APP_ENV: 'development_web',
  "homePath": "/",

  "requireLogin": false,
};

const defaultSettings = require('../default.js')
module.exports = { ...defaultSettings, ...settings }
