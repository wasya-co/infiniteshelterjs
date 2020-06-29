import React from "react";
import NewsItemGallery from "./newsitem_gallery";
import NewsItemReport from "./newsitem_report";
import NewsItemVideo from "./newsitem_video";
import "./newsitems.scss";

const ICONS = {
  1: "/assets/newsfeed/sunglass.png",
  2: "/assets/newsfeed/gem_premium.png"
};
const newsitems = (props) => {
  const { data } = props;

  return (
    <div className="newsitems">
      { data.map((newsitem, i) => {
        const icon = ICONS[newsitem.premium_tier];
        return (
          <div key={i} className={`items premium-${newsitem.premium_tier || 0}`}>
            { newsitem.item_type === "report" && <NewsItemReport data={newsitem} icon={icon} /> }
            { newsitem.item_type === "gallery" && <NewsItemGallery data={newsitem} icon={icon} /> }
            { newsitem.item_type === "video" && <NewsItemVideo data={newsitem} icon={icon} /> }
          </div>
        )
      }) }
    </div>
  )
}

export default newsitems;
