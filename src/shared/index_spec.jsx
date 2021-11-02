
import React from 'react'

import {
  Box,
  inflector,
  WBordered,
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
