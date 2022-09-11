
import Adapter from "enzyme-adapter-react-16"
import { configure, mount } from "enzyme"
import React, { useState } from "react"

import {
  logg,
} from "$shared"

import Collapsible, { CollapsibleProvider } from "./Collapsible"

configure({ adapter: new Adapter() })

describe("Collapsible", () => {

  it("renders -  ", () => {
    const w = mount(<Collapsible />)
    expect(w).toBeTruthy()
  })

})

describe('CollapsibleProvider', () => {
  it('renders', () => {
    const w = mount(<CollapsibleProvider />)
    expect(w).toBeTruthy()
  })

})