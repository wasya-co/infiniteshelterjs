import React from "react";
import MetaLine from "../../metaline";
import "./newsitem_video.scss";

const NewsItemVideo = (props) => {
  const { data, icon = "/assets/newsfeed/video_icon.svg" } = props;

  return (
    <div className='newsitems-video'>
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
        <MetaLine
          created_at={data.created_at}
          username={data.username}
          city={data.city || {}}
          tags={data.tags}>
        </MetaLine>
        <p
          className="subhead"
          dangerouslySetInnerHTML={{ __html: data.subhead }}>
        </p>
      </div>
    </div>
  )

}

export default NewsItemVideo;