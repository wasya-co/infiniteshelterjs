import React, { useState } from "react";
import Modal from "react-modal";
import { useHistory } from "react-router-dom";

import config from "config";

import MetaLine from "$components/metaline";

import { logg, request } from "$shared";

import "./newsitems.scss";

const Api = {
  doUnlock: ({ kind, id, jwt_token }) => `/api/payments/unlock?kind=${kind}&id=${id}&jwt_token=${jwt_token}`,
};

const NewsitemReport = (props) => {
  logg(props, "NewsitemReport");
  const currentUser = JSON.parse(localStorage.getItem("current_user")) || {};

  const [ isOpen, setIsOpen ] = useState(false);

  const { newsitem } = props;
  const slug = newsitem.reportname;

  const history = useHistory();

  const doUnlock = async () => {
    // @TODO: check how many unlocks I have, and offer to purchase more if not enough.

    logg(currentUser.jwt_token, 'here33')

    const path = Api.doUnlock({ kind: 'Report', id: newsitem.report_id,
      jwt_token: currentUser.jwt_token });
    const result = await request.post(`${config.apiOrigin}${path}`);
    logg(result, 'result')
  };

  return <React.Fragment>

    <div className="newsitems-report">
      <div>
        <p className="title">
          <img className="icon" src="/assets/newsfeed/reports_icon.png" alt='' />
          <span
            className="title-heading"
            onClick={(e) => {

              if (newsitem.is_premium && !newsitem.is_purchased) {
                setIsOpen(true);
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

    <Modal ariaHideApp={false} isOpen={isOpen} >
      <h1>Unlock this report (1 unlock)? <button onClick={() => setIsOpen(false) } >[x]</button></h1>
      <button onClick={doUnlock}>Do it</button>
    </Modal>

  </React.Fragment>;

}

// const WrappedNewsitemReport = (props) => <Elements stripe={stripePromise}><NewsitemReport {...props} /></Elements>;

export default NewsitemReport;

