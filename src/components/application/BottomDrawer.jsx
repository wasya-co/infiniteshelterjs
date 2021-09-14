
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import React, { Fragment as F, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import { MenuBottom } from "./"
import { Account, Account2, MyAccountWidget } from "$components/users"

const BottomWrapper = styled.div`
  // height: 100px;
  // position: absolute;
  // bottom: 0;
`

const ButtonWrapper = styled.div`
  // border: 1px solid yellow;
  position: absolute;
  bottom: -10px;
  left: 10px;
`

// @TODO: animate opening it, nicely?
const BottomDrawer = ({ bottomDrawerOpen, setBottomDrawerOpen }) => {

  return <F>
    <BottomWrapper>
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
      <MenuBottom />
    </BottomWrapper>

    <Drawer anchor={"bottom"}
      elevation={1}
      open={bottomDrawerOpen}
      onClose={() => setBottomDrawerOpen(false)}
      BackdropProps={{ invisible: true }}
      variant={"persistent"}
    >
      <div >
        <MyAccountWidget />
        <div
          onClick={() => setBottomDrawerOpen(false)}
          style={{ position: 'absolute', left: 0, bottom: 0 }}
        >[X]</div>
      </div>
    </Drawer>
  </F>
}

export default BottomDrawer
