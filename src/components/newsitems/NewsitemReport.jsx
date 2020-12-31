import React, { useState } from "react";
import Modal from "react-modal";
import { useHistory } from "react-router-dom";

import config from "config";

import { Metaline, } from "$components/application";
import { Api, logg, request } from "$shared";

import "./newsitems.scss";

/**
 * Displays the appropriate icon.
 *
 * @param [Boolean] props.isPurchased
 * @param [Number] props.premiumTier
 * @param [String] props.kind
 */
const ItemIcon = (props) => {
  logg(props, "ItemIcon");
  if (props.isPurchased) {
    return <img className="icon" src="/assets/icons/glasses.png" alt='' />;
  }
  if (props.premiumTier > 0) {
    return <img className="icon" src="/assets/icons/gem.png" alt='' />;
  }
  switch (props.kind) {
    case "Report":
      return <img className="icon" src="/assets/icons/report.png" alt='' />;
    default:
      return "unknown kind";
  };
};

const NewsitemReport = (props) => {
  logg(props, "NewsitemReport");

  const { newsitem } = props;
  const slug = newsitem.reportname;

  const [ isOpen, setIsOpen ] = useState(false); // @TODO: which?

  const history = useHistory();

  const doUnlock = async () => {
    // @TODO: check how many unlocks I have, and offer to purchase more if not enough.
    const path = Api.doUnlock({ kind: 'Report', id: newsitem.report_id });
    const result = await request.post(`${config.apiOrigin}${path}`);
    logg(result, 'result')
  };

  return <React.Fragment>

    <div className="newsitems-report">
      <div>
        <p className="title">
          <ItemIcon kind="Report" isPurchased={newsitem.is_purchased} premiumTier={newsitem.premium_tier} />
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
        <Metaline item={newsitem} />
        <p className="subhead" dangerouslySetInnerHTML={{ __html: newsitem.subhead }} />
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

