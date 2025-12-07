import {InputWrapper, StyledInput, Label, ErrorText} from "./styles";
import { type InputProps } from "./types";
// function Input(props) {
//   console.log(props);
//   const { id, name, type, placeholder, label } = props;
function Input({ 
  id,
   name,
    type = "text",
     placeholder, 
     label,
     disabled = false,
      error,
 }: InputProps) {
  return (
   <InputWrapper>
   <Label htmlFor={id}>{label}</Label>
      <StyledInput
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        error={error}
      />

      {error && <ErrorText>{error}</ErrorText>}
    
   </InputWrapper>
  );
}

export default Input;
