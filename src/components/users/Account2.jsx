import { Plugins, registerWebPlugin } from '@capacitor/core';
import { IonPage, IonContent } from "@ionic/react";
import { Container, Grid, GridList } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import config from "config";
import { logg, request } from "$shared";

import "./users.scss";

const { FacebookLogin } = Plugins;

const Api = {
  longTermTokenPath: '/api/users/long_term_token',
};

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

const FACEBOOK_PERMISSIONS = ['email']; // , 'user_birthday', 'user_photos', 'user_gender'];

const Account2 = (props) => {
  logg(props, "Account");

  const { navigation } = props;
  const history = useHistory();
  const [selectedSection, setSelectedSection] = useState("reports-new");
  const classes = useStyles();

  const fbCallback = (response) => {
    if (localStorage.getItem("jwtToken")) {
      logg("already got jwtToken");
      // @TODO: check if expired
      // @TODO: write a test for it
      return;
    }
    logg(response, 'facebook response');
    request.post(`${config.apiOrigin}${Api.longTermTokenPath}`, { accessToken: response.accessToken }).then((resp) => {
      logg(resp, 'microsites3 response');
      localStorage.setItem("jwtToken", resp.data.jwt_token);
    });
  };

  const componentClicked = () => {};

  const clearJwtToken = () => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("current_user");
  };

  const doLogin = async (props) => {
    logg(props, 'doLogin');

    const result = await FacebookLogin.login({ permissions: FACEBOOK_PERMISSIONS });

    if (result.accessToken) {
      logg(result.accessToken.token, 'Facebook access token');
      request.post(`${config.apiOrigin}${Api.longTermTokenPath}`, { accessToken: result.accessToken.token }).then((resp) => {
        logg(resp, 'microsites3 response');
        localStorage.setItem("jwtToken", resp.data.jwt_token);
        localStorage.setItem("current_user", { email: resp.data });
      });
    } else {
      logg('canceled');
      // Cancelled by user.
    }

  };

  return (
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

          <Grid item xs={12} >
            <Grid container>
              <Grid item xs={4}>
                <button onClick={clearJwtToken} >Clear Token</button>
              </Grid>
              <Grid item xs={4} >
                <button onClick={doLogin} >Login</button>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} >
            <div onClick={() => history.push("/en/account/my/videos")} >
              <p>My Videos</p>
            </div>
            <div onClick={() => history.push("/en/galleries/new")} >
              <p>Add Gallery</p>
            </div>
          </Grid>

          <Grid item xs={12}>
            <br /><br /><br />
            <br /><br /><br />
            <br /><br /><br />
          </Grid>

        </Grid>
      </Container>
  );
}

export default Account2;
