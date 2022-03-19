import Adapter from "enzyme-adapter-react-16"
import * as enzyme from "enzyme"
import { shallow } from "enzyme"
import React from "react"
import { act } from "react-dom/test-utils"

import { CitiesList } from "$components/cities"
import { logg } from "$shared"

enzyme.configure({ adapter: new Adapter() })

describe("CitiesList", () => {

  it("renders", async () => {
    let component = shallow(<CitiesList />)
    expect(component).toBeTruthy()
    await act(() => new Promise(setImmediate))
  })

})
