import React, { useState } from "react";
import {
  Container,
  Card,
  Form,
  Row,
  InputGroup,
  Col,
  Button,
} from "react-bootstrap";
import Cabecera from "../cabecera/Cabecera";
const RegistrarProducto = () => {
  const [validated, setValidated] = useState(false);
  const [loader, setLoader] = useState(false)

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      setLoader(true)
      event.preventDefault();
      let nombre = form["productName"].value;
      let valor = form["valueUnit"].value;
      let estado_producto = form["stateProduct"].value;
      let descripcion = form["description"].value;
      const dataform = {
        nombre: nombre,
        valor: valor,
        estado_producto: estado_producto,
        Descripcion: descripcion,
        estado: "Activo",
      };
      setTimeout(() => {
        registrarProducto(dataform);
        form.reset()
      }, 5000);
    }
    setValidated(true);
  };

  async function registrarProducto(dataform) {
    try {
      let config = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataform),
      };
      let res = await fetch("http://localhost:4000/api/productos", config);
      let json = await res.json();
      console.log(json);
      alert("Registro exitoso");
      setLoader(false)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Cabecera />
      <Container>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Card
            className="shadow p-3 mb-5 bg-body rounded"
            style={{ width: "100%" }}
          >
            <Card.Body>
              <Card.Title>Registrar Producto</Card.Title>
            </Card.Body>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="productName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  required
                  name="nombre"
                  type="text"
                  placeholder="Digite el nombre del producto"
                  defaultValue=""
                />
                <Form.Control.Feedback type="invalid">
                  Por favor digite un nombre de producto.
                </Form.Control.Feedback>
                <Form.Control.Feedback>Muy bien!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="valueUnit">
                <Form.Label>Valor unitario</Form.Label>
                <Form.Control
                  required
                  name="valor"
                  type="text"
                  placeholder="Digite el valor unitario"
                  defaultValue=""
                />
                <Form.Control.Feedback type="invalid">
                  Por favor Digite el valor unitario.
                </Form.Control.Feedback>
                <Form.Control.Feedback>Muy bien!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="stateProduct">
                <Form.Label>Estado</Form.Label>
                <InputGroup hasValidation>
                  <Form.Select defaultValue="Disponible" name="estado_producto">
                    <option value="Disponible">Disponible</option>
                    <option value="No disponible">No disponible</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    Por favor elija un estado.
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Muy bien!</Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="description">
                <Form.Label>Descripción</Form.Label>
                <Form.Control
                  as="textarea"
                  name="descripcion"
                  placeholder="Digite la descripción"
                  defaultValue=""
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Por favor digite la descripción del producto.
                </Form.Control.Feedback>
                <Form.Control.Feedback>Muy bien!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="justify-content-md-center">
              <Col sm={12}>
                <Button type="submit">
                  { loader == false ? "Registrar Producto" : <img src={"https://acegif.com/wp-content/uploads/loading-25.gif"} alt="gif de algo" style={{ width: "20px" }}/>}
                </Button>
              </Col>
            </Row>
          </Card>
        </Form>
      </Container>
    </div>
  );
};
export default RegistrarProducto;
