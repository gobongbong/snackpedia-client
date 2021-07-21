import axios from "axios";
import React, { useState, useEffect } from "react";
import "../css/SignUp.css";

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
    console.log("userPassword", userPassword);
    
  };

  axios({
    method: "POST",
    url: "http://localhost:8080/signup",
    data: {
      userEmail: userEmail.value,
      userPassword: userPassword.value,
      userConfirmPassword: userConfirmPassword.value,
      userName: userName.value,
    },
  })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <div className="SignUpForm">
      <form className="signup-form" onSubmit={onSubmitdHandler}>
        <h1 className="signup-text">Register</h1>
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
        <button className="signupBtn hover1" type="submit">
          Join us!
        </button>
      </form>
    </div>
  );
}

export default SignUp;
