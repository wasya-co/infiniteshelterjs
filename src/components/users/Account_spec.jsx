import Adapter from "enzyme-adapter-react-16"
import { configure, mount } from "enzyme"
import React, { useState } from "react"

import { Account } from "$components/users"
import { AppMock, logg } from "$shared"
import useApi from '$shared/Api'

configure({ adapter: new Adapter() })

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

// @TODO: this test is duplicated, unneeded.
describe("Account", () => {

  it("renders - ", () => {
    const defaultCurrentUser = { email: 'test@gmail.com', n_unlocks: 1 }
    let currentUser = false
    const setCurrentUser = (props) => currentUser = props
    let component = mount(<AppMock {...{ currentUser, setCurrentUser }} ><Account /></AppMock>)
    expect(component).toBeTruthy()
  })

})
