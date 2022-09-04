import Adapter from "enzyme-adapter-react-16"
import * as enzyme from "enzyme"
import { mount } from "enzyme"
import React from "react"
import { act } from "react-dom/test-utils"

import { AppMock, C, logg, } from "$shared"
import useApi from "$shared/Api"

import UnlockModal from "./UnlockModal"

enzyme.configure({ adapter: new Adapter() })

jest.mock("$shared/Api")

// jest.mock('$shared/Api', () => {
//   return {
//     ...jest.requireActual("$shared/Api"),
//     __esModule: true,
//     myAccount: () => {},
//     default: () => {
//       return {
//         myAccount: () => {},
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

const theseProps = { match: { url: '/en/cities/travel-to/chicago', params: '?' } }

describe("UnlockModal -  ", () => {

  it("renders", async () => {
    let component = mount(<AppMock>
      <UnlockModal {...theseProps} />
    </AppMock>)
    expect(component).toBeTruthy()
    await act(() => new Promise(setImmediate))
  })

  // Nice!
  it("says to purchase more if not enough coins", async () => {
    const appMockProps = {
      currentUser: { n_unlocks: -1 }, setCurrentUser: () => {},
      itemToUnlock: { id: 'some-id', premium_tier: 1 },
    }
    let component = await mount(<AppMock {...appMockProps} >
      <UnlockModal {...theseProps} />
    </AppMock>)
    expect(component.text()).toMatch(/You don't have enough unlocks/)
    await act(() => new Promise(setImmediate))
  })

  // I need async/await here, for the doUnlock() propagation.
  it('Refreshes currentUser after unlocking - current2 ', async () => {
    const setCu = jest.fn()
    const appMockProps = {
      currentUser: { n_unlocks: 2 }, setCurrentUser: setCu,
      itemToUnlock: { id: 'some-id', premium_tier: 1 },
    }
    const w = mount(<AppMock {...appMockProps} >
      <UnlockModal {...theseProps} />
    </AppMock>)

    // logg(w.debug(), 'zeDebug')
    expect(setCu).toHaveBeenCalled()
    w.find('div.doUnlock').simulate('click')

    await act(() => new Promise(setImmediate))
  })

})
