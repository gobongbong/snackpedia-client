import React, { useState } from "react";
import axios from "axios";
import "../css/MyDetail.css";

function Content({ onAllComments, snackId }) {
  const [content, setContent] = useState("");

  const onChange = (e) => {
    setContent(e.target.value);
  };

  const onClick = (e) => {
    let form = new FormData();
    let userName = document.cookie.match("(^|;) ?" + "key" + "=([^;]*)(;|$)");

    form.append("content", content);
    form.append("userName", userName[2]);
    form.append("snackId", snackId);

    axios({
      method: "POST",
      url: "http://localhost:8080/comment/regist",
      data: form,
    })
      .then((res) => {
        console.log(res.data);
        onAllComments(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    setContent("");
  };

  return (
    <div>
      <input
        className="commet-text"
        type="text"
        value={content}
        onChange={onChange}
      />
      <input
        className="commet-btn"
        type="button"
        onClick={onClick}
        value="댓글 등록"
      />
    </div>
  );
}

export default Content;
