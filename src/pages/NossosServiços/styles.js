import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  box-sizing: border-box;
  isolation: isolate;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; 
  transform: translate3d(0, 0, 0);



  video {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -2;
    object-fit: cover;
  }

  &::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: linear-gradient(109deg, rgba(10, 12, 16, 0.99) 15%, rgba(10, 12, 16, 0.7) 50%, rgba(10, 12, 16, 0.99) 85%);
    z-index: -1;
    pointer-events: none;



  }


  img{
    position: fixed;
    bottom: 15px;
    right: 25px;
    width: 50px;
  }

 
`;



