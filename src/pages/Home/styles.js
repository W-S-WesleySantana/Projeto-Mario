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

img{
    width: 50px;
    padding: 10px 5px;
   
}

a{
    &:hover{
        color:rgb(200, 71, 59); 
        transition: 1s ease-in-out;
        box-shadow: 1px 2px 49px 23px rgba(121, 9, 9, 0.5);
        -webkit-box-shadow: 1px 2px 49px 23px rgba(127, 21, 21, 0.5);
        border-radius: 10px;
    }
}

`

export const Container = styled.div`
display: flex;
height: 100vh;
width: 100vw;
align-items: center;
justify-content: space-evenly;

isolation: isolate;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; 
  transform: translate3d(0, 0, 0);



video{
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: -2;
    object-fit: cover;

}

&::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  
    background: linear-gradient(109deg, rgba(10, 12, 16, 0.99) 15%,rgba(10, 12, 16, 0.7) 50%,rgba(10, 12, 16, 0.99) 85%);
    z-index: -1;
    pointer-events: none;
  }


`
export const Button = styled.button`

margin: 20px 0 ;
padding: 10px;
background: red ;
border: none;
border-radius: 5px;
font-weight: bold;
cursor: pointer;

&:hover{
    background: #fff;
    color: red;
    box-shadow: 3px 30px 66px 26px rgba(111, 17, 17, 0.65);
    -webkit-box-shadow: 3px 30px 66px 26px rgba(111, 17, 17, 0.65);
}



`

export const LeftContainer = styled.div`

width: 50vw;
z-index: 1;



img{
    width: 200px;
}

p{
    font-size: 12px;
    margin-top: 10px;
}

`
export const RightContainer = styled.div`
z-index: 2;

img{
    height: 60vh;
}
`

export const IconWhatssap = styled.div`

img{
    width: 50px;
    position: fixed;
    right: 30px;
    bottom: 30px;
    cursor: pointer;

    &:hover{
        box-shadow: 5px 10px 71px 21px rgba(39, 94, 3, 0.65);
        -webkit-box-shadow: 5px 10px 71px 21px rgba(39, 94, 3, 0.65);
        border-radius: 30px;
    }

}

`

export const ConteinerForm = styled.div`

display: flex;
justify-content: center;
align-items:center ;
color: #000000;

form{
background-color: #fff;
position: fixed;
top :100px;
display: flex;
flex-direction: column;
border-radius: 10px;
padding: 20px;
width: 30vw;
height: 60vh;
justify-content: space-evenly;
}


input{
    padding: 10px;
    border-radius: 5px;
    border: 0.5px solidrgb(202, 202, 202);
    color: #000000;
    font-weight: 500;

}

textarea{

    border-radius: 5px;
    border: 0.5px solidrgb(202, 202, 202);
    color: #000000;
}


button{
    background: red;
    width: 100px;
    border-radius: 5px;
    cursor: pointer;
    padding: 8px;
    width: 228px;
    margin: 5px 0;

    &:hover{
        box-shadow: 34px 55px 100px -2px rgba(159, 29, 29, 1);
        -webkit-box-shadow: 34px 55px 100px -2px rgba(159, 29, 29, 1);}
}

`
