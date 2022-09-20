import Adapter from "enzyme-adapter-react-16"
import { configure, mount } from "enzyme"
import React, { useState } from "react"
import { act } from '@testing-library/react'

import {
  logg,
} from "$shared"
import WrappedApp from "$src/WrappedApp"

import BottomDrawer from "./BottomDrawer"

configure({ adapter: new Adapter() })

describe("BottomDrawer", () => {

  it("renders -  ", async () => {
    const w = mount(<WrappedApp ><BottomDrawer /></WrappedApp>)
    expect(w).toBeTruthy()
    await act(() => new Promise(setImmediate))
  })

})
