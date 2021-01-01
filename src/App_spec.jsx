import React from 'react';
import { configure, shallow } from 'enzyme';
import App from '$src/App';
import { logg } from "$shared";
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

/* Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
}); */

test('renders without crashing', () => {
  const app = shallow(<App />);
  logg(app, 'app');
  expect(true).toBeTruthy();
  // expect(baseElement).toBeDefined();
});
