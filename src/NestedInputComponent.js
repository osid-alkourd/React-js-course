export default function NestedInputComponent({...props}){
    return (
        <>
          <label>{props.labelName}</label>
          <input
            value={props.value}
            onChange={(e) => {
                props.handleChanging(e.target.value);
            }}
          />
        </>
      );
}