import Cabecera from "../cabecera/Cabecera"
import { Table } from "react-bootstrap"
const RegistrarVenta = () =>{
    return(
        <div> 
            <Cabecera /> 
             Venta registrado
             <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Direccion</th>
            <th>Numero</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Usuario</td>
            <td>Direccion</td>
            <td>########</td>
            <td>Correoelectronico</td>
          </tr>
       </tbody>
      </Table>
    </div>
        </div>
        
    )
        
    
} 
export default RegistrarVenta