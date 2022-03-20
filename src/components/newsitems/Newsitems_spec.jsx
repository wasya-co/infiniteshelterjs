
import { configure, mount } from 'enzyme'
import Adapter from "enzyme-adapter-react-16"
import React from 'react'
import { act } from "react-dom/test-utils"

import { C, AppMock } from "$shared"
import Newsitems from './Newsitems'

configure({ adapter: new Adapter() })

jest.mock("$shared/Api")

describe('Newsitems', () => {

  test('renders', async () => {
    const items = []
    const component = mount(<AppMock>
      <Newsitems newsitems={items} />
    </AppMock>)
    expect(component).toBeTruthy()
    await act(() => new Promise(setImmediate))
  })

  test('current2 - renders a NewsitemPhoto', async () => {
    const items = [{ item_type: C.item_types.photo, photos: [] }]
    const component = mount(<AppMock>
      <Newsitems newsitems={items} />
    </AppMock>)
    expect(component.find('.NewsitemPhoto').length).toBeTruthy()
    await act(() => new Promise(setImmediate))
  })

})

