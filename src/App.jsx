import { IonApp, IonButtons, IonMenuButton } from '@ionic/react';
import { Container, Grid, GridList } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import React from 'react';
import { Link, Switch, BrowserRouter as Router, Redirect, Route, useHistory, withRouter } from 'react-router-dom';

import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import './theme/variables.css';
import './app.scss';

import { Menu } from "$components/application";
import { CitiesList, CitiesShow } from "$components/cities";
import { GalleriesShow } from "$components/galleries";
import { ReportsShow } from "$components/reports";
import { SitesShow } from '$components/sites';
import { Account, Account2, MyAccountWidget } from "$components/users";
import { Videos } from "$components/videos";
import { Galleries, MyGalleries } from "$components/galleries";
import { logg } from "$shared";

const MyDrawer = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const history = useHistory();

  return <React.Fragment>
    <div className="z-index-100">
      <IconButton
        aria-label="open drawer"
        onClick={() => setDrawerOpen(true)}
        edge="start"
        className="menu-btn"
      ><MenuIcon /></IconButton>
      <MyAccountWidget />
      <Menu />
    </div>

    <Drawer anchor={"left"} open={drawerOpen} onClose={() => setDrawerOpen(false)} >
      <div>
        <List>
          <ListItem button key={1} >
            <span onClick={() => {
              setDrawerOpen(false);
              history.push("/en");
            } }>Newsfeed</span>
          </ListItem>
          <ListItem button key={2} >
            <span onClick={() => {
              setDrawerOpen(false);
              history.push("/en/cities");
            } }>Cities</span>
          </ListItem>
          <ListItem button key={3} >
            <span onClick={() => {
              setDrawerOpen(false);
              history.push("/en/account");
            } }>Account</span>
          </ListItem>
        </List>
      </div>
    </Drawer>
  </React.Fragment>;
};

const App = () => {

  return (
    <Router>
      <MyDrawer />

      <Container maxWidth="md" style={{ maxHeight: '90vh', overflow: 'auto' }} >
        <Switch id="main" main>
          <Redirect exact from="/" to="/en" />
          <Route exact path="/en" ><SitesShow /></Route>

          <Route exact path="/en/account" component={Account} />
          <Route exact path="/en/account/my/videos" component={Videos} />
          <Route exact path="/en/account/my/galleries" component={MyGalleries} />

          <Route exact path="/en/cities"                      component={CitiesList} />
          <Route       path="/en/cities/travel-to/:name/show" component={CitiesShow} />

          <Route exact path="/en/galleries/show/:slug" component={GalleriesShow} />

          <Route exact path="/en/reports/show/:slug" component={ReportsShow} />
        </Switch>
      </Container>

    </Router>
  );
};

export default App;
