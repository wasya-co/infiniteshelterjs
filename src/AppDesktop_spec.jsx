import React from 'react'
import { configure, mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import App from './AppDesktop'
import { LoginModal } from "$components/users"
import { logg, request } from "$shared"

configure({ adapter: new Adapter() })

jest.mock('request')
const getMock = jest.fn()
getMock.mockReturnValue(new Promise(() => {}, () => {}))
request.get = getMock

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
  let component = shallow(<App />);
  expect(component).toBeTruthy();
})

test('loads User from api', () => {
  localStorage.setItem('jwt_token', 'jwt-token')
  let component = mount(<App />)
  expect(component).toBeTruthy()
  expect(request.get.mock.calls[0][0]).toEqual(`http://localhost:3000/api/my/account?jwt_token=jwt-token`)
})

test('shows LoginModal for unauthed users', () => {
  let wrapper = mount(<App />)
  expect(wrapper.find('LoginModal').length).toEqual(1)
})
