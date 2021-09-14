
import config from "config";
import { C, logg, request } from "$shared";

const _getWithToken = (url) => {
  const token = localStorage.getItem(C.jwt_token);
  return request.get(url, { params: { jwt_token: token } }).then((res) => {
    return res.data;
  });
};

const Api = {

  doUnlock: ({ kind, id }) => {
    const jwt_token = localStorage.getItem('jwt_token')
    return `/api/payments/unlock?kind=${kind}&id=${id}&jwt_token=${jwt_token}`;
  },

  getMyAccount: () => {
    const jwt_token = localStorage.getItem('jwt_token')
    return request.post(`/api/my/account`, {
      jwt_token: jwt_token,
    })
  },

  loginPath: '/api/users/login.json',
  longTermTokenPath: '/api/users/long_term_token',

  myAccount: () => "/api/my/account",
  myVideosPath: "/api/my/videos",

  paymentsPath: "/api/payments2",

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
    return _getWithToken(`${config.apiOrigin}/api/sites/view/${slug}`)
  },

}

export default Api;
