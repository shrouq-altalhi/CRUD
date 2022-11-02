import React from "react";
import "./App.css";
import axios from "axios";
// import { Grid, GridItem } from "@chakra-ui/react";
import Create from "./components/Create";

function App() {
  const [state, setState] = React.useState([]);
  React.useEffect(() => {
    // console.log("hello");
    // axios.get("https://jsonplaceholder.typicode.com/posts/").then((res) => {
    //   // console.log(res.data);
    //   setState(res.data);
    // }, []);
    // axios.get("https://rickandmortyapi.com/api/character").then((res) => {
    //   // console.log(res.data.results);
    //   setState(res.data.results);
    // });

    axios
      .get("https://6362424d66f75177ea2a99d7.mockapi.io/Todo")
      .then((res) => {
        setState(res.data);
      });
  });
  return (
    <div className="container">
      {state.map((item) => {
        return (
          <>
            {item.fname}
            <br></br>
          </>
        );
      })}
      <Create></Create>
    </div>
  );
}

export default App;
