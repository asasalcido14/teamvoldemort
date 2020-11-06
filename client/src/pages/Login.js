import axios from "axios";
import React from "react";
import { Button, Form, Alert, Container, Row, Col } from "react-bootstrap";
import "./FormPage.css";

class Login extends React.Component {
  state = {
    email: "",
    pwd: "",
    error: false,
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/api/login", {
        email: this.state.email,
        pwd: this.state.pwd,
      })
      .then((data) => {
        if (typeof data.data === "string") {
          this.setState({
            error: data.data,
          });
        } else {
          //react router code to change route to /shipmaster
          //save user's email in state
        }
      });
  };
  render() {
    return (
      <Container>
        <Row>
          <Col xs={{ span: 8, offset: 5 }}>
            <header> Tracking App </header>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col xs={{ span: 8, offset: 2 }}>
            <div id="intro"></div>
          </Col>
        </Row>
        <br></br>

        <Row>
          <Col xs={{ span: 8, offset: 2 }}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  value={this.state.email}
                  onChange={this.handleChange}
                  name={"email"}
                  type="email"
                  placeholder="Enter email"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  value={this.state.pwd}
                  onChange={this.handleChange}
                  name={"pwd"}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
              <p>Don't have an account? <a href="/signup">Click here</a> to sign up!</p>
              {this.state.error && (
                <Alert variant="danger">{this.state.error}</Alert>
              )}
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
