
import Modal from "react-modal"
import React, { useContext, useEffect, useRef, } from 'react'
import styled from 'styled-components'

import './UnlockModal.scss'
import config from 'config'
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

const UnlockModal = (props) => {
  logg(props, 'UnlockModal')

  const {
    currentUser, setCurrentUser,
    itemToUnlock, setItemToUnlock,
    loginModalOpen, setLoginModalOpen,
  } = useContext(TwofoldContext)
  const usedTwofoldContext = useContext(TwofoldContext)

  const api = useApi()

  const doUnlock = async () => {
    // @TODO: check how many unlocks I have, and offer to purchase more if not enough.
    const path = api.doUnlock({ kind: itemToUnlock.item_type, id: itemToUnlock.id })
    await request.post(`${config.apiOrigin}${path}`).then((r) => {
      setItemToUnlock({})
    }).catch((e) => {
      logg(e, 'e19')
    })
  }

  const mountedRef = useRef('init')
  useEffect(() => {

    const fn = async () => {
      const jwtToken = localStorage.getItem(C.jwt_token)
      await request.get(`${config.apiOrigin}${api.myAccount()}?jwt_token=${jwtToken}`).then((r) => {
        if (!mountedRef.current) { return }
        setCurrentUser(r.data)
      }).catch((e) => {
        // logg(e, 'e12')
        // setCurrentUser(null)
      })
    }
    fn()
    return () => mountedRef.current = null
  }, [itemToUnlock.id])

  if (!itemToUnlock.id) { return null }

  return (<Modal style={modalStyle} ariaHideApp={false} isOpen={!!itemToUnlock.id} >
    <Header>
      <h1>Unlock this item?</h1>
      <Btn0 onClick={() => setItemToUnlock(false) } >&times;</Btn0>
    </Header>
    <p>To access this content, please unlock it first. It costs 1 (one) coin to unlock.</p>
    { !!currentUser
      && <p>You have <b>{currentUser.n_unlocks}</b> unlocks.</p>
      || <p>You have to be logged in to unlock content. <a onClick={() => { setLoginModalOpen(true) ; setItemToUnlock(false) }}>Please login.</a></p> }
    <BtnRow>
      { !!currentUser && <Btn onClick={doUnlock} >Unlock</Btn> }
    </BtnRow>
  </Modal>)

}

export default UnlockModal
