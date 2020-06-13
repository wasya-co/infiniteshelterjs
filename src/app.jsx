import Menu from './components/menu';
import Page from './pages/Page';
import React from 'react';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
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


const App = () => {

  return (
    <IonApp>
      <IonReactRouter>
          <Menu />
          <IonRouterOutlet id="main" main>
            <Route path="/page/:name" component={Page} exact />
            <Redirect from="/" to="/page/Inbox" exact />
          </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
