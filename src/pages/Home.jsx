import React from "react";
import { Container, Button, Form, FormControl, Row, Col } from "react-bootstrap";
import { FaSearch, FaArrowRight } from "react-icons/fa";
import Header from "../components/Header";
import lisavideo from "../assets/lisavideo.mp4";


export default function Home() {
  return (
    <section
      className="position-relative text-white"
      style={{ height: "100vh", overflow: "hidden" }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="position-absolute w-100 h-100"
        style={{ objectFit: "cover" }}
      >
        <source src={lisavideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div
        className="position-absolute w-100 h-100"
        style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
      ></div>
      {/*  */}
      <div
  className="w-100 text-center text-white"
  style={{
    backgroundColor: "#2525f7ff",
    padding: "5px 0",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 15,
    fontSize: "0.9rem",
    fontWeight: 500,
  }}
>
  Get your free health consultation today!
</div>


      {/* Header */}
      <Header />
        
      {/* Hero Content */}
     <Container
  className="position-relative d-flex flex-column align-items-center text-center"
  style={{ marginTop: "60vh" }} // moves the content down
>
  {/* Search Bar */}
  <Form
    className="d-flex bg-white rounded-pill shadow overflow-hidden mb-5"
    style={{ maxWidth: "600px", width: "100%" }}
  > 
    <FormControl
      type="search"
      placeholder="Search For Doctors & Specialities..."
      className="border-0 ps-4"
    />
    <Button variant="danger" className="px-4">
      <FaSearch />
    </Button>
  </Form>

  {/* Quick Actions */}
  <Row className="g-3 justify-content-center">
  {[
    "Book Appointment",
    "Find Hospital",
    "Book Health Check",
    "Get Expert Opinion",
  ].map((item, index) => (
    <Col xs={6} md={3} key={index} className="d-flex">
      <Button
        variant="outline-light"
        className="w-100 d-flex justify-content-between align-items-center fw-semibold shadow rounded flex-grow-1"
        style={{
          minHeight: "60px", // makes all buttons equal height
          backgroundColor: "rgba(232, 81, 81, 0.1)",
          border: "1px solid rgba(255,255,255,0.3)",
          color: "#fff",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "rgba(232, 81, 81, 0.25)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = "rgba(232, 81, 81, 0.1)")
        }
      >
        {item} <FaArrowRight />
      </Button>
    </Col>
  ))}
</Row>

</Container>

    </section>
  );
}
