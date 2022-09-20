
import Adapter from "enzyme-adapter-react-16"
import { configure, mount } from "enzyme"
import React, { useState } from "react"
import { act } from '@testing-library/react'

import {
  AppProvider,
  logg,
} from "$shared"
import WrappedMapPanel from "./WrappedMapPanel"

configure({ adapter: new Adapter() })

describe("WrappedMapPanel", () => {

  it("renders -  ", async () => {
    const w = mount(<AppProvider >
      <WrappedMapPanel />
    </AppProvider>)
    expect(w).toBeTruthy()
    await act(() => new Promise(setImmediate))
  })

})
