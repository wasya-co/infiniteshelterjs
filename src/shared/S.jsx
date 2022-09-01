
/**
 * Style Constants
 */
const S = {
  // Twofold layout
  borderWidth: '10px',
  bottomDrawerClosedHeight: '20px',
  bottomDrawerOpenHeight: '115px',
  breadcrumbsHeight: '30px',

  smallWidth: '10px',
  mediumWidth: '20px',

  thinBorderWidth: '2px',
  thinBorderRadius: '5px',
}

const lightTheme = {
  ...S,
  thinBorder: '2px solid black',
  colors: {
    text: 'black',
    background: '#dedede',
    border: 'black',
    blue: '#6aa3e9',
    cardBackground: 'white',
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
    border: 'white',
    blue: '#73b0fa',
    cardBackground: '#1a1a1a',
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