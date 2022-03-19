
import Adapter from "enzyme-adapter-react-16"
import React from 'react'
import { configure, mount } from 'enzyme'

import { AppMock } from "$shared"
import NewsitemPhoto from './NewsitemPhoto'

configure({ adapter: new Adapter() })

describe('NewsitemPhoto', () => {

  test('renders', async () => {
    const item = {
      photos: [],
      item_type: 'Photo',
    }

    const component = mount(<AppMock>
      <NewsitemPhoto item={item} />
    </AppMock>)
    expect(component).toBeTruthy()
    await act(() => new Promise(setImmediate))
  })

})

