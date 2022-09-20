
import { configure, mount, render, shallow, } from 'enzyme'
import Adapter from "enzyme-adapter-react-16"
import React from 'react'
import { act } from "react-dom/test-utils"

import {
  TwofoldContext, TwofoldContextProvider,
} from "$components/TwofoldLayout"
import {
  ThemeProvider,
} from "$shared"
import {
  AppMock,
  BackBtn, Box,
  FlexCol, FlexRow,
  inflector,
  logg,
  WBordered, WidgetContainer,
} from './'

configure({ adapter: new Adapter() })

// import useApi from "$shared/Api"
jest.mock("$shared/Api")

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    // push: jest.fn(),
    goBack: jest.fn(),
  }),
}));


/* B */
describe('BackBtn -  ', () => {

  test('unsets ShowItem', () => {
    const mockSetShowItem = jest.fn()

    const w = mount(<TwofoldContextProvider {...{ showItem: '123', setShowItem: mockSetShowItem }} >
      <BackBtn />
    </TwofoldContextProvider>)
    logg(w.find('.BackBtn').exists(), 'found?')
    w.find('.BackBtn').first().simulate('click')
    expect(mockSetShowItem).toHaveBeenCalled()
  })
})


// logg(getComputedStyle(w.find(_WBordered).getDOMNode()), 'computed style')
describe(' - WBordered', () => {

  it('current0 - WBordered - observes --ion-border-color css variable, pointer if onClick', () => {
    document.documentElement.style.setProperty("--ion-border-color", "red")
    const w = mount(<ThemeProvider >
      <WBordered onClick={() => {}} >Hello</WBordered>
    </ThemeProvider>)
    const node = w.find(WBordered).getDOMNode()
    const computed = getComputedStyle(node)
    expect(computed.cursor).toEqual('pointer')
    expect(computed.border).toEqual('2px solid red')
  })

  it('pointer is undefined', () => {
    const w = mount(
      <ThemeProvider >
        <WBordered >Hello</WBordered>
      </ThemeProvider>
    )
    const computed = getComputedStyle(w.find(_WBordered).getDOMNode())
    expect(computed.cursor).toBeFalsy()
  })

})


test('Box', () => {
  const box = <Box />
  expect(box).toBeTruthy()
})

/* F */

test('FlexCol', () => {
  const w = mount(<FlexCol />)
  expect(w).toBeTruthy()
})

test('FlexRow', () => {
  const w = mount(<FlexRow />)
  expect(w).toBeTruthy()
})


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

describe("WidgetContainer - ", () => {

  it("cursor pointer", async () => {
    const w = mount(<AppMock>
      <WidgetContainer data-testid='id1' onClick={() => true } />
    </AppMock>)
    expect(w.find('div').getDOMNode()).toHaveStyle('cursor: pointer')
    await act(() => new Promise(setImmediate))
  })

})
