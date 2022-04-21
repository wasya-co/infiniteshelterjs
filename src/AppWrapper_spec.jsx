
import { configure, mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { act } from "react-dom/test-utils"

import config from 'config'

import AppWrapper from './AppWrapper'
import {
  logg,
  request,
  S,
} from "$shared"

const mockConfig = config

configure({ adapter: new Adapter() })

jest.mock('request')
const getMock = jest.fn()
getMock.mockReturnValue(new Promise(() => {}, () => {}))
request.get = getMock

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: `${mockConfig.domain}${mockConfig.homePath}`
  })
}));

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})

it("renders - current2 ", () => {
  let component = shallow(
    <AppWrapper />
  )
  expect(component).toBeTruthy()
})
