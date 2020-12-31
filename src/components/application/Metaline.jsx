import React from "react";
import { withRouter } from "react-router-dom";
import "./application.scss";

const Metaline = (props) => {
  const { created_at, username, city, tags = [] } = props;

  function navigateToCity(){
    props.history.push(`/en/cities/travel-to/${city.slug}/show/newsfeed`);
  }

  return (
    <p className="metaline">
      <span className="date"> {(created_at || "").substring(0, 10)} </span>
      { username && <>by <span className="user"> {username} </span></> }
      { city     && <>in <span className="city" onClick={navigateToCity}> {city.name} </span></> }
      { tags     && tags.map((tag, i) => <span key={i} className="tags">{tag.name}</span>) }
    </p>
  );

}

export default withRouter(Metaline);