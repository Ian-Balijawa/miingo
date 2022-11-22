import styled from 'styled-components';

export const Button = styled.button`
  background: #1F6FEB;
  border-radius: 5px;
  border: 1px solid #ccc;
  outline:none;
  color: white;
  margin: 0 auto;
  padding: 0.25em 1em;
  width:100%;
  &:hover {
    filter: brightness(1.2);
    transition: all 0.7s ease-in-out;
  }
  &:active {
    z-index: 1;
  }
`;