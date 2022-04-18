import { IonApp, IonButtons, IonMenuButton } from '@ionic/react'
import Drawer from '@material-ui/core/Drawer'
import Fab from '@material-ui/core/Fab'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import PropTypes from 'prop-types'
import React, { Fragment as F, useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import config from 'config'
import { Menu } from "$components/application"
import { Api, C, Debug, logg, MenuIcon, TwofoldContext, } from "$shared"

const _LeftWrapper = styled.div`
  // border: 1px solid green;
`;

const W0 = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
`;


const SideMenu = (props) => {
  // logg(props, 'SideMenu')

  const [ drawerOpen, setDrawerOpen ] = React.useState(false)
  const [ loading, setLoading ] = useState(false)
  const history = useHistory()
  const { currentUser, setCurrentUser } = useContext(TwofoldContext)
  return <F>

    { /* <Menu /> */ }

    { /* @TODO: probably remove from here, too many variations of the button, it gotta be separate */ }
    { props.variant === C.variants.floating ?
      <Fab onClick={() => setDrawerOpen(true)} style={{ position: 'absolute', top: 0, left: 0, margin: '.5em' }} aria-label='main menu'><MenuIcon /></Fab>
      : <MenuIcon onClick={() => setDrawerOpen(true)} /> }

    <Drawer anchor={"left"} open={drawerOpen} onClose={() => setDrawerOpen(false)} >
      <W0>
        <List>

          <ListItem button key={'newsfeed'}
            onClick={() => {
              setDrawerOpen(false)
              history.push(config.homeLocation)
            } } >Home
          </ListItem>

          { /* <ListItem button key={'three'}
            onClick={() => {
              setDrawerOpen(false)
              history.push("/en/locations/show/threev1")
            } } >Three
          </ListItem>

          <ListItem button key={'three'}
            onClick={() => {
              setDrawerOpen(false)
              history.push("/en/locations/show/construct03d")
            } } >Construct0 3D
          </ListItem>

          <ListItem button key={'cities'}
            onClick={() => {
              setDrawerOpen(false)
              history.push("/en/cities")
            } }>
            <span >Cities</span>
          </ListItem>

          <ListItem button key={'map 1'} >
            <span onClick={() => {
              setDrawerOpen(false)
              history.push("/en/locations")
            } }>The Directory</span>
          </ListItem> */ }

          { currentUser && currentUser.bookmarks?.map((b, idx) =>
            <ListItem button key={idx}
              onClick={() => {
                setDrawerOpen(false)
                history.push(`/en/locations/show/${b.slug}`)
              } } >
              <span >{b.name}</span>
            </ListItem>
          ) }

          <ListItem button key={'account'}
            onClick={() => {
              setDrawerOpen(false)
              history.push(`/en/locations/show/${currentUser.id}`)
            } } >
            <span >Account</span>
          </ListItem>

          <ListItem>
            Version 0.0.0
          </ListItem>

        </List>
        { /* <W2>
          { loading && 'Loading...' }
          { currentUser && <F>
            {currentUser.email}<br />
            {currentUser.n_stars}<br />
            some action
          </F> }
        </W2> */ }
      </W0>
    </Drawer>
  </F>
}

SideMenu.propTypes = {
  variant: PropTypes.string,
}
export default SideMenu
