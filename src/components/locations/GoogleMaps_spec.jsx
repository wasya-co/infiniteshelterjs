
import Adapter from "enzyme-adapter-react-16"
import { configure, mount } from "enzyme"
import React, { useState } from "react"
import { act } from '@testing-library/react'

import {
  logg,
} from "$shared"
import AppWrapper from "$src/AppWrapper"

import GoogleMaps from "./GoogleMaps"

configure({ adapter: new Adapter() })

describe("GoogleMaps", () => {

  it("renders -  ", async () => {
    const w = mount(<AppWrapper ><GoogleMaps /></AppWrapper>)
    expect(w).toBeTruthy()
    await act(() => new Promise(setImmediate))
  })

})
