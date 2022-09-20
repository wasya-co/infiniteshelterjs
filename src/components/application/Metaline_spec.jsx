
import Adapter from "enzyme-adapter-react-16"
import { configure, mount } from "enzyme"
import React, { useState } from "react"

import {
  logg,
  ThemeProvider,
} from "$shared"

import Metaline from "./Metaline"

configure({ adapter: new Adapter() })

/*
 * It works! _vp_ 2022-09-11
**/
describe("Metaline", () => {

  it("renders -  ", () => {
    const w = mount(<ThemeProvider>
      <Metaline />
    </ThemeProvider>)
    expect(w).toBeTruthy()
  })

})
