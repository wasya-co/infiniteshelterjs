import React, { useContext } from 'react'

import config from "config"
import { C,
  logg, // eslint-disable-line no-unused-vars
request, TwofoldContext } from "$shared"

const useApi = () => {
  const { currentUser, setCurrentUser } = useContext(TwofoldContext)
  const token = localStorage.getItem(C.jwt_token);

  return {

    // returns current user
    doUnlock: ({ kind, id }) => {
      const jwt_token = localStorage.getItem('jwt_token')
      const path = `/api/payments/unlock?kind=${kind}&id=${id}&jwt_token=${jwt_token}`
      return request.post(`${config.apiOrigin}${path}`).then((r) => r.data)
    },


    getCities: ()   => request.get(`${config.apiOrigin}/api/cities`).then((r) => r.data),
    getCity: (slug) => request.get(`${config.apiOrigin}/api/cities/view/${slug}`),
    getMyAccount: () => request.post(`/api/my/account`, {
        jwt_token: localStorage.getItem('jwt_token'),
      }).then((r) => {
        logg(r.data, 'getmyaccount')
        return r.data
      }),
    getPayments: () => request.get(`${config.apiOrigin}/api/payments2?jwt_token=${token}`).then((r) => r.data),
    getTag: (tag) => request.get(`${config.apiOrigin}/api/tags/view/${tag.slug}`).then((r) => r.data),

    loginPath: '/api/users/login.json',
    longTermTokenPath: '/api/users/long_term_token',

    myAccount: () => "/api/my/account",
    myVideosPath: "/api/my/videos",

    reportsGet: (a) => {
      const currentUser = JSON.parse(localStorage.getItem("current_user")) || {};
      let jwt = "";
      if (currentUser) {
        jwt = `jwt_token=${currentUser.jwt_token}`
      }
      return `${config.apiOrigin}/api/reports/view/${a}?${jwt}`;
    },


    applicationHome: async () => {
      const out = await request.get(`${config.apiOrigin}/api/sites/view/${config.domain}`, { params: { jwt_token: token } })
      return out.data
    }
  }

}

export default useApi
