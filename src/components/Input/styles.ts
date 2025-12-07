import styled from  "@emotion/styled";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Label = styled.label`
   font-size: 16px;
  color: hsl(0, 0%, 44%);

`;

export const StyledInput = styled.input<{ error?: string }>`
   width: 100%;
  height: 50px;
  border: 1px solid #3f3f3f;
  ${({ error }) => (error ? "border-color: #846363ff;" : "")}
  background-color: ${({ disabled }) => (disabled ? "#15391dff" : "#ffffff")};
  border-radius: 4px;
  padding: 12px;
  outline: none;
;


  &:focus {
    border-color: ${({ error }) => (error ? "#ff6b6b" : "#4a90e2")};
  }
  ;
`;
export const ErrorText = styled.span`
  font-size: 14px;
  color: #ff6b6b;
`;