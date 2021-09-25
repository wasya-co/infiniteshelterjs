
import Adapter from "enzyme-adapter-react-16"
import React from 'react'
import { configure, mount } from 'enzyme'

import { AppMock } from "$shared"
import NewsitemGallery from './NewsitemGallery'

configure({ adapter: new Adapter() })

describe('NewsitemGallery', () => {
  test('renders', () => {

    const item = {
      photos: [],
    }

    const component = mount(<AppMock>
      <NewsitemGallery item={item} />
    </AppMock>)
    expect(component).toBeTruthy()
  })
})

