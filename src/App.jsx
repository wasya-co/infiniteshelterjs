import { IonApp, IonButtons, IonMenuButton } from '@ionic/react'
import { Container as _Container, Grid, GridList } from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import React, { Fragment as F, useEffect, useState } from 'react'
import { Link, Switch, BrowserRouter as Router, Redirect, Route as _Route, useHistory, withRouter } from 'react-router-dom'
import styled from 'styled-components'

import '@ionic/react/css/core.css'
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

import './theme/variables.css'
import './app.scss'

import { BottomDrawer, Menu, MenuBottom } from "$components/application"
import MapuiLayout from "$components/application/MapuiLayout"
import { CitiesList, CitiesShow } from "$components/cities"
import { GalleriesShow } from "$components/galleries"
import { LocationsShow as LocationsShow } from "$components/locations"
import { ReportsShow } from "$components/reports"
import { SitesShow } from '$components/sites'
import { Account, Account2, MyAccountWidget } from "$components/users"
import { Videos } from "$components/videos"
import { Galleries, MyGalleries } from "$components/galleries"
import { C, Debug, logg, TwofoldContext } from "$shared"



const Root = styled.div`
  background: #dedede;
  height: 100vh;
  overflow: auto;
`;


const __Container = styled(_Container)`
  height: 100vh;
  overflow: scroll;
`

const LeftWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  background: white;

  height: 50px;
`

const MenuDrawer = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false)
  const history = useHistory()
  console.log(history, 'history')

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
      <div>
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
              history.push("/en/locations/show/map-1")
            } }>Map 1</span>
          </ListItem>
          <ListItem button key={'account'} >
            <span onClick={() => {
              setDrawerOpen(false)
              history.push("/en/account")
            } }>Account</span>
          </ListItem>
        </List>
      </div>
    </Drawer>
  </F>
}



const App = () => {
  const [ layout, setLayout ] = useState(C.layout_onecol)
  const [ bottomDrawerOpen, setBottomDrawerOpen ] = React.useState(true)

  const Container = (props) => {
    switch(layout) {
      case C.layout_onecol:
        // main case
        return <__Container maxWidth="md" {...props}/>
      case C.layout_mapui:
        return <MapuiLayout {...props} {...{ bottomDrawerOpen, setBottomDrawerOpen }} />
    }
  }

  const Route = (props) => {
    useEffect(() => {
      if (props.layout) {
        setLayout(props.layout)
      } else {
        setLayout(C.layout_onecol)
      }
    }, [props.layout])

    return <_Route {...props} />
  }

  return (<Router>
    <MenuDrawer />
    <Root>
      <TwofoldContext.Provider value={{ bottomDrawerOpen, setBottomDrawerOpen }} >
        <Container >
          <Switch id="main" main >

            <Redirect exact from="/" to="/en" />
            <Route exact path="/en" ><SitesShow /></Route>

            <Route exact path="/en/account" component={Account} />
            <Route exact path="/en/account/my/videos" component={Videos} />
            <Route exact path="/en/account/my/galleries" component={MyGalleries} />

            <Route exact path="/en/cities"                      component={CitiesList} />
            <Route       path="/en/cities/travel-to/:name/show" component={CitiesShow} />

            <Route exact path="/en/galleries/show/:slug" component={GalleriesShow} />

            <Route exact path="/en/reports/show/:slug" component={ReportsShow} />

            <Route exact path="/en/locations/show/:slug" component={LocationsShow} layout={C.layout_mapui} />

          </Switch>
        </Container>
      </TwofoldContext.Provider>
    </Root>
    <BottomDrawer bottomDrawerOpen={bottomDrawerOpen} setBottomDrawerOpen={setBottomDrawerOpen} />
  </Router>)
}

export default App
