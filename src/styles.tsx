import styled from "styled-components";

export const Input = styled.input`
  height: 30px;
  width: 300px;
`;

export const Button = styled.button`
  margin-top: 20px;
  height: 30px;
  width: 300px;
  font-weight: bold;
`;

export const Header = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  width: 100%;
  justify-content: space-around;
  background-color: RGBA(191, 191, 189, 0.3);
`;

export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  margin-top: 20px;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  
`;

export const Block = styled.div`
  max-width: 500px;
  margin: 2rem auto;
  border: 1px dashed #bfbfbd;
  border-radius: 10px;
  padding: 2rem;
  label {
    display: block;
  }
`;
