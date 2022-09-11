
import Adapter from "enzyme-adapter-react-16"
import { configure, mount } from "enzyme"
import React, { useState } from "react"
import { act } from '@testing-library/react'

import {
  logg,
} from "$shared"
import AppWrapper from "$src/AppWrapper"

import TabiversePlanet from "./TabiversePlanet"

configure({ adapter: new Adapter() })

describe("TabiversePlanet", () => {

  it("renders -  ", async () => {
    const w = mount(<AppWrapper ><TabiversePlanet /></AppWrapper>)
    expect(w).toBeTruthy()
    await act(() => new Promise(setImmediate))
  })

})