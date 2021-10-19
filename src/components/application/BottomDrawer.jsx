
import _Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import { withStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import React, { Fragment as F, useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import { Account, MyAccountWidget } from "$components/users"
import { C, logg, S, TwofoldContext } from "$shared"

const ButtonWrapper = styled.div`
  // border: 1px solid yellow;
  position: absolute;
  bottom: -10px;
  left: 10px;
`;

const Drawer = styled(_Drawer)`
  .MuiDrawer-paper {
    background: ${p=>p.background};
  }

  .MuiDrawer-paperAnchorDockedBottom {
    border-top: 0;
  }
`;

const Inner1 = styled.div`
  // border: 1px solid red;

  background: ${p=>p.background};
  height: calc(${p=>p.bottomDrawerOpenHeight} + 1*${p=>p.borderHeight});
  margin: ${p=>p.borderWidth};
`;

// TODO: I may not need this
const Inner2 = styled.div`
  // border: 1px solid green;

  background: white;
  height: 100px;
  display: flex;
`;

const BottomDrawer = (props) => {
  // logg(props, 'BottomDrawer')

  const { bottomDrawerOpen, layout, setBottomDrawerOpen } = useContext(TwofoldContext)

  // @TODO: move the component to layout_onecol then
  if (layout === C.layout_onecol) { return null; }

  return <F>

    <ButtonWrapper>
      <IconButton
        aria-label="open drawer"
        onClick={() => setBottomDrawerOpen(true)}
        edge="start"
        className="menu-btn"
      ><MenuIcon
        fontSize="small"
        style={{ color: 'white' }}
      /></IconButton>
    </ButtonWrapper>


    <Drawer anchor={"bottom"}
      elevation={1}
      open={bottomDrawerOpen}
      onClose={() => setBottomDrawerOpen(false)}
      BackdropProps={{ invisible: true }}
      variant={"persistent"}
      {...S}
    >
      <Inner1 {...S} >
        <Inner2 {...S} >
          <MenuIcon
            onClick={() => setBottomDrawerOpen(false)}
          />
          <MyAccountWidget />

        </Inner2>
      </Inner1>
    </Drawer>
  </F>
}

export default BottomDrawer
