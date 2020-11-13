import Axios from "axios";
import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import "../pages/FormPage.css";

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
      user: props.currentUser.id
    }).then(function(data){
      props.setPackages([...props.packages, data.data])
      setPackageState({
          description: "",
          trackNum: ""
      });
    });
  };

  return (
    <Row className="footer">
      <Col xs={12}>
        <h3>Add a Package:</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Row>
            <Col xs={12} sm={5}>
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
            <Col xs={10} sm={5}>
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
            <Col xs={2} sm={2}>
              <br></br>
              <Button className="addbutton" variant="light" type="submit">
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
