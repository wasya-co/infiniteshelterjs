
import Adapter from "enzyme-adapter-react-16"
import { configure, mount } from "enzyme"
import React, { useState } from "react"
import { act } from "react-dom/test-utils"

import { PasswordLoginModal } from "$components/users"
import { AppMock, C, logg } from "$shared"

configure({ adapter: new Adapter() })

describe("PasswordLoginModal", () => {

  it("renders", async () => {
    const defaultCurrentUser = { email: 'test@gmail.com', n_unlocks: 1 }
    let currentUser = C.anonUser
    const setCurrentUser = (props) => currentUser = props

    let component = mount(<AppMock {...{ currentUser, setCurrentUser }} ><PasswordLoginModal /></AppMock>)
    expect(component).toBeTruthy()
    await act(() => new Promise(setImmediate))
  })

})
