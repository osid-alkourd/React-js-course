import NestedInputComponent from "./NestedInputComponent";
export default function InputComponent({ ...props }) {
  return (
    <>
      {/* <label>{props.labelName}</label>
      <input
        value={props.value}
        onChange={(e) => {
            props.handleChange(e.target.value);
        }}
      /> */}
      <NestedInputComponent
        labelName={props.labelName}
        value={props.value}
        handleChanging={props.handleChange}
      />
    </>
  );
}
