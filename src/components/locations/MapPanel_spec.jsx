import Adapter from "enzyme-adapter-react-16"
import * as enzyme from "enzyme"
import { mount } from "enzyme"
import React from "react"
import { act } from "react-dom/test-utils"
import {
  Link, Switch, BrowserRouter as Router, Redirect, Route as _Route, withRouter
} from 'react-router-dom'

import {
  AppMock, C, logg,
} from "$shared"
import useWindowSize from "$shared/useWindowSize"
import MapPanel from './MapPanel'

enzyme.configure({ adapter: new Adapter() })
jest.mock("$shared/Api")

let mockWindowSize = [764, 1024]

jest.mock('$shared/useWindowSize', () => {
  const actual = jest.requireActual("$shared/useWindowSize")
  return {
    ...actual,
    __esModule: true,
    default: jest.fn().mockImplementation(() => mockWindowSize),
  }
})

const theseProps = {
  map: {
    id: 'some-id',
    markers: [],
    w: 800,
    h: 600,
  },
}

describe("MapPanel - ", () => {

  afterEach(() => {
    jest.clearAllMocks()
  })

  it("renders -  ", async () => {
    let component = mount(<AppMock>
      <MapPanel {...theseProps} />
    </AppMock>)
    expect(component).toBeTruthy()
    await act(() => new Promise(setImmediate))
  })

  it("calls setZoom on window size change -  ", async () => {
    const zoom = 0.99
    const mockSetZoom = jest.fn(() => 'done setZoom')

    let component = await mount(<AppMock {...{ zoom, setZoom: mockSetZoom }} >
      <MapPanel {...theseProps} />
    </AppMock>)
    expect(mockSetZoom).toHaveBeenCalled()
    await act(() => new Promise(setImmediate))
  })

})
