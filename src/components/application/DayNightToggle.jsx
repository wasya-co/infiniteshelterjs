
import PropTypes from 'prop-types'
import React, { useContext } from 'react'

import {
  C,
  logg,
  ThemeContext,
} from '$shared'

import styles from './DayNightToggle.module.scss'

/**
 * DayNightToggle
 * From: https://codepen.io/fagnanm/pen/RpWNyb
 * From: https://devbeep.com/css-day-night-toggle-switch/
 *
 * @TODO: test-drive. toggling *once* changes the theme *once*
**/
const DayNightToggle = (props) => {
  // logg(props, 'DayNightToggle')
  const {} = props

  const {
    theme, toggleTheme,
  } = useContext(ThemeContext)
  // logg(useContext(ThemeContext), 'DayNightToggle Used ThemeContext')

  return (
    <div className={`DaynightToddle ${styles.container}`} onClick={toggleTheme} >
      <div className={styles.switch} >
        <label htmlFor="toggle">
          <input readOnly={true} type="checkbox" checked={theme === C.themes.dark} ></input>
          <div className={styles.sunMoon} ><div className={styles.dots} ></div></div>
          <div className={styles.background} ><div className={styles.stars1}></div><div className={styles.stars2}></div></div>
          {/* <div className={styles.fill}></div> */}
        </label>
      </div>
    </div>
  );
}
DayNightToggle.propTypes = {} // none

export default DayNightToggle
