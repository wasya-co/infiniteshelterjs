
import Adapter from "enzyme-adapter-react-16"
import { mount, configure } from "enzyme"
import React from "react"
import { act } from "react-dom/test-utils"
import { useHistory } from 'react-router-dom'

import {
  AppProvider,
  C,
  logg,
  NavigationProvider,
} from "$shared"
import useApi from "$shared/Api"
import {
  Marker, MarkersList,
} from "./"

configure({ adapter: new Adapter() })



const theseProps = { markers: [
  { slug: 'some-slug' }
] }

describe("MarkersList - ", () => {

  afterEach(() => {
    jest.clearAllMocks()
  })

  it("renders - ", () => {
    const w = mount(<>
      <AppProvider >
        <MarkersList {...theseProps} />
      </AppProvider>
    </>)
    expect(w).toBeTruthy()
  })

  // for 3D
  it("current2 - Markers without destination aren't listed", () => {

    const theseProps = {
      markers: [
        { name: 'one', destination_slug: 'one' },
        { name: 'two', destination_slug: 'two' },
        { name: 'three' },
      ]
    }
    const w = mount(<>
      <AppProvider >
        <MarkersList {...theseProps} />)
      </AppProvider>
    </>)

    // logg(w.find(Marker).at(0), 'first marker?')
    expect(w.find(Marker).length).toEqual(2)

  })

})

describe("MarkersList Premium func", () => {

  it("#goto, pushes to history - ", async () => {
    const theseProps = {}
    let component = await mount(<>
      <NavigationProvider {...{ useHistory }} >
        <MarkersList {...theseProps} />
      </NavigationProvider>
    </>)
    component.find('.Marker').at(0).simulate('click')
    expect(mockPush).toHaveBeenCalled()
    await act(() => new Promise(setImmediate))
  })

  it('#goto, premium_tier 1, not purchased, shows paywall - ', async () => {
    const theseProps = { markers: [
      { slug: 'some-slug', premium_tier: 1 }
    ] }
    let component = await mount(<>
      <NavigationProvider {...{ useHistory }} >
        <MarkersList {...theseProps} />
      </NavigationProvider>
    </>)
    component.find('.Marker').at(0).simulate('click')
    expect(mockPush).not.toHaveBeenCalled()
    await act(() => new Promise(setImmediate))
  })

  it('displays purchased? status - ', async () => {
    const theseProps = { markers: [
      { slug: 'some-slug', premium_tier: 1, is_purchased: true }
    ] }
    let component = await mount(<>
      <NavigationProvider {...{ useHistory }} >
        <MarkersList {...theseProps} />
      </NavigationProvider>
    </>)
    expect(component.html()).toMatch('PurchasedIcon')
    await act(() => new Promise(setImmediate))
  })

})
