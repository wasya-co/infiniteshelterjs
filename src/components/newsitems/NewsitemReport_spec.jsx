import Adapter from "enzyme-adapter-react-16"
import { configure, shallow, } from "enzyme"
import React from "react"

import { NewsitemReport } from "$components/newsitems"
import { logg } from "$shared"

configure({ adapter: new Adapter() })

describe("NewsitemReport", () => {

  it("renders", async () => {
    let component = shallow(<NewsitemReport newsitem={ {} } />)
    expect(component).toBeTruthy()
    await act(() => new Promise(setImmediate))
  })

})

