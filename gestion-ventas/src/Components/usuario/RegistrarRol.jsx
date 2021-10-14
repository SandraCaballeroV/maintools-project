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
const RegistrarRol = () => {
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
          <Card className="shadow p-3 mb-5 bg-body rounded ">
            <Card.Body>
              <Card.Title>Asignar Rol</Card.Title>
            </Card.Body>
            <Row className="mb-3">
              <Form.Group as={Col} md="3" controlId="ID">
                <Form.Label>ID</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="ID"
                  defaultValue=""
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="4" controlId="estadousuario">
                <Form.Label>Rolusuario</Form.Label>
                <Form.Select defaultValue="">
                  <option>Administrador</option>
                  <option>Vendedor</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} md="4" controlId="estadorol">
                <Form.Label>Estado Rol</Form.Label>
                <Form.Select defaultValue="">
                  <option>Autorizado</option>
                  <option>Inativo</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Row className="justify-content-md-center">
              <Col sm={12}>
                <Button type="submit">Enviar</Button>
              </Col>
            </Row>
          </Card>
        </Form>
      </Container> 
      {/* Inicio de tabla  */}
      <div class="container">
        <div class="row justify-content-center mt-3">
          <div class="card shadow mb-5 big-body rounded">
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
export default RegistrarRol;
