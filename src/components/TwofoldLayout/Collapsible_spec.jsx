import Adapter from "enzyme-adapter-react-16"
import { configure, mount } from "enzyme"
import React, { useState } from "react"
import { act } from '@testing-library/react'

import {
  logg,
} from "$shared"
import AppWrapper from "$src/AppWrapper"

import Collapsible from "./Collapsible"

configure({ adapter: new Adapter() })

describe("Collapsible", () => {

  it("renders -  ", () => {
    const w = mount(<Collapsible />)
    expect(w).toBeTruthy()
  })

})
