import React from "react";
import NewsItemGallery from "./NewsitemGallery";
import NewsItemReport from "./NewsitemReport";
import NewsItemVideo from "./NewsitemVideo";
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
        logg(newsitem, 'this one newsitem');

        return (
          <div key={i} className={`items premium-${newsitem.premium_tier || 0}`}>
            { newsitem.item_type === "report" && <NewsItemReport newsitem={newsitem} /> }
            { newsitem.item_type === "gallery" && <NewsItemGallery data={newsitem} icon={icon} /> }
            { newsitem.item_type === "video" && <NewsItemVideo data={newsitem} icon={icon} /> }
          </div>
        )
      }) }
    </div>
  )
}

export default Newsitems;

