
const number = 10;
const styleProperty = {backgroundColor: "red" , fontSize: "25px"};
function MyFirstComponent(){
    return(
        <div>
        <h1 style={styleProperty}>{number + " "}this is my first component</h1>
        <button onClick={sayHello}>Button </button>
        </div>
    )
}
// or replace the previous code with following 
// function MyFirstComponent(){
//     return(
//         <div>
//         <h1 style={{backgroundColor: "red" , fontSize: "25px"}}>{number + " "}this is my first component</h1>
//         <button>Button </button>
//         </div>
//     )
// }

function sayHello(){
    alert("Hello Guys");
}

export default MyFirstComponent;