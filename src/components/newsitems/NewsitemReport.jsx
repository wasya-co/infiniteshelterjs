import React, { useState } from "react";
import Modal from "react-modal";
import { useHistory } from "react-router-dom";

import { CardElement, Elements, useElements, useStripe, } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import config from "config";

import MetaLine from "$components/metaline";

import { logg, request } from "$shared";

import "./newsitems.scss";

const stripePromise = loadStripe('pk_test_UnB4uh0vErYIishvckNYtF4c');

const Api = {
  payments2: "/api/payments2",
};

const NewsitemReport = (props) => {
  logg(props, "NewsitemReport");
  const { newsitem } = props;
  const slug = newsitem.reportname;
  const stripe = useStripe();
  const elements = useElements();

  const history = useHistory();

  const [purchaseModalIsOpen, setPurchaseModalIsOpen] = useState(false);

  const openPurchaseModal = () => {
    setPurchaseModalIsOpen(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) { return; }
    const cardElement = elements.getElement(CardElement);

    let client_secret = await request.get(`${config.apiOrigin}${Api.payments2}`);
    client_secret = client_secret.data.client_secret;
    logg(client_secret, 'client_secret');

    const result = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });
    logg(result, 'result');

    if (result.error) {
      logg(result.error.message);
    } else {
      if (result.paymentIntent.status === 'succeeded') {
        logg('cool');
      } else {
        logg('something else');
      }
    }
  };

  return <React.Fragment>

    <div className="newsitems-report">
      <div>
        <p className="title">
          <img className="icon" src="/assets/newsfeed/reports_icon.png" alt='' />
          <span
            className="title-heading"
            onClick={(e) => {

              logg(e, 'navigate to report')
              if (newsitem.is_premium && !newsitem.is_purchased) {
                openPurchaseModal();
              } else {
                history.push(`/en/reports/show/${slug}`)
              }

            } }
          >{newsitem.name}
          </span>
        </p>
        <MetaLine
          created_at={newsitem.created_at}
          username={newsitem.username}
          city={newsitem.city || {}}
          tags={newsitem.tags} />
        <p className="subhead"
          dangerouslySetInnerHTML={{ __html: newsitem.subhead }} />
        <p>Premium Tier {newsitem.premium_tier}</p>
        <p>Purchased? {JSON.stringify(newsitem.is_purchased)}</p>
      </div>
    </div>

    <Modal isOpen={purchaseModalIsOpen} ariaHideApp={false} >
      <h1>
        Purchase this
        <span onClick={() => setPurchaseModalIsOpen(false) } >[x]</span>
      </h1>
      <form onSubmit={handleSubmit} >
        <CardElement />
        <button type="submit" disabled={!stripe} >Pay</button>
      </form>

      <h1>You have {} unlocks</h1>
      <button>unlock this for 5</button>
    </Modal>

  </React.Fragment>;

}

const WrappedNewsitemReport = (props) => <Elements stripe={stripePromise}><NewsitemReport {...props} /></Elements>;

export default WrappedNewsitemReport;

