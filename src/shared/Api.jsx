
import config from "config";
import { request } from "$shared";

// @TODO: need to reparate just paths and constants from the semantic objects

const Api = {
  doUnlock: ({ kind, id, jwt_token }) => {
    const currentUser = JSON.parse(localStorage.getItem("current_user")) || {};
    if (!currentUser) { throw "unauthorized"; }
    return `/api/payments/unlock?kind=${kind}&id=${id}&jwt_token=${currentUser.jwt_token}`;
  },

  longTermTokenPath: '/api/users/long_term_token',

  myAccount: "/api/my/account",
  myVideosPath: "/api/my/videos",

  payments2: "/api/payments2",

  reportsGet: (a) => {
    const currentUser = JSON.parse(localStorage.getItem("current_user")) || {};
    let jwt = "";
    if (currentUser) {
      jwt = `jwt_token=${currentUser.jwt_token}`
    }
    return `${config.apiOrigin}/api/reports/view/${a}?${jwt}`;
  },

  getCities: ()   => request.get(`${config.apiOrigin}/api/cities`).then((r) => r.data),
  getCity: (slug) => request.get(`${config.apiOrigin}/api/cities/view/${slug}`),

  getSite: (slug) => {
    const currentUser = JSON.parse(localStorage.getItem("current_user")) || {};
    let jwt = "";
    if (currentUser) {
      jwt = `jwt_token=${currentUser.jwt_token}`;
    }
    return `${config.apiOrigin}/api/sites/view/${slug}?${jwt}`;
  },

}

export default Api;
