
module.exports = {
  appIndexPath: "src/index", // used in webpack
  apiOrigin: "",
  domain: "", // required! 2021-08-31
  debug: false,
  homePath: "",
  requireLogin: true,
  stripePublicKey: '',
  // This router isn't used. _vp_ 2022-09-04
  router: {
    locationPath: (a) => `/en/locations/show/${a}`,
    loginPath: '/api/users/login',
  },
};

