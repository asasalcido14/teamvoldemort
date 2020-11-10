import React, { useEffect, useState } from "react";
import { Row, Col, Button, Card } from "react-bootstrap";
import Axios from "axios";

function Package(props) {
  const [packages, setPackages] = useState();

  useEffect(() => {
    Axios.get("/api/shipmaster/" + props.currentUser.id).then((data) => {
      setPackages(data.data);
      console.log(data.data)
    });
  }, []);

  return (
    <Row>
      <Col xs={12}>
          <Row>
            <Col xs={12}></Col>
          </Row>
          <Row>
            <Col xs={4} >
              <Button  variant="primary">
                Track
              </Button>
            </Col>
            <Col xs={4} >
              <Button variant="success">Arrived</Button>
            </Col>
            <Col xs={4}>
              <Button variant="danger">Cancelled</Button>
            </Col>
          </Row>
      </Col>
    </Row>
  );
}

export default Package;
