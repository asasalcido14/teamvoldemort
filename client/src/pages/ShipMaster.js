// import React, { Wrapper } from "react";
import Wrapper from "../components/Wrapper"
import Package from "../components/Package";
import Footer from "../components/Footer"
import {Container} from "react-bootstrap"
import "./FormPage.css";

function ShipMaster(props) {
  return (
    <Wrapper>
      <Container>
        <h3>Welcome, {props.currentUser.name}</h3>
        <Package currentUser={props.currentUser} />
        <Footer currentUser={props.currentUser}/>
      </Container>
    </Wrapper>
  );
}

export default ShipMaster