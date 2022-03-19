import Adapter from "enzyme-adapter-react-16"
import * as enzyme from "enzyme"
import { mount, shallow } from "enzyme"
import React, { useState } from "react"
import { act } from '@testing-library/react'

import { PasswordLogin } from "./"
import { AppMock, logg, } from "$shared"
import request from "$shared/request"

enzyme.configure({ adapter: new Adapter() })

// jest.mock('$shared/request')
// request.post = jest.fn(new Promise(() => {}, () => {}))


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

describe("PasswordLogin - current2 ", () => {

  it("submits on Enter", async () => {
    let component = mount(<AppMock ><PasswordLogin /></AppMock>)
    expect(component.find('input[type="password"]').length).toEqual(1)

    component.find('input[type="password"]').simulate('keydown', { key: 'Enter' })
    await act(() => new Promise(setImmediate))
    expect(request.post).toHaveBeenCalled()
  })

})
