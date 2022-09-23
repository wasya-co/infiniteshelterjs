
import { configure, mount } from 'enzyme'
import Adapter from "enzyme-adapter-react-16"
import React from 'react'
import { act } from '@testing-library/react'

import {
  C,
  logg,
} from "$shared"
import useApi from './Api'
import AppProvider from './AppProvider'

configure({ adapter: new Adapter() })

const api = useApi()

describe('Api', () => {

  it('getMyAccount -  ', async () => {
    const result = await api.getMyAccount()
    expect(result).toEqual(C.anonUser)
    // await process.nextTick(() => {})
  })

})