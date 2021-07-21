import React from "react";
import "../css/Comment.css";

function Comment({ id, content }) {
  return (
    <div className="detail-comment">
      <div>{id}</div>
      <div>{content}</div>
    </div>
  );
}

export default Comment;
