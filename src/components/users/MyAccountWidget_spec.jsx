import Adapter from "enzyme-adapter-react-16"
import { configure, mount } from "enzyme"
import React, { useState } from "react"
import { CardElement, Elements, useElements, useStripe, } from '@stripe/react-stripe-js'
import { act } from '@testing-library/react'

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

describe("MyAccountWidget - current2 ", () => {

  it("shows email, n available unlocks - ", async () => {
    const aCurrentUser = { email: 'test@gmail.com', n_unlocks: 1 }
    let currentUser = false
    let component
    const setCurrentUser = (props) => currentUser = props

    setCurrentUser(aCurrentUser)
    component = await mount(<AppMock {...{ currentUser: aCurrentUser, setCurrentUser }} ><MyAccountWidget /></AppMock>)
    await act(() => new Promise(setImmediate))
    await new Promise(process.nextTick)

    expect(component.text()).toMatch(/test@gmail.com/)
    expect(component.text()).toMatch(/1 coins/)

  })

})
