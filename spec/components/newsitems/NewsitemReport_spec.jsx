import Adapter from "enzyme-adapter-react-16";
import * as enzyme from "enzyme";
import { shallow } from "enzyme";
import React from "react";

import { NewsitemReport } from "$components/newsitems";
import { logg } from "$shared";

enzyme.configure({ adapter: new Adapter() });

describe("NewsitemReport", () => {

  it("renders", () => {
    let component = shallow(<NewsitemReport newsitem={ {} } />);
    expect(component).toBeTruthy();
  });

});
