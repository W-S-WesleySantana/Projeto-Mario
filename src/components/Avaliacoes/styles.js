import styled from "styled-components";

import { keyframes } from "styled-components";

const aparecer = keyframes`
  from { opacity: 0; visibility: hidden; }
  to { opacity: 1; visibility: visible; }
`;

export const Container = styled.div`

  height: 320px;
  max-width: 300px;
  margin: 30px auto;
  padding: 20px;
  background-color:rgb(240, 240, 240);
  border-radius: 8px;
 


  

  animation: ${aparecer} linear both;
  bottom: 20px;
  animation-timeline: scroll();
  --animation-range: 0 200vh;

  


h2{

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color:rgb(138, 138, 138);
}

img{
    position: fixed;
    bottom: 15px;
    right: 25px;
    width: 50px;
  }

`;

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
  width: 100%;

`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 10px 0 0 0;
  font-size: 12px;
  color: #000;
  font-weight: 500;
`;

export const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  width: auto;
  border-radius: 4px;
  font-size: 16px;
  resize: vertical;
  color: #000;
  font-weight: 500;
`;

export const EstrelasContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export const EstrelaBotao = styled.button`
  background: none;
  border: none;
  font-size: 32px;
  cursor: pointer;
  color: ${props => props.ativa ? "#ffc107" : "#e4e5e9"};
  transition: color 0.2s;
  
  &:hover {
    transform: scale(1.1);
  }
`;

export const BotaoEnviar = styled.button`
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ListaContainer = styled.div`
  margin-top: 20px;
  border-top: 2px solid #eee;
  padding-top: 20px;
  

 h3{
  color:rgb(138, 138, 138);
 }
`;

export const CardAvaliacao = styled.div`
  background:rgb(230, 230, 230);
  padding: 20px;
  border-radius: 6px;
  margin: 10px 0;



  p{
    color:rgb(0, 0, 0);
  }
 

`;

export const CardTopo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  color: #000;

  strong{
    color: #000;
  }

  
`;

export const ExibirEstrelas = styled.span`
  color: #ffc107;
  font-size: 18px;
  letter-spacing: 2px;
`;

export const DataTexto = styled.span`
  font-size: 12px;
  color: #888;
  display: block;
  margin-top: 8px;





`