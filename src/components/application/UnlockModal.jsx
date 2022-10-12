
import PropTypes from 'prop-types'
import React, { Fragment as F, useContext, useEffect, useRef, } from 'react'
import Modal from "react-modal"
import styled from 'styled-components'

import {
  AuthContext,
  ModalHeader,
} from 'ishlibjs'
import config from 'config'

import {
  LocationContext,
} from "$components/locations"
import { TwofoldContext, } from "$components/TwofoldLayout"
import {
  AppContext,
  Btn,
  C,
  inflector,
  logg,
} from "$shared"
import { appPaths } from "$src/AppRouter"

import * as styles from './UnlockModal.module.scss'

const BtnRow = styled.div`
  display: flex;
  justify-content: space-around;
`;


/**
 * UnlockModal
 *
 * Alphabetized contexts
**/
const UnlockModal = (props) => {
  // logg(props, 'UnlockModal')
  const {} = props

  const {
    useHistory,
  } = useContext(AppContext)
  const history = useHistory()

  const {
    currentUser, setCurrentUser,
    loginModalOpen, setLoginModalOpen,
    useApi,
  } = useContext(AuthContext)
  // logg(useContext(AuthContext), 'unlockModalUsedAuthContext')

  const location = useContext(LocationContext)
  // logg(location, 'UnlockModal Used LocationContext')

  const {
    itemToUnlock, setItemToUnlock,
    purchaseModalOpen, setPurchaseModalOpen,
    ratedConfirmation, setRatedConfirmation,
  } = useContext(TwofoldContext)
  // logg(useContext(TwofoldContext), 'unlockModalUsedTwofoldContext')

  const api = useApi()


  const doUnlock = async () => {

    // @TODO: check how many unlocks I have, and offer to purchase more if not enough.
    // @TODO: Do I Need to refresh the newsfeed? _vp_ 2022-09-04
    await api.doUnlock({ kind: itemToUnlock.item_type, id: itemToUnlock.id }).then((r) => {
      logg(r, 'UnlockModal Unlocked')

      // @TODO: Change this to null if possible. Test-drive this change. _vp_ 2022-09-04
      setItemToUnlock({})
      setCurrentUser(r)

      history.push(appPaths.item({ item: itemToUnlock, location, }))

    }).catch((e) => {
      logg(e, 'e19 - cannot doUnlock')
    })
  }

  if (!itemToUnlock?.id) { return null }

  let closable = typeof itemToUnlock.closable === 'undefined' ? true : itemToUnlock.closable

  // @TODO: this is messy
  let gohome = () => {
    setItemToUnlock({})
    setRatedConfirmation(true)
    history.push(config.homePath)
  }

  const cost = itemToUnlock.premium_tier

  Modal.setAppElement('body')

  return (<Modal
    isOpen={!!itemToUnlock.id}
    className={`UnlockModal ${styles.UnlockModal}`}
    overlayClassName={styles.UnlockModalOverlay}
    portalClassName={styles.UnlockModalPortal}
  >
    <ModalHeader onClose={() => closable && setItemToUnlock(false) } >Unlock this item?</ModalHeader>
    <p>To access this content, please unlock it first. It costs {cost} coin(s) to unlock.</p>
    { currentUser.email && <>
        <p>You have <b>{currentUser.n_unlocks || '-'}</b> unlocks.</p>
        { currentUser.n_unlocks >= cost
          && <Btn className='doUnlock' onClick={doUnlock} >Unlock</Btn>
          || <>
            <p>You don't have enough unlocks.</p>
            <Btn onClick={() => { setPurchaseModalOpen(true) ; setItemToUnlock(false)} } >Purchase more.</Btn>
        </> }
      </> || <>
        <p>You have to be logged in to unlock content. <a onClick={() => { setLoginModalOpen(true) ; setItemToUnlock(false) }}>Please login.</a></p>
    </> }
    <BtnRow>
      { !closable && <Btn onClick={gohome} >Go Home</Btn> }
    </BtnRow>
  </Modal>)

}
UnlockModal.propTypes = {} // none
export default UnlockModal
