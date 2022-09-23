
import { configure, mount, render, shallow, } from 'enzyme'
import Adapter from "enzyme-adapter-react-16"
import React from 'react'
import { act } from "react-dom/test-utils"

import {
  TwofoldContext, TwofoldContextProvider,
} from "$components/TwofoldLayout"
import {
  AppProvider,
  ThemeProvider,
} from "$shared"
import {
  BackBtn, Box,
  FlexCol, FlexRow,
  inflector,
  logg,
  WBordered, WidgetContainer,
} from './'

configure({ adapter: new Adapter() })

// import useApi from "$shared/Api"
jest.mock("$shared/Api")

// From: https://stackoverflow.com/questions/58392815/how-to-mock-usehistory-hook-in-jest
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    goBack: jest.fn()
  })
}));

/* B */
describe('BackBtn -  ', () => {

  test(' - unsets ShowItem', async () => {
    const mockSetShowItem = jest.fn()

    const w = mount(
      <AppProvider >
        <TwofoldContextProvider {...{ showItem: '123', setShowItem: mockSetShowItem }} >
          <BackBtn />
        </TwofoldContextProvider>
      </AppProvider>)

    w.find('.BackBtn').first().simulate('click')
    expect(mockSetShowItem).toHaveBeenCalled()
    // await process.nextTick(() => {})
  })

})


describe(' - WBordered', () => {

  it(' - WBordered - observes pointer if onClick', () => {
    const w = mount(<ThemeProvider >
      <WBordered onClick={() => {}} >Hello</WBordered>
    </ThemeProvider>)
    const node = w.find(WBordered).getDOMNode()
    const computed = getComputedStyle(node)
    expect(computed.cursor).toEqual('pointer')
  })

  it('pointer is undefined', () => {
    const w = mount(
      <ThemeProvider >
        <WBordered >Hello</WBordered>
      </ThemeProvider>
    )
    const node = w.find(WBordered).getDOMNode()
    const computed = getComputedStyle(node)
    expect(computed.cursor).toBeFalsy()
  })

})


test('Box', () => {
  const box = <Box />
  expect(box).toBeTruthy()
})


/* F */


/* I */
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
