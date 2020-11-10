// import React, { Wrapper } from "react";
import Wrapper from "../components/Wrapper"
import Package from "../components/Package";
import {Container} from "react-bootstrap"
import Footer from "../components/Footer";
import "../pages/FormPage.css";


function ShipMaster(props) {
  return (
    <Wrapper>
      <Container>
        <Package currentUser={props.currentUser} />
        <Footer currentUser={props.currentUser}/>
      </Container>
    </Wrapper>
  );
}

export default ShipMaster
