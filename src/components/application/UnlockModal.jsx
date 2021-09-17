
import Modal from "react-modal"
import React, { useContext, useEffect, } from 'react'
import styled from 'styled-components'

import './UnlockModal.scss'
import config from 'config'
import { Btn, logg, request, TwofoldContext, useApi, } from "$shared"
import { doFbLogin, doPasswdLogin, FbLogin } from "$components/users"

const Btn0 = styled.div`
  // border: 1px solid gray;
  // border-radius: 5px;
  // padding: .2em;

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
    width: '400px',

  }
}

const UnlockModal = (props) => {
  logg(props, 'UnlockModal')

  const {
    currentUser, setCurrentUser,
    itemToUnlock, setItemToUnlock,
  } = useContext(TwofoldContext)
  logg(useContext(TwofoldContext), 'useContext(TwofoldContext)')

  const api = useApi()

  const doUnlock = async () => {
    // @TODO: check how many unlocks I have, and offer to purchase more if not enough.
    const path = api.doUnlock({ kind: 'Report', id: itemToUnlock.report_id });
    const result = await request.post(`${config.apiOrigin}${path}`);
    logg(result, 'result of unlocking')
  }

  useEffect(() => {
    const fn = async () => {
      // check jwt
      const jwtToken = localStorage.getItem('jwt_token')
      let response = await request.get(`${config.apiOrigin}${api.myAccount()}?jwt_token=${jwtToken}`
      ).then((r) => {
        setCurrentUser(r.data)
      }).catch((e) => {
        // logg(e, 'e12')
        setCurrentUser(null)
      })

    }
    !!itemToUnlock && fn()
    fn()
  }, [])

  return (<Modal style={modalStyle} ariaHideApp={false} isOpen={!!itemToUnlock} >
    <Header>
      <h1>Unlock this item?</h1>
      <Btn0 onClick={() => setItemToUnlock(false) } >&times;</Btn0>
    </Header>
    <p>To access this content, please unlock it first. It costs 1 (one) coin to unlock.</p>
    { !!currentUser
      && <p>You have <b>{currentUser.n_unlocks}</b> unlocks.</p>
      || <p>You have to be logged in to unlock content. Please login.</p> }
    <BtnRow>
      { !!currentUser && !!currentUser.email && <Btn onClick={doUnlock} >Unlock</Btn> }
      { !!currentUser && !currentUser.email  && <FbLogin /> }
    </BtnRow>
  </Modal>)

}

export default UnlockModal
