//import logo from "./logo.svg";
import "./App.css";
//import MyFirstComponent from './MyFirstComponent';
import Header from "./Header";
import Post from "./Post";
import SideMenu from "./SideMenu";
function App() {
  return (
    <div className="App">
      <Header />

      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* Post and Sidemenu Container */}
        <div
          style={{ display: "flex", width: "60%"}}
        >
          {/* Post Container */}
          <div style={{ width: "70%" }}>
            <Post title="first post" description="this is the first post I puplish it" />
            <Post title="second post" description="this is the second post I puplish it"  />
          </div>
          {/* End Post Container*/}
          {/* SideMenu */}
          <div style={{width: "30%" }}>
            <SideMenu />
          </div>
          {/* End SideMenu */}
        </div>
        {/* Post and Sidemenu Container */}
      </div>
    </div>
  );
}

export default App;
