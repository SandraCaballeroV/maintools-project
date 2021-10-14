import logo from "./logo.svg";
import "./App.css";

import "bootstrap/dist/css/bootstrap.css";
import { Route } from "react-router-dom";
import "./Components/ventas/RegistrarVenta";
import RegistrarVenta from "./Components/ventas/RegistrarVenta";
import Login from "./Components/login/Login";
import RegistrarUsuario from "./Components/usuario/RegistrarUsuario";
import RegistrarRol from "./Components/usuario/RegistrarRol"; 
import AgregarRol from "./Components/usuario/AgregarRol";
import RegistrarProducto from "./Components/productos/RegistrarProducto";
import Piepagina from "./Components/pie_pagina/Piepagina";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Login} />
      <Route exact path="/RegistrarVenta" component={RegistrarVenta} />
      <Route exact path="/RegistrarUsuario" component={RegistrarUsuario} />
      <Route exact path ="/RegistrarRol" component={RegistrarRol} /> 
      <Route exact path ="/AgregarRol" component={AgregarRol} />
      <Route exact path="/RegistrarProducto" component={RegistrarProducto} />
      <Piepagina/>
    </div>
  );
}

export default App;
