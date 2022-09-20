
import Adapter from "enzyme-adapter-react-16"
import { configure, mount } from "enzyme"
import React, { useState } from "react"

import {
  logg,
} from "$shared"
import WrappedApp from "$src/WrappedApp"
import ItemModal from "./ItemModal"

configure({ adapter: new Adapter() })

describe("ItemModal", () => {

  it("renders -  ", () => {
    const w = mount(<WrappedApp ><ItemModal /></WrappedApp>)
    expect(w).toBeTruthy()
  })

})
