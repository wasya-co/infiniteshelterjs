
import React, { useEffect, useState, } from 'react'
import { ThemeProvider as _ThemeProvider } from 'styled-components'

import {
  C,
  logg,
  S,
} from '$shared'

/**
 * ThemeProvider - this one is my own.
**/
export const ThemeContext = React.createContext({})
const ThemeProvider = ({ children, ...props }) => {

  const defaultTheme = 'undefined' === typeof window ? C.themes.light : ( window.localStorage.getItem(C.theme) || C.themes.light )
  const [theme, setTheme] = useState(defaultTheme)

  // set the body class on page load, client only
  useEffect(() => {
    const positive = theme === C.themes.light ? C.themes.light : C.themes.dark
    const negative = theme === C.themes.light ? C.themes.dark : C.themes.light
    document.body.classList.remove(negative)
    document.body.classList.add(positive)
  }, [])

  // used by DayNightToggle
  const toggleTheme = (e) => {
    e.preventDefault()
    if (theme === C.themes.light) {
      window.localStorage.setItem(C.theme, C.themes.dark)
      setTheme(C.themes.dark)
      document.body.classList.remove(C.themes.light)
      document.body.classList.add(C.themes.dark)
    } else {
      window.localStorage.setItem(C.theme, C.themes.light)
      setTheme(C.themes.light)
      document.body.classList.add(C.themes.light)
      document.body.classList.remove(C.themes.dark)
    }
  }

  return <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }} >
    <_ThemeProvider theme={theme == C.themes.light ? S.lightTheme: S.darkTheme} >
      { children }
    </_ThemeProvider>
  </ThemeContext.Provider>
}
export default ThemeProvider

