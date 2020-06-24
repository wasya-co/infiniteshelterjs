import React from "react";

const reportsNew = (props) => {
  return (

    <div>
      <div className="group">
        <label className="placeholder">Title</label>
        <input type="text" placeholder="" className="firstInput" />
      </div>

      <div className="group">
        <label className="placeholder">Subtitle</label>
        <textarea placeholder=""></textarea>
      </div>

      <div className="group">
        <label className="placeholder">Body</label>
        <textarea placeholder=""></textarea>
      </div>

      <button className="btnCreate">Publish</button>
    </div>
  )
}

export default reportsNew;