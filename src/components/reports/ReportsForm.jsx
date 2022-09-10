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
        <textarea name='name' /> subhead
      </FlexRow>

      <FlexRow>
        item_type: default? longscroll?
      </FlexRow>

      <FlexRow>
        @TODO: editable slug, the fucking slug hasn't been solved in 10 years!
      </FlexRow>

      <FlexRow>
        @TODO: premium tier
      </FlexRow>

      <FlexRow>
        @TODO: tags
      </FlexRow>

      <FlexRow>
        public?
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
