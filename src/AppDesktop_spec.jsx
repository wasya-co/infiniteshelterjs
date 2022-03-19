
import { configure, mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import { ThemeProvider } from 'styled-components'

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

it("renders", () => {
  let component = shallow(<ThemeProvider theme={S.lightTheme} >
    <App />
  </ThemeProvider>)
  expect(component).toBeTruthy()
})

test('loads User from api', () => {
  localStorage.setItem('jwt_token', 'jwt-token')
  let component = mount(<ThemeProvider theme={S.lightTheme} ><App /></ThemeProvider>)
  expect(component).toBeTruthy()

  // @TODO: herehere, should be fixed
  // expect(request.get.mock.calls[0][0]).toEqual(`http://localhost:3000/api/my/account?jwt_token=jwt-token`)

})

test('shows LoginModal for unauthed users', () => {
  let wrapper = mount(<ThemeProvider theme={S.lightTheme} ><App /></ThemeProvider>)
  expect(wrapper.find('LoginModal').length).toEqual(1)
})
