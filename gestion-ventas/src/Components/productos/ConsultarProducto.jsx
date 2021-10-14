import React, { useState, useEffect } from "react";
import Cabecera from "../cabecera/Cabecera";
import ActualizarProducto from "./ActualizarProducto";
import { Table, Container } from "react-bootstrap";
const ConsultarProducto = () => {
  const [consultProducto, setConsultProducto] = useState([]);
  const [formProduct, setFormProduct] = useState({})
 
  useEffect(() => {
    ConsultarProducto();
  },[]);

  async function ConsultarProducto() {
    try {
      await fetch("http://localhost:4000/api/productos")
        .then((res) => res.json())
        .then(
          (result) => {
            setConsultProducto(result);
          },
          (error) => {
            console.log(error);
          }
        );
    } catch (error) {
      console.log(error);
    }
  }

  const handleClick = id => e =>{ //Actualizar
    try {
        fetch(`http://localhost:4000/api/productos/${id}`)
        .then((res) => res.json())
        .then(
          (result) => {
            setFormProduct(result)
          },
          (error) => {
            console.log(error);
          }
        );
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Cabecera />
      <ActualizarProducto update = {formProduct} ConsultarProducto={ConsultarProducto}/>
      <Container>
        <form className="form-inline my-2 my-lg-0">
          <div className="row d-flex justify-content-end">
            <div className="col-sm-3">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
            <div className="col-md-1 mb-3">
              <button className="btn btn btn-dark my-2 my-sm-0" type="submit">
                Search
              </button>
            </div>
          </div>
        </form>
        <Table
          className="shadow p-3 mb-5 bg-body rounded"
          striped
          bordered
          hover
        >
          <thead>
            <tr className="table-primary">
              <th>#</th>
              <th>Nombre</th>
              <th>Valor unitario</th>
              <th>Estado producto</th>
              <th>Descripción</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {consultProducto.map((item) => (
              <tr key={item._id}>
                <td>{item._id}</td>
                <td>{item.nombre}</td>
                <td>{item.valor}</td>
                <td>{item.estado_producto}</td>
                <td>{item.Descripcion}</td>
                <td>{item.estado}</td>
                <td>
                  <a onClick={handleClick(item._id)}
                    title="Editar"
                    aria-label="a rocket blasting off" 
                    role="img"
                    style={{ cursor: "pointer" }}
                  >
                    🖋
                  </a>
                </td>
                <td>
                  <a
                    title="Eliminar"
                    aria-label="a rocket blasting off" 
                    role="img"
                    style={{ cursor: "pointer" }}
                  >
                    🗑
                  </a>
                </td>
              </tr>
            ))}

            {/* <tr>
              <td>3</td>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr> */}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default ConsultarProducto;
