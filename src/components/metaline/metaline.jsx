import React from "react";
import { withRouter } from "react-router-dom";
import "./metaline.scss";

const metaline = (props) => {
    const { created_at, username, city, tags = [] } = props;

    function navigateToCity(){
        props.history.push(`/en/cities/travel-to/${city.slug}/show/newsfeed`);
    }

    return (
        <p className="meta-info">
            <span className="date"> {(created_at || "").substring(0, 10)} </span> by
            <span className="user"> {username} </span> in
            <span className="city" onClick={navigateToCity}> {city.name} </span>
            {
                tags.map((tag, i) => {
                    return (
                        <span key={i} className="tags">{tag.name}</span>
                    )
                })
            }
        </p>
    );

}

export default withRouter(metaline);