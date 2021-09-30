
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import React, { Fragment as F, useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import { MenuBottom } from "./"
import { Account, MyAccountWidget } from "$components/users"
import { C, logg, TwofoldContext } from "$shared"

const BottomWrapper = styled.div`
;`

const ButtonWrapper = styled.div`
  // border: 1px solid yellow;
  position: absolute;
  bottom: -10px;
  left: 10px;
`;

const BottomDrawer = (props) => {
  // logg(props, 'BottomDrawer')

  const { bottomDrawerOpen, layout, setBottomDrawerOpen } = useContext(TwofoldContext)

  // @TODO: move the component to layout_onecol then
  if (layout === C.layout_onecol) { return null; }

  return <F>
    <BottomWrapper className='BottomWrapper' >
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
      className='Drawer'
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
