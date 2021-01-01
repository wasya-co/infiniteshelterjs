import Adapter from "enzyme-adapter-react-16";
import * as enzyme from "enzyme";
import { shallow } from "enzyme";
import React from "react";

import { MyAccountWidget } from "$components/users";
import { logg } from "$shared";

enzyme.configure({ adapter: new Adapter() });

describe("MyAccountWidget", () => {

  it("shows email, n available unlocks", () => {
    window.localStorage.setItem("current_user", JSON.stringify({ email: "test@gmail.com" }));
    let component = shallow(<MyAccountWidget />);
    expect(component.text()).toMatch(/test@gmail.com/);
    expect(component.text()).toMatch(/\? unlocks/);

    window.localStorage.setItem("current_user", JSON.stringify({ email: "test@gmail.com", n_unlocks: 1}));
    component = shallow(<MyAccountWidget />);
    expect(component.text()).toMatch(/1 unlocks/);
  });

});
