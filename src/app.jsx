import { IonApp, IonRouterOutlet, IonButtons, IonMenuButton } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import { Container, Grid, GridList } from '@material-ui/core';

import React from 'react';
import { Redirect, Route } from 'react-router-dom';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import './app.scss';

import { Cities, CityShow } from "$components/cities";
import Menu from "$components/menu";
import { Account, Account2 } from "$components/users";
import { SitesShow } from '$components/sites';
import { GalleryShow } from "$components/galleries";
import { Videos } from "$components/videos";

const App = () => {

  return (
    <IonApp>
      <IonReactRouter>
        <IonButtons style={{ zIndex: 100 }} >
          <IonMenuButton />
        </IonButtons>
        <Menu />
        <IonRouterOutlet id="main" main>
          <Route path="/en" component={SitesShow} exact />
          <Route path="/en/cities" component={Cities} exact />
          <Route path="/en/cities/travel-to/:name/show" component={CityShow} />
          <Route path="/en/account" component={Account} exact />
          <Route path="/en/account2" component={Account2} exact />
          <Route path="/en/galleries/show/:name" component={GalleryShow} exact />
          <Route path="/en/account/my/videos" component={Videos} exact />
          <Redirect from="/" to="/en" exact />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
