import { Plugins } from '@capacitor/core';
import { FacebookLoginResponse } from '@capacitor-community/facebook-login';

import React, { useEffect, useState } from "react";
import { IonPage, IonContent } from "@ionic/react";
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import { Api, logg, request } from "$shared";
import config from "config";

import "./users.scss";

const { FacebookLogin } = Plugins;

const FACEBOOK_PERMISSIONS = ['email'];

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  redBorder: {
    border: '1px solid red',
  },
  root: {
    flexGrow: 1,
    overflow: 'scroll',
    height: '100vh',
  },

}));

const Account = (props) => {
  logg(props, 'Account');
  const classes = useStyles();

  const doLogin = async (props) => {
    logg(props, 'doLogin');

    const result = await FacebookLogin.login({ permissions: FACEBOOK_PERMISSIONS });
    if (result.accessToken) {
      logg(result.accessToken.token, 'Facebook access token');

      request.post(`${config.apiOrigin}${Api.longTermTokenPath}`, { accessToken: result.accessToken.token }).then((resp) => {
        logg(resp, 'microsites3 response');

        localStorage.setItem("jwtToken", resp.data.jwt_token);
        localStorage.setItem("current_user", JSON.stringify(resp.data) );
      });
    } else {
      logg('canceled');
      // Canceled by user.
    }
  };

  const logout = () => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("current_user");
    logg("logged out");
  };

  return (<React.Fragment>
    <Container maxWidth="md" >
      <Grid container spacing={2} className={classes.root} >

        <Grid item className={classes.redBorder} xs={12}>
          <Grid container>
            <Grid item xs={6}>
              <img src="/assets/accounts/default-avatar.png" alt="profile pic" />
            </Grid>
            <Grid item xs={6}>
              <h4>Jamie Kavanaugh 22</h4>
              <img src="/assets/accounts/edit.png" alt="edit pic" />
              <p>Jamie_kv@gmail.com</p>
            </Grid>
          </Grid>
        </Grid>

        <br /><br /><br /><br />
        <button onClick={doLogin} >Login</button>

        <button onClick={logout} >Clear Token</button>

        <ul>
          <Link to={"/en/account/my/galleries"} >My Galleries</Link>
          <li><a onClick={() => props.history.push("/en/account/my/videos")}>My Videos</a></li>
        </ul>

      </Grid>
    </Container>
  </React.Fragment>);
}

export default Account;
