import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { FaPhone, FaBell } from "react-icons/fa";
import lisaLogo from "../assets/lisa-logo.png"; // corrected path

export default function Header() {
  return (
    <Navbar
      expand="lg"
      variant="dark"
      fixed="top"
      className="py-3"
      style={{
        
      }}
    >
      <Container>
        {/* Logo */}
        <Navbar.Brand className="d-flex flex-column align-items-start mt-3">
          <img
            src={lisaLogo}
            alt="Lisa Hospital Logo"
            style={{ height: "40px", objectFit: "contain" }}
          />
          <span className="fs-6 text-danger">Since 1947</span>
        </Navbar.Brand>

        {/* Toggle for mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fw-semibold align-items-center">
            <Nav.Link href="#" className="text-white">Patient Care</Nav.Link>
            <Nav.Link href="#" className="text-white">Departments</Nav.Link>
            <Nav.Link href="#" className="text-white">School of Nursing</Nav.Link>
            <Nav.Link href="#" className="text-white">contact us</Nav.Link>
            <Nav.Link href="#" className="text-white d-flex align-items-center">
              <FaPhone className="text-primary  me-2" />
              +1 234 567 890
            </Nav.Link>

            <Nav.Link href="#" className="text-white">
              <FaBell className="text-white" />
            </Nav.Link>

            {/* Book Appointments Button */}
            <Button
              className="ms-3"
              variant="danger"
              style={{ fontWeight: 600 }}
            >
              Book Appointments
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
