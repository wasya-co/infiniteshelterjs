
import PropTypes from 'prop-types'
import React, { Fragment as F, useContext, useEffect, useRef, } from 'react'
import Modal from "react-modal"
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import config from 'config'
import './UnlockModal.scss'
import { Btn, C, logg, request, TwofoldContext, useApi, } from "$shared"

const Btn0 = styled.div`
  display: inline;
  cursor: pointer;
`;
const BtnRow = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const modalStyle = {
  overlay: {},
  content: {
    margin: 'auto',
    maxWidth: '400px',

  }
}

/**
 * UnlockModal
 */
const UnlockModal = (props) => {
  // logg(props, 'UnlockModal')

  const {
    currentUser, setCurrentUser,
    itemToUnlock, setItemToUnlock,
    loginModalOpen, setLoginModalOpen,
    purchaseModalOpen, setPurchaseModalIsOpen,
    ratedConfirmation, setRatedConfirmation,
  } = useContext(TwofoldContext)
  // logg(useContext(TwofoldContext), 'unlockModalUsedTwofoldContext')

  const history = useHistory()
  const api = useApi()

  const doUnlock = async () => {
    // @TODO: check how many unlocks I have, and offer to purchase more if not enough.
    await api.doUnlock({ kind: itemToUnlock.item_type, id: itemToUnlock.id }).then((r) => {
      setItemToUnlock({})

      // @TODO: fix this mess

      setCurrentUser(r)
      // refresh the newsfeed?
    }).catch((e) => {
      logg(e, 'e19')
    })
  }

  /* @TODO: this was here before, but should not be, right? _vp_ 2022-03-19 */
  // const mountedRef = useRef('init')
  // useEffect(() => {
  //   const fn = async () => {
  //     const r = await api.getMyAccount()
  //     if (r) {
  //       setCurrentUser(r)
  //     }
  //   }
  //   fn()
  //   return () => mountedRef.current = null
  // }, [itemToUnlock.id])

  if (!itemToUnlock.id) { return null }

  let closable = typeof itemToUnlock.closable === 'undefined' ? true : itemToUnlock.closable

  // @TODO: this is messy
  let gohome = () => {
    setItemToUnlock({})
    setRatedConfirmation(true)
    history.push(config.homeLocation)
  }

  const cost = itemToUnlock.premium_tier

  return (<Modal style={modalStyle} ariaHideApp={false} isOpen={!!itemToUnlock.id} >
    <Header>
      <h1>Unlock this item?</h1>
      { closable && <Btn0 onClick={() => closable && setItemToUnlock(false) } >&times;</Btn0> }
    </Header>
    <p>To access this content, please unlock it first. It costs {cost} coin(s) to unlock.</p>
    { currentUser && <F>
      <p>You have <b>{currentUser.n_unlocks}</b> unlocks.</p>
      { currentUser.n_unlocks >= cost && <Btn onClick={doUnlock} >Unlock</Btn> }
      { currentUser.n_unlocks < cost && <F>
        <p>You don't have enough unlocks.</p>
        <Btn onClick={() => { setPurchaseModalOpen(true) ; setItemToUnlock(false)} } >Purchase more.</Btn>
      </F> }
    </F> }
    { !currentUser && <F>
      <p>You have to be logged in to unlock content. <a onClick={() => { setLoginModalOpen(true) ; setItemToUnlock(false) }}>Please login.</a></p>
    </F> }
    <BtnRow>
      { !closable && <Btn onClick={gohome} >Go Home</Btn> }
    </BtnRow>
  </Modal>)

}

export default UnlockModal
