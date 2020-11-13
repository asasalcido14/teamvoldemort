import React, { useEffect, useState } from "react";
import { Row, Col, Button, Card } from "react-bootstrap";
import Axios from "axios";
import "../pages/FormPage.css";
import Wrapper from "../components/Wrapper";

function Package(props) {

  function handleDelete(id, action) {
    Axios.delete("/api/delete/" + id).then((data) => {
      if (data.data === 0) return
      const newArr = props.packages.filter(item => item.id !== id)
      props.setPackages(newArr)
    });
  }


  return (
    <div className="packages">
      <h2>Welcome, {props.currentUser.name}</h2>
      {props.packages.map((item) => (
        <Row>
          <Col xs={12}>
            <Card className="card">
              <Card.Header className="title">
                <Col xs={12}>
                  <h4>{item.description}</h4>
                </Col>
              </Card.Header>

              <Card.Body>
                <Row>
                  <Col xs={4}>
                    <Button href={item.url} target="_blank" variant="primary">
                      Track
                    </Button>
                  </Col>
                  <Col xs={4}>
                    <Button variant="success" onClick={() => handleDelete(item.id, "arrived")}>
                      Arrived
                    </Button>
                  </Col>
                  <Col xs={4}>
                    <Button variant="danger" onClick={() => handleDelete(item.id, "cancelled")}>
                      Cancelled
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}
    </div>
  );
}

export default Package;