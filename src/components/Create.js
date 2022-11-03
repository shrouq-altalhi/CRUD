import React, { useState } from "react";
import axios from "axios";
// import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Create() {
  const navigate = useNavigate();
  const [fname, setFName] = useState();
  const [lName, setLName] = useState();

  let url = "https://636377c237f2167d6f7a3092.mockapi.io/Todo";
  const postData = () => {
    axios
      .post(url, {
        fname,
        lName,
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("fName", res.data.fName);
        localStorage.setItem("lName", res.data.lName);
        localStorage.setItem("id", res.data.id);
        navigate("/Read");
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

      <button onClick={postData}>Login</button>
    </div>
  );
}

export default Create;
