import React from "react";
import NewsitemGallery from "./NewsitemGallery";
import NewsitemReport from "./NewsitemReport";
import NewsitemVideo from "./NewsitemVideo";
import "./newsitems.scss";

import { logg } from "$shared";

const ICONS = {
  1: "/assets/newsfeed/sunglass.png",
  2: "/assets/newsfeed/gem_premium.png"
};
const Newsitems = (props) => {
  const { newsitems } = props;

  return (
    <div className="newsitems">
      { newsitems.map((newsitem, i) => {
        const icon = ICONS[newsitem.premium_tier];
        logg(newsitem, 'one newsitem');

        return (
          <div key={i} className={`items premium-${newsitem.premium_tier || 0}`}>
            { newsitem.item_type === "report" && <NewsitemReport newsitem={newsitem} /> }
            { newsitem.item_type === "gallery" && <NewsitemGallery data={newsitem} icon={icon} /> }
            { newsitem.item_type === "video" && <NewsitemVideo data={newsitem} icon={icon} /> }
          </div>
        )
      }) }
    </div>
  )
}

export default Newsitems;

