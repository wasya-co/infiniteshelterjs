import React from "react";

import { logg } from "$shared";

const MyAccountWidget = (props) => {
  const currentUser = JSON.parse(localStorage.getItem("current_user")) || {};

  return <React.Fragment>
    { currentUser.email }
  </React.Fragment>;
};

export default MyAccountWidget;
