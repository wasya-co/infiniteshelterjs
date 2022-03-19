
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

  it('Sets: registerModalIsOpen', () => {
    const w = mount(<TwofoldContextProvider {...{ currentUser: {} }} >
      <TestActor />
    </TwofoldContextProvider>)
    expect(w).toBeTruthy()
    expect(w.find('.registerModalIsOpen').text()).toEqual('false')
  })

  // @TODO: fix!

  // it('Get the current_user on load', () => {
  //   throw 'not implemented'
  // })

})
