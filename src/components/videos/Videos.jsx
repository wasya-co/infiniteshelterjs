import React from "react";

import { logg, request } from "$shared";
import Api from "$src";

/**
 * @TODO: styled components?
 *
 *
 */
const Videos = () => {

  localStorage.getItem("jwtToken").then((data) => {
    logg(data, 'data');
    request.get(Api.myVideosPath, { jwtToken: data }).then((data) => {
      logg(data, 'data 2');
    });
  });

  return <div>
    Videos
  </div>

};

export default Videos;
