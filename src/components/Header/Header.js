import React from "react";
import "./Header.css";
import { Container } from "react-bootstrap";
import headerLogo from "../../images/logo-white.png";

const Header = () => {
  return (
    <header className="bgPrimary py-3 borderBottom">
      <Container>
        <div className="d-flex justify-content-start">
          <a className="text-decoration-none text-white d-flex align-items-center mb-3 mb-lg-0">
            <img className="img-fluid logo" src={headerLogo} alt="" />
            <span className="fs-2 fw-700 leadingSm">Leading Uiversity</span>
            <small className="position motoSm">..A promise to lead</small>
          </a>
        </div>
      </Container>
    </header>
  );
};

export default Header;
