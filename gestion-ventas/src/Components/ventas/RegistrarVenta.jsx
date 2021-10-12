import Cabecera from "../cabecera/Cabecera"
import { Table } from "react-bootstrap"
import React, {useEffect, useState} from "react"
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

    return(
        <body> 
            <Cabecera />
            <div className = "mb-5">
              <h2>Registro de ventas</h2>
            </div> 
              
            
        <div>
          <form className="flex flex-co">
          <input onChange={(e) => {setIdVenta(e.target.value);}} type="text" placeholder="Fecha de la venta"/>
          <input onChange = {cambioUsuario} type="text" placeholder="ID venta"/>
          <input type="text" placeholder="Nombre del cliente"/>
          <input type="text" placeholder="Identificación del cliente"/>
          <input type="text" placeholder="Vendedor"/>
          <button type="button" onClick = {enviarDatosAlBack}>Registrar venta</button>
          </form>
        </div>

        <div className = "border border-dark mt-5">
          <Table striped bordered hover>
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
          <tr>
            <td>dd/mm/aaaa</td>
            <td>########</td>
            <td>Usuario</td>
            <td>########</td>
            <td>Vendedor</td>
          </tr>
       </tbody>
      </Table>
      </div>
    </body>
        
        
    )
        
    
} 
export default RegistrarVenta