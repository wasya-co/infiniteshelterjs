

import React, { useContext } from 'react'

import config from "config"
import { C,
  logg, // eslint-disable-line no-unused-vars
request, TwofoldContext } from "$shared"

const useApi = () => {
  // const { currentUser, setCurrentUser } = useContext(TwofoldContext)
  // const token = localStorage.getItem(C.jwt_token)

  return {

    // doRegister: ({email, password }) => {
    //   return request.post(`${config.apiOrigin}/api/users`, { email, password }).then((r) => r.data).then((r) => {
    //     logg(r, 'done registered')
    //     return r
    //   })
    // },

    applicationHome: () => {
      return new Promise((resolve, reject) => {
        return resolve({ domain: 'ok-123', features: [], newsitems: [] })
      })
    },

    /* Returns current user */
    doUnlock: ({ kind, id }) => {
      logg('fakeApi doUnlock')
      return new Promise((resolve, reject) => {
        resolve({ email: 'some@email.com' })
      })
    },


    // getCities: ()   => request.get(`${config.apiOrigin}/api/cities`).then((r) => r.data),

    getCity: () => {
      return new Promise((resolve, reject) => {
        resolve({
          data: {
            city: {
              newsitems: [{ name: 'report-name-2', item_type: 'Report' }]
            }
          }
        })
      })
    },

    // getGallery: (slug) => request.get(`${config.apiOrigin}/api/galleries/view/${slug}?jwt_token=${token}`).then((r) => r.data.gallery),

    getMyAccount: () => {
      logg('fakeApi getMyAccount')
      return new Promise((resolve, reject) => {
        resolve({ email: 'some@email.com' })
      })
    },

    // getPayments: () => request.get(`${config.apiOrigin}/api/payments2?jwt_token=${token}`).then((r) => r.data),

    getReport: (slug) => new Promise(() => {}, () => {}), // request.get(`${config.apiOrigin}/api/reports/view/${slug}?jwt_token=${token}`).then((r) => r.data.report),

    getTag: (tag) => new Promise(() => {}, () => {}), // request.get(`${config.apiOrigin}/api/tags/view/${tag.slug}`).then((r) => r.data),

    // loginPath: '/api/users/login.json',
    // longTermTokenPath: '/api/users/long_term_token',

    // myVideosPath: "/api/my/videos", // @TODO: remove

  }

}

export default useApi
