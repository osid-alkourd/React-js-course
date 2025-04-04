import { useContext } from "react";
import {LoanInputContext} from './contexts/LoanFormInputContext';
export default function NestedInputComponent(){
  const inputContext = useContext(LoanInputContext);
    return (
        <>
          <label>{inputContext.labelName}</label>
          <input
            value={inputContext.value}
            onChange={(e) => {
              inputContext.handleChange(e.target.value);
            }}
          />
        </>
      );
}