import Adapter from "enzyme-adapter-react-16"
import { configure, mount } from "enzyme"
import React, { useState } from "react"

import { MyAccountWidget } from "$components/users"
import { AppMock, logg } from "$shared"

configure({ adapter: new Adapter() })

describe("MyAccountWidget", () => {

  it("shows email, n available unlocks", () => {
    const defaultCurrentUser = { email: 'test@gmail.com', n_unlocks: 1 }
    let currentUser = false
    const setCurrentUser = (props) => currentUser = props
    let component = mount(<AppMock {...{ currentUser, setCurrentUser }} ><MyAccountWidget /></AppMock>)
    expect(component.text()).toMatch(/\? coins/)

    setCurrentUser(defaultCurrentUser)
    component = mount(<AppMock {...{ currentUser, setCurrentUser }} ><MyAccountWidget /></AppMock>)
    expect(component.text()).toMatch(/test@gmail.com/)
    expect(component.text()).toMatch(/1 coins/)
  });

});
