
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
import {
  AuthContext, AuthWidget,
  FlexCol, FlexRow,
} from 'ishlibjs'

import {
  FbLogin2,
} from "./"
import {
  Btn,
  logg,
  request,
  S,
  TwofoldContext,
} from "$shared"
import bodyNFT from '$src/artifacts/contracts/Body.sol/BodyNFT.json'

/*
 * ropsten, _vp_ 2021-10-26
 * Dana, nude 1 (nude 3)
 */
const bodyAddress = '0x3e1a03a9e1682f4dd95413e0be69e5b7bccaf15d'

const BuyBtn = styled.span`
  border: 1px solid ${p => p.theme.colors.text};

  padding: 5px;
  cursor: pointer;
`;

const Cell = styled.div`
  // display: flex;
`;

const _Img = styled.div`
  border: 1px solid red;
  background: white;

  max-width: 100px;
  max-height: 100px;
  width: 100px;
  height: 100px;
`;
const Img = ({ src }) => {
  return <_Img><img src={src} alt='' /></_Img>
}

const injected = new InjectedConnector() // { supportedChainIds: [1, 3, 4, 5, 42], })

const stripePromise = loadStripe('pk_test_qr1QPmSpLdBFt1F7itdWJOj3') // @TODO: this is active, but change.


const W0 = styled.div`
  // border: 1px solid cyan;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const W1 = styled.div``;

/**
 * MyAccountWidget
 */
const MyAccountWidget = (props) => {
  // logg(props, 'MyAccountWidget')

  const {
    currentUser, setCurrentUser,
    useApi,
  } = useContext(AuthContext)

  const api = useApi()

  const {
    purchaseModalOpen, setPurchaseModalOpen,
  } = useContext(TwofoldContext)
  // logg(useContext(TwofoldContext), 'MyAccountWidget#usedTwofoldContext')

  const stripe = useStripe()
  const elements = useElements()

  /*
   * @TODO: avatar would be an object s.t. multiple styles/sizes are there,
   * and it should be in a context - shared across threemap, and accountWidget.
   */
  const [ avatar, setAvatar ] = useState("")

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

  const { active, account, library, connector, activate, deactivate } = useWeb3React()

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

  return <W0 className="MyAccountWidget" >

    { /* currentUser.profile_photo_url && <Img src={currentUser.profile_photo_url} /> */ }
    <Img src={avatar || currentUser?.profile_photo_url} />

    <FlexRow>

      { currentUser.email && <Cell>[ { typeof currentUser.n_unlocks === 'undefined' ? '?' : currentUser.n_unlocks} coins <BuyBtn onClick={() => setPurchaseModalOpen(true) }>ADD</BuyBtn> ]</Cell> }
      <AuthWidget />


      { active && <W1> [
          <span>Connected with <b>{account}</b></span>
          <button onClick={disconnect} >Disconnect</button>
          <button onClick={myBodies} >myBodies</button> ]</W1> }
      { !active && <W1>
        <span>Not Connected</span>
        <button onClick={connect} >Connect to MetaMask</button>
      </W1> }

    </FlexRow>

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

  </W0>
}
MyAccountWidget.propTypes = {
  // no props
};

const WrappedMyAccountWidget = (props) => <Elements stripe={stripePromise}><MyAccountWidget {...props} /></Elements>;

export default WrappedMyAccountWidget
