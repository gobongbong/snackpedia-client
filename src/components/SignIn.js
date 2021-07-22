import axios from "axios";
import React, { useState } from "react";
import "../css/SignIn.css";
import { useHistory } from "react-router";

function SignIn({ handleSignin }) {
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
  };

  const history = useHistory();

  const onClick = () => {
    if (userEmail !== "" && userPassword !== "") {
      axios
        .post("http://localhost:8080/signin", null, {
          params: {
            userEmail: userEmail,
            userPassword: userPassword,
          },
        })
        .then((res) => {
          if (res.data !== null) {
            let date = new Date();
            date.setDate(date.getDate() + 7);

            let cookie = `key=${res.data.userName};`;
            cookie += "expires=" + date.toUTCString();

            document.cookie = cookie;

            handleSignin();

            history.push("/");
          } else {
            // res.data === 0
            alert("E-MAIL과 PASSWORD를 확인해주세요!");
            history.push("/signin");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      return alert("E-MAIL과 PASSWORD를 입력해주세요!");
    }
  };

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
          <button className="signin-button" onClick={onClick}>
            OK!
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
