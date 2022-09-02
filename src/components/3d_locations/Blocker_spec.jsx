
import Adapter from "enzyme-adapter-react-16"
import { configure, mount } from "enzyme"
import React, { useState } from "react"
import { act } from '@testing-library/react'

import {
  logg,
} from "$shared"
import AppWrapper from "$src/AppWrapper"

import Blocker from "./Blocker"

configure({ adapter: new Adapter() })

describe("Blocker", () => {

  it("renders -  ", async () => {
    const w = mount(<AppWrapper ><Blocker /></AppWrapper>)
    expect(w).toBeTruthy()
    await act(() => new Promise(setImmediate))
  })

})
