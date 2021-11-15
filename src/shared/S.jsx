
/**
 * Style Constants
 */
const S = {
  // Twofold layout
  borderWidth: '10px',
  bottomDrawerClosedHeight: '20px',
  bottomDrawerOpenHeight: '115px',
  breadcrumbsHeight: '30px',

  thinBorder: '2px solid',
  thinBorderWidth: '2px',
  thinBorderRadius: '5px',
}

const lightTheme = {
  ...S,
  colors: {
    // colors
    textColor: 'black',
    background: '#dedede',
    blue: '#6aa3e9',
    darkGrey: '#605d5d',
    lightGrey: '#988b8b',
    red: 'red',
    border: 'black',
    cardBackground: 'white'
  }
}

const darkTheme = {
  ...S,
  colors: {
    // colors
    textColor: 'white',
    background: '#292929',
    blue: '#73b0fa',
    darkGrey: '#b3afaf',
    lightGrey: '#4a4343',
    red: '#eb83a8',
    border: 'white',
    cardBackground: '#1a1a1a'
  }
}

export default {
  lightTheme,
  darkTheme
}