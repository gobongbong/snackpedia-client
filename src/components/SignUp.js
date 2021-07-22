import axios from "axios";
import React, { useState, useEffect } from "react";
import "../css/SignUp.css";
import { useHistory } from "react-router";

function SignUp() {
  const [userEmail, setuserEmail] = useState("");
  const [userName, setuserName] = useState("");
  const [userPassword, setuserPassword] = useState("");
  const [userConfirmPassword, setuserConfirmPassword] = useState("");

  const onEmailHandler = (event) => {
    setuserEmail(event.currentTarget.value);
  };

  const onNameHandler = (event) => {
    setuserName(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setuserPassword(event.currentTarget.value);
  };

  const onConfirmPasswordHandler = (event) => {
    setuserConfirmPassword(event.currentTarget.value);
  };

  const onSubmitdHandler = (event) => {
    event.preventDefault();

    if (userPassword !== userConfirmPassword) {
      return alert("비밀번호와 비밀번호 확인은 같아야 합니다.");
    }

    console.log("userEmail", userEmail);
  };

  const history = useHistory();

  const onClick = () => {
    if (userEmail !== "" && userName !== "" && userPassword !== "") {
      console.log(userEmail.value);

      axios
        .post("http://localhost:8080/signup", null, {
          params: {
            userEmail: userEmail,
            userPassword: userPassword,
            userName: userName,
          },
        })
        .then((res) => {
          console.log(res);
          history.push("/signin");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      return alert("모든 항목을 작성해주세요!");
    }
  };

  return (
    <div className="SignUpForm">
      <form className="signup-form" onSubmit={onSubmitdHandler}>
        <h1 className="signup-text"> Register</h1>
        <label className="signup-label">E-mail</label>
        <input
          className="signup-input"
          type="email"
          value={userEmail}
          onChange={onEmailHandler}
        />

        <label className="signup-label">Name</label>
        <input
          className="signup-input"
          type="text"
          value={userName}
          onChange={onNameHandler}
        />

        <label className="signup-label">Password</label>
        <input
          className="signup-input"
          type="password"
          value={userPassword}
          onChange={onPasswordHandler}
        />

        <label className="signup-label">Confirm Password</label>
        <input
          className="signup-input"
          type="password"
          value={userConfirmPassword}
          onChange={onConfirmPasswordHandler}
        />

        <br />
        <button className="signup-button" type="submit" onClick={onClick}>
          Join us!
        </button>
      </form>
    </div>
  );
}

export default SignUp;
