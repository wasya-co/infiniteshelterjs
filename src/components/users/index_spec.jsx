import Adapter from "enzyme-adapter-react-16"
import * as enzyme from "enzyme"
import { mount, shallow } from "enzyme"
import React, { useState } from "react"

import { PasswordLogin } from "./"
import { AppMock, logg, request } from "$shared"

enzyme.configure({ adapter: new Adapter() })

jest.mock('request')
request.post = jest.fn()

describe("PasswordLogin", () => {

  it("submits on Enter", () => {
    let component = mount(<AppMock ><PasswordLogin /></AppMock>)
    expect(component.find('input[type="password"]').length).toEqual(1)

    component.find('input[type="password"]').simulate('keydown', { key: 'Enter' })
    expect(request.post).toHaveBeenCalled()
  })

})
