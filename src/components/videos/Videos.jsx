
import React, { useEffect, useState } from "react";

import { logg, request } from "$shared";
import { Api } from "$src";

/**
 * @TODO: styled components?
 *
 *
 */
const Videos = () => {
  const [videos, setVideos] = useState([]);

  const jwtToken = localStorage.getItem("jwtToken");

  useEffect(() => {
    request.post(Api.myVideosPath, { jwtToken: jwtToken }).then(r => r.data
      ).then(({ videos }) => {
        logg(videos, 'data')
        setVideos(videos);
      })
  }, []);

  return <div>
    <br /><br /><br /><br /><br /><br />
    Videos
    { videos && videos.map((v, idx) => <p key={idx} >v.name</p> ) }
  </div>

};

export default Videos;
