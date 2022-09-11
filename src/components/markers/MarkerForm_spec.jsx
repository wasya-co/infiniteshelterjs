
import Adapter from "enzyme-adapter-react-16"
import { configure, mount } from "enzyme"
import React, { useState } from "react"
import { act } from '@testing-library/react'

import {
  logg,
} from "$shared"
import AppWrapper from "$src/AppWrapper"

import MarkerForm from "./MarkerForm"

configure({ adapter: new Adapter() })

describe("MarkerForm", () => {

  it("renders -  ", async () => {
    const w = mount(<AppWrapper ><MarkerForm /></AppWrapper>)
    expect(w).toBeTruthy()
    await act(() => new Promise(setImmediate))
  })

})