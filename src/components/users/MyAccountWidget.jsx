
import React, { Fragment as F, useContext, useState } from "react"
import Modal from "react-modal"
import { CardElement, Elements, useElements, useStripe, } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import styled from 'styled-components'

import config from "config"

import { logg, S, request, TwofoldContext, useApi } from "$shared"

const stripePromise = loadStripe('pk_test_qr1QPmSpLdBFt1F7itdWJOj3') // @TODO: this is active, but change.

const Login = (props) => {
  return (<F>
    <button>do login</button>
  </F>)
}

const Root = styled.div`
  // border: 1px solid red;

  background: white;
  height: 100px;
  width: calc(100vw - ${p => p.borderWidth*2}px);
  padding: 1em;
  margin-bottom: ${p => p.borderWidth}px;
`

const W = styled.div`
  display: flex;
  justify-content: center;
  background: #dedede;
`

const MyAccountWidget = (props) => {
  const api = useApi()
  const { currentUser, setCurrentUser } = useContext(TwofoldContext)
  const stripe = useStripe()
  const elements = useElements()

  const [purchaseModalIsOpen, setPurchaseModalIsOpen] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    logg('purchasing...')

    if (!stripe || !elements) { return }
    const cardElement = elements.getElement(CardElement)

    const jwtToken = localStorage.getItem('jwt_token')
    let client_secret = await request.get(`${config.apiOrigin}${api.paymentsPath}?jwt_token=${jwtToken}`)
    client_secret = client_secret.data.client_secret;
    logg(client_secret, 'client_secret');

    const result = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    })
    logg(result, 'result')

    if (result.error) {
      logg(result.error.message, 'error message')
    } else {
      if (result.paymentIntent.status === 'succeeded') {
        let response = await request.get(`${config.apiOrigin}${api.myAccount()}?jwt_token=${jwtToken}`)
        logg(response, 'ze3response')
      } else {
        logg('something else');
      }
    }
  };

  const { borderWidth } = S

  return <W><Root {...{ borderWidth }} >
    { currentUser.email ? currentUser.email : <Login /> } &nbsp;
    [&nbsp;{ typeof currentUser.n_unlocks === 'number' ? currentUser.n_unlocks : '?' } coins&nbsp;]&nbsp; &nbsp;
    <button onClick={() => setPurchaseModalIsOpen(true) }>buy</button>

    <Modal isOpen={purchaseModalIsOpen} ariaHideApp={false} style={{  width: '500px' }} >
      <h1>
        Purchase this
        <span onClick={() => {
          logg('clicking...')
          setPurchaseModalIsOpen(false)
        } } >[x]</span>
      </h1>

      <form onSubmit={handleSubmit} >
        <CardElement />
        <button type="submit" disabled={!stripe} >Pay</button>
      </form>

    </Modal>
  </Root></W>
};

const WrappedMyAccountWidget = (props) => <Elements stripe={stripePromise}><MyAccountWidget {...props} /></Elements>;

export default WrappedMyAccountWidget;
