
import Adapter from "enzyme-adapter-react-16"
import { configure, shallow, } from "enzyme"
import React from "react"
import { act } from "react-dom/test-utils"

import { NewsitemVideo } from "$components/newsitems"
import { logg } from "$shared"

configure({ adapter: new Adapter() })

describe("NewsitemVideo", () => {

  it("renders", () => {
    let component = shallow(<NewsitemVideo newsitem={ {} } />)
    expect(component).toBeTruthy()
  })

})

