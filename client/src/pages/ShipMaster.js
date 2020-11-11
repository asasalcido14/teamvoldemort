import React, { useState, useEffect } from "react";
import Axios from "axios";
import Wrapper from "../components/Wrapper";
import Package from "../components/Package";
import { Container } from "react-bootstrap";
import Footer from "../components/Footer";
import "../pages/FormPage.css";

function ShipMaster(props) {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    if (props.currentUser.id) {
      Axios.get("/api/shipmaster/" + props.currentUser.id).then((data) => {
        setPackages(data.data);
        console.log(packages);
      });
    }
  }, [props.currentUser]);

  return (
    <Wrapper>
      <Container>
        <Package
          currentUser={props.currentUser}
          packages={packages}
          setPackages={setPackages}
        />
        <Footer
          currentUser={props.currentUser}
          setPackages={setPackages}
          packages={packages}
        />
      </Container>
    </Wrapper>
  );
}

export default ShipMaster;
