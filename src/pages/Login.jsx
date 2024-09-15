import './Login.css'
import React from "react";
import { NavLink } from "react-router-dom";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";

function Login() {
  return (
    <MDBContainer fluid>
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol col="12">
          <MDBCard
            className="bg-white my-5 mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "500px", top: "10px" }}
          >
            <MDBCardBody className="p-5 w-100 d-flex flex-column">
            <NavLink to = "/"><button className = "return-button">⬅</button></NavLink>

              <h2 className="fw-bold mb-2 text-left">Big Dreamers,<br></br>Small Bladders.</h2>
              <p className="text-white-50 mb-3">
                Please enter your login and password!
              </p>

              <MDBInput
                wrapperClass="mb-4 w-100"
                label="Cell phone number"
                id="formControlLg"
                type="number"
                size="lg"
              />
              <MDBInput
                wrapperClass="mb-4 w-100"
                label="Bluetooth ID"
                id="formControlLg"
                type="password"
                size="lg"
              />

             

              <NavLink to = "/dashboard"><button className = "login-button">LOGIN</button></NavLink>

              <hr className="my-4" />
              
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
