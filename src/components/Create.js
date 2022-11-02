import React, { useState } from "react";
import axios from "axios";
function Create() {
  const [fname, setFName] = useState();
  const [lName, setLName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const postData = () => {
    axios
      .post("https://6362424d66f75177ea2a99d7.mockapi.io/Todo", {
        fname,
        lName,
        email,
        password,
      })
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <div>
      <input
        placeholder="fName"
        onChange={(e) => {
          setFName(e.target.value);
        }}
      ></input>
      <input
        placeholder="lName"
        onChange={(e) => {
          setLName(e.target.value);
        }}
      ></input>
      <input
        type="email"
        placeholder="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      ></input>
      <input
        type="password"
        placeholder="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      ></input>
      <button onClick={postData}>Login</button>
    </div>
  );
}

export default Create;
