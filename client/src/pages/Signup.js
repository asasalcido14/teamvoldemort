import axios from "axios";
import React from "react";
import Alert from "react-bootstrap/Alert";
import { withRouter } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import "./FormPage.css";

class Signup extends React.Component {
  state = {
    f_name: "",
    l_name: "",
    email: "",
    phone: "",
    pwd: "",
    error: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handlesubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("/api/signup", {
        f_name: this.state.f_name,
        l_name: this.state.l_name,
        email: this.state.email,
        phone: this.state.phone,
        pwd: this.state.pwd,
      })
      .then((data) => {
        console.log(data);
        if (data.data === "You already have an account, try to log in!") {
          this.setState({
            error: data.data,
          });
        } else if (data.data === "success"){
          this.props.history.push("/");
        }
      });
  };

  render() {
    return (
      <div className=" col-md-12 col row justify-content-center ">
        <form onSubmit={this.handlesubmit} className="signup-form">
          <div className="form-group">
            <label htmlFor="first">First Name</label>
            <input
              type="text"
              className="form-control"
              id="fname-input"
              placeholder="Enter First Name"
              value={this.state.f_name}
              onChange={this.handleChange}
              name={"f_name"}
            />
          </div>

          <div className="form-group">
            <label htmlFor="last">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lname-input"
              placeholder="Enter Last Name"
              value={this.state.l_name}
              onChange={this.handleChange}
              name={"l_name"}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email-input"
              placeholder="Enter Email Address"
              value={this.state.email}
              onChange={this.handleChange}
              name={"email"}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              id="phone-input"
              placeholder="Enter Phone Number"
              value={this.state.phone}
              onChange={this.handleChange}
              name="phone"
            />
          </div>

          <div className="form-group">
            <label htmlFor="Pass">Password</label>
            <input
              type="password"
              className="form-control"
              id="password-input"
              placeholder=" Enter Password"
              value={this.state.pwd}
              onChange={this.handleChange}
              name={"pwd"}
            />
          </div>

          <Button type="submit" className="btn btn-primary">
            Sign Up
          </Button>
          <p>
            Already have an account?{" "}
            <Button variant="primary" href="/">
              Click here
            </Button>{" "}
            to log in!
          </p>
          {this.state.error && (
            <Alert variant="danger">{this.state.error}</Alert>
          )}
        </form>
      </div>
    );
  }
}

export default withRouter(Signup);
