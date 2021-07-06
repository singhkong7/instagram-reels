import React from 'react';
import Avatar from "@material-ui/core/Avatar";
import "./Reels.scss";

function Reels(username,caption,image) {
    return (
        <div className="reels">
            <div className="reels_header">
                <h4><strong>{username}:</strong>{caption}</h4>
                <Avatar className="avatar" />
                <h3>{username}</h3>
            </div>
            <div className="reels_footer">
                <img className="image" src={image} alt=" "/>
            </div>
        </div>
    )
}

export default Reels;
