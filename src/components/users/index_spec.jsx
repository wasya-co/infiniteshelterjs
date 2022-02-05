import Adapter from "enzyme-adapter-react-16"
import * as enzyme from "enzyme"
import { mount, shallow } from "enzyme"
import React, { useState } from "react"
import { act } from '@testing-library/react'

import { PasswordLogin } from "./"
import { AppMock, logg, request } from "$shared"

enzyme.configure({ adapter: new Adapter() })

jest.mock('request')
request.post = jest.fn().mockImplementationOnce(() => new Promise(() => {}, () => {}))

/*
jest.mock('$shared/request', () => {
  const originalModule = jest.requireActual("$shared/request")
  return {
    __esModule: true,
    ...originalModule,
    default: {
      post: () => {
        return new Promise((resolve, reject) => {
          resolve({
            data: {
            }
          })
        })
      },
    }
  }
}) */

describe("PasswordLogin", () => {

  it("submits on Enter", async () => {
    let component = mount(<AppMock ><PasswordLogin /></AppMock>)
    expect(component.find('input[type="password"]').length).toEqual(1)

    component.find('input[type="password"]').simulate('keydown', { key: 'Enter' })
    await act(() => new Promise(setImmediate))
    expect(request.post).toHaveBeenCalled()
  })

})
