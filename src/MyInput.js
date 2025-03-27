import { useState } from "react";

function MyInput() {
  const [myInputValue, changeName] = useState('');
  function changeCurrentName(e) {
    changeName(e.target.value)
  }
  return (
    <div>
        <hr></hr>
      <input onChange={changeCurrentName} value={myInputValue}/>
      <div>the current name is {myInputValue} </div>
    </div>
  );
}

export default MyInput;
