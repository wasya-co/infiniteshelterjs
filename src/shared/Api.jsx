import React, { useContext } from 'react'

import config from "config"
import { C,
  logg, // eslint-disable-line no-unused-vars
request, TwofoldContext } from "$shared"

const useApi = () => {
  const { currentUser, setCurrentUser } = useContext(TwofoldContext)
  const token = localStorage.getItem(C.jwt_token)

  return {

    doRegister: ({email, password }) => {
      return request.post(`${config.apiOrigin}/api/users`, { email, password }).then((r) => r.data).then((r) => {
        logg(r, 'done registered')
        return r
      })
    },


    // returns current user
    doUnlock: ({ kind, id }) => {
      const jwt_token = localStorage.getItem('jwt_token')
      const path = `/api/payments/unlock?kind=${kind}&id=${id}&jwt_token=${jwt_token}`
      return request.post(`${config.apiOrigin}${path}`).then((r) => r.data)
    },


    getCities: ()   => request.get(`${config.apiOrigin}/api/cities`).then((r) => r.data),
    getCity: (slug) => request.get(`${config.apiOrigin}/api/cities/view/${slug}`),
    getGallery: (slug) => request.get(`${config.apiOrigin}/api/galleries/view/${slug}?jwt_token=${token}`).then((r) => r.data.gallery),

    getMyAccount: () => request.post(`/api/my/account`, { jwt_token: token, }
    ).then((r) => r.data
    ).catch((err) => logg(err, 'r89')),

    getPayments: () => request.get(`${config.apiOrigin}/api/payments2?jwt_token=${token}`).then((r) => r.data),

    getReport: (slug) => request.get(`${config.apiOrigin}/api/reports/view/${slug}?jwt_token=${token}`).then((r) => r.data.report),

    getTag: (tag) => request.get(`${config.apiOrigin}/api/tags/view/${tag.slug}`).then((r) => r.data),

    loginPath: '/api/users/login.json',
    longTermTokenPath: '/api/users/long_term_token',

    myVideosPath: "/api/my/videos", // @TODO: remove

    applicationHome: async () => {
      const out = await request.get(`${config.apiOrigin}/api/sites/view/${config.domain}`, { params: { jwt_token: token } })
      return out.data
    }
  }

}

export default useApi
