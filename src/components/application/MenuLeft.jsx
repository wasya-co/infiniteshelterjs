import { IonApp, IonButtons, IonMenuButton } from '@ionic/react'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import React, { Fragment as F, useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import { Menu } from "$components/application"
import { Api, C, Debug, logg, TwofoldContext } from "$shared"

const LeftWrapper = styled.div`
  // border: 1px solid green;

  position: absolute;
  top: 0;
  left: 0;

  background: white;
`

const W1 = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
`
const W2 = styled.div`
`

const MenuLeft= (props) => {
  // logg(props, 'MenuLeft')
  const [drawerOpen, setDrawerOpen] = React.useState(false)
  const [ loading, setLoading ] = useState(false)
  const history = useHistory()
  const [ currentUser, setCurrentUser ] = useState(false)

  // @TODO: re-instate
  /* useEffect(() => {
    setLoading(true)
    Api.getMyAccount().then(data => {
      logg(data, 'getMyAccount')
      setCurrentUser(data.data)
    }).catch(e => {
      logg(e, 'e1a')
    }).finally(() => {
      setLoading(false)
    })
  }, [drawerOpen]) */

  return <F>
    <LeftWrapper>
      <IconButton
        aria-label="open drawer"
        onClick={() => setDrawerOpen(true)}
        edge="start"
        className="menu-btn"
      ><MenuIcon /></IconButton>
      { /* <MyAccountWidget /> */ }
      <Menu />
    </LeftWrapper>

    <Drawer anchor={"left"} open={drawerOpen} onClose={() => setDrawerOpen(false)} >
      <W1>
        <List>
          <ListItem button key={'newsfeed'} >
            <span onClick={() => {
              setDrawerOpen(false)
              history.push("/en")
            } }>Newsfeed</span>
          </ListItem>
          <ListItem button key={'cities'} >
            <span onClick={() => {
              setDrawerOpen(false)
              history.push("/en/cities")
            } }>Cities</span>
          </ListItem>
          <ListItem button key={'map 1'} >
            <span onClick={() => {
              setDrawerOpen(false)
              history.push("/en/locations/show/world-1")
            } }>The World</span>
          </ListItem>
          <ListItem button key={'map 2'} >
            <span onClick={() => {
              setDrawerOpen(false)
              history.push("/en/locations/show/map-1")
            } }>construct-1</span>
          </ListItem>
          <ListItem button key={'account'} >
            <span onClick={() => {
              setDrawerOpen(false)
              history.push("/en/account")
            } }>Account</span>
          </ListItem>
        </List>
        <W2>
          { loading && 'Loading...' || <F>
            {currentUser.email}<br />
            {currentUser.n_stars}<br />
            some action
          </F> }
        </W2>
      </W1>
    </Drawer>
  </F>
}

export default MenuLeft