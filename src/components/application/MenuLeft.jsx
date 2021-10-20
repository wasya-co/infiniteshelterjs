import { IonApp, IonButtons, IonMenuButton } from '@ionic/react'
import Drawer from '@material-ui/core/Drawer'
import Fab from '@material-ui/core/Fab'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import PropTypes from 'prop-types'
import React, { Fragment as F, useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import { Menu } from "$components/application"
import { Api, C, Debug, logg, TwofoldContext } from "$shared"

const _LeftWrapper = styled.div`
  // border: 1px solid green;
`;

const W1 = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
`;

const W2 = styled.div`
`;

const MenuLeft= (props) => {
  // logg(props, 'MenuLeft')

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
      <W1>
        <List>

          <ListItem button key={'newsfeed'}
            onClick={() => {
              setDrawerOpen(false)
              history.push("/en/locations/show/construct0")
            } } >Home (Construct 0)
          </ListItem>

          <ListItem button key={'cities'}
            onClick={() => {
              setDrawerOpen(false)
              history.push("/en/cities")
            } }>
            <span >Cities</span>
          </ListItem>

          { /* <ListItem button key={'map 1'} >
            <span onClick={() => {
              setDrawerOpen(false)
              history.push("/en/locations")
            } }>The Directory</span>
          </ListItem> */ }

          { currentUser && currentUser.bookmarks.map((b, idx) =>
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
              history.push("/en/account")
            } } >
            <span >Account</span>
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
      </W1>
    </Drawer>
  </F>
}

MenuLeft.propTypes = {
  variant: PropTypes.string,
}
export default MenuLeft
