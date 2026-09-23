import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;

 
`;

export const ConteinerForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000000;
  position: relative;



 
 

  form {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding: 30px;
    width: 30vw;
    height: auto;
  
    @media (max-width:500px){

      width :70vw ;

}
   
  }

  input {
    padding: 10px;
    border-radius: 5px;
    border: 0.5px solid rgb(202, 202, 202);
    color: #000000;
    font-weight: 500;
    margin: 10px 0;
  
  }

  textarea {
    border-radius: 5px;
    border: 0.5px solid rgb(202, 202, 202);
    color: #000000;
    padding: 10px;
    height: 100px;
    resize: none;
  }

  button {
    background: red;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    padding: 8px;
    width: auto;
    margin: 5px 0;
    font-weight: bold;
    align-self: center;

    &:hover {
      box-shadow: 34px 55px 100px -2px rgba(159, 29, 29, 1);
      -webkit-box-shadow: 34px 55px 100px -2px rgba(159, 29, 29, 1);
    }
  }




`;

export const BtnFechar = styled.button`
  position: absolute;
  top: 0;
  right: 5px;
  border: none;
  font-size: 12px;
  cursor: pointer;
  z-index: 10;
  font-weight: bold;


  &:hover {
 background:#811515;
 font-size: 16px;


  }
`;
