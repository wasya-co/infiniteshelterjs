
import Adapter from "enzyme-adapter-react-16"
import { configure, mount } from "enzyme"
import React from "react"
import { act } from "react-dom/test-utils"

import {
  AppProvider,
  C,
  logg,
} from "$shared"
import NewsitemVideo from "./NewsitemVideo"

configure({ adapter: new Adapter() })

describe("NewsitemVideo", () => {

  it("renders", () => {
    let w
    w = mount(<AppProvider>
      <NewsitemVideo item={{ item_type: C.item_types.video }} variant={C.variants.bordered} />
      </AppProvider>)
    expect(w).toBeTruthy()
  })

})

