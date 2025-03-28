import { useState } from "react";
function MyForm() {
  // const [inputName , setInputName] = useState('');
  // const [inputEmail,setInputEmail] = useState('');
  // we will replace the previous code with the following

  const [formInputs, setFormInput] = useState({
    name: "",
    email: "",
    age: "",
    isStudent: false,
    gender: "male",
    university: "",
  });
  function handleCheckbox(event) {
    setFormInput({ ...formInputs, isStudent: event.target.checked });
    console.log(event.target.value);
  }

  function handleRadioButton(event) {
    setFormInput({ ...formInputs, gender: event.target.value });
    console.log(event.target.value);
  }

  function handleDropdownMenu(event) {
    setFormInput({ ...formInputs, university: event.target.value });
    console.log(event.target.value);
  }
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
            setFormInput({ ...formInputs, name: e.target.value });
            // ...formInputs means create new object form the original object (formInputs)
          }}
        />
        <label>email</label>
        <input
          value={formInputs.email}
          onChange={(e) => {
            setFormInput({ ...formInputs, email: e.target.value });
          }}
        />
        <label>age</label>
        <input
          value={formInputs.age}
          onChange={(e) => {
            setFormInput({ ...formInputs, age: e.target.value });
          }}
        />
        <br />
        <label>is student</label>
        <input
          type="checkbox"
          checked={formInputs.isStudent}
          onChange={handleCheckbox}
          value="osid2001"
        />
        <div>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formInputs.gender === "male"}
            onChange={handleRadioButton}
          />
          <label>male</label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formInputs.gender === "female"}
            onChange={handleRadioButton}
          />
          <label>female</label>
        </div>

        <div>
          <label for="university">university</label>
          <select
            id="university"
            value={formInputs.university}
            onChange={handleDropdownMenu}
          >
            <option value="">select a university</option>
            <option value="islamic">islamic</option>
            <option value="azhar">azhar</option>
            <option value="aqsa">aqsa</option>
          </select>
        </div>
        <button>submit</button>
      </form>
    </div>
  );
}
export default MyForm;
