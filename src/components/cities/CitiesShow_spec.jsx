import Adapter from "enzyme-adapter-react-16"
import * as enzyme from "enzyme"
import { shallow } from "enzyme"
import React from "react"
import {
  Link, Switch, BrowserRouter as Router, Redirect, Route as _Route, useHistory, withRouter
} from 'react-router-dom'


import { CitiesShow } from "$components/cities"
import { AppMock, logg } from "$shared"

enzyme.configure({ adapter: new Adapter() })

describe("CitiesShow", () => {

  it("current - renders", () => {
    let component = shallow(<AppMock>
      <CitiesShow />
    </AppMock>)
    expect(component).toBeTruthy()
  })

})
