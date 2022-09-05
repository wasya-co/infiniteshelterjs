import Adapter from "enzyme-adapter-react-16"
import * as enzyme from "enzyme"
import { mount } from "enzyme"
import React from "react"

import SideMenu from "./SideMenu"
import { AppMock, C, logg, } from "$shared"

enzyme.configure({ adapter: new Adapter() })

describe("SideMenu -  ", () => {

  it("renders", () => {
    let component = mount(<AppMock>
      <SideMenu  />
    </AppMock>)
    expect(component).toBeTruthy()
  })

})
