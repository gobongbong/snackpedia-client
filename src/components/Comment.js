import React from "react";
import "../css/Comment.css";

function Comment({ id, userName, content }) {
  return (
    <div className="detail-comment">
      <h3>{userName}</h3>
      <hr className="detail-comment-hr" />
      <div>{content}</div>
    </div>
  );
}

export default Comment;
