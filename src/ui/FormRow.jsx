import React from 'react';
import styled from 'styled-components';
const InputContainer = styled.div`
  position: relative;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;
const Label = styled.label`
  font-size: 14px;
  font-weight:500;
  color: #313131;
`;
const Error = styled.span`
  font-size: 12px;
  color: red;
  position: absolute;
  bottom: -17px;
`;

 function FormRow ({label, error, children}){
  console.log(error)
  return (
    <InputContainer>


      {label && <Label htmlFor={children?.props?.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </InputContainer>
  );
};

export default FormRow;
