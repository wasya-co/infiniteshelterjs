
import Adapter from "enzyme-adapter-react-16"
import React from 'react'
import { act } from "react-dom/test-utils"
import { configure, mount } from 'enzyme'

import {
  AppProvider,
  C,
  logg,
} from "$shared"
import NewsitemContainer from "./NewsitemContainer"

configure({ adapter: new Adapter() })

describe('NewsitemContainer', () => {

  /// @TODO: this appears like poor management of variant. _vp_ 2022-09-20
  it('renders', () => {
    const props = {
      item: {
        item_type: C.item_types.photo,
      },
      variant: C.variants.bordered,
    }
    const w = mount(<AppProvider>
      <NewsitemContainer {...props} />
    </AppProvider>)
    expect(w).toBeTruthy()
  })

  // it('nagivates', () => {
  //   throw 'not implemented'
  // })

})
