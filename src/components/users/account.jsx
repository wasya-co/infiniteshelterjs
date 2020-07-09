import { IonPage, IonContent } from "@ionic/react";
import { Container, Grid, GridList } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from "react";
import FacebookLogin from 'react-facebook-login';
import { useHistory } from "react-router-dom";

import config from "config";
import { logg, request } from "$shared";

import "./users.scss";
/* import VideosNew from "./videos-new";
import GalleriesNew from "./galleries-new";
import ReportsNew from "./reports-new"; */

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

const Account = (props) => {
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
              <Grid item xs={6}>
                <FacebookLogin
                  appId="3016949928380365"
                  autoLoad={false}
                  fields="name,email,picture"
                  onClick={componentClicked}
                  callback={fbCallback} />
              </Grid>
              <Grid item xs={6}>
                <button onClick={clearJwtToken} >Clear Token</button>
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

export default Account;
