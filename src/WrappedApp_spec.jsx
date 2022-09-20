
import Adapter from "enzyme-adapter-react-16"
import { configure, mount } from "enzyme"
import React from "react"

import AppWrapper2 from './AppWrapper2'

configure({ adapter: new Adapter() })

describe('AppWrapper2', () => {
  it('renders', () => {
    const w = mount(<AppWrapper2 />)
    expect(w).toBeTruthy()
  })
})
