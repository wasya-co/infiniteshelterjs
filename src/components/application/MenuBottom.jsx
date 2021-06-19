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
import './application.scss';


/**
 * 20210602
 *
 */
const MenuBottom = () => {
  return (
    <IonMenu type="overlay">
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <img src="/assets/hero.png" />
        <h1>what's here?</h1>
      </IonContent>
    </IonMenu>
  )
}

export default MenuBottom;
