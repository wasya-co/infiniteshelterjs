import Adapter from "enzyme-adapter-react-16"
import * as enzyme from "enzyme"
import { mount } from "enzyme"
// import { createMemoryHistory } from 'history'
import React from "react"
import { act } from "react-dom/test-utils"
import {
  Link, Switch, BrowserRouter as Router, Redirect, Route as _Route, useHistory, withRouter
} from 'react-router-dom'


import { CitiesShow } from "$components/cities"
import { AppMock, logg, } from "$shared"
import useApi from "$shared/Api"

enzyme.configure({ adapter: new Adapter() })

/* jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
})) */

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
                  newsitems: [{ name: 'report-name-2', item_type: 'report' }]
                }
              }
            })
          })
        },
      }
    },
  }
})

/* jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom')
  return {
    __esModule: true,
    ...originalModule,
    useHistory: jest.fn(() => ({ location: { pathname: '/en/cities/travel-to/chicago', search: '', hash: '' } })),
  }
}) */

const theseProps = { match: { url: '/en/cities/travel-to/chicago', params: '?' } }

describe("CitiesShow", () => {

  it("renders", () => {
    let component = mount(<AppMock>
      <CitiesShow {...theseProps} />
    </AppMock>)
    expect(component).toBeTruthy()
  })

  it("current - renders newsitems", async () => {
    // const history = createMemoryHistory()
    // history.push('/en/cities/travel-to/chicago')
    let component = await mount(<AppMock>
      <CitiesShow {...theseProps} />
    </AppMock>)
    expect(component.text()).toMatch(/report-name-2/)
    await act(() => new Promise(setImmediate))
  })

})
