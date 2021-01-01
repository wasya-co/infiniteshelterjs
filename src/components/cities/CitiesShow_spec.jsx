import Adapter from "enzyme-adapter-react-16";
import * as enzyme from "enzyme";
import { shallow } from "enzyme";
import React from "react";

import { CitiesShow } from "$components/cities";
import { logg } from "$shared";

enzyme.configure({ adapter: new Adapter() });

describe("CitiesShow", () => {

  it("current - renders", () => {
    let component = shallow(<CitiesShow />);
    expect(component).toBeTruthy();
  });

});
