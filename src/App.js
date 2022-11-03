import React from "react";
import "./App.css";
import Create from "./components/Create";
import Read from "./components/Read";
import Update from "./components/Update";
import { Routes, Route } from "react-router-dom";

function App() {
  // const [state, setState] = React.useState([]);
  // React.useEffect(() => {
  //   // console.log("hello");
  //   // axios.get("https://jsonplaceholder.typicode.com/posts/").then((res) => {
  //   //   // console.log(res.data);
  //   //   setState(res.data);
  //   // }, []);
  //   // axios.get("https://rickandmortyapi.com/api/character").then((res) => {
  //   //   // console.log(res.data.results);
  //   //   setState(res.data.results);
  //   // });

  //   axios
  //     .get("https://636377c237f2167d6f7a3092.mockapi.io/Todo")
  //     .then((res) => {
  //       setState(res.data);
  //     });
  // });

  return (
    <div>
      <Routes>
        <Route path="/" element={<Create/>}></Route>
        <Route path="/Create" element={<Create />}></Route>
        <Route path="/Update" element={<Update />}></Route>
        <Route path="/Read" element={<Read />}></Route>
      </Routes>

      {/* <Create></Create> */}
    </div>
  );
}

export default App;
