
/**
 * Style Constants
 *
 * @TODO: remove this file entirely. _vp_ 2022-09-20
 * @deprecated, use variables.css and css vars
 */
const S = {
  // Twofold layout
  borderWidth: '10px',
  bottomDrawerClosedHeight: '24px',
  bottomDrawerOpenHeight: '124px',
  breadcrumbsHeight: '30px',

  smallWidth: '10px',
  mediumWidth: '20px',

  thinBorderWidth: '2px',
}

const lightTheme = {
  ...S,
  thinBorder: '2px solid black',
  colors: {
    text: 'black',
    background: '#dedede',
    border: 'black', // removing this...
    blue: '#6aa3e9',
    cardBackground: 'white',
    cyan: "#49bcc6",
    darkGrey: '#605d5d',
    gold: '#ffe100',
    lightGrey: '#988b8b',
    red: 'red',
  }
}

const darkTheme = {
  ...S,
  thinBorder: '2px solid white',
  colors: {
    text: 'white',
    background: '#292929',
    border: 'white', // removing this...
    blue: '#73b0fa',
    cardBackground: '#1a1a1a',
    cyan: "#49bcc6",
    darkGrey: '#b3afaf',
    gold: '#ffe100',
    lightGrey: '#4a4343',
    red: '#eb83a8',
  }
}

export default {
  lightTheme,
  darkTheme
}
