import { useState } from "react";

function MyButton() {
  const [name,setName] = useState("Osid");
  function changeName(){
    if(name === 'Osid')
        setName('Mohab');
    else
      setName('Osid')
  }
  return (
    <div>
      <button onClick={changeName}>click hero</button>
      <div>My name is {name}</div>
    </div>
  );
}

export default MyButton;
