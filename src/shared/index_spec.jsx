
import { configure, mount, render, shallow, } from 'enzyme'
import Adapter from "enzyme-adapter-react-16"
import React from 'react'

configure({ adapter: new Adapter() })

import {
  AppMock,
  Box,
  inflector,
  WBordered,
  WidgetContainer,
} from './'

test('Box', () => {
  const box = <Box />
  expect(box).toBeTruthy()
})

describe('inflector', () => {

  test('tableize', () => {
    expect(inflector.tableize('Report')).toEqual('reports')
    expect(inflector.tableize('Gallery')).toEqual('galleries')
  })

})

it.skip('useWindowSize', () => {
  throw 'not implemented'
})

describe('TwofoldContext', () => {
  it.skip('gets bottomDrawerOpen from localStorage', () => {
    throw 'not implemented'
  })
})

it('WBordered', () => {
  const w = <WBordered />
  expect(w).toBeTruthy()
})

describe("WidgetContainer - current2", () => {
  it("cursor pointer", () => {
    const w = mount(<AppMock>
      <WidgetContainer data-testid='id1' onClick={() => true } />
    </AppMock>)
    expect(w.find('div').getDOMNode()).toHaveStyle('cursor: pointer')
  })
})
