

import PropTypes from 'prop-types'
import React, { Fragment as F, useContext, useEffect, useState } from "react"
import Modal from "react-modal"
import { toast } from 'react-toastify'
import { CardElement, Elements, useElements, useStripe, } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import styled from 'styled-components'

import {
  AuthContext,
  ModalHeader,
} from 'ishlibjs'
import config from 'config'

import {
  logg,
  TwofoldContext,
  useApi,
} from "$shared"

import styles from './PurchaseModal.module.scss'

const FlexRow = styled.div``;

const stripePromise = loadStripe(config.stripePublicKey)

const _PurchaseModal = (props) => {
  // logg(props, '_PurchaseModal')

  const {
    currentUser, setCurrentUser,
  } = useContext(AuthContext)
  // logg(useContext(AuthContext), 'PurchaseModalUsedAuthContext')

  const {
    purchaseModalOpen, setPurchaseModalOpen,
  } = useContext(TwofoldContext)
  // logg(useContext(TwofoldContext), 'PurchaseModalUsedTwofoldContext')

  const api = useApi()
  const stripe = useStripe()
  const elements = useElements()

  const [ amountCents, setAmountCents ] = useState(50)

  // @TODO: add a virual cue "Loading" on button click.
  const buyUnlocks = async (event) => {
    event.preventDefault()
    if (!stripe || !elements) { return }

    // const cardElement = elements.getElement(CardElement)
    let client_secret = await api.initPayment({ amountCents, })

    const result = await stripe.confirmCardPayment(client_secret.client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    })

    if (result.error) {
      toast('We are sorry, but something went wrong.')
      logg(result.error.message, 'e41 - cannot buyUnlocks()')

    } else {
      if (result.paymentIntent.status === 'succeeded') {
        const handle = setInterval(async () => {

          let response = await api.getMyAccount()
          logg(response, 'tr2 success')
          if (!response.is_purchasing) {
            logg('clearing interval!')
            setCurrentUser(response)
            setPurchaseModalOpen(false)
            clearInterval(handle)
          }

        }, 1 * 500)
        setTimeout(() => clearInterval(handle), 10 * 1000)
      }
    }
  }

  Modal.setAppElement('body')

  return <Modal
    className={`PurchaseModal ${styles.LoginModal}`}
    isOpen={purchaseModalOpen}
    overlayClassName={styles.LoginModalOverlay}
    portalClassName={styles.LoginModalPortal}
  >
    <ModalHeader onClose={() => { setPurchaseModalOpen(false) } } >Buy unlocks</ModalHeader>
    <form onSubmit={buyUnlocks} >
      <FlexRow>
        How many cents would you pay for 1 coin? Minimum 50 cents.
        <input value={amountCents} onChange={e => setAmountCents(e.target.value)} />
      </FlexRow>
      <CardElement />
      <button type="submit" disabled={!stripe} >Pay</button>
    </form>
  </Modal>
}
const PurchaseModal = (props) => <Elements stripe={stripePromise}><_PurchaseModal {...props} /></Elements>;
export default PurchaseModal
