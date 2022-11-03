import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { Button, Input } from "@chakra-ui/react";

function Update() {
  const navigate = useNavigate();
  const [fname, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    setFName(localStorage.getItem("FirstName"));
    setId(localStorage.getItem("id"));
    setLName(localStorage.getItem("lastName"));
  }, []);

  const updateData = () => {
    axios
      .put(`https://636377c237f2167d6f7a3092.mockapi.io/Todo/${id}`, {
        fname,
        lName,
      })
      .then((res) => {
        console.log(res.id);
        navigate("/Read");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <input
        placeholder="FirstName"
        onChange={(e) => {
          setFName(e.target.value);
        }}
      ></input>
      <input
        placeholder="LastName"
        onChange={(e) => {
          setLName(e.target.value);
        }}
      ></input>

      <button onClick={updateData}>Update</button>
    </div>
  );
}

export default Update;
