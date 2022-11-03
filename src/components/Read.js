import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import { Button } from "@chakra-ui/react";

function Read() {
  const [state, setState] = useState([]);
  let url = "https://636377c237f2167d6f7a3092.mockapi.io/Todo";

  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res.data);
      setState(res.data);
    });
  }, []);

  //delete

  const onDelete = (id) => {
    // console.log(id);
    axios
      .delete(`https://636377c237f2167d6f7a3092.mockapi.io/Todo/${id}`)
      .then((res) => {
        // console.log(res);
        setState(
          state.filter((del) => {
            return del.id != del;
          })
        );
      });
  };

  return (
    <div>
      {state.map((data, index) => {
        return (
          <div key={index}>
            <p>FirstName: {data.fname}</p>
            <p>LastName: {data.lname}</p>

            <br></br>
            <button
              onClick={() => {
                onDelete(data.id);
              }}
            >
              Delete
            </button>

            <Link to="/Update">
              <button onClick={() => localStorage.setItem("id", data.id)}>
                Update
              </button>
            </Link>
            <br></br>
          </div>
        );
      })}
    </div>
  );
}

export default Read;
