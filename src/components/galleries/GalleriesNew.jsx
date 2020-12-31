import React from "react";

const GalleriesNew = (props) => {
  return (

    <div>
      <div className="group">
        <label className="placeholder">Gallery Name</label>
        <input type="text" placeholder="" className="firstInput" />
      </div>
      <div className="selectDiv">
        <label className="placeholder">City</label>
        <select name="city" id="city" className="firstSelect">
          <option value="Venice, Italy" selected>
            Venice, Italy
					</option>
          <option value="Venice, Italy">
            Venice, Italy
					</option>
        </select>
      </div>

      <div>
        <div className="btnGrid">
          <h3>Post <span className="postTo">to</span></h3>
          <button className="btn btnRight">
            <img src="/assets/accounts/public.JPG" alt="public pic" />
          </button>
          <button className="btn btnLeft">
            <img src="/assets/accounts/friend.JPG" alt="public pic" />
          </button>
        </div>
      </div>
      <div className="selectImageGrid">
        <img src="/assets/accounts/camera.JPG" alt="Select Images" />
        <p>Select images</p>
      </div>
      <button className="btnCreate">Create</button>
    </div>
  )
}

export default GalleriesNew