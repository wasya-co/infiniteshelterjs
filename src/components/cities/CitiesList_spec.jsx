import Adapter from "enzyme-adapter-react-16";
import * as enzyme from "enzyme";
import { shallow } from "enzyme";
import React from "react";

import { CitiesList } from "$components/cities";
import { logg } from "$shared";

enzyme.configure({ adapter: new Adapter() });

describe("CitiesList", () => {

  it("renders", () => {
    let component = shallow(<CitiesList />);
    expect(component).toBeTruthy();
  });

});
