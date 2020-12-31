import React, { useEffect, useState } from "react";
import { IonLoading } from "@ionic/react";

import request from "$shared/request";
import { logg } from "$shared";
import { Galleries } from "./";
import { NewsitemGallery } from "$components/newsitems";

const MyGalleries = (props) => {
  const [galleries, setGalleries] = useState(null);
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    setShowLoading(true);
    const token = localStorage.getItem("jwtToken");
    request.get(`/api/my/galleries`, { params: { jwt_token: token } }).then(r => {
      logg(r.data, 'MyGalleries data')
      setGalleries(r.data);
      setShowLoading(false);
    })
  }, []);

  return (<>
    <IonLoading
      isOpen={showLoading}
      onDidDismiss={() => setShowLoading(false)}
      message={'Please wait...'}
      duration={5000}
    />
    { galleries && galleries.length && galleries.map((g) => <NewsitemGallery key={g.id} data={g} /> ) }
  </>);
}

export default MyGalleries;