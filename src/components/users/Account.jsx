


import React, { Fragment as F, useContext, useEffect, useState } from "react";
import { IonPage, IonContent } from "@ionic/react";
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import { FbLogin, Logout, PasswordLogin } from "./"
import { C, logg, TwofoldContext } from "$shared";

import "./users.scss"

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
  const classes = useStyles()

  const { currentUser, setCurrentUser } = useContext(TwofoldContext)

  return (<F>

      <Grid container spacing={2} className={classes.root} >
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={6}>
              <img src="/assets/accounts/default-avatar.png" alt="profile pic" />
            </Grid>
            <Grid item xs={6}>
              { !!currentUser
                && <F>
                  <h4>{currentUser.email}</h4>
                  <ul>
                    <li><Link to={"/en/account/my/galleries"} >My Galleries</Link></li>
                    <li><a onClick={() => props.history.push("/en/account/my/videos")}>My Videos</a></li>
                    <li><Logout /></li>
                  </ul>
                </F>
                || <F>
                  <h4>Not logged in</h4>
                  <FbLogin />
                  <br /><br />
                  <PasswordLogin />

                </F> }
            </Grid>
          </Grid>
        </Grid>
      </Grid>

  </F>);
}

export default Account;
