import styled from "styled-components";
import { Link } from "react-router-dom";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: black;
    height: 100vh;


`;

export const Image = styled.img`
margin: 20px 25px;
display: flex; 
align-items: center;

`;

export const H1 = styled.h1`
font-weight: 700;
font-size: 28px;
line-height: 33px;
text-align: center;
color: #FFFFFF;
margin-bottom: 40px;
display: flex; 
align-items: center;

`;


export const Button = styled(Link)`
display: flex; 
align-items: center;
width: 342px;
height: 58px;
background: rgba(255, 255, 255, 0.14);
border-radius: 14px;
cursor: pointer;
font-style: normal;
font-weight: 900;
font-size: 17px;
line-height: 2px;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
color: #FFFFFF;
text-decoration: none;
margin-top: 40px;
:hover{
    opacity: 0.8; 
}
:active{
    opacity: 0.5; 
}

`; 
export const Order = styled.li`
width: 342px;
height: 58px;
background: rgba(255, 255, 255, 0.25);
border-radius: 14px;
display: flex;
justify-content: space-around;
align-items: center;
margin-top: 20px;
p{
font-style: normal;
font-weight: 400;
font-size: 23px;
line-height: 28px;
color: #FFFFFF;

}

button {
    border: none; 
    background: none;
    cursor: pointer;
}
`;