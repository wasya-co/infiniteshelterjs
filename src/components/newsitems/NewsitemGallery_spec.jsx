
import Adapter from "enzyme-adapter-react-16"
import React from 'react'
import { configure, mount } from 'enzyme'

import { AppMock } from "$shared"
import NewsitemGallery from './NewsitemGallery'

configure({ adapter: new Adapter() })

describe('NewsitemGallery', () => {

  test('renders', async () => {
    const item = {
      photos: [],
    }

    const component = mount(<AppMock>
      <NewsitemGallery item={item} />
    </AppMock>)
    expect(component).toBeTruthy()
    await act(() => new Promise(setImmediate))
  })

})

