//import logo from "./logo.svg";
import "./App.css";
//import MyFirstComponent from './MyFirstComponent';
import Header from "./Header";
import Post from "./Post";
import SideMenu from "./SideMenu";

const sideMenuStatus = true;
const posts = [
  {id : 1 ,title: 'title 1' , description: "this is the first description"} ,
  {id : 2 ,title: 'title 2' , description: "this is the second description"},
  {id : 3 ,title: 'title 3' , description: "this is the third description"}

];

const postsList = posts.map((post)=>{
  return <Post key={post.id} title={post.title} description={post.description}/>
});
function App() {
  return (
    <div className="App">
      <Header />

      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* Post and Sidemenu Container */}
        <div style={{ display: "flex", width: "60%" }}>
          {/* Post Container */}
          <div style={{ width: "70%" }}>
           {postsList}
          </div>
          {/* End Post Container*/}
          {/* SideMenu */}
          <div style={{ width: "30%" }}>{showSideMenu()}</div>
          {/* End SideMenu */}
        </div>
        {/* Post and Sidemenu Container */}
      </div>
    </div>
  );
}

// const showSideMenu = () => {
//   if (sideMenuStatus) {
//     return <SideMenu />;
//   }
//   return <div></div>;
// };

// you can replace the previous code with the follwing
 const showSideMenu = () => sideMenuStatus ? <SideMenu/>  : <div></div>
export default App;
