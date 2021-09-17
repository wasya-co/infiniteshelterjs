import { Container as _Container, Grid, GridList } from '@material-ui/core'

import React, { Fragment as F, useEffect, useState } from 'react'
import Modal from "react-modal"
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

import config from "config"
import { BottomDrawer, Menu, MenuBottom, MenuLeft } from "$components/application"
import MapuiLayout from "$components/application/MapuiLayout"
import { CitiesList, CitiesShow } from "$components/cities"
import { GalleriesShow } from "$components/galleries"
import { LocationsShowMobile as LocationsShow } from "$components/locations"
import { ReportsShow } from "$components/reports"
import { SitesShow } from '$components/sites'
import { Account, Account2, MyAccountWidget } from "$components/users"
import { Videos } from "$components/videos"
import { Galleries, MyGalleries } from "$components/galleries"
import { Api, C, CollapsibleContext, Debug, logg, request, TwofoldContext } from "$shared"

const Root = styled.div`
  background: #dedede;
  height: 100vh;
  overflow: auto;
`;

const __Container = styled(_Container)`
  height: 100vh;
  overflow: scroll;
`;

const App = () => {
  const [ layout, setLayout ] = useState(C.layout_onecol)
  const [ bottomDrawerOpen, setBottomDrawerOpen ] = React.useState(false)
  const [ itemToUnlock, setItemToUnlock ] = React.useState(false)
  const [ zoom, setZoom ] = useState(1)

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

  const doUnlock = async () => {
    // @TODO: check how many unlocks I have, and offer to purchase more if not enough.
    const path = Api.doUnlock({ kind: 'Report', id: itemToUnlock.report_id });
    const result = await request.post(`${config.apiOrigin}${path}`);
    logg(result, 'result of unlocking')
  };

  const [ collapsibles, setCollapsibles ] = useState({
    // 'map-sec': true,
    'descr-sec': true,
  })


  return (<Router>
    <TwofoldContext.Provider value={{
        bottomDrawerOpen, setBottomDrawerOpen,
        itemToUnlock, setItemToUnlock,
        layout, setLayout,
        zoom, setZoom,
    }} >
      <CollapsibleContext.Provider value={{ collapsibles, setCollapsibles, }} >
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
        <Modal ariaHideApp={false} isOpen={!!itemToUnlock} >
          <h1>Unlock this item? <button onClick={() => setItemToUnlock(false) } >[x]</button></h1>
          <button onClick={doUnlock}>Do it</button>
        </Modal>
      </CollapsibleContext.Provider>
    </TwofoldContext.Provider>
  </Router>)
}

export default App
