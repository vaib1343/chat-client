import React, { useEffect, useState } from "react";
import { Button, TextField, useForkRef } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { post } from "../../service";
import "./style.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  useEffect(() => {
    if (window.localStorage.getItem("token")) {
      history.push("/chat");
    }
  });

  const handleClick = async (e) => {
    e.preventDefault();
    let payload = {
      email,
      password,
    };
    console.log(payload);
    let res = await post("api/login", payload);
    console.log(res);
    if (res.data.success) {
      window.localStorage.setItem("token", res.data.token);
      history.push("/chat");
    }
  };
  return (
    <>
      <div className="form">
        <h1 className="heading">Login</h1>
        <form className="login">
          <TextField
            placeholder="example@mail.com"
            label="Email"
            variant="outlined"
            color="secondary"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            placeholder="P@ssw0rd"
            label="Password"
            variant="outlined"
            type="password"
            color="secondary"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="btn-container">
            <button
              className="btn-login"
              variant="contained"
              onClick={(e) => handleClick(e)}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
