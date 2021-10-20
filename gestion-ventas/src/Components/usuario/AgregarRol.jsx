import React, { useState } from "react";
import Cabecera from "../cabecera/Cabecera";
import {
  Form,
  Col,
  InputGroup,
  Row,
  Button,
  Container,
  Card,
} from "react-bootstrap";

const AgregarRol = () => {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      alert("Dato Añadido");
      form.reset();
    }
    setValidated(true);
  };
  function actualizar() {
    alert("Actualizar");
  } 
  function eliminar(){
    alert("eliminar")
  }

  return (
    <div>
      <Cabecera />
      <Container> 
      
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="justify-content-md-center">
          <Card className="shadow p-3 mb-5 bg-body rounded justify-content-md-center " style={{ width: '60%' }}>
            <Card.Body>
              <Card.Title>Asignar Rol</Card.Title>
            </Card.Body>
            
              <Form.Group as={Row} controlId="Nombre Rol" className="justify-content-md-center">
                <Form.Label column sm="2">
                  Nombre Rol
                </Form.Label>
                <Col sm="3">
                  <Form.Control
                    required
                    type="text"
                    placeholder="Nombre Rol"
                    defaultValue=""
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Col>
              </Form.Group>
           

            <Row className="justify-content-md-center mt-3">
              <Col sm={12}>
                <Button type="submit">Enviar</Button>
              </Col>
            </Row>
          </Card>
          </Row>
        </Form> 
       
      </Container>   
      {/* inicio de formulario */}
      <div class="container">
        <div class="row justify-content-center mt-3" >
          <div class="card shadow mb-6 big-body rounded" style={{ width: '60%' }} >
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Rol usuario</th>
                  <th scope="col">Estado rol</th>
                </tr>
              </thead>
              <tbody id="registro">
                <tr>
                  <th scope="row"></th>
                  <td colspan="3"></td>
                  <td></td>
                  <td></td>
                  <td
                    id="actualizar"
                    onClick={actualizar}
                    style={{ cursor: "pointer" }}
                  >
                    🖊
                  </td>
                  <td id="eliminar" onClick={eliminar} style={{ cursor: "pointer" }} >
                    🗑
                  </td>
                </tr>
                <tr>
                  <th scope="row"></th>
                  <td colspan="3"></td>
                  <td></td>
                  <td></td>
                  <td id="actualizar" onClick={actualizar}style={{ cursor: "pointer" }}>
                    🖊
                  </td>
                  <td id="eliminar" onClick={eliminar}style={{ cursor: "pointer" }}>
                    🗑
                  </td>
                </tr>
                <tr>
                  <th scope="row"></th>
                  <td colspan="5"></td>
                  <td id="actualizar" onClick={actualizar} style={{ cursor: "pointer" }}>
                    🖊
                  </td>
                  <td id="eliminar" onClick={eliminar}style={{ cursor: "pointer" }}  >
                    🗑
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AgregarRol;
