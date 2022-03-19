
import Adapter from "enzyme-adapter-react-16"
import { configure, mount } from "enzyme"
import React, { useState } from "react"

import { LoginModal } from "$components/users"
import { AppMock, logg } from "$shared"

configure({ adapter: new Adapter() })

describe("LoginModal", () => {

  it("renders", async () => {
    const defaultCurrentUser = { email: 'test@gmail.com', n_unlocks: 1 }
    let currentUser = false
    const setCurrentUser = (props) => currentUser = props

    let component = mount(<AppMock {...{ currentUser, setCurrentUser }} ><LoginModal /></AppMock>)
    expect(component).toBeTruthy()
    await act(() => new Promise(setImmediate))
  })

})
