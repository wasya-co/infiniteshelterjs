import Adapter from "enzyme-adapter-react-16"
import * as enzyme from "enzyme"
import { mount } from "enzyme"
import React from "react"
import { act } from "react-dom/test-utils"
import {
  Link, Switch, BrowserRouter as Router, Redirect, Route as _Route, useHistory, withRouter
} from 'react-router-dom'

import PurchaseModal from "./PurchaseModal"
import { AppMock, C, logg, } from "$shared"
import useApi from "$shared/Api"

enzyme.configure({ adapter: new Adapter() })

jest.mock("$shared/Api")

const theseProps = { match: { url: '/en/cities/travel-to/chicago', params: '?' } }

describe("PurchaseModal - current2 ", () => {

  it("renders", async () => {
    let component = mount(<AppMock>
      <PurchaseModal {...theseProps} />
    </AppMock>)
    expect(component).toBeTruthy()
    await act(() => new Promise(setImmediate))
  })

  // it("says to purchase more if not enough coins", async () => {
  //   const appMockProps = {
  //     currentUser: { n_unlocks: -1 }, setCurrentUser: () => {},
  //     itemToUnlock: { id: 'some-id', premium_tier: 1 },
  //   }
  //   let component = await mount(<AppMock {...appMockProps} >
  //     <UnlockModal {...theseProps} />
  //   </AppMock>)
  //   expect(component.text()).toMatch(/You don't have enough unlocks/)
  //   await act(() => new Promise(setImmediate))
  // })

})
