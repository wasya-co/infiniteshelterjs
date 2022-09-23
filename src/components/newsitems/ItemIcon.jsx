
import * as Ic from '@material-ui/icons'
import PropTypes from 'prop-types'
import React from 'react'
import styled, { useTheme } from 'styled-components'

import { C, logg } from "$shared"

const ReportIcon = () => <div>@TODO: ReportIcon</div>

const _Icon = styled.span`
  margin: 0 ${p => p.theme.smallWidth} 0 0;
`;

const IconGallery = ({ fill, w, h, ...props }) => {
  const theme = useTheme()

  fill = fill ? fill : theme.colors.text
  w = w ? w : 24
  h = h ? h : 24

  return <_Icon className='IconGem'>
    <svg xmlns="http://www.w3.org/2000/svg"
      width={w} height={h} fill={fill}
      viewBox="0 0 45.964 45.964" style={{ enableBackground: 'new 0 0 45.964 45.964' }}
    ><g><g><path d="M7.071,30.834V11.062H4.042C1.803,11.062,0,12.893,0,15.13v26.732c0,2.24,1.803,4.051,4.042,4.051h26.733    c2.238,0,4.076-1.811,4.076-4.051v-2.92H15.179C10.733,38.943,7.071,35.281,7.071,30.834z"/>   <path d="M41.913,0.05H15.179c-2.238,0-4.066,1.813-4.066,4.051v26.733c0,2.241,1.829,4.067,4.066,4.067h26.734    c2.237,0,4.051-1.826,4.051-4.067V4.102C45.964,1.862,44.15,0.05,41.913,0.05z M41.363,28.589    c-0.223,0.412-0.652,0.656-1.12,0.656H17.336c-0.403,0-0.782-0.18-1.022-0.502c-0.24-0.324-0.313-0.736-0.197-1.123l3.277-10.839    c0.216-0.713,0.818-1.24,1.554-1.361c0.736-0.12,1.476,0.19,1.908,0.797l4.582,6.437c0.617,0.867,1.812,1.082,2.689,0.484    l4.219-2.865c0.434-0.295,0.967-0.402,1.48-0.299c0.515,0.102,0.966,0.408,1.253,0.848l4.229,6.472    C41.564,27.687,41.585,28.179,41.363,28.589z"/>  </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>
    </svg>
  </_Icon>
}

const IconGem = ({ fill, w, h, ...props }) => {
  const theme = useTheme()

  fill = fill ? fill : theme.colors.gold
  w = w ? w : 24
  h = h ? h : 24

  return <_Icon className='IconGem'>
    <svg viewBox="0 -32 576 576" xmlns="http://www.w3.org/2000/svg"
      width={w} height={h} fill={fill}
    ><path d="M485.5 0L576 160H474.9L405.7 0h79.8zm-128 0l69.2 160H149.3L218.5 0h139zm-267 0h79.8l-69.2 160H0L90.5 0zM0 192h100.7l123 251.7c1.5 3.1-2.7 5.9-5 3.3L0 192zm148.2 0h279.6l-137 318.2c-1 2.4-4.5 2.4-5.5 0L148.2 192zm204.1 251.7l123-251.7H576L357.3 446.9c-2.3 2.7-6.5-.1-5-3.2z"/>
    </svg>
  </_Icon>
}

const IconGlasses = ({ fill, w, h, ...props }) => {
  const theme = useTheme()

  fill = fill ? fill : theme.colors.cyan
  w = w ? w : 24
  h = h ? h : 24

  return <_Icon className='IconGlasses'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 297 297"
      style={{ enableBackground: 'new 0 0 297 297' }}
      width={w} height={h} fill={fill}
    ><g><g><g><path d="M115.167,101.47H24.012C10.751,101.469,0,112.22,0,125.482v43.477c0,14.674,11.896,26.57,26.57,26.57h39.67     c21.977,0,41.223-14.737,46.954-35.953l10.297-45.336c0.633-3.567-0.276-7.232-2.431-9.804     C120.132,103.328,118.132,101.47,115.167,101.47z M24.542,138.106c-1.945,0-3.888-0.742-5.373-2.225     c-2.967-2.968-2.967-7.779,0-10.747l5.428-5.428c2.968-2.966,7.779-2.966,10.747,0c2.967,2.968,2.967,7.779,0,10.747     l-5.428,5.428C28.432,137.364,26.487,138.106,24.542,138.106z M64.111,130.453l-21.71,21.71     c-1.484,1.483-3.429,2.225-5.374,2.225c-1.945,0-3.889-0.742-5.374-2.225c-2.967-2.968-2.967-7.779,0-10.747l21.71-21.71     c2.968-2.966,7.779-2.966,10.747,0C67.078,122.674,67.078,127.485,64.111,130.453z"/>    <path d="M160.885,106.524h-26.517c0.575,3.345,0.587,6.828-0.021,10.307l-2.22,12.693h31l-2.22-12.693     C160.299,113.352,160.311,109.868,160.885,106.524z"/>    <path d="M272.988,101.47h-94.649c-2.965,0-4.965,1.858-5.893,2.966c-2.155,2.572-3.064,6.236-2.43,9.804l10.296,45.336     c5.731,21.216,24.977,35.954,46.954,35.954h43.164c14.674-0.001,26.57-11.897,26.57-26.571v-43.477     C297,112.22,286.249,101.47,272.988,101.47z M192.422,135.881c-2.967-2.968-2.967-7.779,0-10.747l5.428-5.428     c2.968-2.966,7.779-2.966,10.747,0c2.967,2.968,2.967,7.779,0,10.747l-5.428,5.428c-1.484,1.483-3.429,2.225-5.374,2.225     C195.851,138.106,193.906,137.364,192.422,135.881z M237.363,130.453l-21.71,21.71c-1.484,1.483-3.429,2.225-5.374,2.225     c-1.945,0-3.889-0.742-5.374-2.225c-2.967-2.968-2.967-7.779,0-10.747l21.71-21.71c2.968-2.966,7.779-2.966,10.747,0     C240.33,122.674,240.33,127.485,237.363,130.453z"/>   </g>  </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>
    </svg>
  </_Icon>
}


const IconReport = ({ fill, w, h, ...props }) => {
  const theme = useTheme()

  fill = fill ? fill : theme.colors.text
  w = w ? w : 24
  h = h ? h : 24

  return <_Icon className='IconReport'>
    <svg xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 184.153 184.153" style={{ enableBackground: 'new 0 0 184.153 184.153' }}
      width={w} height={h} fill={fill}
    ><g><g><g><path d="M129.318,0H26.06c-1.919,0-3.475,1.554-3.475,3.475v177.203c0,1.92,1.556,3.475,3.475,3.475h132.034 c1.919,0,3.475-1.554,3.475-3.475V34.131C161.568,22.011,140.771,0,129.318,0z M154.62,177.203H29.535V6.949h99.784 c7.803,0,25.301,18.798,25.301,27.182V177.203z"/><path d="M71.23,76.441c15.327,0,27.797-12.47,27.797-27.797c0-15.327-12.47-27.797-27.797-27.797 c-15.327,0-27.797,12.47-27.797,27.797C43.433,63.971,55.902,76.441,71.23,76.441z M71.229,27.797 c11.497,0,20.848,9.351,20.848,20.847c0,0.888-0.074,1.758-0.183,2.617l-18.071-2.708L62.505,29.735    C65.162,28.503,68.112,27.797,71.229,27.797z M56.761,33.668l11.951,19.869c0.534,0.889,1.437,1.49,2.462,1.646l18.669,2.799    c-3.433,6.814-10.477,11.51-18.613,11.51c-11.496,0-20.847-9.351-20.847-20.847C50.381,42.767,52.836,37.461,56.761,33.668z"/>   <rect x="46.907" y="90.339" width="73.058" height="6.949"/>   <rect x="46.907" y="107.712" width="48.644" height="6.949"/>   <rect x="46.907" y="125.085" width="62.542" height="6.949"/>  </g></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
    </svg>
  </_Icon>
}

const IconVideo = ({ fill, w, h, ...props }) => {
  const theme = useTheme()

  fill = fill ? fill : theme.colors.text
  w = w ? w : 24
  h = h ? h : 24

  return <_Icon className='IconVideo' >
    <svg width={w} height={h} viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd"
        fill={fill}
        d="M9.89989 0H29.6999C31.5149 0 32.9999 1.485 32.9999 3.3V23.1C32.9999 24.915 31.5149 26.4 29.6999 26.4H9.89989C8.08489 26.4 6.59989 24.915 6.59989 23.1V3.3C6.59989 1.485 8.08489 0 9.89989 0ZM0 6.6H3.3V29.7H26.4V33H3.3C1.485 33 0 31.515 0 29.7V6.6ZM29.7 23.1H9.89997V3.3H29.7V23.1ZM16.5001 20.625V5.775L26.4001 13.2L16.5001 20.625Z" />
    </svg>
  </_Icon>
}

const _W0 = styled.div`
  // border: 1px solid red;

  display: inline;
  box-sizing: border-box;
`;
const W0 = ({ children, ...props }) => <_W0 className='ItemIcon' {...props}>{children}</_W0>

/**
 * Displays the appropriate icon.
 *
 * @param [Boolean] props.isPurchased
 * @param [Number] props.premiumTier
 * @param [String] props.kind
 */
 export const ItemIcon = (props) => {
  // logg(props, "ItemIcon")
  const { is_purchased, item_type, premium_tier } = props

  const out = []

  if (premium_tier > 0) {
    if (is_purchased) {
      out.push(<IconGlasses key='IconGlasses' />)
    } else {
      out.push(<IconGem key='IconGem' />)
    }
  }
  switch (item_type) {
    case C.item_types.gallery:
      out.push(<IconGallery key='IconGallery' />)
      break
    case C.item_types.report:
      out.push(<IconReport key='IconReport' />)
      break
    case C.item_types.video:
      out.push(<IconVideo key='IconVideo' />)
      break
    case C.item_types.location:
      // nothing, we're inside a Marker
      break
    default:
      out.push(<span key='unknown-kind'>[&nbsp;?&nbsp;]</span>)
  }
  return <W0>{out}</W0>
}
ItemIcon.propTypes = {
  is_premium: PropTypes.bool,
  is_purchased: PropTypes.bool, // .isRequired,
  item_type: PropTypes.string.isRequired,
  premium_tier: PropTypes.number,
}
export default ItemIcon
