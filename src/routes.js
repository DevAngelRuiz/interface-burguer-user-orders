import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./containers/Home"
import Pedidos from "./containers/Pedidos"
    
function MyRoutes(){
    return(
        <Router>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/pedidos" element={<Pedidos/>}/>

        </Routes>
        </Router>
    )
}

export default MyRoutes