import styled from "@emotion/styled";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
`;

export const Card = styled.div`
    border: 1px solid #ccc; 
    border-radius: 8px;
    padding: 15px;
    margin-bottom: 20px;
    width: 300px;
`;

export const Title = styled.h1`
    margin-bottom: 20px;
`;  
export const Text = styled.p`
    font-size: 16px;
`;

export const ErrorText = styled.p`
    color: red;
`;
export const Button = styled.button`
    padding: 10px 15px; 
    font-size: 16px;
    border-radius: 5px;
    border: none; 
    background-color: #28a745;
    color: #fff;
    cursor: pointer;
`;

