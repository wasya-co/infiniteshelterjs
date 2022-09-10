// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect'


// // How to fix the "Warning: useLayoutEffect does nothing on the server"?
// // From: https://stackoverflow.com/questions/58070996/how-to-fix-the-warning-uselayouteffect-does-nothing-on-the-server
// // _vp_ 2022-09-10 Leaving this here for documentation, but the problem is with next_js not with jest.
// import React from "react"
// React.useLayoutEffect = React.useEffect
