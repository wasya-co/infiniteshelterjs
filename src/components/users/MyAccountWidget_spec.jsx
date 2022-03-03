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
      n_unlocks: 5,
    }),
    getPayments: () => ({
      data: {
        client_secret: 'blahblah',
      },
    }),
  })
}))

describe("MyAccountWidget", () => {

  it("shows email, n available unlocks", () => {
    const defaultCurrentUser = { email: 'test@gmail.com', n_unlocks: 1 }
    let currentUser = false
    const setCurrentUser = (props) => currentUser = props
    let component = mount(<AppMock {...{ currentUser, setCurrentUser }} ><MyAccountWidget /></AppMock>)
    expect(component).toBeTruthy()

    setCurrentUser(defaultCurrentUser)
    component = mount(<AppMock {...{ currentUser, setCurrentUser }} ><MyAccountWidget /></AppMock>)
    expect(component.text()).toMatch(/test@gmail.com/)
    expect(component.text()).toMatch(/1 coins/)
  })

  /* this doesnt work because it is very very async */
  // it('handleSubmit - current2', async () => {
  //   let currentUser = {
  //     email: 'some1@email.com',
  //     is_purchasing: true,
  //     n_unlocks: 0,
  //   }
  //   const setCurrentUser = (props) => {
  //     currentUser = props
  //   }
  //   let component = await mount(<AppMock {...{
  //     currentUser, setCurrentUser,
  //     purchaseModalIsOpen: true, setPurchaseModalIsOpen: () => {},
  //   }} ><MyAccountWidget /></AppMock>)
  //   component.find('form').at(0).simulate('submit')
  //   await act(() => new Promise(setImmediate))
  //   expect(component.text()).toMatch(/5/)
  // })

})
