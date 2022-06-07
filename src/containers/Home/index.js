import React, { useState, useRef } from "react";
import ImageBurger from '../../assets/burger-main.svg';
import axios from "axios";


import {
  Container,
  Image,
  H1,
  InputLabel,
  Input,
  Button,
} from './styles'



function App() {
  const [orders, setOrders] = useState([]);
  const inputPedido = useRef();
  const inputCliente = useRef();

  async function addNewOrder(){
    const {data: newOrder} = await axios.post("http://localhost:3002/orders",
      {
        order: inputPedido.current.value,
        clientName: inputCliente.current.value
      })
      setOrders([...orders, newOrder]);
  // ... -> spread operator, 'esparrama' os itens, já que o useState é imutavel (tira o que tem e coloca outro)
  }
 

  return (
    <Container>
      <Image alt="logo-main" src={ImageBurger} />

      <H1>Faça seu pedido!</H1>

      <InputLabel>Pedido</InputLabel>
      <Input ref={inputPedido} placeholder="Digite seu pedido" />

      <InputLabel>Nome do Cliente</InputLabel>
      <Input ref={inputCliente} placeholder="Seu nome" />

      <Button to="/pedidos" onClick={addNewOrder}>Novo Pedido</Button>

    </Container>
  );
}


export default App;
