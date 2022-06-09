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
height: 100px;
background: rgba(255, 255, 255, 0.25);
border-radius: 14px;
/* display: flex;
justify-content: space-around;
flex-direction: column;
padding-left: 15px; */
display: grid;
grid-template-columns: 5fr 1fr;
grid-template-rows: 1fr 1fr 1fr;
margin-top: 20px;
p{
font-style: normal;
font-weight: 400;
font-size: 21px;
line-height: 28px;
color: #FFFFFF;
grid-column: 1/4;
padding-left: 15px;
padding-top: 10px;


}

button {
    border: none; 
    background: none;
    cursor: pointer;
    grid-column: 5/4;
    grid-row: 2/3;
    padding-right: 15px;
}
`;