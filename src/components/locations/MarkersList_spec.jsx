import Adapter from "enzyme-adapter-react-16"
import * as enzyme from "enzyme"
import { mount } from "enzyme"
import React from "react"
import { act } from "react-dom/test-utils"
import {
  Link, Switch, BrowserRouter as Router, Redirect, Route as _Route, withRouter
} from 'react-router-dom'


import MarkersList from "./MarkersList"
import { AppMock, C, logg, } from "$shared"
import useApi from "$shared/Api"

enzyme.configure({ adapter: new Adapter() })

// jest.mock('$shared/Api', () => {
//   return {
//     __esModule: true,
//     default: () => {
//       return {
//         getCity: () => {
//           return new Promise((resolve, reject) => {
//             resolve({
//               data: {
//                 city: {
//                   newsitems: [{ name: 'report-name-2', item_type: 'Report' }]
//                 }
//               }
//             })
//           })
//         },
//       }
//     },
//   }
// })
jest.mock('$shared/Api')

const theseProps = { markers: [
  { slug: 'some-slug' }
] }

const mockPush = jest.fn()
jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom')
  return {
    __esModule: true,
    ...originalModule,
    useHistory: () => ({
      push: mockPush,
    }),
  }
})

describe("MarkersList - ", () => {

  afterEach(() => {
    jest.clearAllMocks()
  })

  it("renders - current2 ", () => {
    let component = mount(<AppMock>
      <MarkersList {...theseProps} />
    </AppMock>)
    expect(component).toBeTruthy()
  })

  it("#goto, pushes to history - ", async () => {
    let component = await mount(<AppMock>
      <MarkersList {...theseProps} />
    </AppMock>)
    component.find('.Marker').at(0).simulate('click')
    expect(mockPush).toHaveBeenCalled()
    await act(() => new Promise(setImmediate))
  })

  it('#goto, premium_tier 1, not purchased, shows paywall - ', async () => {
    const theseProps = { markers: [
      { slug: 'some-slug', premium_tier: 1 }
    ] }
    let component = await mount(<AppMock>
      <MarkersList {...theseProps} />
    </AppMock>)
    component.find('.Marker').at(0).simulate('click')
    expect(mockPush).not.toHaveBeenCalled()
    await act(() => new Promise(setImmediate))
  })

  it('displays purchased? status - current', async () => {
    const theseProps = { markers: [
      { slug: 'some-slug', premium_tier: 1, is_purchased: true }
    ] }
    let component = await mount(<AppMock>
      <MarkersList {...theseProps} />
    </AppMock>)
    expect(component.html()).toMatch('PurchasedIcon')
    await act(() => new Promise(setImmediate))
  })


})
