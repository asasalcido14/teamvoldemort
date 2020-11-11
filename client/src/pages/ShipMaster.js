import React, { Wrapper } from "react";
import Package from "../components/Package";
import {Container} from "react-bootstrap"
import Footer from "../components/Footer";
import "./FormPage.css";


function ShipMaster(props) {
  return (
    <Wrapper>
      <Container>
        <h3 style ="color:white">Welcome, {props.currentUser.name}</h3>
        <Package currentUser={props.currentUser}/>
        <Footer currentUser={props.currentUser}/>
      </Container>
    </Wrapper>
  );
}

export default ShipMaster
