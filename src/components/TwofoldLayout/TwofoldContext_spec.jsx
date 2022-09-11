
import { configure, mount, render, shallow, } from 'enzyme'
import Adapter from "enzyme-adapter-react-16"
import React, { useContext } from 'react'
import { act } from "react-dom/test-utils"

configure({ adapter: new Adapter() })

import {
  logg,
} from '$shared'
import {
  TwofoldContext, TwofoldContextProvider,
} from './'

const TestActor = (props) => {
  const {
    registerModalOpen, setRegisterModalOpen,
  } = useContext(TwofoldContext)
  // logg(useContext(TwofoldContext), 'testUsedContext')

  return <div>
    <div className='registerModalOpen'>{registerModalOpen.toString()}</div>
  </div>
}

describe('TwofoldContext - ', () => {

  it('Sets: registerModalOpen', async () => {
    const w = mount(<TwofoldContextProvider {...{ currentUser: {}, setCurrentUser: () => {} }} >
      <TestActor />
    </TwofoldContextProvider>)
    expect(w).toBeTruthy()
    expect(w.find('.registerModalOpen').text()).toEqual('false')
    await act(() => new Promise(setImmediate))
  })

  // @TODO: re-implement? _vp_ 2022-09-10
  it.skip('Get the current_user on load', () => {
    throw 'not implemented'
  })

})
