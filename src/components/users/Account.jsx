import { Plugins } from '@capacitor/core';
import { FacebookLoginResponse } from '@capacitor-community/facebook-login';

import React, { Fragment as F, useEffect, useState } from "react";
import { IonPage, IonContent } from "@ionic/react";
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import { Api, C, logg, request } from "$shared";
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
  root: {
    flexGrow: 1,
    overflow: 'scroll',
    height: '100vh',
  },

}));

const Account = (props) => {
  const classes = useStyles();

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const doLogin = async (props) => {
    const result = await FacebookLogin.login({ permissions: FACEBOOK_PERMISSIONS });
    if (result.accessToken) {
      logg(result.accessToken.token, 'Facebook access token')

      request.post(`${config.apiOrigin}${Api.longTermTokenPath}`, { accessToken: result.accessToken.token }).then((resp) => {
        logg(resp, 'microsites3 response')

        localStorage.setItem(C.jwt_token, resp.data.jwt_token)
        localStorage.setItem(C.current_user, JSON.stringify(resp.data) )
      }).catch((err) => {
        logg(err, `Could not post request to ${config.apiOrigin}${Api.longTermTokenPath}`)
      })
    } else {
      logg('canceled')
      // Canceled by user.
    }
  }

  const doLogin2 = async () => {
    request.post(`${config.apiOrigin}${Api.loginPath}`, { email, password }).then((r) => r.data).then((resp) => {
      logg(resp, 'resp')
      localStorage.setItem('jwt_token', resp.jwt_token)
      localStorage.setItem('current_user', JSON.stringify(resp.current_user))
    })
  }

  const logout = () => {
    localStorage.removeItem(C.jwt_token);
    localStorage.removeItem(C.current_user);
    logg("logged out");
  };

  const currentUser = localStorage.getItem('current_user') ? JSON.parse(localStorage.getItem('current_user')) : null

  /* useEffect(async () => {
    // check jwt
    const jwtToken = localStorage.getItem('jwt_token')
    let response = await request.get(`${config.apiOrigin}${Api.myAccount()}?jwt_token=${jwtToken}`)
    logg(response, 'ze3response')

  }, []) */

  return (<F>

      <Grid container spacing={2} className={classes.root} >
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={6}>
              <img src="/assets/accounts/default-avatar.png" alt="profile pic" />
            </Grid>
            <Grid item xs={6}>
              { !!currentUser && <F>
                <h4>{currentUser.email}</h4>
                <ul>
                  <Link to={"/en/account/my/galleries"} >My Galleries</Link>
                  <li><a onClick={() => props.history.push("/en/account/my/videos")}>My Videos</a></li>
                  <li><button onClick={logout} >Clear Token</button></li>
                </ul>
              </F> || <F>
                <h4>Not logged in</h4>
                <button onClick={doLogin} >fb Login</button>
                <br /><br /><br />
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value) } /><br />
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value) }/><br />
                <button onClick={doLogin2} >passwd Login</button>
              </F> }
            </Grid>
          </Grid>
        </Grid>
      </Grid>

  </F>);
}

export default Account;
