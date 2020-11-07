import axios from "axios";
import React, { Component } from "react";
import { Button, Form, Alert, Container, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import Packages from "../components/Packages";
import "./FormPage.css";
import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";


class ShipMaster extends React.Component {
  render() {
    return (
      <Wrapper>
        <Packages />
        <Footer />
      </Wrapper>
    );
  }
}


export default ShipMaster;
