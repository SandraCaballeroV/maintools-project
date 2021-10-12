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
        <div> 
            <Cabecera /> 
             Registro de ventas
             <div>
        <div>
          <form className="flex flex-co">
          <input onChange={(e) => {setIdVenta(e.target.value);}} type="text" placeholder="ID de la venta"/>
          <input onChange = {cambioUsuario} type="text" placeholder="Usuario"/>
          <input type="text" placeholder="Fecha"/>
          <input type="text" placeholder="valor de la venta"/>
          <button type="button" onClick = {enviarDatosAlBack}>Enviar datos</button>
          </form>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>ID venta</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>dd/mm/aaaa</td>
            <td>########</td>
            <td>Usuario</td>
            <td>@</td>
          </tr>
       </tbody>
      </Table>
      </div>
    </div>
        </div>
        
    )
        
    
} 
export default RegistrarVenta