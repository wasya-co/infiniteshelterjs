import React, { useState } from "react";
import Modal from "react-modal";
import { CardElement, Elements, useElements, useStripe, } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import config from "config";

import { logg, request } from "$shared";

const stripePromise = loadStripe('pk_test_UnB4uh0vErYIishvckNYtF4c');

const Api = {
  myAccount: "/api/my/account",
  payments2: "/api/payments2",
};

const MyAccountWidget = (props) => {
  const currentUser = JSON.parse(localStorage.getItem("current_user")) || {};
  const stripe = useStripe();
  const elements = useElements();

  const [purchaseModalIsOpen, setPurchaseModalIsOpen] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) { return; }
    const cardElement = elements.getElement(CardElement);

    let client_secret = await request.get(`${config.apiOrigin}${Api.payments2}?jwt_token=${currentUser.jwt_token}`);
    client_secret = client_secret.data.client_secret;
    logg(client_secret, 'client_secret');

    const result = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });
    logg(result, 'result');

    if (result.error) {
      logg(result.error.message, 'error message');
    } else {
      if (result.paymentIntent.status === 'succeeded') {
        let response = await request.get(`${config.apiOrigin}${Api.myAccount}?jwt_token=${currentUser.jwt_token}`)
      } else {
        logg('something else');
      }
    }
  };

  return <React.Fragment>
    { currentUser.email }&nbsp;
    [&nbsp;{ typeof currentUser.n_unlocks === 'number' ? currentUser.n_unlocks : '?' } unlocks&nbsp;]
    <button onClick={() => setPurchaseModalIsOpen(true) }>buy</button>

    <Modal isOpen={purchaseModalIsOpen} ariaHideApp={false} >
      <h1>
        Purchase this
        <span onClick={() => setPurchaseModalIsOpen(false) } >[x]</span>
      </h1>

      <form onSubmit={handleSubmit} >
        <CardElement />
        <button type="submit" disabled={!stripe} >Pay</button>
      </form>

    </Modal>
  </React.Fragment>;
};

const WrappedMyAccountWidget = (props) => <Elements stripe={stripePromise}><MyAccountWidget {...props} /></Elements>;

export default WrappedMyAccountWidget;
