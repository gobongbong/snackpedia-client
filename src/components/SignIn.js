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

  const onClick = () => {
    console.log("AsaAs");
    axios({
      method: "POST",
      url: "http://localhost:8080/signin",
      data: {
        userEmail: userEmail.value,
        userPassword: userPassword.value,
      },
    })
      .then((res) => {
        // return "redirect:/"; 이건 나중에.....?
        console.log(res);
      })
      .catch((error) => {
        console.log("XXXXXXXXXXXXXXXxxx");
        console.log(error);
      });
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
