
import config from "config";

const Api = {

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
