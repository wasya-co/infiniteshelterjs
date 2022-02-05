import Adapter from "enzyme-adapter-react-16"
import { configure, mount } from "enzyme"
import React, { useState } from "react"

import { Account } from "$components/users"
import { AppMock, logg } from "$shared"

configure({ adapter: new Adapter() })

describe("current - Account", () => {

  it("renders", () => {
    const defaultCurrentUser = { email: 'test@gmail.com', n_unlocks: 1 }
    let currentUser = false
    const setCurrentUser = (props) => currentUser = props
    let component = mount(<AppMock {...{ currentUser, setCurrentUser }} ><Account /></AppMock>)
    expect(component).toBeTruthy()

    setCurrentUser(defaultCurrentUser)
    component = mount(<AppMock {...{ currentUser, setCurrentUser }} ><Account /></AppMock>)
    expect(component.text()).toMatch(/test@gmail.com/)

  })

})
