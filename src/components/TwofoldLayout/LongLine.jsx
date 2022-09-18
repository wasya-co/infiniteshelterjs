/*
 * components / TwofoldLayout / index.jsx
 */
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { C, logg } from "$shared"

/**
 * LongLine
 *
 * Turns out I need this still - part of the layout.
 */
const LongLine = styled.div`
  border: 2px solid var(--ion-border-color);
  border-radius: ${p => p.theme.thinBorderRadius};

  flex-grow: 1;

  width: ${p => p.orientation === C.horizontal ? 'auto' : '10px'};
  height: ${p => p.orientation === C.horizontal ? '10px' : 'auto'};

  padding: 2px;
  background: ${p => p.theme.colors.background};
`;
LongLine.propTypes = {
  orientation: PropTypes.string, // 'horizontal' or 'vertical'
}

export default LongLine
