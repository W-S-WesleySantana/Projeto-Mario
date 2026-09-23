import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-weight: 700;
  height: 10vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  img {
    width: 50px;
    padding: 10px 5px;
  }

  a {
    color: #fff;
    text-decoration: none;

    &:hover {
      color: rgb(200, 71, 59); 
      transition: 1s ease-in-out;
      box-shadow: 1px 2px 49px 23px rgba(121, 9, 9, 0.5);
      -webkit-box-shadow: 1px 2px 49px 23px rgba(127, 21, 21, 0.5);
      border-radius: 10px;
    }
  }
`;
