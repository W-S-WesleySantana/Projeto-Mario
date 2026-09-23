import styled from "styled-components";

export const LeftContainer = styled.div`
  width: 50vw;
  z-index: 1;

  img {
    width: 200px;
  }

  p {
    font-size: 12px;
    margin-top: 10px;
    color: #fff;
    line-height: 1.6;
  }
`;

export const Button = styled.button`
  margin: 20px 0;
  padding: 10px;
  background: red;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: #fff;
    color: red;
    box-shadow: 3px 30px 66px 26px rgba(111, 17, 17, 0.65);
    -webkit-box-shadow: 3px 30px 66px 26px rgba(111, 17, 17, 0.65);
  }
`;
