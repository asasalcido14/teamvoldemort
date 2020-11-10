import React, { useEffect, useState } from "react";
import { Row, Col, Button, Card } from "react-bootstrap";
import Axios from "axios";
import "../pages/FormPage.css";
import Wrapper from "../components/Wrapper";

function Package(props) {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    Axios.get("/api/shipmaster/" + props.currentUser.id).then((data) => {
      setPackages(data.data);
      console.log(packages)
    });
  }, []);

  return (
    <div className= "packages">
      <h2>Welcome, {props.currentUser.name}</h2>
    {packages.map(item =>
    <Row>
      <Col xs={12}>
        <Card>
          <Card.Header className= "title">
            <Col xs={12}><h4>{item.description}</h4></Col>
            </Card.Header>
          
            <Card.Body>
              <Row>
            <Col xs={4}>
              <Button  href={item.url} variant="primary">
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
          </Card.Body>
        </Card>
      </Col>
    </Row>
    )}
    </div>
  );
}

export default Package;
