function Artical({name,email}){
    return(
        <div style={{ display: "flex" , justifyContent: "center" , margin:"1%" ,  width:"80%" }}>
        <div style={{ backgroundColor: "green" , color: "white" , width:'100%'}}>
            <h1>the name  is {name}</h1>
            <h1 style={{wordWrap:'break-word'}}>the emil  is {email}ppppppppppppppppppppppppppppppppppppppppppp</h1>
            <h1>the date is 2001</h1>
        </div>
        </div>
    );
}

// or replace the previous code with the following 
// function Artical(attributes){
//     const name = attributes.name;
//     const email = attributes.email;

//     return(
//         <div style={{ display: "flex" , justifyContent: "center" , margin:"1%" , overflowWrap:'break-word', width:"50%" }}>
//         <div style={{ backgroundColor: "green" , color: "white" , width:'50%'}}>
//             <h1>the name  is {name}</h1>
//             <h1 style={{}}>the emil  is {email}ppppppppppppp</h1>
//             <h1>the date is 2001</h1>
//         </div>
//         </div>
//     );
// }
export default Artical;