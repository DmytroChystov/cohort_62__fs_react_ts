import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
    padding: 100px;
    gap: 30px;
`;
export const NoteForm = styled.form`
  display: flex;    
    flex-direction: column;
    gap: 20px;
    width: 300px;
`;

export const ButtonControl = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
`;
export const Notes = styled.div`
    width: 400px;       
    margin-top: 20px;
`;
export const NoteItem = styled.div`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-top: 10px;
`;  

export const NoteTitle = styled.h2`
    margin-bottom: 10px;
`;

