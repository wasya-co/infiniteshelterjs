
import Adapter from "enzyme-adapter-react-16"
import * as enzyme from "enzyme"
import { mount } from "enzyme"
import React from "react"
import { act } from "react-dom/test-utils"
import { useHistory } from 'react-router-dom'


import {
  C,
  logg,
  NavigationContext,
} from "$shared"
import useApi from "$shared/Api"
import {
  Marker, MarkersList,
} from "./"

enzyme.configure({ adapter: new Adapter() })

describe('Marker', () => {
  it('current2 - uses destination_slug for href', () => {
    const destination_slug = 'destination'
    const w = mount(<>
      <NavigationProvider {...{ useHistory }} >
        Marker marker={{ destination_slug, }} />)
      </NavigationProvider>
    </>)
    w.find('a').href.shouldEqual(`/en/locations/show/${destination_slug}`)
  })
})
