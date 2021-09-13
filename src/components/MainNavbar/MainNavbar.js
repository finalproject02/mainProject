import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "./MainNavbar.css";

const MainNavbar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bgPrimary sticky-top"
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          className="collapseTransition"
          id="responsive-navbar-nav"
        >
          <Nav className="me-auto bgPrimary">
            <Nav.Link href="#features" className="text-white me-2 navFontSize">
              Home
            </Nav.Link>
            <Nav.Link className="me-4 navFontSize" href="#pricing">
              About Us
            </Nav.Link>
            <NavDropdown
              className="me-4 nav-dropdown navFontSize"
              title="Admission"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item
                className="dropdownItem py-3"
                href="#action/3.1"
              >
                Admission and Registration policies
              </NavDropdown.Item>
              <NavDropdown.Item
                className="dropdownItem py-3"
                href="#action/3.2"
              >
                Scholarship and aid
              </NavDropdown.Item>
              <NavDropdown.Item
                className="dropdownItem py-3"
                href="#action/3.3"
              >
                How to Apply
              </NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item
                className="dropdownItem py-3"
                href="#action/3.4"
              >
                Academic Prigram
              </NavDropdown.Item>
              <NavDropdown.Item
                className="dropdownItem py-3"
                href="#action/3.4"
              >
                Online Admission
              </NavDropdown.Item>
              <NavDropdown.Item
                className="dropdownItem py-3"
                href="#action/3.4"
              >
                Academic Policy
              </NavDropdown.Item>
              <NavDropdown.Item
                className="dropdownItem py-3"
                href="#action/3.4"
              >
                Online Admission
              </NavDropdown.Item>
              <NavDropdown.Item
                className="dropdownItem py-3"
                href="#action/3.4"
              >
                Contact
              </NavDropdown.Item>
              <NavDropdown.Item
                className="dropdownItem py-3"
                href="#action/3.4"
              >
                FAQ
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              className="me-4 nav-dropdown navFontSize"
              title="Academics"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item
                className="dropdownItem py-3"
                href="#action/3.2"
              >
                Scholarship and aid
              </NavDropdown.Item>
              <NavDropdown.Item
                className="dropdownItem py-3"
                href="#action/3.3"
              >
                How to Apply
              </NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item
                className="dropdownItem py-3"
                href="#action/3.4"
              >
                Academic Prigram
              </NavDropdown.Item>
              <NavDropdown.Item
                className="dropdownItem py-3"
                href="#action/3.4"
              >
                Online Admission
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              className="me-4 nav-dropdown navFontSize"
              title="Faculty"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item
                className="dropdownItem py-3"
                href="#action/3.2"
              >
                Faculty of Business Administration
              </NavDropdown.Item>
              <NavDropdown.Item
                className="dropdownItem py-3"
                href="#action/3.3"
              >
                Faculty of Arts and Modern <br /> Language
              </NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item
                className="dropdownItem py-3"
                href="#action/3.4"
              >
                Faculty of Social Science
              </NavDropdown.Item>
              <NavDropdown.Item
                className="dropdownItem py-3"
                href="#action/3.4"
              >
                Faculty of Modern Science
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              className="me-4 nav-dropdown navFontSize"
              title="Faculty Members"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item
                className="dropdownItem py-3"
                href="#action/3.2"
              >
                Department of Business <br /> Administration
              </NavDropdown.Item>
              <NavDropdown.Item
                className="dropdownItem py-3"
                href="#action/3.1"
              >
                Department of CSE
              </NavDropdown.Item>
              <NavDropdown.Item
                className="dropdownItem py-3"
                href="#action/3.3"
              >
                Department of EEE
              </NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item
                className="dropdownItem py-3"
                href="#action/3.4"
              >
                Department of Civil Engineering
              </NavDropdown.Item>
              <NavDropdown.Item
                className="dropdownItem py-3"
                href="#action/3.4"
              >
                Department of English
              </NavDropdown.Item>
              <NavDropdown.Item
                className="dropdownItem py-3"
                href="#action/3.4"
              >
                Department of Architecture
              </NavDropdown.Item>
              <NavDropdown.Item
                className="dropdownItem py-3"
                href="#action/3.4"
              >
                Department of Law
              </NavDropdown.Item>
              <NavDropdown.Item
                className="dropdownItem py-3"
                href="#action/3.4"
              >
                Department of Islamic Studies
              </NavDropdown.Item>
              <NavDropdown.Item
                className="dropdownItem py-3"
                href="#action/3.4"
              >
                Department of Tourism and <br />
                Hospitality Management
              </NavDropdown.Item>
              <NavDropdown.Item
                className="dropdownItem py-3"
                href="#action/3.4"
              >
                Department of Bangla
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              className="me-4 nav-dropdown navFontSize"
              title="Student Portal"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item
                className="dropdownItem py-3"
                href="#action/3.1"
              >
                Results
              </NavDropdown.Item>
              <NavDropdown.Item
                className="dropdownItem py-3"
                href="#action/3.4"
              >
                Payment Procedure
              </NavDropdown.Item>
              <NavDropdown.Item
                className="dropdownItem py-3"
                href="#action/3.2"
              >
                Semester Registration
              </NavDropdown.Item>
              <NavDropdown.Item
                className="dropdownItem py-3"
                href="#action/3.3"
              >
                Classroom
              </NavDropdown.Item>
              <NavDropdown.Item
                className="dropdownItem py-3"
                href="#action/3.4"
              >
                Social Platform
              </NavDropdown.Item>
              <NavDropdown.Item
                className="dropdownItem py-3"
                href="#action/3.4"
              >
                Class Routine
              </NavDropdown.Item>
              <NavDropdown.Item
                className="dropdownItem py-3"
                href="#action/3.4"
              >
                Help
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="navFontSize me-4" href="#pricing">
              IQAC
            </Nav.Link>
            <Nav.Link className="navFontSize me-4" href="#pricing">
              Library
            </Nav.Link>
            <Nav.Link className="navFontSize" href="#pricing">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
