import Adapter from "enzyme-adapter-react-16"
import { configure, shallow, } from "enzyme"
import React from "react"

import { ItemIcon } from "./ItemIcon"
import { logg } from "$shared"

configure({ adapter: new Adapter() })

describe("ItemIcon", () => {

  it("renders", () => {
    let component = shallow(<ItemIcon />)
    expect(component).toBeTruthy()
  })

})
