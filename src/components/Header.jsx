import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { FaPhone, FaBell } from "react-icons/fa";
import lisaLogo from "../assets/lisa-logo.png";

export default function Header({ white }) {
  return (
    <Navbar
      expand="lg"
      fixed="top"
      className="py-1"
      style={{
        backgroundColor: white ? "#fff" : "transparent",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <Container>
        {/* Logo */}
        <Navbar.Brand className="d-flex flex-column align-items-start mt-5">
          <img
            src={lisaLogo}
            alt="Lisa Hospital Logo"
            style={{
              height: "60px",
              objectFit: "contain",
              // filter: white ? "invert(0)" : "invert(1)", // logo color invert on scroll if needed
              transition: "filter 0.3s ease-in-out",
            }}
          />
          <span
            className="fs-6 fw-bold"
            style={{ color: white ? "#dc3545" : "#fff", transition: "color 0.3s ease-in-out" }}
          >
            Since 1947
          </span>
        </Navbar.Brand>

        {/* Toggle for mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fw-semibold align-items-center">
            {["Patient Care", "Departments", "School of Nursing", "Contact Us"].map((link, idx) => (
              <Nav.Link
                key={idx}
                href="#"
                style={{ color: white ? "#000" : "#fff", transition: "color 0.3s" }}
              >
                {link}
              </Nav.Link>
            ))}

            <Nav.Link
              href="#"
              className="d-flex align-items-center"
              style={{ color: white ? "#000" : "#fff", transition: "color 0.3s" }}
            >
              <FaPhone className="me-2" style={{ color: "#0d6efd" }} />
              +1 234 567 890
            </Nav.Link>

            <Nav.Link href="#" style={{ color: white ? "#000" : "#fff" }}>
              <FaBell style={{ color: white ? "#000" : "#fff" }} />
            </Nav.Link>

            {/* Book Appointments Button */}
            <Button
              className="ms-3"
              variant="danger"
              style={{
                fontWeight: 600,
                borderRadius: "30px",
                padding: "8px 15px",
                transition: "all 0.3s ease-in-out",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 4px 15px rgba(232, 81, 81, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Book Appointments
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
