
import { configure, mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { act } from "react-dom/test-utils"

import App from './AppDesktop'
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
});

describe('AppDesktop', () => {

  it("renders", async () => {
    let component = shallow(<ThemeProvider theme={S.lightTheme} >
      <App />
    </ThemeProvider>)
    expect(component).toBeTruthy()
    await act(() => new Promise(setImmediate))
  })

  test('loads User from api', async () => {
    localStorage.setItem('jwt_token', 'jwt-token')
    let component = mount(<ThemeProvider theme={S.lightTheme} ><App /></ThemeProvider>)
    expect(component).toBeTruthy()

    // @TODO: herehere, should be fixed
    // expect(request.get.mock.calls[0][0]).toEqual(`http://localhost:3000/api/my/account?jwt_token=jwt-token`)
    await act(() => new Promise(setImmediate))
  })

  test('shows LoginModal for unauthed users', async () => {
    let wrapper = mount(<ThemeProvider theme={S.lightTheme} ><App /></ThemeProvider>)
    expect(wrapper.find('LoginModal').length).toEqual(1)
    await act(() => new Promise(setImmediate))
  })

})
