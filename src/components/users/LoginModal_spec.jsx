
import { configure, mount, } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import React, { useState } from "react"
import { act } from "react-dom/test-utils"

import { LoginModal } from "$components/users"
import {
  AppMock,
  C,
  logg,
  TwofoldContext,
} from "$shared"
import request from "$shared/request"

configure({ adapter: new Adapter() })

jest.mock('$shared/request', () => {
  const originalModule = jest.requireActual("$shared/request")
  return {
    __esModule: true,
    ...originalModule,
    default: {
      ...originalModule.default,
      post: jest.fn().mockImplementation(() => new Promise(() => true, () => true)),
    }
  }
})

const MockTwofoldContextProvider = ({ children, ...props }) => {
  return <TwofoldContext.Provider value={{
    loginModalOpen: true,
    setLoginModalOpen: () => {},
  }} >{ children }</TwofoldContext.Provider>
}

describe("LoginModal", () => {

  it("renders", async () => {
    let currentUser = C.anonUser
    const setCurrentUser = (props) => currentUser = props

    let component = mount(<AppMock {...{ currentUser, setCurrentUser }} ><LoginModal /></AppMock>)
    expect(component).toBeTruthy()
    await act(() => new Promise(setImmediate))
  })

  it("submits on Enter - current2 ", async () => {
    let component = mount(<MockTwofoldContextProvider ><LoginModal /></MockTwofoldContextProvider>)
    logg(component.text(), 'component')

    expect(component.find('input[type="password"]').length).toEqual(1)

    component.find('input[type="password"]').simulate('keydown', { key: 'Enter' })
    expect(request.post).toHaveBeenCalled()
    await act(() => new Promise(setImmediate))
  })

})
