
import React from 'react'

import { Box, inflector } from './'

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

it('useWindowSize', () => {
  expect(1).toEqual(2) // not implemented
})

describe('TwofoldContext', () => {
  it('gets bottomDrawerOpen from localStorage', () => {
    throw 'not implemented'
  })
})
