/*
 * components / TwofoldLayout / index.jsx
 */
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { C, logg } from "$shared"

/**
 * Documentation
 */
const LongLine = styled.div`
  ${p => logg(p, 'LongLine')}

  border: ${p => p.theme.thinBorder};
  border-radius: ${p => p.theme.thinBorderRadius};

  flex-grow: 1;

  width: ${p => p.orientation === C.horizontal ? 'auto' : '10px'};
  height: ${p => p.orientation === C.horizontal ? '10px' : 'auto'};

  padding: 2px;
  background: white;
`;
LongLine.propTypes = {
  orientation: PropTypes.string,
}

export { LongLine }
