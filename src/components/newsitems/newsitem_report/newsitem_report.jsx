import React from "react";
import MetaLine from "../../metaline";
import "./newsitem_report.scss";

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
      </div>
    </div>

  )

}

export default reportNewsItem;