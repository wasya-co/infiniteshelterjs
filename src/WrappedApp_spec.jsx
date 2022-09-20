
import Adapter from "enzyme-adapter-react-16"
import { configure, mount } from "enzyme"
import React from "react"

import WrappedApp from './WrappedApp'

configure({ adapter: new Adapter() })

describe('WrappedApp', () => {
  it('renders', () => {
    const w = mount(<WrappedApp />)
    expect(w).toBeTruthy()
  })
})
