import React from "react";
import MetaLine from "$components/metaline";
import "./newsitems.scss";

const reportNewsItem = (props) => {
  const { data, icon = "/assets/newsfeed/reports_icon.png" } = props;

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
            onClick={navigateToReport}>{data.name}
          </span>
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
        <p>Premium Tier #{data.premium_tier}</p>
      </div>
    </div>

  )

}

export default reportNewsItem;