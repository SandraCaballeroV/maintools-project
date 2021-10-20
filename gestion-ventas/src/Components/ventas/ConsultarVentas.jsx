import Cabecera from "../cabecera/Cabecera"
import { Table } from "react-bootstrap"
import React, {useEffect, useState} from "react"
function Notes(){
    const[notes, setNotes] = useState([{
      fecha:'',
      idVenta:'',
      nombreCliente:'',
      tipoIdentificacion:'',
      numeroIdentificacion:'',
      nombreVendedor:''
    }])

    useEffect(()=>{
      fetch("http://localhost:9000/api/listaventas").then(res =>{
      if(res.ok){
        return res.json()
      }
      }).then(jsonRes => setNotes(jsonRes))
    })
    return <div>
    <Cabecera />
      <h1>Lista de ventas</h1>
      
      <Table striped bordered hover className="container">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>ID venta</th>
            <th>Nombre cliente</th>
            <th>Tipo de identificación</th>
            <th>Número de identificación</th>
            <th>Vendedor</th>
          </tr>
        </thead>
        <tbody>
      {notes.map(note =>
      <tr>
        <td>{note.fecha}</td>
        <td>{note.idVenta}</td>
        <td>{note.nombreCliente}</td>
        <td>{note.tipoIdentificacion}</td>
        <td>{note.numeroIdentificacion}</td>
        <td>{note.nombreVendedor}</td>
      </tr>
      
        )}
      </tbody>
      </Table>
      </div>
  }
  export default Notes;