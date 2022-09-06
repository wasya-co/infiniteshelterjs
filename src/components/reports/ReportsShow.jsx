
import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import PropTypes from 'prop-types'

import {
  useApi, Card as Box, logg, request
} from "$shared"

const W0 = styled.div``;

/**
 * ReportsShow
**/
const ReportsShow = (props) => {
  // logg(props, "ReportsShow")

  let [ item, setItem ] = useState({})
  let api = useApi()

  useEffect(() => {
    api.getReport(props.match.params.slug).then((data) => {
      setItem(data)
    }).catch((err) => {
      logg(err, 'cannot getReport')
    })
  }, [])

  // @TODO: logged in and no access

  // @TODO: logged in and access

  return (<W0>
    {/* <Box boxShadow={2}> */}
      <h1>{item.name}</h1>
      <div className="description" dangerouslySetInnerHTML={{ __html: item.description }} />
    {/* </Box> */}
  </W0>)
}
ReportsShow.propTypes = {
  // none?
};

// @TODO: wrap in login HOC
export default ReportsShow
