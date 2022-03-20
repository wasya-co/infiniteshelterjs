
import { configure, mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import { act } from "react-dom/test-utils"
import { ThemeProvider } from 'styled-components'

import {
  logg,
  S,
} from "$shared"
import useApi from "$shared/Api"
import AppDesktop from './AppDesktop'

configure({ adapter: new Adapter() })

jest.mock("$shared/Api")
jest.mock("$shared/request")

// jest.mock("react-router-dom", () => ({
//   ...jest.requireActual("react-router-dom"),
//   useLocation: () => ({
//     pathname: "localhost:3001/example/path"
//   })
// }));

// Object.defineProperty(window, 'matchMedia', {
//   writable: true,
//   value: jest.fn().mockImplementation(query => ({
//     matches: false,
//     media: query,
//     onchange: null,
//     addListener: jest.fn(), // Deprecated
//     removeListener: jest.fn(), // Deprecated
//     addEventListener: jest.fn(),
//     removeEventListener: jest.fn(),
//     dispatchEvent: jest.fn(),
//   })),
// });

describe('AppDesktop', () => {

  it("renders - ", async () => {
    let component = shallow(<ThemeProvider theme={S.lightTheme} >
      <AppDesktop />
    </ThemeProvider>)
    expect(component).toBeTruthy()
    await act(() => new Promise(setImmediate))
  })

  it('loads User from api -  ', async () => {
    // localStorage.setItem('jwt_token', 'jwt-token')
    let component = mount(<ThemeProvider theme={S.lightTheme} >
      <AppDesktop />
    </ThemeProvider>)
    await expect(component).toBeTruthy()

    // @TODO: herehere, should be fixed
    // expect(request.get.mock.calls[0][0]).toEqual(`http://localhost:3000/api/my/account?jwt_token=jwt-token`)
    await act(() => new Promise(setImmediate))
  })

  it('shows LoginModal for unauthed users - current2 ', async () => {
    let wrapper = mount(<ThemeProvider theme={S.lightTheme} >
      <AppDesktop />
    </ThemeProvider>)
    await expect(wrapper.find('LoginModal').length).toEqual(1)
    await act(() => new Promise(setImmediate))
  })

})
