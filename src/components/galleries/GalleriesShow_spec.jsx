
import Adapter from "enzyme-adapter-react-16"
import * as enzyme from "enzyme"
import { mount } from "enzyme"
import React from "react"
import {
  Link, Switch, BrowserRouter as Router, Redirect, Route as _Route, useHistory, withRouter
} from 'react-router-dom'
import { act } from '@testing-library/react'

import GalleriesShow from "./GalleriesShow"
import { AppMock, C, logg, } from "$shared"
import request from "$shared/request"
import useApi from "$shared/Api"

jest.mock("$shared/Api")

enzyme.configure({ adapter: new Adapter() })

// jest.mock('$shared/request', () => {
//   // const originalModule = jest.requireActual("$shared")
//   return {
//     __esModule: true,
//     // ...originalModule,
//     default: {
//       get: () => {
//         return new Promise((resolve, reject) => {
//           resolve({
//             data: {
//               gallery: {
//                 id: '1',
//                 is_premium: true,
//                 premium_tier: 1,
//                 is_purchased: false,
//               }
//             }
//           })
//         })
//       },
//     }
//   }
// })

const theseProps = { match: { url: '/en/galleries/show/abba', params: '?' } }

describe("GalleriesShow", () => {

  test(' current2 - does not show unlock modal if user is not logged in', async () => {
    let wrapper = mount(<AppMock >
      <GalleriesShow {...theseProps} />
    </AppMock>)
    expect(wrapper.find('LoginModal').length).toEqual(1)
    expect(wrapper.find('UnlockModal').length).toEqual(0)
    await act(() => new Promise(setImmediate))
  })

})
