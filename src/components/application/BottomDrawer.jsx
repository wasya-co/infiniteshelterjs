
import _Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import PropTypes from 'prop-types'
import React, { Fragment as F, useContext, useState } from 'react'
import styled from 'styled-components'
import Web3 from 'web3'
import { useWeb3React, Web3ReactProvider } from "@web3-react/core"
import { InjectedConnector } from '@web3-react/injected-connector'

import {  } from "$components/application"
import {
  LongLine,
  TwofoldContext,
} from "$components/TwofoldLayout"
import { MyAccountWidget } from "$components/users"
import {
  AppContext,
  C,
  logg,
  MenuIcon,
  S,
} from "$shared"

const Drawer = styled(_Drawer)`
  .MuiDrawer-paper {
    // border: 1px solid cyan;

    background: ${p=>p.theme.colors.background};
    z-index: 0;
  }

  .MuiDrawer-paperAnchorDockedBottom {
    border-top: 0;
  }
`;

function getLibrary(provider) {
  return new Web3(provider)
}

const Inner0 = styled.div`
  display: flex;
  align-items: flex-start;
  color: ${p => p.theme.colors.text};
`;

const Inner1 = styled.div`
  border: 2px solid var(--ion-border-color);
  border-radius: var(--ion-border-radius);

  // background: var(--ion-background-color);
  height: calc(${p=>p.theme.bottomDrawerOpenHeight} + 1*${p=>p.theme.borderHeight});
  margin: ${p=>p.theme.borderWidth};

  flex-grow: 1;
`;

// TODO: I may not need this
const Inner2 = styled.div`
  // border: 1px solid green;

  // background: var(--ion-background-color);
  height: 100px;
  display: flex;
`;

const WClosed = styled.div`
  // border: 1px solid yellow;

  position: absolute;
  bottom: -10px;
  // left: 10px;

  width: calc(100% - 2*${p=>p.theme.borderWidth});

  display: flex;
  align-items: center;
`;

/**
 * BottomDrawer
 */
const BottomDrawer = (props) => {
  // logg(props, 'BottomDrawer')
  const {} = props

  const {
    layout,
  } = useContext(AppContext)
  logg(useContext(AppContext), 'BottomDrawer usedAppContext')
  // only render in gameui layout
  // _vp_ 2023-01-22
  // untested, brittle
  if (layout && layout !== C.layout_gameui) {
    return null;
  }

  const {
    bottomDrawerOpen, setBottomDrawerOpen,
  } = useContext(TwofoldContext)

  return <F>

    <WClosed>
      <IconButton
        aria-label="open drawer"
        onClick={() => setBottomDrawerOpen(true)}
      ><MenuIcon
        fontSize="small"
      /></IconButton>
      <LongLine orientation={C.horizontal} />
    </WClosed>

    <Drawer anchor={"bottom"}
      elevation={1}
      open={!!bottomDrawerOpen}
      onClose={() => setBottomDrawerOpen(false)}
      BackdropProps={{ invisible: true }}
      variant={"persistent"}
    >
      <Inner0 >
        <IconButton
          aria-label="open drawer"
          onClick={() => setBottomDrawerOpen(false)}
          style={{ paddingRight: 0 }}
        ><MenuIcon
          fontSize="small"
        /></IconButton>

        <Inner1 >
          <Inner2 >

            {/* @TODO: move this upstream */}
            <Web3ReactProvider getLibrary={getLibrary}>
              <MyAccountWidget />
            </Web3ReactProvider>

          </Inner2>
        </Inner1>
      </Inner0>
    </Drawer>
  </F>
}
BottomDrawer.propTypes = {} // none so far

export default BottomDrawer


