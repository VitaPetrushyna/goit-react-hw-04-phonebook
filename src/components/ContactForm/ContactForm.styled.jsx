import styled from 'styled-components';

export const Form = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  padding: 8px;
  margin: 10px auto;
  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),
    1px 4px 6px rgb(0 0 0 / 16%);
  border-radius: 5px;
`;

export const LabelData = styled.label`
  display: flex;
  flex-direction: column;
  margin: 5px;
`;

export const InputData = styled.input`
  margin: 5px;
  padding: 5px;
  border-radius: 5px;
`;

export const AddBtn = styled.button`
  width: 200px;
  height: 30px;
  margin: 10px auto;
  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),
    1px 4px 6px rgb(0 0 0 / 16%);
  border-radius: 5px;
  background-color: #719ae2;
  cursor: pointer;
  color: #0d0d0d;
`;
