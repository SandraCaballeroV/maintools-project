import Cabecera from "../cabecera/Cabecera"
import { Table } from "react-bootstrap"
import React, {useEffect, useState,form} from "react"

const RegistrarVenta = () =>{

  const [idVenta,setIdVenta] = useState()
  useEffect(() =>{
    console.log('Hola, soy un use effect que se ejecuta solo una vez cuando la pagina se rederiza');
    //paso 2
    //paso 3
  },[]);

  //Otro useEffect
  useEffect(()=>{
    console.log('funcion que se ejecuta al cambiar el valor de idVenta');
    console.log('la variable es:',idVenta);
  },[idVenta]);
  //Capturar info del input
  const enviarDatosAlBack = () =>{
    console.log("el id es",idVenta);
  }

  const cambioUsuario = (e)=>{
    console.log(e.target.value);
  }
  //const mostrarVentas = ()=>{
    //const [ventas,setVentas] = useState([]);
  //}
//informacion de la base de datos
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

  
    return(
        <body> 
            <Cabecera />
            <div className = "mb-5">
              <h2>Registro de ventas</h2>
            </div> 
              
            
        <div>
          <form > 
          <input onChange={(e) => {setIdVenta(e.target.value);}} type="text" placeholder="Fecha de la venta"/>&nbsp;   
          <input onChange = {cambioUsuario} type="text" placeholder="ID venta"/>&nbsp;
          <input type="text" placeholder="Nombre del cliente"/>&nbsp;
          <input type="text" placeholder="Identificación del cliente"/>&nbsp;
          <input type="text" placeholder="Vendedor"/>&nbsp;
          </form>
        </div>
        <div className = "mt-3">
        <button type="button" onClick = {enviarDatosAlBack}>Registrar venta</button>
        </div>
        <div className = "border border-dark mt-5 ">
          <Table striped bordered hover >
        <thead>
          <tr>
            <th>Fecha</th>
            <th>ID venta</th>
            <th>Nombre cliente</th>
            <th>Identificación</th>
            <th>Vendedor</th>
          </tr>
        </thead>
        <tbody>
        {ventas.map((venta)=>{
          return(
                      <tr>
                      <td>{venta.Fecha}</td>
                      <td>{venta.idVenta}</td>
                      <td>{venta.nombreCliente}</td>
                      <td>{venta.identificacionCliente}</td>
                      <td>{venta.vendedor}</td>
                    </tr>
          )
        })}
        </tbody>
      </Table>
      </div>
    </body>
        
        
    )
        
    
} 
export default RegistrarVenta