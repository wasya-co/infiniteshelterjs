
import Adapter from "enzyme-adapter-react-16"
import * as enzyme from "enzyme"
import { mount } from "enzyme"
import React from "react"
import {
  Link, Switch, BrowserRouter as Router, Redirect, Route as _Route, useHistory, withRouter
} from 'react-router-dom'


import ReportsShow from "./ReportsShow"
import { LoginModal } from "$components/users"
import { AppMock, C, logg, } from "$shared"
import useApi from "$shared/Api"

enzyme.configure({ adapter: new Adapter() })

jest.mock('$shared/Api', () => {
  return {
    __esModule: true,
    default: () => {
      return {
        getCity: () => {
          return new Promise((resolve, reject) => {
            resolve({
              data: {
                city: {
                  newsitems: [{ name: 'report-name-2', item_type: 'Report' }]
                }
              }
            })
          })
        },
      }
    },
  }
})

const theseProps = { match: { url: '/en/cities/travel-to/chicago', params: '?' } }

describe("ReportsShow", () => {

  test('renders', () => {
    let wrapper = mount(<AppMock >
      <ReportsShow />
    </AppMock>)
    expect(wrapper).toBeTruthy()
  })

})
