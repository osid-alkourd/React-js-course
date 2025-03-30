import { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
// import MyFirstComponent from './MyFirstComponent';

function App() {
  const [pending, setPending] = useState(0);
  const [completing, setCompleting] = useState(0);
  function buyProduct() {
    setPending((p) => p + 1);
    setTimeout(() => {
      // setPending((latestPending) => {
      //   console.log(latestPending);
      //   setCompleting((c) => c + 1 );
      //   return 0;
      // });
       setCompleting((c) => c + 1);
       setPending((p) => p - 1);
    }, 3000);
  };
  return (
    <div style={{ margin: "40px" }}>
      <h1>pending {pending}</h1>
      <h1>waiting {completing}</h1>
      <button onClick={buyProduct}>buy</button>
    </div>
  );
}

export default App;
