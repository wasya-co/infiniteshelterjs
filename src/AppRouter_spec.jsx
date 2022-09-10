
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'

import AppRouter from './AppRouter'

configure({ adapter: new Adapter() })

describe('AppRouter', () => {
  it('renders', () => {
    const w = mount(<AppRouter />)
    expect(w).toBeTruthy()
  })
})
