import { IonPage, IonContent, IonIcon, IonLoading } from '@ionic/react';
import { Container, Grid, GridList } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import config from "config";

import { Api, logg, request } from "$shared";

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

const VideoItem = styled.div`
  border-bottom: 1px solid red;
`;

const Video = (props) => {
  logg(props, 'Video');


  const { item: video } = props;

  return <VideoItem key={props.idx} >
    <h5>Video {video.name}</h5>
    <p>created {video.created_at}</p>
    <video controls preload="metadata" type="video/mp4" src={video.video_url}
      style={{ maxWidth: '500px', maxHeight: '90vh' }} ></video>
  </VideoItem>;
};

const Videos = () => {
  logg(config, 'Videos component');
  console.log(JSON.stringify(config));

  const [videos, setVideos] = useState([]);

  const jwtToken = localStorage.getItem("jwtToken");

  const classes = useStyles();

  useEffect(() => {
    logg('posting...');
    request.post(Api.myVideosPath, { jwtToken: jwtToken }).then(r => r.data
      ).then(({ videos }) => {
        logg(videos, 'data')
        setVideos(videos);
      })
  }, []);

  return <Container maxWidth="md">
    <Grid container className={classes.root} >
      <Grid item xs={12} >
        <h2>My Videos</h2>
      </Grid>
      <Grid item xs={12}>
        { videos && videos.map((v, idx) => <Video key={idx} item={v} ></Video> ) }
      </Grid>
    </Grid>
  </Container>;

};

export default Videos;
