
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import React, { Fragment as F, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import { MenuBottom } from "./"
import { Account, Account2, MyAccountWidget } from "$components/users"

const BottomWrapper = styled.div`
  border: 2px solid red;
  height: 50px;

  position: absolute;
  bottom: 0;
`


// @TODO: animate opening it, nicely?
const BottomDrawer = ({ bottomDrawerOpen, setBottomDrawerOpen }) => {

  // const history = useHistory()

  return <F>
    <BottomWrapper>
      <IconButton
        aria-label="open drawer"
        onClick={() => setBottomDrawerOpen(true)}
        edge="start"
        className="menu-btn"
      ><MenuIcon /></IconButton>
      <MenuBottom />
    </BottomWrapper>

    <Drawer anchor={"bottom"}
      elevation={1}
      open={bottomDrawerOpen} onClose={() => setBottomDrawerOpen(false)}
      BackdropProps={{ invisible: true }}
      variant={"persistent"}
    >
      <div>
        <MyAccountWidget />
        <div onClick={() => setBottomDrawerOpen(false)}>[X]</div>
      </div>
    </Drawer>
  </F>
}

export default BottomDrawer
