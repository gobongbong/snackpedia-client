import axios from "axios";
import React, { useState, useEffect } from "react";
import "../css/SignIn.css";

function SignIn() {
  const [userEmail, setuserEmail] = useState("");
  const [userPassword, setuserPassword] = useState("");

  const onEmailHandler = (event) => {
    setuserEmail(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setuserPassword(event.currentTarget.value);
  };

  const onSubmitdHandler = (event) => {
    event.preventDefault();

    console.log("userEmail", userEmail);
    console.log("userPassword", userPassword);
  };

  axios({
    method: "POST",
    url: "http://localhost:8080/signin",
    data: {
      userEmail: userEmail.value,
      userPassword: userPassword.value,
    },
  })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <div className="SignInForm">
      <div>
        <h1 className="signin-text">Login</h1>
        <form onSubmit={onSubmitdHandler} className="signin-form">
          <label className="signin-label">E-mail</label>
          <input
            className="signin-input"
            type="email"
            value={userEmail}
            onChange={onEmailHandler}
          />

          <label className="signin-label">Password</label>
          <input
            className="signin-input"
            type="password"
            value={userPassword}
            onChange={onPasswordHandler}
          />

          <br />
          <button className="signin-button">OK!</button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;

////////////////
import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Tag } from "antd";
import "../css/SnackTag.scss";
const { CheckableTag } = Tag;

const tagsData = ["#바삭함", "#매운맛", "#달콤함", "#건조함"];
const tagsData1 = ["#순한맛", "#촉촉함", "#싱거움", "#소금맛"];
class SnackTag extends React.Component {
  state = {
    selectedTags: ["Books"],
  };

  handleChange(tag, checked) {
    const { selectedTags } = this.state;
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    console.log("You are interested in: ", nextSelectedTags);
    this.setState({ selectedTags: nextSelectedTags });
  }

  render() {
    const { selectedTags } = this.state;
    return (
      <div className="Tag_whole">
        <span style={{ marginRight: 8 }} className="Tag_setup">
          <p className="TagName">TAGS</p>
        </span>
        {/* {selectedTags.length } */}
        {selectedTags.length < 5 && (
          <div className="test1">
            <div className="TagLayout">
              {tagsData.map((tag) => (
                <CheckableTag
                  className="InTag1"
                  key={tag}
                  checked={selectedTags.indexOf(tag) > -1}
                  onChange={(checked) => this.handleChange(tag, checked)}
                >
                  {tag}
                </CheckableTag>
              ))}
            </div>
            <div className="TagLayout1">
              {tagsData1.map((tag1) => (
                <CheckableTag
                  className="InTag2"
                  key={tag1}
                  checked={selectedTags.indexOf(tag1) > -1}
                  onChange={(checked) => this.handleChange(tag1, checked)}
                >
                  {tag1}
                </CheckableTag>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default SnackTag;
//ReactDOM.render(<SnackTag />, document.getElementById("container"));
