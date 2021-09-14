import { Container as _Container, Grid, GridList } from '@material-ui/core'

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

import { BottomDrawer, Menu, MenuBottom, MenuLeft } from "$components/application"
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





const App = () => {
  const [ layout, setLayout ] = useState(C.layout_onecol)
  const [ bottomDrawerOpen, setBottomDrawerOpen ] = React.useState(false)

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
    <TwofoldContext.Provider value={{ bottomDrawerOpen, layout, setBottomDrawerOpen, setLayout }} >
      <MenuLeft />
      <Root>
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
      </Root>
      <BottomDrawer />
    </TwofoldContext.Provider>
  </Router>)
}

export default App
