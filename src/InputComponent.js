export default function InputComponent({...props}) {
  return (
    <>
      <label>{props.labelName}</label>
      <input
        value={props.value}
        onChange={(e) => {
            props.handleChange(e.target.value);
        }}
      />
    </>
  );
}
