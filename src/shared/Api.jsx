import React, { useContext } from 'react'

import config from "config"
import {
  AuthContext,
} from 'ishlibjs'

import {
  C,
  logg, // eslint-disable-line no-unused-vars
  request,
} from "$shared"

// @TODO: create direct unwrapped access to this. _vp_ 2022-09-10
const useApi = () => {
  if ('undefined' === typeof window) { return }

  const {
    setCurrentUser, // @TODO: this should be injected here. _vp_ 2022-09-10
  } = useContext(AuthContext)

  const token = localStorage.getItem(C.jwt_token)

  return {

    deleteNewsitem: ({ id }) => {
      return request.delete(`${config.apiOrigin}/api/newsitems/${id}?jwt_token=${token}`).then((r) => r.data).then((r) => {
        return r
      })
    },
    doRegister: ({ email, password }) => {
      return request.post(`${config.apiOrigin}/api/users/register`, { user: { email, password }} ).then((r) => r.data).then((r) => {
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
    getGallery: (slug) => {
      return request.get(`${config.apiOrigin}/api/galleries/view/${slug}?jwt_token=${token}`
      ).then((r) => r.data.gallery)
    },
    getLocation: (props) => { // _vp_ 2022-09-04
      logg(props, 'Api.getLocation()')
      const { slug } = props

      return request.get(`/api/maps/view/${slug}?jwt_token=${token}`).then(r => r.data).then(r => {
        return r.map
      }).catch((err) => {
        return err
      })
    },

    // @TODO: test: upon 401, return anon user. _vp_ 2022-08-15
    getMyAccount: () => {
      return request.post(`/api/my/account`, { jwt_token: token, }).then((r) => r.data).catch((err) => {
        // logg(err, 'Cannot #getMyAccount')
        return C.anonUser
      })
    },

    getReport: (slug) => request.get(`${config.apiOrigin}/api/reports/view/${slug}?jwt_token=${token}`).then((r) => r.data.report),

    getTag: (tag) => request.get(`${config.apiOrigin}/api/tags/view/${tag.slug}`).then((r) => r.data),

    initPayment: (p) => request.post(`${config.apiOrigin}/api/payments2`, { jwt_token: token, amount_cents: p.amountCents }).then((r) => r.data),

    longTermTokenPath: '/api/users/long_term_token', // @TODO: move to config.router _vp_ 2022-09-04

    postLogin: ({ email, password }) => {
      return request.post(`${config.apiOrigin}/api/users/login.json`,
        { user: { email, password }}
      ).then((r) => r.data).then((r) => {
        // logg(r, 'postLoginResponse')
        localStorage.setItem(C.jwt_token, r.jwt_token)
        setCurrentUser(r)
        return r
        // setLoginModalOpen(false)
      }).catch((e) => {
        logg(e, 'e322')
        return e
        // toast("Login failed")
        // setCurrentUser(C.anonUser)
      })
    },

    myVideosPath: "/api/my/videos", // @TODO: remove

    applicationHome: () => {
      request.get(`${config.apiOrigin}/api/sites/view/${config.domain}`, { params: { jwt_token: token } }).then((r) => {
        return r.data
      })
    },

    vote: (props) => {
      const { value, voter_id, votee_id, votee_class_name } = props
      return request.post(
        `${config.apiOrigin}/api/v1/vote/${votee_class_name}/${votee_id}/${voter_id}/${value}`,
        { params: { jwt_token: token } }
      ).then((r) => {
        logg(r, 'voted')
        return r
      })
    },

    unvote: () => {
      logg('Unvote is not implemented!')
    },
  }

}

export default useApi
