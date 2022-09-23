
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import { act } from '@testing-library/react'

import AppRouter, { paths } from './AppRouter'

configure({ adapter: new Adapter() })

describe('AppRouter', () => {
  it('renders', () => {
    const w = mount(<AppRouter />)
    expect(w).toBeTruthy()
  })

  it('exports paths', () => {
    expect(paths).toBeTruthy()
  })
})
