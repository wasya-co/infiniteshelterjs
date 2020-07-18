import { IonApp, IonRouterOutlet, IonButtons, IonMenuButton } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import { Container, Grid, GridList } from '@material-ui/core';

import React from 'react';
import { Redirect, Route } from 'react-router-dom';

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

import { logg } from "$shared";
import { Menu } from "$components/application";
import { Cities, CityShow } from "$components/cities";
import { GalleryShow } from "$components/galleries";
import { SitesShow } from '$components/sites';
import { Account, Account2, MyAccountWidget } from "$components/users";
import { Videos } from "$components/videos";

const App = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonButtons style={{ zIndex: 100 }} >
          <IonMenuButton />
          <MyAccountWidget />
        </IonButtons>
        <Menu />
        <IonRouterOutlet id="main" main>
          <Route path="/en" component={SitesShow} exact />
          <Route path="/en/cities" component={Cities} exact />
          <Route path="/en/cities/travel-to/:name/show" component={CityShow} />
          <Route path="/en/account" component={Account} exact />
          <Route path="/en/galleries/show/:name" component={GalleryShow} exact />
          <Route path="/en/account/my/videos" component={Videos} exact />
          <Redirect from="/" to="/en" exact />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
