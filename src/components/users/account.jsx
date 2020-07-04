import React, { useEffect, useState } from "react";
import FacebookLogin from 'react-facebook-login';
import { IonPage, IonContent } from "@ionic/react";

import { useHistory } from "react-router-dom";

import { logg, request } from "$shared";
import config from "config";

import "./users.scss";
/* import VideosNew from "./videos-new";
import GalleriesNew from "./galleries-new";
import ReportsNew from "./reports-new"; */

const Api = {
  longTermTokenPath: '/api/users/long_term_token',
};

const Account = (props) => {
  logg(props, 'Account');
  const { navigation } = props;

  const history = useHistory();
  const [selectedSection, setSelectedSection] = useState("reports-new");

  const fbCallback = (response) => {
    if (localStorage.getItem("jwtToken")) {
      logg("already got jwtToken");
      return;
    }
    logg(response, 'facebook response');
    request.post(`${config.apiOrigin}${Api.longTermTokenPath}`, { accessToken: response.accessToken }).then((resp) => {
      logg(resp, 'microsites3 response');
      localStorage.setItem("jwtToken", resp.data.jwt_token);
    });
  };

  const componentClicked = () => {};

  return (
    <IonPage>
      <IonContent>
        <div className="account">

          <section className="sectionOne">
            <img src="/assets/accounts/default-avatar.png" alt="profile pic" />
            <div className="userName">
              <h4>Jamie Kavanaugh</h4>
              <img src="/assets/accounts/edit.png" alt="edit pic" />
              <p>Jamie_kv@gmail.com</p>
            </div>
          </section>

          <FacebookLogin
            appId="3016949928380365"
            autoLoad={false}
            fields="name,email,picture"
            onClick={componentClicked}
            callback={fbCallback} />

          <section className="sectionTwo">
            <div className="account-tabs" onClick={() => history.push("/en/account/my/videos")} >
              <p>Videos</p>
            </div>
            <div className="account-tabs" onClick={() => setSelectedSection("reports-new")} >
              <img src={selectedSection === "reports-new" ? "/assets/accounts/addReportSelected.png" : "/assets/accounts/addReport.png"} alt="Add Report" />
              <p>Add Report</p>
              <span className={`${selectedSection === "reports-new" ? "activeSpan" : ""}`}></span>
            </div>
            <div className="account-tabs" onClick={() => setSelectedSection("galleries-new")} >
              <img src={selectedSection === "galleries-new" ? "/assets/accounts/addGallerySelected.png" : "/assets/accounts/addGallery.png"} alt="Add Image" />
              <p>Add Gallery</p>
              <span className={`${selectedSection === "galleries-new" ? "activeSpan" : ""}`}></span>
            </div>
            <div className="account-tabs" onClick={() => setSelectedSection("videos-new")} >
              <img src={selectedSection === "videos-new" ? "/assets/accounts/addVideoSelected.png" : "/assets/accounts/addVideo.png"} alt="Add Video" />
              <p>Add Video</p>
              <span className={`${selectedSection === "videos-new" ? "activeSpan" : ""}`}></span>
            </div>
          </section>

          { /* <section className="sectionThree">
            { selectedSection === "reports-new" && <ReportsNew /> }
            { selectedSection === "galleries-new" && <GalleriesNew /> }
            { selectedSection === "videos-new" && <VideosNew /> }
          </section> */ }

        </div>
      </IonContent>
    </IonPage>
  );
}

export default Account;