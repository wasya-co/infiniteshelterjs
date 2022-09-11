
import Adapter from "enzyme-adapter-react-16"
import { configure, mount } from "enzyme"
import React, { useState } from "react"
import { act } from '@testing-library/react'

import {
  SideMenu,
} from "$components/application"
import {
  logg,
  ThemeProvider,
} from "$shared"

import Breadcrumbs from "./Breadcrumbs"

configure({ adapter: new Adapter() })

describe("Breadcrumbs", () => {

  it("renders: SideMenu, -  ", async () => {
    const w = mount(<ThemeProvider ><Breadcrumbs /></ThemeProvider>)
    expect(w).toBeTruthy()
    expect(w.find(SideMenu).length).toEqual(1)
    await act(() => new Promise(setImmediate))
  })

})
