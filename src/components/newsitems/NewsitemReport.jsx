import React, { useState } from "react";
import Modal from "react-modal";
import { useHistory } from "react-router-dom";

import config from "config";

import MetaLine from "$components/metaline";

import { logg, request } from "$shared";

import "./newsitems.scss";

const NewsitemReport = (props) => {
  logg(props, "NewsitemReport");

  const { newsitem } = props;
  const slug = newsitem.reportname;

  const history = useHistory();

  return <React.Fragment>

    <div className="newsitems-report">
      <div>
        <p className="title">
          <img className="icon" src="/assets/newsfeed/reports_icon.png" alt='' />
          <span
            className="title-heading"
            onClick={(e) => {

              logg(e, 'navigate to report')
              if (newsitem.is_premium && !newsitem.is_purchased) {
                // openPurchaseModal();
                throw "unpurchased, unimplemented";
              } else {
                history.push(`/en/reports/show/${slug}`)
              }

            } }
          >{newsitem.name}
          </span>
        </p>
        <MetaLine
          created_at={newsitem.created_at}
          username={newsitem.username}
          city={newsitem.city || {}}
          tags={newsitem.tags} />
        <p className="subhead"
          dangerouslySetInnerHTML={{ __html: newsitem.subhead }} />
        <p>Premium Tier {newsitem.premium_tier}</p>
        <p>Purchased? {JSON.stringify(newsitem.is_purchased)}</p>
      </div>
    </div>

  </React.Fragment>;

}

// const WrappedNewsitemReport = (props) => <Elements stripe={stripePromise}><NewsitemReport {...props} /></Elements>;

export default NewsitemReport;

