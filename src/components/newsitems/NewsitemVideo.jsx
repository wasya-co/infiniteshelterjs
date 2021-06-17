import _Box from '@material-ui/core/Box'
import React from "react";
import styled from 'styled-components'

import { Metaline } from "$components/application";

import "./newsitems.scss";

const Box = styled(_Box)`
  margin-bottom: 1em;
  padding: 1em;
  background: white;
`

const NewsitemVideo = (props) => {
  const { data, icon = "/assets/newsfeed/video_icon.svg" } = props;

  return (
    <Box boxShadow={2} >
      <div className="image-section">
        {
          data.youtube_id ?
            <iframe className="iframe" width="100%" height="315" src={`https://www.youtube.com/embed/${data.youtube_id}`} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe> :
            <video width="100%" preload="metadata" height="auto" controls>
              <source src={data.url} type="video/mp4" />
            </video>
        }
      </div>
      <div>
        <p className="title">
          <img className="icon" src={icon} />
          <span className="title-heading">{data.name}</span>
        </p>
        <Metaline item={data} />
        <p
          className="subhead"
          dangerouslySetInnerHTML={{ __html: data.subhead }}>
        </p>
      </div>
    </Box>
  )

}

export default NewsitemVideo;