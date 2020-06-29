import React from "react";

const videosNew = (props) => {
  return (

    <div>
      <div className="group">
        <label className="placeholder">Title</label>
        <input type="text" placeholder="" className="firstInput" />
      </div>

      <div className="selectImageGrid">
        <img src="/assets/accounts/camera.JPG" alt="Select Images" />
        <p>Choose Files</p>
      </div>

      <button className="btnCreate">Publish</button>
    </div>

  )
}

export default videosNew;