import Axios from "axios";
import React from "react";
import UserContext from "../utils/userContext"
import useContext from "react";
import { Row, Col, Form, Button } from "react-bootstrap";


function Footer() {
  const state = {
    description: "",
    trackNum: "",
  };

  const { name, id } = useContext(UserContext);
  
  const handleChange=(e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  const handleSubmit= (e) => {
      e.preventDefault()
      Axios.post("/api/new", {
        trackNum: state.trackNum,
        description: state.description,
        User: ""
      })
  }

  return (
    <Row>
      <Col sm={12}>
        <h3>Add a Package:</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Row>
            <Col sm={5}>
              <Form.Group>
                <Form.Label>What you ordered:</Form.Label>
                <Form.Control
                  value={state.description}
                  onChange={handleChange}
                  name={"description"}
                  type="text"
                />
              </Form.Group>
            </Col>
            <Col sm={5}>
              <Form.Group>
                <Form.Label>Tracking Number:</Form.Label>
                <Form.Control
                  value={state.trackNum}
                  onChange={handleChange}
                  name={"tracking"}
                  type="text"
                />
              </Form.Group>
            </Col>
            <Button variant="primary" type="submit"></Button>
          </Form.Row>
        </Form>
      </Col>
    </Row>
  );
}

export default Footer;
