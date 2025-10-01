import React, { useState, useEffect } from "react";
import { Container, Button, Form, FormControl, Row, Col, Card } from "react-bootstrap";
import { FaHeart, FaBrain, FaUserMd, FaStethoscope, FaLungs, FaBone, FaUserNurse, FaSearch, FaArrowRight } from "react-icons/fa";
import Header from "../components/Header";
import lisavideo from "../assets/lisavideo.mp4";
import jenny from "../assets/jenny.jpg";
import arun from "../assets/arun.jpg";
import praveen from "../assets/praveen.jpg";

export default function Home() {
  const departments = [
    {
      name: "Cardiology",
      icon: <FaHeart size={18} className="text-danger" />,
      description: "Heart health and cardiovascular care. Our cardiologists are experienced in advanced procedures and preventive care.",
      specialists: [
        { name: "Dr. Arun", title: "Senior Cardiologist", image: arun },
        { name: "Dr. Jenny", title: "Cardiologist", image: jenny },
        { name: "Dr. Praveen", title: "Heart Surgeon", image: praveen },
      ],
    },
    {
      name: "Neurology",
      icon: <FaBrain size={18} className="text-danger" />,
      description: "Brain and nervous system treatments. Our neurologists provide specialized diagnosis and therapy for neurological conditions.",
      specialists: [
        { name: "Dr. N. Gupta", title: "Neurologist" },
        { name: "Dr. R. Singh", title: "Neurosurgeon" },
      ],
    },
    {
      name: "Pulmonology",
      icon: <FaLungs size={18} className="text-danger" />,
      description: "Lung and respiratory care. Our pulmonologists specialize in treating chronic respiratory diseases and acute conditions.",
      specialists: [
        { name: "Dr. A. Mehta", title: "Pulmonologist" },
        { name: "Dr. K. Sharma", title: "Respiratory Therapist" },
      ],
    },
    {
      name: "Orthopedics",
      icon: <FaBone size={18} className="text-danger" />,
      description: "Bone and joint health. Our orthopedic surgeons provide advanced care for musculoskeletal injuries and conditions.",
      specialists: [
        { name: "Dr. V. Kumar", title: "Orthopedic Surgeon" },
        { name: "Dr. P. Das", title: "Sports Medicine Specialist" },
      ],
    },
    {
      name: "General Medicine",
      icon: <FaStethoscope size={18} className="text-danger" />,
      description: "Comprehensive primary care. Our general medicine department offers preventive care, diagnosis, and treatment for a wide range of conditions.",
      specialists: [
        { name: "Dr. S. Patel", title: "General Physician" },
        { name: "Dr. M. Iyer", title: "Family Medicine Specialist" },
      ],
    },
  ];

  const [activeDept, setActiveDept] = useState(departments[0]);
  const [headerWhite, setHeaderWhite] = useState(false);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setHeaderWhite(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="position-relative text-white" style={{ height: "100vh", overflow: "hidden" }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="position-absolute w-100 h-100"
          style={{ objectFit: "cover" }}
        >
          <source src={lisavideo} type="video/mp4" />
        </video>
        <div className="position-absolute w-100 h-100" style={{ backgroundColor: "rgba(0,0,0,0.6)" }}></div>
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
        <Header white={headerWhite} />

        <Container className="position-relative d-flex flex-column align-items-center text-center" style={{ marginTop: "60vh" }}>
          <Form className="d-flex bg-white rounded-pill shadow overflow-hidden mb-5" style={{ maxWidth: "600px", width: "100%" }}>
            <FormControl type="search" placeholder="Search For Doctors & Specialities..." className="border-0 ps-4" />
            <Button variant="danger" className="px-4 rounded-end">
              <FaSearch />
            </Button>
          </Form>

          <Row className="g-3 justify-content-center">
            {["Book Appointment", "Find Hospital", "Book Health Check", "Get Expert Opinion"].map((item, index) => (
              <Col xs={6} md={3} key={index} className="d-flex justify-content-center">
                <Button
                  variant="outline-light"
                  className="rounded-pill d-flex justify-content-between align-items-center fw-semibold shadow-sm"
                  style={{
                    padding: "6px 12px",
                    fontSize: "0.8rem",
                    backgroundColor: "rgba(237, 237, 237, 0.1)",
                    border: "1px solid rgba(255,255,255,0.3)",
                    color: "#fff",
                    transition: "all 0.3s ease",
                    minWidth: "150px",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(232, 81, 81, 0.25)")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(222, 220, 220, 0.1)")}
                >
                  <span>{item}</span>
                  <FaArrowRight size={14} />
                </Button>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Departments Section */}
      <section className="py-5 bg-light">
        <Container>
          <div className="text-start mb-4">
            <h1 className="fw-bold">Expert Care, Every Specialty</h1>
            <p className="text-black" style={{ fontSize: "0.85rem" }}>
              Discover our wide range of specialized medical departments, where experienced doctors provide compassionate care tailored to your needs.
            </p>
          </div>

          {/* Department Buttons */}
          <div className="d-flex overflow-auto mb-4 pb-2" style={{ gap: "8px" }}>
            {departments.map((dept, index) => (
              <Button
                key={index}
                onClick={() => setActiveDept(dept)}
                variant={activeDept.name === dept.name ? "danger" : "outline-secondary"}
                className="rounded-pill flex-shrink-0"
                style={{ minWidth: "120px", fontSize: "0.8rem", padding: "5px 10px" }}
              >
                {dept.icon} <span className="ms-1">{dept.name}</span>
              </Button>
            ))}
          </div>

          {/* Active Department Card */}
          <Row className="justify-content-center">
            <Col xs={12} md={10}>
              <Card className="shadow-lg p-4 border-0" style={{ borderRadius: "20px" }}>
                <Card.Body>
                  <div className="d-flex flex-column flex-md-row align-items-start">
                    <div className="flex-grow-1">
                      <h3 className="fw-bold mb-3">{activeDept.name}</h3>
                      <p className="text-muted mb-4">{activeDept.description}</p>

                      <h5 className="mb-2">Specialists:</h5>
                      <Row className="g-2">
                        {activeDept.specialists.map((doc, index) => (
                          <Col xs={4} md={3} key={index} className="text-center">
                            <div
                              className="mx-auto mb-1"
                              style={{
                                width: "50px",
                                height: "50px",
                                backgroundImage: doc.image ? `url(${doc.image})` : "none",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                borderRadius: "50%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            />
                            <h6 className="fw-bold mb-0" style={{ fontSize: "0.75rem" }}>{doc.name}</h6>
                            <p className="text-muted mb-0" style={{ fontSize: "0.65rem" }}>{doc.title}</p>
                          </Col>
                        ))}
                      </Row>

                      <Button variant="danger" className="rounded-pill mt-3 px-4">
                        Find Doctors
                      </Button>
                    </div>

                    <div className="flex-shrink-0 ms-md-4 mt-4 mt-md-0" style={{ width: "350px", height: "250px" }}>
                      <div className="w-100 h-100 shadow-sm" style={{ backgroundColor: "#ced4da" }}></div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
