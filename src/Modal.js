import "./LoanFormStyle.css";
function Modal({ isVisible, errorMessage }) {
  if (isVisible) {
    return (
      <div id="modal">
        <div id="modal-content">
          <h3 style={{ color: errorMessage ? "red" : "green" }}>
            {errorMessage != null
              ? errorMessage
              : "The Form Has Been Submitted Successfully"}
          </h3>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

export default Modal;
