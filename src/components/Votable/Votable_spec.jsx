
import Adapter from "enzyme-adapter-react-16"
import { configure, mount } from "enzyme"
import React from "react"
import { act } from "react-dom/test-utils"

import {
  logg,
} from "$shared"
import { Votable } from "./"

configure({ adapter: new Adapter() })

describe("Votable", () => {

  it("renders", () => {
    let component = mount(<Votable item={{ }} />)
    expect(component).toBeTruthy()
  })

})

