
import { configure, mount, render, shallow, } from 'enzyme'
import Adapter from "enzyme-adapter-react-16"
import React, { useContext } from 'react'

configure({ adapter: new Adapter() })

import {
  logg,
} from '$shared'
import {
  TwofoldContext, TwofoldContextProvider,
} from './'

const TestActor = (props) => {
  const {
    registerModalIsOpen, setRegisterModalIsOpen,
  } = useContext(TwofoldContext)
  // logg(useContext(TwofoldContext), 'testUsedContext')

  return <div>
    <div className='registerModalIsOpen'>{registerModalIsOpen.toString()}</div>
  </div>
}

describe('TwofoldContext - ', () => {

  it('Sets: registerModalIsOpen', async () => {
    const w = mount(<TwofoldContextProvider {...{ currentUser: {}, setCurrentUser: () => {} }} >
      <TestActor />
    </TwofoldContextProvider>)
    expect(w).toBeTruthy()
    expect(w.find('.registerModalIsOpen').text()).toEqual('false')
    await act(() => new Promise(setImmediate))
  })

  it.skip('Get the current_user on load', () => {
    throw 'not implemented'
  })

})
