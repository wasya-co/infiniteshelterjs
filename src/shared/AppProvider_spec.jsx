
import { configure, mount } from 'enzyme'
import Adapter from "enzyme-adapter-react-16"
import React from 'react'

import AppProvider from './AppProvider'

configure({ adapter: new Adapter() })

describe('AppProvider', () => {

  it('renders children', () => {
    const w = mount(<AppProvider >
      <h1>Hello, world!</h1>
    </AppProvider>)
    expect(w).toBeTruthy()
    expect(w.text().indexOf("Hello, world!") !== -1).toBeTruthy() // renders children
  })

})

