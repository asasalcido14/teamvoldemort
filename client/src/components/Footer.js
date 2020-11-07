import Axios from "axios";
import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

function Footer(props) {

    const [packageState, setPackageState] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPackageState({ ...packageState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("/api/new", {
      trackNum: packageState.trackNum,
      description: packageState.description,
      user: props.currentUser.id,
    }).then(function(data){

    });
    setPackageState({
        description: "",
        trackNum: ""
    });
  };

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
                  value={packageState.description}
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
                  value={packageState.trackNum}
                  onChange={handleChange}
                  name={"trackNum"}
                  type="text"
                />
              </Form.Group>
            </Col>
            <Col sm={2}>
              <Button variant="primary" type="submit">
                Add
              </Button>
            </Col>
          </Form.Row>
        </Form>
      </Col>
    </Row>
  );
}

export default Footer;
