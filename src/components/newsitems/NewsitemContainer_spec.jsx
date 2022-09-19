
import Adapter from "enzyme-adapter-react-16"
import React from 'react'
import { act } from "react-dom/test-utils"
import { configure, mount } from 'enzyme'

import {
  AppMock,
  C,
  logg,
} from "$shared"
import NewsitemContainer from "./NewsitemContainer"

configure({ adapter: new Adapter() })

describe('NewsitemContainer', () => {

  it('renders', () => {
    const item = {
      item_type: C.item_types.photo,
    }
    const w = mount(<AppMock>
      <NewsitemContainer item={item} />
    </AppMock>)
    expect(w).toBeTruthy()
  })

  it('nagivates', () => {
    throw 'not implemented'
  })

})
