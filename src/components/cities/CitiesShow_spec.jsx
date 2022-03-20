
import * as enzyme from "enzyme"
import { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import React from "react"
import { act } from "react-dom/test-utils"

import { CitiesShow } from "$components/cities"
import { AppMock, C, logg, } from "$shared"

enzyme.configure({ adapter: new Adapter() })
jest.mock("$shared/Api")

const theseProps = { match: { url: '/en/cities/travel-to/chicago', params: '?' } }

describe("CitiesShow - current2 ", () => {

  it("renders", async () => {
    let component = mount(<AppMock>
      <CitiesShow {...theseProps} />
    </AppMock>)
    expect(component).toBeTruthy()
    await act(() => new Promise(setImmediate))
  })

  it("renders newsitems - ", async () => {
    let component = await mount(<AppMock>
      <CitiesShow {...theseProps} />
    </AppMock>)
    expect(component.text()).toMatch(/report-name-2/)
    await act(() => new Promise(setImmediate))
  })

})
