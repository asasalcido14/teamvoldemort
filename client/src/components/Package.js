import React, { useEffect, useState } from "react";
import { Row, Col, Button, Card } from "react-bootstrap";
import axios from "axios";

function Package() {
  const [packages, setPackages] = useState();

  useEffect(() => {
    axios.get("/api/shipmaster");
  }, [])

  function handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  return (
    <Row>
      <Col sm={12}>
        <Card>
          <Row>
            <Col sm={12}>{/* description */}</Col>
          </Row>
          <Row>
            <Col sm={4}>
              <Button variant="primary">Track</Button>
            </Col>
            <Col sm={4}>
              <Button variant="success">Arrived</Button>
            </Col>
            <Col sm={4}>
              <Button variant="danger">Cancelled</Button>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
}

export default Package
