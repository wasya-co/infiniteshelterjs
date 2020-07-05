import { IonPage, IonContent, IonIcon, IonLoading } from '@ionic/react';
import Container from '@material-ui/core/Container';
import React, { useEffect, useState } from "react";
import styled from 'styled-components'

import { logg, request } from "$shared";
import Api from "$src/Api";

const VideoItem = styled.div`
  border-bottom: 1px solid red;
`;

const Video = (props) => {
  logg(props, 'Video');

  const { item: video } = props;

  return <VideoItem key={props.idx} >
    <h5>Video {video.name}</h5>
    <p>created {video.created_at}</p>
    <video controls preload="metadata" type="video/mp4" src={video.video_url} ></video>
  </VideoItem>;
};

/**
 * @TODO: styled components?
 *
 *
 */
const Videos = () => {
  const [videos, setVideos] = useState([]);

  const jwtToken = localStorage.getItem("jwtToken");

  useEffect(() => {
    request.post(Api.myVideosPath, { jwtToken: jwtToken }).then(r => r.data
      ).then(({ videos }) => {
        logg(videos, 'data')
        setVideos(videos);
      })
  }, []);

  return <IonPage>
    <IonContent>
      <br /><br /><br /><br /><br /><br />
      Videos
      { videos && videos.map((v, idx) => <Video key={idx} item={v} ></Video> ) }
    </IonContent>
  </IonPage>;

};

export default Videos;
