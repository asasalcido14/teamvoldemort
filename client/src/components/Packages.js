import React from "react";
import Container from "react-bootstrap";
import Package from "./Package";

class Packages extends React.Component {
  render() {
    return (
      <Container>
        <h3>Welcome, {this.props.currentUser.f_name}</h3>
        <Package currentUser={this.props.currentUser} />
      </Container>
    );
  }
}

export default Packages;
