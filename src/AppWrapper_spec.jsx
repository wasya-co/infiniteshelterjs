
import { configure, mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import { ThemeProvider } from 'styled-components'

import AppWrapper from './AppWrapper'
import { LoginModal } from "$components/users"
import {
  logg,
  request,
  S,
} from "$shared"

configure({ adapter: new Adapter() })

jest.mock('request')
const getMock = jest.fn()
getMock.mockReturnValue(new Promise(() => {}, () => {}))
request.get = getMock

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "localhost:3001/example/path"
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

it.skip('sanity', () => {
  expect(true).toBeTruthy()
})

/* This doesn't work b/c of some severe async issue */

// it("renders - current2 ", () => {
//   let component = shallow(
//     <AppWrapper />
//   )
//   expect(component).toBeTruthy()
// })
