import React, { useContext } from 'react'

import config from "config"
import {
  AuthContext,
} from 'ishlibjs'

import { C,
  logg, // eslint-disable-line no-unused-vars
  request,
} from "$shared"

const useApi = () => {
  const {
    setCurrentUser,
    setLoginModalOpen,
  } = useContext(AuthContext)

  const token = localStorage.getItem(C.jwt_token)

  return {

    deleteNewsitem: ({ id }) => {
      return request.delete(`${config.apiOrigin}/api/newsitems/${id}?jwt_token=${token}`).then((r) => r.data).then((r) => {
        return r
      })
    },
    doRegister: ({email, password }) => {
      return request.post(`${config.apiOrigin}/api/users`, { email, password }).then((r) => r.data).then((r) => {
        logg(r, 'done registered')
        return r
      })
    },
    /* Returns current user */
    doUnlock: ({ kind, id }) => {
      const jwt_token = localStorage.getItem('jwt_token')
      const path = `/api/payments/unlock?kind=${kind}&id=${id}&jwt_token=${jwt_token}`
      return request.post(`${config.apiOrigin}${path}`).then((r) => r.data)
    },

    getCities: ()   => request.get(`${config.apiOrigin}/api/cities`).then((r) => r.data),
    getCity: (slug) => request.get(`${config.apiOrigin}/api/cities/view/${slug}`),
    getGallery: (slug) => request.get(`${config.apiOrigin}/api/galleries/view/${slug}?jwt_token=${token}`).then((r) => r.data.gallery),

    getMyAccount: () => request.post(`/api/my/account`, { jwt_token: token, }).then((r) => r.data),

    getPayments: () => request.get(`${config.apiOrigin}/api/payments2?jwt_token=${token}`).then((r) => r.data),

    getReport: (slug) => request.get(`${config.apiOrigin}/api/reports/view/${slug}?jwt_token=${token}`).then((r) => r.data.report),

    getTag: (tag) => request.get(`${config.apiOrigin}/api/tags/view/${tag.slug}`).then((r) => r.data),

    loginPath: '/api/users/login.json',
    longTermTokenPath: '/api/users/long_term_token',

    postLogin: ({ email, password }) => {
      return request.post(`${config.apiOrigin}${config.router.loginPath}`, { email, password }).then((r) => r.data).then((resp) => {
        logg(resp, 'got this resp')

        localStorage.setItem(C.jwt_token, resp.jwt_token)
        localStorage.setItem(C.current_user, JSON.stringify(resp))
        setCurrentUser(resp) // must be done *after* setting C.jwt_token
        setLoginModalOpen(false)
      }).catch((e) => {
        logg(e, 'e322')
        toast("Login failed")
        setCurrentUser(C.anonUser)
      })
    },

    myVideosPath: "/api/my/videos", // @TODO: remove

    applicationHome: () => {
      request.get(`${config.apiOrigin}/api/sites/view/${config.domain}`, { params: { jwt_token: token } }).then((r) => {
        return r.data
      })
    }
  }

}

export default useApi
