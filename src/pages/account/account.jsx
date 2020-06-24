import React, { useEffect, useState } from "react";
import { IonPage, IonContent } from "@ionic/react";
import VideosNew from "./videos-new";
import GalleriesNew from "./galleries-new";
import ReportsNew from "./reports-new";


import "./account.scss";

const Account = (props) => {

  const [selectedSection, setSelectedSection] = useState("reports-new");

  function sectionChangeHandler(section) {
    setSelectedSection(section);
  }

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

          <section className="sectionTwo">
            <div className="account-tabs" onClick={sectionChangeHandler.bind(null, "reports-new")}>

              <img src={selectedSection == "reports-new" ? "/assets/accounts/addReportSelected.png" : "/assets/accounts/addReport.png"} alt="Add Report" />
              <p>Add Report</p>
              <span className={`${selectedSection == "reports-new" ? "activeSpan" : ""}`}></span>

            </div>
            <div className="account-tabs" onClick={sectionChangeHandler.bind(null, "galleries-new")}>

              <img src={selectedSection == "galleries-new" ? "/assets/accounts/addGallerySelected.png" : "/assets/accounts/addGallery.png"} alt="Add Image" />
              <p>Add Gallery</p>
              <span className={`${selectedSection == "galleries-new" ? "activeSpan" : ""}`}></span>

            </div>
            <div className="account-tabs" onClick={sectionChangeHandler.bind(null, "videos-new")}>

              <img src={selectedSection == "videos-new" ? "/assets/accounts/addVideoSelected.png" : "/assets/accounts/addVideo.png"} alt="Add Video" />
              <p>Add Video</p>
              <span className={`${selectedSection == "videos-new" ? "activeSpan" : ""}`}></span>

            </div>
          </section>

          <section className="sectionThree">
            {
              selectedSection == "reports-new" ?
                <ReportsNew /> :
                selectedSection == "galleries-new" ?
                  <GalleriesNew /> :
                  <VideosNew />

            }
          </section>

        </div>

      </IonContent>
    </IonPage>
  );
}

export default Account;