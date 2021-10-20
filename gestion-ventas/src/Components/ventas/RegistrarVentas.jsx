import Cabecera from "../cabecera/Cabecera"
import { Table } from "react-bootstrap"
import React, {useEffect, useState,form} from "react"
import axios from "axios"
import { Component } from "react"
//import { response } from "express"
const RegistrarVenta = () =>{
  const [input,setInput] = useState({
    fechaVenta: '',
    idVenta:'',
    nombreCliente:'',
    tipoIdentificacion:'',
    numeroIdentificacion:'',
    nombreVendedor:''
  })

  const ventas = [
    {
      Fecha:"dd/mm/aaaa",
      idVenta:"111",
      nombreCliente:"cliente1",
      identificacionCliente:"12345",
      vendedor:"usuario1"
    },
    {
      Fecha:"dd/mm/aaaa",
      idVenta:"222",
      nombreCliente:"cliente1",
      identificacionCliente:"12345",
      vendedor:"usuario2"
    },
    {
      Fecha:"dd/mm/aaaa",
      idVenta:"333",
      nombreCliente:"cliente1",
      identificacionCliente:"12345",
      vendedor:"usuario3"
    },
    {
      Fecha:"dd/mm/aaaa",
      idVenta:"444",
      nombreCliente:"cliente1",
      identificacionCliente:"12345",
      vendedor:"usuario4"
    },
    {
      Fecha:"dd/mm/aaaa",
      idVenta:"555",
      nombreCliente:"cliente1",
      identificacionCliente:"12345",
      vendedor:"usuario5"
    }
  ];
  
  //useEffect(()=>{
    //obtener lista de vehiculos desde el backend
   //setVentas(ventas);
  //},)
  function handleChange(event){
    const{name, value} = event.target;

    setInput(prevInput => {
      return{
        ...prevInput,
        [name]:value
      }
    })
  }
  
  function handleClick(event){
    event.preventDefault();
    const nuevaVenta = {
      fecha: input.fechaVenta,
      idVenta: input.idVenta,
      nombreCliente: input.nombreCliente,
      tipoIdentificacion: input.tipoIdentificacion,
      numeroIdentificacion: input.numeroIdentificacion,
      nombreVendedor: input.nombreVendedor
    }
    axios.post('http://localhost:9000/api/ventas',nuevaVenta)
    alert('Venta registrada correctamente')
  }

  
  //const listaVentas = {
    //fecha: venta.fechaVenta,
    //idVenta: venta.idVenta,
    //nombreCliente: venta.nombreCliente
  //}


    return(
        <body> 
            <Cabecera />
            <div className = "mb-5">
              <h2>Registro de ventas</h2>
            </div> 
              
            
            
            
        <div className = "container">
          <form method = "post"> 
          <input type="text" placeholder="Fecha de la venta" name="fechaVenta" value = {input.fechaVenta} onChange = {handleChange}/>&nbsp;   
          <input type="text" placeholder="ID venta" name = "idVenta" value = {input.idVenta} onChange = {handleChange}/>&nbsp;
          <input type="text" placeholder="Nombre del cliente" name = "nombreCliente" value = {input.nombreCliente} onChange = {handleChange}/>&nbsp;
          <input type="text" placeholder="Tipo de identificación" name = "tipoIdentificacion" value = {input.tipoIdentificacion} onChange = {handleChange}/>&nbsp;
          <input type="text" placeholder="Número de identificación" name = "numeroIdentificacion" value = {input.numeroIdentificacion} onChange = {handleChange}/>&nbsp;
          <input type="text" placeholder="Nombre del vendedor" name = "nombreVendedor" value = {input.nombreVendedor} onChange = {handleChange}/>&nbsp;
          </form>
        </div>
        <div className = "mt-3">
        <button type="button" onClick = {handleClick}>Registrar venta</button>
        </div>
  

    </body>
        
        
    )
        
    
} 
export default RegistrarVenta