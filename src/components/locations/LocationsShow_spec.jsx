
import Adapter from "enzyme-adapter-react-16"
import { configure, mount } from "enzyme"
import React from "react"

import LocationsShow from './LocationsShow'

configure({ adapter: new Adapter() })

describe('LocationsShow', () => {
  it('renders', () => {
    const w = mount(<LocationsShow />)
    expect(w).toBeTruthy()
  })
})