import React, { useEffect, useState } from "react";
import { Row, Col, Button, Card } from "react-bootstrap";
import Axios from "axios";

function Package(props) {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    Axios.get("/api/shipmaster/" + props.currentUser.id).then((data) => {
      setPackages(data.data);
      console.log(packages)
    });
  }, []);

  return (
    packages.map(item =>
    <Row>
      <Col xs={12}>
        <Card>
          <Row>
            <Col xs={12}>{item.description}</Col>
          </Row>
          <Row>
<<<<<<< HEAD
            <Col xs={4} >
              <Button  variant="primary">
=======
            <Col xs={4} sm={1}>
              <Button  href={item.url} variant="primary">
>>>>>>> 8de2f4a251a818aae514b13101148ae49641c20d
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
        </Card>
      </Col>
    </Row>
    )
  );
}

export default Package;
