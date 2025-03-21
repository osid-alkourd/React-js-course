import logo from "./logo.svg";
import "./App.css";
// import MyFirstComponent from './MyFirstComponent';
import Artical from "./Artical";
function App() {
  const thirdName = "Ali";
  const thirdEmail = "ali@gmail.com";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Artical name="Osid" email="osid@gmail.com">
          <h1>The Birthday is 2001</h1>
        </Artical>
        <Artical name="Ayman" email="ayman@gmail.com">
          <h1>The Birthday is 1990</h1>
        </Artical>
        <Artical name={thirdName} email={thirdEmail}>
        <h1>The Birthday is 1997</h1>
        </Artical>
      </header>
    </div>
  );
}

export default App;
