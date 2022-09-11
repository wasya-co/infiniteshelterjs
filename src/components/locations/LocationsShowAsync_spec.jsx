
import Adapter from "enzyme-adapter-react-16"
import { configure, mount } from "enzyme"
import React from "react"
import { act } from "react-dom/test-utils"

import * as Api from "$shared/Api"
import LocationsShowAsync from './LocationsShowAsync'

configure({ adapter: new Adapter() })

Api.default = jest.fn().mockImplementation(() => {
  return {
    getLocation: jest.fn(() => new Promise(() => {}, () => {}) ),
  }
})

describe('LocationsShowAsync', () => {
  it('renders', () => {
    const slug = 'xxSlugxx'
    const w = mount(<LocationsShowAsync {...{ match: { params: { slug } } }} />)
    expect(w).toBeTruthy()
  })

  it('calls api.getLocation - current2 ', async () => {
    const slug = 'xxSlugxx'


    let w = await mount(<LocationsShowAsync {...{ match: { params: { slug } } }} />)

    const api = Api.default()
    expect(api.getLocation).toHaveBeenCalled()

    await act(async () => new Promise(setImmediate))
  })

})


// it('Refreshes currentUser after unlocking - current2 ', async () => {
//   const setCu = jest.fn()
//   const appMockProps = {
//     currentUser: { n_unlocks: 2 }, setCurrentUser: setCu,
//     itemToUnlock: { id: 'some-id', premium_tier: 1 },
//   }
//   const w = mount(<AppMock {...appMockProps} >
//     <UnlockModal {...theseProps} />
//   </AppMock>)

//   // logg(w.debug(), 'zeDebug')
//   expect(setCu).toHaveBeenCalled()
//   w.find('div.doUnlock').simulate('click')
// })
