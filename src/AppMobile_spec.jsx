
import { configure, mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import { act } from "react-dom/test-utils"
import { ThemeProvider } from 'styled-components'

import AppMobile from './AppMobile'
import {
  LoginModal,
  RegisterModal,
} from "$components/users"
import {
  AppMock,
  logg,
  request,
  S,
} from "$shared"
import useApi from "$shared/Api"

configure({ adapter: new Adapter() })

jest.mock('request')
const getMock = jest.fn()
getMock.mockReturnValue(new Promise(() => {}, () => {}))
request.get = getMock

jest.mock("$shared/Api")

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

describe('AppMobile', () => {

  it("renders", async () => {
    let component = shallow(<ThemeProvider theme={S.lightTheme} >
      <AppMobile />
    </ThemeProvider>)
    expect(component).toBeTruthy()
    await act(() => new Promise(setImmediate))
  })

  // @TODO: this belongs to TwofoldContext_spec

  // test('loads User from api - ', async () => {
  //   localStorage.setItem('jwt_token', 'jwt-token')
  //   let component = await mount(<AppMock ><AppMobile /></AppMock>)
  //   expect(component).toBeTruthy()
  //   logg(request.get.mock.calls, 'calls')

  //   expect(request.get.mock.calls[0][0]).toEqual(`http://localhost:3000/api/my/account?jwt_token=jwt-token`)
  //   await act(() => new Promise(setImmediate))
  // })

  test('shows LoginModal for unauthed users', async () => {
    let wrapper = mount(<ThemeProvider theme={S.lightTheme} ><AppMobile /></ThemeProvider>)
    expect(wrapper.find(LoginModal).length).toEqual(1)
    await act(() => new Promise(setImmediate))
  })

  test('renders RegisterModal - ', async () => {
    const currentUser = {}

    let w = mount(<AppMock >
      <AppMobile {...{ currentUser, setCurrentUser: () => {} }}/>
    </AppMock>)
    expect(w.find(RegisterModal).length).toEqual(1)
    await act(() => new Promise(setImmediate))
  })

})