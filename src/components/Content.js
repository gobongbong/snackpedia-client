import React, { useState } from "react";
import axios from "axios";
import "../css/MyDetail.css";

function Content({ onAllComments }) {
  const [content, setContent] = useState("");

  const onChange = (e) => {
    setContent(e.target.value);
    console.log(content);
  };

  const onClick = (e) => {
    axios({
      method: "POST",
      url: "http://localhost:8080/comment/regist",
      data: {
        // content: this.state.content,
        // TODO 연습삼아 과자 등록여기서 해보기
        // TODO 댓글 등록할 때 Session에 유저테이블의 id를 줘서 댓글 등록할 때 find 한 다음 저장하고 댓글 저장

        snack: {
          snackName: "꼬깔콘",
          sodium: 10,
          protein: 10,
          fat: 10,
          calories: 10,
          chol: 10,
          sugar: 10,
          carbo: 10,
          amount: 10,
          snackPath: null,
          category: "snack",
        },
        tag: {
          oily: 0,
          spicy: 0,
          sweet: 0,
          salty: 0,
          sour: 1,
          flat: 1,
          crispy: 1,
          soft: 1,
        },

        allergy: {
          milk: "milk",
          bean: "bean",
          wheat: "wheat",
          egg: "egg",
          fork: "fork",
          fish: "fish",
        },
      },
    })
      .then((res) => {
        console.log("Regist");
        // onAllComments(res);
      })
      .catch((err) => {
        console.log("XX");
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
