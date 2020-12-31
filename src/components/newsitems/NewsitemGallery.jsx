import React from "react";
import { useHistory } from "react-router-dom";

import { Metaline } from "$components/application";
import "./newsitems.scss";
import { logg } from "$shared";

const NewsitemGallery = (props) => {
  logg(props, 'NewsitemGallery')
  const { data } = props;

  const history = useHistory();

  function navigateToGallery(slug) {
    history.push(`/en/galleries/show/${slug}`)
  }

  return (
    <div className='newsitems-gallery'>
      <div className="image-section">
        <div className="gallery">
          { (data.photos || []).slice(0, 3).map((photo, i) =>
            <div className="grid-item" key={i}>
              <div
                className="image-item"
                style={{ backgroundImage: `url(${photo.large_url})` }}>
                { data.photos.length > 3 && i == 2 && <div className="number">+{data.photos.length - 3}</div> }
              </div>
            </div>
          ) }
        </div>
      </div>
      <div>
        <p className="title routable" onClick={navigateToGallery.bind(this, data.slug)}>
          <img className="icon" src={"/assets/newsfeed/photos_icon.png"} alt='' />
          <span className="title-heading">{data.name}</span>
        </p>
        <Metaline item={data} />
        <p className="subhead" dangerouslySetInnerHTML={{ __html: data.subhead }}>
        </p>
      </div>
    </div>
  )

}

export default NewsitemGallery;