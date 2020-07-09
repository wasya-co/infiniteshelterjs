import { Plugins } from '@capacitor/core';
import { FacebookLoginResponse } from '@capacitor-community/facebook-login';

import React, { useEffect, useState } from "react";
// import FacebookLogin from 'react-facebook-login';
import { IonPage, IonContent } from "@ionic/react";

import { useHistory } from "react-router-dom";

import { logg, request } from "$shared";
import config from "config";

import "./users.scss";

const { FacebookLogin } = Plugins;

const FACEBOOK_PERMISSIONS = ['email']; // , 'user_birthday', 'user_photos', 'user_gender'];

const Api = {
  longTermTokenPath: '/api/users/long_term_token',
};

const Account2 = (props) => {
  logg(props, 'Account2');
  const { navigation } = props;
  const history = useHistory();

  const doLogin = async (props) => {
    logg(props, 'doLogin');

    const result = await FacebookLogin.login({ permissions: FACEBOOK_PERMISSIONS });

    if (result.accessToken) {
      logg(result.accessToken.token, 'Facebook access token');
      request.post(`${config.apiOrigin}${Api.longTermTokenPath}`, { accessToken: result.accessToken.token }).then((resp) => {
        logg(resp, 'microsites3 response');
        localStorage.setItem("jwtToken", resp.data.jwt_token);
      });
    } else {
      logg('canceled');
      // Cancelled by user.
    }

  };


  return (
    <IonPage>
      <IonContent>
        <div className="account2">

          <br /><br /><br /><br />
          <button onClick={doLogin} >Login</button>

        </div>
      </IonContent>
    </IonPage>
  );
}

export default Account2;
