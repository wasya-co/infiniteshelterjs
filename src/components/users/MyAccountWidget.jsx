
import { ethers } from 'ethers'
import PropTypes from 'prop-types'
import React, { Fragment as F, useContext, useEffect, useState } from "react"
import Modal from "react-modal"
import { CardElement, Elements, useElements, useStripe, } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import styled from 'styled-components'
import Web3 from 'web3'
import { useWeb3React, Web3ReactProvider } from "@web3-react/core"
import { InjectedConnector } from '@web3-react/injected-connector'

import config from "config"
import { logg, S, request, TwofoldContext, useApi } from "$shared"
import bodyNFT from '$src/artifacts/contracts/Body.sol/BodyNFT.json'

/*
 * ropsten, _vp_ 2021-10-26
 * Dana, nude 1 (nude 3)
 */
const bodyAddress = '0x3e1a03a9e1682f4dd95413e0be69e5b7bccaf15d'

const BuyBtn = styled.div`
  border: 1px solid black;
  padding: 5px;
  cursor: pointer;
`;

const _Img = styled.div`
  // border: 1px solid red;

  max-width: 100px;
  max-height: 100px;

`;
const Img = ({ src }) => {
  return <_Img><img src={src} alt='' /></_Img>
}
const injected = new InjectedConnector() // { supportedChainIds: [1, 3, 4, 5, 42], })

const stripePromise = loadStripe('pk_test_qr1QPmSpLdBFt1F7itdWJOj3') // @TODO: this is active, but change.

const Login = (props) => {
  return (<F>
    <button>do login</button>
  </F>)
};

const W = styled.div`
  border: 2px solid black;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  // background: #dedede;
  // background: white;
  // height: 100px;
  // width: calc(100vw - 2*${p => p.theme.borderWidth});
  // padding: 1em;
  // margin-bottom: ${p => p.theme.borderWidth};
`;

const MyAccountWidget = (props) => {
  // logg(props, 'MyAccountWidget')

  const api = useApi()
  const { currentUser, setCurrentUser } = useContext(TwofoldContext)
  const stripe = useStripe()
  const elements = useElements()

  const [purchaseModalIsOpen, setPurchaseModalIsOpen] = useState(false)
  /*
   * @TODO: avatar would be an object s.t. multiple styles/sizes are there,
   * and it should be in a context - shared across threemap, and accountWidget.
   */
  const [ avatar, setAvatar ] = useState("")

  // buy unlocks (coins?)
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
  }

  const { active, account, library, connector, activate, deactivate } = useWeb3React()

  /* useEffect(() => {
    const fn = async () => {
      await connect()
      await myBodies()
    }
    fn()
  }) */

  async function connect() {
    try {
      await activate(injected)
    } catch (ex) {
      logg(ex, 'could not connect')
    }
  }

  async function disconnect() {
    try {
      deactivate()
    } catch (ex) {
      console.log(ex)
    }
  }

  // request access to the user's MetaMask account
  const requestAccount = async () => {
    await window.ethereum.request({ method: 'eth_requestAccounts' })
  }

  const myBodies = async () => {
    if (window.ethereum) {
      await requestAccount()
      if (account) {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(bodyAddress, bodyNFT.abi, signer)
        const tokensOfOwner = await contract.tokensOfOwner(account)

        // @TODO: this is only first, I need to support unlimited number of bodies connected to the account.
        const i = 0
        const result = await contract.tokenURI(tokensOfOwner[i])
        request.get(result).then(r => r.data.image).then(r => {
          setAvatar(r)
        })
      }
    }
  }

  return <W className="MyAccountWidget" >

    { /* currentUser.profile_photo_url && <Img src={currentUser.profile_photo_url} /> */ }
    <Img src={avatar || currentUser.profile_photo_url} />

    { currentUser.email ? currentUser.email : <Login /> } &nbsp;
    [&nbsp;{ typeof currentUser.n_unlocks === 'number' ? currentUser.n_unlocks : '?' } coins&nbsp;]&nbsp; &nbsp;
    <BuyBtn onClick={() => setPurchaseModalIsOpen(true) }>buy</BuyBtn>

    { /* ethers */ }
    <div className="flex flex-col items-center justify-center">
      { active ? <F>
        <span>Connected with <b>{account}</b></span>
        <button onClick={disconnect} >Disconnect</button>
        <button onClick={myBodies} >myBodies</button>
      </F> : <F>
        <span>Not connected</span>
        <button onClick={connect} >Connect to MetaMask</button>
      </F> }
    </div>


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

  </W>
}

// no props?!
MyAccountWidget.propTypes = {
}

const WrappedMyAccountWidget = (props) => <Elements stripe={stripePromise}><MyAccountWidget {...props} /></Elements>;

export default WrappedMyAccountWidget
