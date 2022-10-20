
import { ethers } from 'ethers'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import EditIcon from '@material-ui/icons/Edit'
import PropTypes from 'prop-types'
import React, { Fragment as F, useContext, useEffect, useState } from "react"
import { toast } from 'react-toastify'
import Toggle from 'react-toggle'
import styled from 'styled-components'
import Web3 from 'web3'
import { useWeb3React, Web3ReactProvider } from "@web3-react/core"
import { InjectedConnector } from '@web3-react/injected-connector'

import {
  AuthContext,
} from 'ishlibjs'

import {
  PurchaseModal,
} from '$components/application'
import { TwofoldContext, } from "$components/TwofoldLayout"
import {
  Btn,
  C,
  logg,
  request,
} from "$shared"
import {
  FbLogin2,
} from "./"

import "react-toggle/style.css"

import bodyNFT from '$src/artifacts/contracts/Body.sol/BodyNFT.json'

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`;

const FlexRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`;


/*
 * ropsten, _vp_ 2021-10-26
 * Dana, nude 1 (nude 3)
 */
const bodyAddress = '0x3e1a03a9e1682f4dd95413e0be69e5b7bccaf15d'

const Edit = styled(EditIcon)`
  font-size: 18px;
  // color: red;
  position: absolute;
  top: 2px;
  right: 2px;
  cursor: pointer;
`;


/**
 * Avatar PFP
**/
const _Img = styled.div`
  border: 1px solid #333333;
  border-radius: 4px;

  position: relative;

  // max-width: 100px;
  // max-height: 100px;
  width: 90px;
  height: 90px;
  margin: 5px;
  margin-right: ${p => p.theme.smallWidth};

  background-image: url('${p => p.src}');
  background-size: cover;
`;
const Img = ({ src }) => {
  const doEdit = () => {
    toast('Editing your avatar is not yet implemented')
  }

  return <_Img src={src}>
    <Edit onClick={doEdit} />
  </_Img>
}

const injected = new InjectedConnector() // { supportedChainIds: [1, 3, 4, 5, 42], })

const _CoinManager = styled.div`
  display: flex;
`;
const CoinManager = ({ children, ...props }) => {
  return <_CoinManager className="CoinManager" {...props} >{children}</_CoinManager>
}

const W0 = styled.div`
  // border: 1px solid cyan;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const W1 = styled.div`
`;



const RegisterWithEmailBtn = (props) => {
  return <Btn {...props} >Register with Email</Btn>
}
const LoginWithEmailBtn = (props) => {
  return <Btn {...props} >Login with Email</Btn>
}

const IconLogout = ({ fill, w, h, ...props }) => {
  // const theme = useTheme()

  w = w ? w : '12px'
  h = h ? h : '12px'
  // fill = fill ? fill : theme.colors.text // @TODO: implement theme in ishlibjs
  fill = fill ? fill : '#333333'

  return <span {...props} >
    <svg xmlns="http://www.w3.org/2000/svg"
      width={w} height={h}
      viewBox="0 0 96.943 96.943" style={{ enableBackground: 'new 0 0 96.943 96.943' }}
    ><g><g><path d="M61.168,83.92H11.364V13.025H61.17c1.104,0,2-0.896,2-2V3.66c0-1.104-0.896-2-2-2H2c-1.104,0-2,0.896-2,2v89.623 c0,1.104,0.896,2,2,2h59.168c1.105,0,2-0.896,2-2V85.92C63.168,84.814,62.274,83.92,61.168,83.92z"/> <path d="M96.355,47.058l-26.922-26.92c-0.75-0.751-2.078-0.75-2.828,0l-6.387,6.388c-0.781,0.781-0.781,2.047,0,2.828 l12.16,12.162H19.737c-1.104,0-2,0.896-2,2v9.912c0,1.104,0.896,2,2,2h52.644L60.221,67.59c-0.781,0.781-0.781,2.047,0,2.828 l6.387,6.389c0.375,0.375,0.885,0.586,1.414,0.586c0.531,0,1.039-0.211,1.414-0.586l26.922-26.92 c0.375-0.375,0.586-0.885,0.586-1.414C96.943,47.941,96.73,47.433,96.355,47.058z"/> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g></g><g></g><g></g>
    </svg>
  </span>
}


/**
 * MyAccountWidget
**/
const MyAccountWidget = (props) => {
  // logg(props, 'MyAccountWidget')
  const {} = props

  const {
    currentUser, setCurrentUser,
    loginModalOpen, setLoginModalOpen,
    useApi,
  } = useContext(AuthContext)
  // logg(useContext(AuthContext), 'MyAccountWidgetUsedAuthContext')

  // @TODO: does this really belong to TwofoldContext?
  const {
    editorMode, setEditorMode,
    purchaseModalOpen, setPurchaseModalOpen,
  } = useContext(TwofoldContext)


  /*
   * @TODO: avatar would be an object s.t. multiple styles/sizes are there,
   * and it should be in a context - shared across threemap, and accountWidget.
   */
  const [ avatar, setAvatar ] = useState("https://d15g8hc4183yn4.cloudfront.net/wp-content/uploads/2022/09/05174137/20220904-PFP.jpg")
  const api = useApi()
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


  useEffect(() => {
    (async () => {
      setCurrentUser(await api.getMyAccount())
    })()
  }, [])

  const doLogout = () => {
    setCurrentUser(C.anonUser)
    localStorage.removeItem('jwt_token')
    window.location.reload(false)
  }

  return <W0 className="MyAccountWidget" >
    { currentUser?.email && <Img src={currentUser?.profile_photo_url || avatar} /> }

    <FlexCol>
      <FlexRow>

        { currentUser.email && <CoinManager>
          [&nbsp;{ typeof currentUser.n_unlocks === 'undefined' ? '?' : currentUser.n_unlocks} coins&nbsp;
          <AddCircleOutlineIcon onClick={() => setPurchaseModalOpen(true)} />&nbsp;]
        </CoinManager> }

        { /* set EditorMode */ }
        {/* <Card>
          <label>
            <Toggle
              defaultChecked={editorMode}
              icons={false}
              onChange={() => setEditorMode(!editorMode) } />
            <span>Editor mode</span>
          </label>
        </Card> */}




        { currentUser?.email ? <FlexRow>
          [&nbsp;{currentUser.email}&nbsp;<IconLogout onClick={doLogout} >Logout</IconLogout>&nbsp;]
        </FlexRow> : <FlexRow>
          {/* <FacebookLogin /> */}
          <RegisterWithEmailBtn onClick={() => { setRegisterModalOpen(true) }} />
          <LoginWithEmailBtn    onClick={() => { setLoginModalOpen(true) }} />
        </FlexRow> }


      </FlexRow>
      <FlexRow>

        { /* Metamask */ }
        { active && <W1> [
          <span>Connected with <b>{account}</b></span>
          <button onClick={disconnect} >Disconnect</button>
          <button onClick={myBodies} >myBodies</button> ]</W1> }
        { !active && <W1>
        <span>Not Connected</span>
        <button onClick={connect} >Connect to MetaMask</button>
        </W1> }

      </FlexRow>
    </FlexCol>

    <PurchaseModal />

  </W0>
}
MyAccountWidget.propTypes = {}; // no props

// const WrappedMyAccountWidget = (props) => <Elements stripe={stripePromise}><MyAccountWidget {...props} /></Elements>;
// export default WrappedMyAccountWidget
export default MyAccountWidget






