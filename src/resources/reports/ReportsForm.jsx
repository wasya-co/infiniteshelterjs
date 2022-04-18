import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {
  FlexRow,
  logg,
} from 'ishlibjs'

const Actions = styled.div``;

const W0 = styled.div``;

/**
 * ReportForm
**/
const ReportForm = (props) => {
  // logg(props, 'ReportForm')
  const { item } = props

  return <W0>

    <h1>Report Form (@TODO: remove)</h1>

    <form>

      <FlexRow>
        <input type='text' name='name' /> name
      </FlexRow>

      <FlexRow>
        <input type='text' name='name' /> destination
      </FlexRow>

      <FlexRow>
        <input type='file' name='title_image' />
        map image
      </FlexRow>

      <FlexRow>
        <input type='file' name='title_image' />
        title image
      </FlexRow>

      <FlexRow>
        <checkbox name='is_active' /> active?
      </FlexRow>

      <FlexRow>
        <checkbox name='is_public' /> public?
      </FlexRow>

      <FlexRow>
        <input type='text' name='url' /> url
      </FlexRow>

      <textarea /> description

      <Actions>
        <button type='submit'>Create</button>
      </Actions>
    </form>
  </W0>
}
ReportForm.propTypes = {
};
export default ReportForm
