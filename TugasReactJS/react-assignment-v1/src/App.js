import "./App.css";
import TodoCard from "./TodoCard";
import { useState, useEffect, Fragment } from "react";

const App = () => {
  const [usedata, setData] = useState([]);
  const [proses, setLoading] = useState(false);
  const link = "https://jsonplaceholder.typicode.com/todos";
  const getData = async () => {
    setLoading(true);
    try {
      const res = await fetch(link).then((res) => res.json());
      setData(res);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
    setLoading(false);
  };
  useEffect(() => {
    getData();
  },
  []);

  return (
    <Fragment>
      <h1
        style={{color: "Tomato",}}>
        {proses && "Loading..."}
      </h1>
      <TodoCard todo={usedata} />
    </Fragment>
  );
};
export default App;