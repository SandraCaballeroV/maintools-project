import Cabecera from "../cabecera/Cabecera"

const RegistrarVenta = () =>{
    return(
        <div> 
            <Cabecera /> 
             Venta registrado
             <div>
      <table>
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
      </table>
    </div>
        </div>
        
    )
        
    
} 
export default RegistrarVenta