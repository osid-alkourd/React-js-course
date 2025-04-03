import "./LoanFormStyle.css";
import "./Modal";
import Modal from "./Modal";
import InputComponent from "./InputComponent";
import { useState } from "react";
function LoanForm() {
  const [loanInput, setLoanInput] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    isEmployee: false,
    salaryRange: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const btnIsDisabled =
    loanInput.name === "" ||
    loanInput.phoneNumber === "" ||
    loanInput.age === "" ||
    loanInput.salaryRange === "";

  const disabledClass = btnIsDisabled ? "disabledClass" : "";
  function changeSalaryRange(e) {
    setLoanInput({ ...loanInput, salaryRange: e.target.value });
  }
  function handleSubmition(event) {
    event.preventDefault();
    event.stopPropagation(); // prevent the event from reaching the parent div
    setErrorMessage(null);
    console.log("submit");
    if (loanInput.age < 18 || loanInput.age > 95 || isNaN(loanInput.age)) {
      setErrorMessage("the age is not avaliable");
    }
    setShowModal(true);
  }
  function removeModalPopup() {
    console.log("div click");
    setShowModal(false);
  }

  function handleNameChange(name) {
    setLoanInput({ ...loanInput, name: name });
  }

  function handlePhoneNumberChange(phoneNumber) {
    setLoanInput({ ...loanInput, phoneNumber: phoneNumber });
  }

  function handleAgeChange(age) {
    setLoanInput({ ...loanInput, age: age });
  }
  return (
    <div className="flex" onClick={removeModalPopup}>
      <form className="flex" id="loan-form" style={{ flexDirection: "column" }}>
        <h1 style={{ display: "inline" }}>Requesting a lone</h1>
        <hr></hr>

        <InputComponent
          value={loanInput.name}
          handleChange={handleNameChange}
          labelName="Name"
        />

        <InputComponent
          handleChange={handlePhoneNumberChange}
          value={loanInput.phoneNumber}
          labelName="Phone Number"
        />

        <InputComponent
          handleChange={handleAgeChange}
          value={loanInput.Age}
          labelName="Age" 
        />

        <label>Are you an employee ??</label>
        <input
          type="checkbox"
          checked={loanInput.isEmployee}
          onChange={(e) => {
            setLoanInput({ ...loanInput, isEmployee: e.target.checked });
          }}
        />

        <label>Salary: </label>
        <select value={loanInput.salaryRange} onChange={changeSalaryRange}>
          <option>less than 500$</option>
          <option>between 500$ and 2000$</option>
          <option>above 2000$</option>
        </select>

        <button
          id="submit-loan-btn"
          className={disabledClass}
          disabled={btnIsDisabled}
          onClick={handleSubmition}
        >
          submit
        </button>
      </form>
      <Modal errorMessage={errorMessage} isVisible={showModal} />
    </div>
  );
}

export default LoanForm;
