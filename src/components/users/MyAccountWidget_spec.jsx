import Adapter from "enzyme-adapter-react-16"
import { configure, mount } from "enzyme"
import React, { useState } from "react"
import { CardElement, Elements, useElements, useStripe, } from '@stripe/react-stripe-js'
import { act } from '@testing-library/react'

import {
  AuthContextProvider,
} from 'ishlibjs'

import { MyAccountWidget } from "$components/users"
import { AppMock, logg } from "$shared"
import useApi from "$shared/Api"

configure({ adapter: new Adapter() })

jest.mock('@stripe/react-stripe-js', () => ({
  __esModule: true,
  ...jest.requireActual('@stripe/react-stripe-js'),
  useElements: () => ({
    getElement: () => true,
  }),
  useStripe: () => ({
    confirmCardPayment: () => ({
      paymentIntent: { status: 'succeeded' }
    }),
  }),
}))

jest.mock('$shared/Api', () => ({
  __esModule: true,
  ...jest.requireActual('$shared/Api'),
  default: () => ({
    getMyAccount: () => ({
      email: 'test@gmail.com',
      n_unlocks: 5,
    }),
    getPayments: () => ({
      data: {
        client_secret: 'blahblah',
      },
    }),
  })
}))

describe("MyAccountWidget -  ", () => {

  describe("When Loggedin -  ", () => {
    it("shows email -  ", () => {
      const cu = { email: 'test@gmail.com' }

      const w = mount(<AuthContextProvider {...{ currentUser: cu, setCurrentUser: () => {}, useApi: useApi }}
      ><MyAccountWidget />
      </AuthContextProvider>)

      expect(w.text()).toMatch(/test@gmail.com/)
    })
  })

  it('CoinManager doesnt render if not logged in -  ', () => {
    const w = mount(<AuthContextProvider {...{ currentUser: false, setCurrentUser: () => {}, useApi: useApi }}
    ><MyAccountWidget />
    </AuthContextProvider>)
    expect( w.find('.CoinManager').length ).toEqual(0)
  })

  it('CoinManager renders if logged in - ', () => {
    const cu = { email: 'test@gmail.com' }
    const w = mount(<AuthContextProvider {...{ currentUser: cu, setCurrentUser: () => {}, useApi: useApi }}
    ><MyAccountWidget />
    </AuthContextProvider>)
    expect( w.find('div.CoinManager').length ).toEqual(1)
  })

})
