
import Adapter from "enzyme-adapter-react-16"
import * as enzyme from "enzyme"
import { mount } from "enzyme"
import React from "react"
import {
  Link, Switch, BrowserRouter as Router, Redirect, Route as _Route, useHistory, withRouter
} from 'react-router-dom'
import { act } from '@testing-library/react'

import ReportsShow from "./ReportsShow"
import { LoginModal } from "$components/users"
import { AppMock, C, logg, } from "$shared"
import useApi from "$shared/Api"

enzyme.configure({ adapter: new Adapter() })


jest.mock('$shared/request', () => {
  const originalModule = jest.requireActual("$shared/request")
  return {
    __esModule: true,
    ...originalModule,
    default: {
      get: () => {
        return new Promise((resolve, reject) => {
          resolve({
            data: {
              report: {
                id: '1',
                is_premium: true,
                premium_tier: 1,
                is_purchased: false,
              }
            }
          })
        })
      },
    }
  }
})


const theseProps = { match: { url: '/en/reports/show/1', params: '?' } }

describe("ReportsShow", () => {

  test('renders', async () => {
    let wrapper = mount(<AppMock >
      <ReportsShow {...theseProps} />
    </AppMock>)
    expect(wrapper).toBeTruthy()
    await act(() => new Promise(setImmediate))
  })

})
