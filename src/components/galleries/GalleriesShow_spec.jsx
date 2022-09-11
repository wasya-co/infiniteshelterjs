
import Adapter from "enzyme-adapter-react-16"
import * as enzyme from "enzyme"
import { mount } from "enzyme"
import React from "react"
import {
  Link, Switch, BrowserRouter as Router, Redirect, Route as _Route, useHistory, withRouter
} from 'react-router-dom'
import { act } from '@testing-library/react'

import { UnlockModal } from "$components/application"
import { LoginModal } from "$components/users"
import { AppMock, C, logg, } from "$shared"
import useApi from "$shared/Api"
import request from "$shared/request"
import GalleriesShow from "./GalleriesShow"

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

  it('renders', () => {
    const w = mount(<GalleriesShow />)
    expect(w).toBeTruthy()
  })

})
