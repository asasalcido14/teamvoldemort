import axios from "axios";
import React from "react";
import {Button,Form,Alert,Container,Row,Col,Image} from "react-bootstrap";
import "./Login.css"
import "./FormPage.css";
import { withRouter } from 'react-router-dom'
import "./Login.css";


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
          this.props.setCurrentUser(data.data)
          this.props.history.push("/shipmaster");
        }
      });
  };
  render() {
    return (
      <Container>
        {/* <Row>
          <Col xs={{ span: 8, offset: 5 }}>
            <header> Tracking App </header>
          </Col>
        </Row> */}
<br></br>
      <Row>
        <Col className="logo" xs={{span:12}}> 
        <Image src= "./sheeping.png" fluid/>
        </Col>
      </Row>


        <Row>
          <Col xs={{ span: 12}}>
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
              <p>Don't have an account? <Button variant="secondary" href="/signup">Click here</Button> to sign up!</p>
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

export default withRouter(Login);
