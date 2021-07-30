import React, { useEffect, useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import "./style.css";
import { post } from "../../service";
const Register = () => {
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
    let res = post("api/register", payload);
  };
  return (
    <>
      <div className="form">
        <h1 className="heading">Register</h1>
        <form className="register">
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
            <button className="btn-login" onClick={(e) => handleClick(e)}>
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
