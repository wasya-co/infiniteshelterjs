

import PropTypes from 'prop-types'
import React, { Fragment as F, useContext, useEffect, useState } from "react"
import Modal from "react-modal"
import { CardElement, Elements, useElements, useStripe, } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import styled from 'styled-components'

import {
  Btn,
  logg,
  request,
  S,
  TwofoldContext,
} from "$shared"

const stripePromise = loadStripe('pk_test_qr1QPmSpLdBFt1F7itdWJOj3') // @TODO: this is active, but change.

const _PurchaseModal = (props) => {

  const {
    purchaseModalOpen, setPurchaseModalOpen,
  } = useContext(TwofoldContext)
  // logg(useContext(TwofoldContext), 'PurchaseModalUsedTwofoldContext')

  const stripe = useStripe()
  const elements = useElements()

  // buy unlocks (coins)
  // @TODO: rename
  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!stripe || !elements) { return }
    const cardElement = elements.getElement(CardElement)
    let client_secret = await api.getPayments()

    const result = await stripe.confirmCardPayment(client_secret.client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    })

    if (result.error) {
      logg(result.error.message, 'error message')
    } else {
      if (result.paymentIntent.status === 'succeeded') {
        let response = await api.getMyAccount()
        logg(response, 'tr2')
        setCurrentUser(response)
        setPurchaseModalOpen(false)
      }
    }
  }

  return <F>

    <h1>purchaseModalBtn</h1>

    <Modal isOpen={purchaseModalOpen} ariaHideApp={false} >
      <h1>
        Buy unlocks
        <span onClick={() => { setPurchaseModalOpen(false) } } >[x]</span>
      </h1>
      <form onSubmit={handleSubmit} >
        <CardElement />
        <button type="submit" disabled={!stripe} >Pay</button>
      </form>
    </Modal>
  </F>
}
const PurchaseModal = (props) => <Elements stripe={stripePromise}><_PurchaseModal {...props} /></Elements>;
export default PurchaseModal
