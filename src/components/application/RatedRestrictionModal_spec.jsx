
import Adapter from "enzyme-adapter-react-16"
import { configure, mount } from "enzyme"
import React from "react"

import RatedRestrictionModal from './RatedRestrictionModal'

configure({ adapter: new Adapter() })

describe('RatedRestrictionModal', () => {
  it('renders', () => {
    const w = mount(<RatedRestrictionModal />)
    expect(w).toBeTruthy()
  })
})
