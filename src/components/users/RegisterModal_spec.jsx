import Adapter from "enzyme-adapter-react-16"
import { configure, mount } from "enzyme"
import React, { useState } from "react"
import { CardElement, Elements, useElements, useStripe, } from '@stripe/react-stripe-js'
import { act } from '@testing-library/react'

import { MyAccountWidget } from "$components/users"
import { AppMock, logg } from "$shared"
import useApi from "$shared/Api"

configure({ adapter: new Adapter() })

import { RegisterModal } from "./"

describe("RegisterModal", () => {

  it("renders - ", async () => {
    const w = mount(<RegisterModal />)
    expect(w).toBeTruthy()
    await act(() => new Promise(setImmediate))
  })

})
