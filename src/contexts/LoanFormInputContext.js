import { createContext } from "react";
let  LoanInputContext = createContext({labelName: '' , handleChange: null , value: ''});
// {labelName: '' , handleChange: null , value: ''} this is a initial context
export {LoanInputContext};