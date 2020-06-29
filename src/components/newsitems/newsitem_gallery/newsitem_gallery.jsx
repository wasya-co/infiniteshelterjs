import React from "react";
import { useHistory } from "react-router-dom";
import MetaLine from "../../metaline";
import "./newsitem_gallery.scss";

const NewsItemVideo = (props) => {
  const { data, icon = "/assets/newsfeed/photos_icon.png" } = props;

  const history = useHistory();

  function navigateToGallery(slug) {
    history.push(`/en/galleries/show/${slug}`)
  }

  return (
    <div className='newsitems-gallery'>
      <div className="image-section">
        <div className="gallery">
          {
            (data.photos || [])
              .slice(0, 3)
              .map((photo, i) => {
                return (
                  <div className="grid-item" key={i}>
                    <div
                      className="image-item"
                      style={{ backgroundImage: `url(${photo.large_url})` }}>
                      {
                        data.photos.length > 3 && i == 2 ?
                          <div className="number">+{data.photos.length - 3}</div>
                          : null
                      }
                    </div>
                  </div>
                )
              })
          }
        </div>
      </div>
      <div>
        <p className="title routable" onClick={navigateToGallery.bind(this, data.slug)}>
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