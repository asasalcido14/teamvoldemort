import React, { useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import axios from "axios";

function Package() {

    const [packages, setPackages] = useState();

    useEffect(function() {
        api.get("/api/shipmaster")
    })

  return (
    <Row>
      <Col sm={12}>
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
      </Col>
    </Row>
  );
}


export default Package;
