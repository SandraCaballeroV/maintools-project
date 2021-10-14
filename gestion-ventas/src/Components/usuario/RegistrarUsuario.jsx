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
let resultado = "";
var data = [];
const RegistrarUsuario = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      let Indentificador = form["Indentificador"].value;
      let nombre = form["nombre"].value;
      let apellido = form["apellido"].value;
      let Correo = form["Correo"].value;
      let estado = form["estado"].value;
      event.preventDefault();
      data.push({
        Indentificador: Indentificador,
        nombre: nombre,
        apellido: apellido,
        Correo: Correo,
        estado: estado
      });
      alert("Dato Añadido");
      form.reset();
      console.log(data);
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
          <Card className="shadow p-3 mb-5 bg-body rounded">
            <Card.Body>
              <Card.Title>Registro Usuario</Card.Title>
            </Card.Body>
            <Row className="mb-3">
              <Form.Group as={Col} md="2" controlId="Indentificado">
                <Form.Label>Indentificador</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Indentificador"
                  defaultValue=""
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="2" controlId="nombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="nombre"
                  defaultValue=""
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="2" controlId="apellido">
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="apellido"
                  defaultValue=""
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="2" controlId="Correo">
                <Form.Label>Correo</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="Correo">@</InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Correo"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please choose a username.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="estado">
                <Form.Label>Estado</Form.Label>
                <Form.Select defaultValue="">
                  <option>Pendiente</option>
                  <option>Autorizado</option>
                  <option>No autorizado</option>
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
      {/* Inicio table  */}
      <div class="container">
        <div class="row justify-content-center mt-3">
          <div class="card shadow mb-5 big-body rounded">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Apallido</th>
                  <th scope="col" colspan="1">
                    Correo
                  </th>
                  <th scope="col" colspan="2">
                    Estado
                  </th>
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
<<<<<<< HEAD
      </div>
    </div>
  );
};

export default RegistrarUsuario;
=======
    )
} 
export default RegistrarUsuario

>>>>>>> a75800a128737fc53f50bce46040da333393cf16
