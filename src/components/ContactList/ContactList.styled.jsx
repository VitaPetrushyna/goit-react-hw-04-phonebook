import styled from 'styled-components';

export const ListContacts = styled.ul`
  width: 400px;

  margin: 0 auto;
  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),
    1px 4px 6px rgb(0 0 0 / 16%);
  border-radius: 5px;
`;

export const ContactsItem = styled.li`
  margin: 10px;
`;

export const DeleteBtn = styled.button`
  margin-left: 10px;
  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),
    1px 4px 6px rgb(0 0 0 / 16%);
  border-radius: 5px;
  background-color: #719ae2;
  cursor: pointer;
  color: #0d0d0d;
  border: gray;
`;
