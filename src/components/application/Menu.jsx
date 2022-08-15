

/*
 * @TODO: Likely destroy this file
 */

import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonHeader,
  IonToolbar,
  IonTitle,
} from '@ionic/react';

import React from 'react';
import { newspaperOutline, bus, person, powerOutline } from 'ionicons/icons';
import './Application.module.scss';

const appPages = [
  {
    title: 'Homefeed',
    icon: newspaperOutline,
    url: "/en"
  },
  {
    title: 'Cities',
    icon: bus,
    url: "/en/cities"
  },
  {
    title: 'My Account',
    icon: person,
    url: "/en/account"
  },
  {
    title: 'Account2',
    icon: person,
    url: "/en/account2"
  },
  {
    title: 'Login',
    icon: powerOutline
  }
];

/**
 * 20210529 - I think this is obsolete somehow, I'm using MyDrawer in App.jsx
 *
 */
const Menu = () => {
  return (
    <IonMenu contentId="main" type="overlay">
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <img src="/assets/hero.png" />
        <IonList id="inbox-list">
          { appPages.map((appPage, index) => <IonMenuToggle key={index} autoHide={false}>
            <IonItem
              routerLink={appPage.url}
              routerDirection="none"
              lines="none"
              detail={false}>
              <IonIcon
                slot="start"
                ios={appPage.icon}
                md={appPage.icon} />
              <IonLabel>{appPage.title}</IonLabel>
            </IonItem>
          </IonMenuToggle>) }
        </IonList>
      </IonContent>
    </IonMenu>
  )
}

export default Menu
