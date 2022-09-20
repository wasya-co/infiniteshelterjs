
import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import PropTypes from 'prop-types'

import {
  logg,
} from "$shared"

const W0 = styled.div``;

/**
 * ReportsShow
 *
 * @TODO: logged in and no access ?
 * @TODO: logged in and access ?
**/
const ReportsShow = (props) => {
  // logg(props, "ReportsShow")
  const {
    item,
  } = props
  let {
    descr,
  } = item

  if (item.raw_json?.id) {
    descr = item.raw_json.content.rendered
  }
  return (<W0>
    <h1>{item.name}</h1>
    <div className="description" dangerouslySetInnerHTML={{ __html: descr }} />
  </W0>)
}
ReportsShow.propTypes = {
  item: PropTypes.object.isRequired,
}
export default ReportsShow
