import { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
// import MyFirstComponent from './MyFirstComponent';

function App() {
  const [fruits, setFruits] = useState(["apple", "banana", "orange", "peach"]);
  const [fruiteInputValue, setFruiteInputValue] = useState("");
  const fruitsList = fruits.map((ele, index) => {
    return (
      <li key={index} style={{ display: "inlineBlock" }}>
        {ele}
      </li>
    );
  });

  function addFruite() {
    // const newFruiteArray = [...fruits];
    // newFruiteArray.push(fruiteInputValue);
    // setFruits(newFruiteArray);
    // setFruiteInputValue('');
    // you can replace the previous code with the following
    setFruits([...fruits,fruiteInputValue ]);
    setFruiteInputValue('');
  }
  return (
    <div style={{ margin: "40px" }}>
      <ul>{fruitsList}</ul>
      <input
        value={fruiteInputValue}
        onChange={(e) => setFruiteInputValue(e.target.value)}
      />{" "}
      <button onClick={addFruite}>add</button>
    </div>
  );
}

export default App;
