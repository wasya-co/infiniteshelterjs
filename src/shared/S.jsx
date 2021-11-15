
/**
 * Style Constants
 */
const S = {
  // Twofold layout
  borderWidth: '10px',
  bottomDrawerClosedHeight: '20px',
  bottomDrawerOpenHeight: '115px',
  breadcrumbsHeight: '30px',

  thinBorder: '2px solid black',
  thinBorderWidth: '2px',
  thinBorderRadius: '5px',
}

const lightTheme = {
  ...S,
  colors: {
    // colors
    background: '#dedede',
    blue: '#6aa3e9',
    darkGrey: '#605d5d',
    lightGrey: '#988b8b',
    red: 'red',
  }
}

const darkTheme = {
  ...S,
  colors: {
    // colors
    background: '#dedede',
    blue: '#6aa3e9',
    darkGrey: '#605d5d',
    lightGrey: '#988b8b',
    red: 'red',
  }
}

export default {
  lightTheme,
  darkTheme
}