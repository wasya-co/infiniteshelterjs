import React from "react";

import MetaLine from "$components/metaline";

import { logg } from "$shared";

import "./newsitems.scss";

const NewsitemReport = (props) => {
  logg(props, "NewsitemReport");

  const { newsitem } = props;

  const icon = "/assets/newsfeed/reports_icon.png";

  function navigateToReport() {

  }

  return (
    <div className="newsitems-report">
      <div>
        <p className="title">
          <img
            className="icon"
            src={icon} />
          <span
            className="title-heading"
            onClick={navigateToReport}>{newsitem.name}
          </span>
        </p>
        <MetaLine
          created_at={newsitem.created_at}
          username={newsitem.username}
          city={newsitem.city || {}}
          tags={newsitem.tags}>
        </MetaLine>
        <p
          className="subhead"
          dangerouslySetInnerHTML={{ __html: newsitem.subhead }}>
        </p>
        <p>Premium Tier #{newsitem.premium_tier}</p>
      </div>
    </div>

  )

}

export default NewsitemReport;