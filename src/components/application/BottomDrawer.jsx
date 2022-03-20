
import _Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import React, { Fragment as F, useContext, useState } from 'react'
import styled from 'styled-components'
import Web3 from 'web3'
import { useWeb3React, Web3ReactProvider } from "@web3-react/core"
import { InjectedConnector } from '@web3-react/injected-connector'

import { C, logg, MenuIcon, S, TwofoldContext, } from "$shared"
import { LongLine } from "$components/TwofoldLayout"
import { MyAccountWidget } from "$components/users"


const Drawer = styled(_Drawer)`
  .MuiDrawer-paper {
    // border: 1px solid cyan;

    background: ${p=>p.theme.colors.background};
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
  border: ${p => p.theme.thinBorder};
  border-radius: ${p => p.theme.thinBorderRadius};

  background: ${p=>p.theme.colors.background};
  height: calc(${p=>p.theme.bottomDrawerOpenHeight} + 1*${p=>p.theme.borderHeight});
  margin: ${p=>p.theme.borderWidth};

  flex-grow: 1;
`;

// TODO: I may not need this
const Inner2 = styled.div`
  // border: 1px solid green;

  background: ${p=>p.theme.colors.cardBackground};
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

  const { bottomDrawerOpen, layout, setBottomDrawerOpen } = useContext(TwofoldContext)

  // @TODO: move the component to layout_onecol then
  if (layout === C.layout_onecol) { return null; }

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
      open={bottomDrawerOpen}
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

export default BottomDrawer
