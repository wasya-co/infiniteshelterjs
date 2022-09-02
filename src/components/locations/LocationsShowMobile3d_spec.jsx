
import Adapter from "enzyme-adapter-react-16"
import { configure, mount } from "enzyme"
import React, { useState } from "react"
import { act } from '@testing-library/react'

import {
  logg,
} from "$shared"
import AppWrapper from "$src/AppWrapper"

import LocationsShowMobile3d from "./LocationsShowMobile3d"

configure({ adapter: new Adapter() })

describe("LocationsShowMobile3d", () => {

  it("renders -  ", async () => {
    const w = mount(<AppWrapper ><LocationsShowMobile3d /></AppWrapper>)
    expect(w).toBeTruthy()
    await act(() => new Promise(setImmediate))
  })

})
