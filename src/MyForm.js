import { useState } from "react";
function MyForm() {
  // const [inputName , setInputName] = useState('');
  // const [inputEmail,setInputEmail] = useState('');
  // we will replace the previous code with the following
  
  const [formInputs, setFormInput] = useState({ name: "", email: "" , age:''});
  return (
    <div style={{ marginTop: "30px" }}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <label>name</label>
        <input
          value={formInputs.name}
          onChange={(e) => {
            setFormInput({...formInputs, name: e.target.value }); 
            // ...formInputs means create new object form the original object (formInputs)

          }}
        />
        <label>email</label>
        <input
          value={formInputs.email}
          onChange={(e) => {
            setFormInput({...formInputs , email:e.target.value});
          }}
        />
         <label>age</label>
        <input
          value={formInputs.age}
          onChange={(e) => {
            setFormInput({...formInputs , age:e.target.value});
          }}
        />
        <button>submit</button>
      </form>
    </div>
  );
}
export default MyForm;
