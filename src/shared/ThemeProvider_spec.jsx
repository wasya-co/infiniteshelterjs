
import Adapter from "enzyme-adapter-react-16"
import { configure, mount } from "enzyme"
import React from "react"

import ThemeProvider from './ThemeProvider'

configure({ adapter: new Adapter() })

describe('ThemeProvider', () => {
  it('renders', () => {
    const w = mount(<ThemeProvider />)
    expect(w).toBeTruthy()
  })
})
