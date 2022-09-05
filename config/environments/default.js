
module.exports = {
  appIndexPath: "src/index", // used in webpack
  apiOrigin: "",
  domain: "", // required! 2021-08-31
  debug: false,
  homePath: "",
  requireLogin: true,
  siteTitle: 'Infinite Shelter Location Discovery Guide',
  stripePublicKey: '',

  // This router isn't used. _vp_ 2022-09-04
  router: {
    locationPath: (a) => `/en/locations/show/${a}`, // @TODO: remove this ugliness. _vp_ 2022-09-04
    longTermTokenPath: '/api/users/long_term_token',
    loginPath: '/api/users/login',
  },
}

