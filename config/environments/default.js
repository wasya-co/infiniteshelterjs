
module.exports = {
  appIndexPath: "src/index",

  router: {
    locationPath: (a) => `/en/locations/show/${a}`,
    loginPath: '/api/users/login',
  },
};

