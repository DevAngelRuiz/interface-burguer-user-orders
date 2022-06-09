import React, { useState, useEffect } from "react";
import ImageOrderBurger from '../../assets/burger-order.svg';
import axios from "axios";
import Trash from '../../assets/trash.svg'

import {
  Container,
  Image,
  H1,
  Button,
  Order
} from './styles'



function App() {
    const [orders, setOrders] = useState([]);
  
  // useEffect - Efeito colateral, chamando quando a aplicação inicia ou quando um estado que está dentro do array[] é alterado/inserido  

useEffect(()=>{
  async function fetchOrders(){
    const {data: newOrdes} = await axios.get("http://localhost:3002/orders");
    setOrders(newOrdes);
  }
  fetchOrders()
}, [])

async function deleteOrder(userId) {
  try {
    await axios.delete(`http://localhost:3002/orders/${userId}`,{
      header:{
        'Access-Control-Allow-Origin':'*',
      }
    })
    const newOrdes = orders.filter((order) => order.id !== userId);
    setOrders(newOrdes);
  }

  catch (error) {
    console.log(error)
  }
};



  return (
    <Container>
      <Image alt="pedido-embalado" src={ImageOrderBurger} />

      <H1>Pedidos</H1>


      <ul>
        {orders.map((order) => (
          <Order key={order.id}>
            <p>{order.order} </p>
            <p><strong>{order.clientName}</strong></p>
            <button onClick={() => deleteOrder(order.id)}>
              <img src={Trash} alt="lata-de-lixo" />
            </button>
          </Order>



        ))}
      </ul>

      <Button to="/">Voltar</Button>


    </Container>
  );
}


export default App;
