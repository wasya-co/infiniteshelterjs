
import Adapter from "enzyme-adapter-react-16"
import { configure, mount } from "enzyme"
import React, { useState } from "react"
import { act } from '@testing-library/react'

import {
  logg,
} from "$shared"
import AppWrapper from "$src/AppWrapper"

import DayNightToggle from "./DayNightToggle"

configure({ adapter: new Adapter() })

describe("DayNightToggle", () => {

  it("renders -  ", async () => {
    const w = mount(<AppWrapper ><DayNightToggle /></AppWrapper>)
    expect(w).toBeTruthy()
    await act(() => new Promise(setImmediate))
  })

  it('toggling *once* changes the theme *once*', () => {
    expect(false).toBeTruthy() // not implemented
  })

})
