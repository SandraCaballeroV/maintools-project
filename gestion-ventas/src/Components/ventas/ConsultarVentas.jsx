import Cabecera from "../cabecera/Cabecera"
import { Table } from "react-bootstrap"
import React, {useEffect, useState} from "react"
function Notes(){
    const[notes, setNotes] = useState([{
      fecha:'',
      idVenta:'',
      nombreCliente:''
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
      
      <Table striped bordered hover >
        <thead>
          <tr>
            <th>Fecha</th>
            <th>ID venta</th>
            <th>Nombre cliente</th>
          </tr>
        </thead>
        <tbody>
      {notes.map(note =>
      <tr>
        <td>{note.fecha}</td>
        <td>{note.idVenta}</td>
        <td>{note.nombreCliente}</td>
      </tr>
      
        )}
      </tbody>
      </Table>
      </div>
  }
  export default Notes;