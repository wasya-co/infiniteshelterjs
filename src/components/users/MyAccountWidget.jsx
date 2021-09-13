import React, { Fragment as F, useState } from "react"
import Modal from "react-modal"
import { CardElement, Elements, useElements, useStripe, } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

import config from "config"

import { Api, logg, request } from "$shared"

const stripePromise = loadStripe('pk_test_qr1QPmSpLdBFt1F7itdWJOj3') // @TODO: this is active, but change.

const Login = (props) => {
  // logg(props, 'Login component')

  return (<F>
    <buttom>do login</buttom>
  </F>)
}

const MyAccountWidget = (props) => {
  // logg(props, 'MyAccountWidget')

  const currentUser = JSON.parse(localStorage.getItem("current_user")) || {}
  // logg(currentUser, 'cu2')
  const stripe = useStripe()
  const elements = useElements()

  const [purchaseModalIsOpen, setPurchaseModalIsOpen] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    logg('purchasing...')

    if (!stripe || !elements) { return }
    const cardElement = elements.getElement(CardElement)

    const jwtToken = localStorage.getItem('jwt_token')
    let client_secret = await request.get(`${config.apiOrigin}${Api.paymentsPath}?jwt_token=${jwtToken}`)
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
        let response = await request.get(`${config.apiOrigin}${Api.myAccount()}?jwt_token=${jwtToken}`)
        logg(response, 'ze3response')
      } else {
        logg('something else');
      }
    }
  };

  return <F>
    { currentUser.email ? currentUser.email : <Login /> } &nbsp;
    [&nbsp;{ typeof currentUser.n_coins === 'number' ? currentUser.n_coins : '?' } stars&nbsp;]&nbsp; &nbsp;
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
  </F>;
};

const WrappedMyAccountWidget = (props) => <Elements stripe={stripePromise}><MyAccountWidget {...props} /></Elements>;

export default WrappedMyAccountWidget;
