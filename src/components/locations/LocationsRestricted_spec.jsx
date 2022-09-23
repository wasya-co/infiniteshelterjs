
import Adapter from "enzyme-adapter-react-16"
import { configure, mount } from "enzyme"
import React from "react"

import LocationsRestricted from './LocationsRestricted'

configure({ adapter: new Adapter() })

describe('LocationsRestricted', () => {

  it('renders', () => {
    const w = mount(<LocationsRestricted />)
    expect(w).toBeTruthy()
  })

})

