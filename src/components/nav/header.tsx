import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { menuBars, flagNor, flagGB } from "../../assets/icons";

const Header = () => {
  const [show, setShow] = useState(false);
  const [language, setLanguage] = useState(flagGB);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === flagNor ? flagGB : flagNor));
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-primary position-relative main-header">
        <div className="container-fluid px-4">
          <RouterLink className="header-logo secondary-font fs-2rem-to-3rem dark-gray-font text-decoration-none" to={"/"}>
            thbergseng
          </RouterLink>
          <img src={menuBars} className="d-lg-none nav-bars-button" aria-label="menu-button" onClick={handleShow} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto main-navigation">
              <ScrollLink to={"#about-section"} className="btn main-font fs-1-5rem">
                About me
              </ScrollLink>
              <ScrollLink to={"#resume-section"} className="btn main-font fs-1-5rem">
                Resume
              </ScrollLink>
              <ScrollLink to={"#projects-section"} className="btn main-font fs-1-5rem">
                Projects
              </ScrollLink>
              <ScrollLink to={"#services-section"} className="btn main-font fs-1-5rem">
                Services
              </ScrollLink>
              <ScrollLink to={"#contact-section"} className="btn main-font fs-1-5rem">
                Contact
              </ScrollLink>
              <img className="px-3 cursor-pointer d-none" src={language} onClick={handleLanguage} aria-label="language picker" />
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <Offcanvas className="gray-color d-block d-lg-none" show={show} onHide={handleClose} responsive="lg">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="gray-color secondary-font fs-1-5rem">thbergseng</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex flex-column gray-color align-items-start">
          <ScrollLink to={"#about-section"} onClick={handleClose} className="btn main-font fs-1-25rem dropdown-border text-start">
            About me
          </ScrollLink>
          <ScrollLink to={"#projects-section"} onClick={handleClose} className="btn main-font fs-1-25rem dropdown-border text-start">
            Resume
          </ScrollLink>
          <ScrollLink to={"#services-section"} onClick={handleClose} className="btn main-font fs-1-25rem dropdown-border text-start">
            Services
          </ScrollLink>
          <ScrollLink to={"#contact-section"} onClick={handleClose} className="btn main-font fs-1-25rem dropdown-border text-start">
            Contact
          </ScrollLink>
          <img className="ps-3 cursor-pointer d-none" src={language} onClick={handleLanguage} aria-label="language picker" />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Header;
