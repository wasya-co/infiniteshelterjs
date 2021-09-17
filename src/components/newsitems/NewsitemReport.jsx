import _Box from '@material-ui/core/Box'
import React, { Fragment as F, useEffect, useContext, useState } from "react"

import { useHistory } from "react-router-dom"
import styled from 'styled-components'

import config from "config"
import { NewsitemContainer } from "./"
import { Metaline, } from "$components/application"
import { Api, logg, request, TwofoldContext } from "$shared"

import "./newsitems.scss"

/**
 * Displays the appropriate icon.
 *
 * @param [Boolean] props.isPurchased
 * @param [Number] props.premiumTier
 * @param [String] props.kind
 */
const ItemIcon = (props) => {
  // logg(props, "ItemIcon");
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

const W = styled.div`
  display: flex;
  flex-direction: row;
`

const W2 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1em;
`

const NewsitemReport = (props) => {
  // logg(props, "NewsitemReport");

  const { newsitem } = props;
  const slug = newsitem.reportname;

  const history = useHistory();
  const { itemToUnlock, setItemToUnlock } = useContext(TwofoldContext)

  // @TODO: revert
  // useEffect(() => { itemToUnlock || setItemToUnlock(newsitem) }, [])

  const navigateToReport = () => {
    if (newsitem.is_premium && !newsitem.is_purchased) {
      logg(newsitem, 'need to unlock this')
      setItemToUnlock(newsitem)
    } else {
      history.push(`/en/reports/show/${slug}`)
    }
  }

  return (<NewsitemContainer onClick={navigateToReport} >
    <W>
      <ItemIcon kind="Report" isPurchased={newsitem.is_purchased} premiumTier={newsitem.premium_tier} />
      <W2>
        <h2 className="title-heading" >{newsitem.name}</h2>
        <Metaline {...newsitem} />
      </W2>
    </W>
    <p className="subhead" dangerouslySetInnerHTML={{ __html: newsitem.subhead }} />
  </NewsitemContainer>)
}

// const WrappedNewsitemReport = (props) => <Elements stripe={stripePromise}><NewsitemReport {...props} /></Elements>;

export default NewsitemReport;

