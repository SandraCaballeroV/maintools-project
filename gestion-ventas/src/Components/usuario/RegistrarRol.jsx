import React, { useState, useEffect } from "react";
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
  const [consulusuario, setConsulusuario] = useState([]);
  const [actualizar, setactualizar] = useState([]);
  const [consulid, setConsulid] = useState([]);
  useEffect(() => {
    ConsultarUsuario();
  }, []);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      let id = form["ID"].value;
      let estado_usuaio = form["estadousuario"].value;
      let rol = form["estadorol"].value;
      event.preventDefault();
      asignarRol(id, estado_usuaio, rol, form);
    }
    setValidated(true);
  };
  async function asignarRol(id, estado_usuaio, rol, form) {
    try {
      fetch(`http://localhost:4000/api/user/${id}`)
        .then((res) => res.json())
        .then(
          (result) => {
            setConsulid(result);
          },
          (error) => {
            console.log(error);
          }
        );
    } catch (error) {
      console.log(error);
    }
    const data = {
      nombre: consulid.nombre,
      apellido: consulid.apellido,
      Correo: consulid.Correo,
      estado_usuaio: estado_usuaio,
      estado: consulid.estado,
      rol: rol,
    };
    try {
      let config = {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      let res = await fetch(`http://localhost:4000/api/user/${id}`, config);
      let json = await res.json();
      console.log(json);
      setConsulid([]);
      setactualizar([]);
      ConsultarUsuario();
      form.reset();
      alert("Registro exitoso");
    } catch (error) {
      console.log(error);
    }
  }
  async function ConsultarUsuario() {
    try {
      await fetch("http://localhost:4000/api/user")
        .then((res) => res.json())
        .then(
          (result) => {
            setConsulusuario(result);
          },
          (error) => {
            console.log(error);
          }
        );
    } catch (error) {
      console.log(error);
    }
  }
  const handleClick = (id) => (e) => {
    //Actualizar
    try {
      fetch(`http://localhost:4000/api/user/${id}`)
        .then((res) => res.json())
        .then(
          (result) => {
            setactualizar(result);
          },
          (error) => {
            console.log(error);
          }
        );
    } catch (error) {
      console.log(error);
    }
  };
  function eliminar() {
    alert("eliminar");
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
                  defaultValue={actualizar._id}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="3" controlId="estadousuario">
                <Form.Label>Rol usuario</Form.Label>
                <Form.Select defaultValue="">
                  <option>Administrador</option>
                  <option>Vendedor</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} md="3" controlId="estadorol">
                <Form.Label>Estado Usuario</Form.Label>
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
      <div className="container">
        <div className="row justify-content-center mt-3">
          <div className="card shadow mb-5 big-body rounded">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Rol usuario</th>
                  <th scope="col">Estado usuario</th>
                </tr>
              </thead>
              <tbody id="registro">
                {consulusuario.map((item) => (
                  <tr key={item._id}>
                    <th scope="row">{item._id}</th>
                    <td>{item.nombre}</td>
                    <td>{item.estado_usuaio}</td>
                    <td>{item.rol}</td>
                    

                    <td
                      id="actualizar"
                      onClick={handleClick(item._id)}
                      style={{ cursor: "pointer" }}
                    >
                      🖊
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RegistrarRol;
