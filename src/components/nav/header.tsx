import { Link } from "react-router-dom";
import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { menuBars } from "../../assets/icons";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar expand="lg" className="bg-body-primary position-relative main-header">
        <div className="container-fluid px-4">
          <Link className="header-logo secondary-font fs-2rem-to-3rem dark-gray-font text-decoration-none" to={"/"}>
            thbergseng
          </Link>
          <img src={menuBars} className="d-lg-none nav-bars-button" aria-label="menu-button" onClick={handleShow} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto main-navigation">
              <Link to={"#about-section"} className="btn main-font fs-1-5rem">
                About me
              </Link>
              <Link to={"projects"} className="btn main-font fs-1-5rem">
                Resume
              </Link>
              <Link to={"#services"} className="btn main-font fs-1-5rem">
                Services
              </Link>
              <Link to={"#contact"} className="btn main-font fs-1-5rem">
                Contact
              </Link>
              <Link to={"/login"} className="btn main-font fs-1-5rem">
                Flag
              </Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <Offcanvas className="gray-color d-block d-lg-none" show={show} onHide={handleClose} responsive="lg">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="gray-color secondary-font fs-1-5rem">thbergseng</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex flex-column gray-color align-items-start">
          <Link to={"#about-section"} className="btn main-font fs-1-25rem">
            About me
          </Link>
          <Link to={"/"} className="btn main-font fs-1-25rem">
            Resume
          </Link>
          <Link to={"/"} className="btn main-font fs-1-25rem">
            Services
          </Link>
          <Link to={"/"} className="btn main-font fs-1-25rem">
            Contact
          </Link>
          <Link to={"/"} className="btn main-font fs-1-25rem">
            Flag
          </Link>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Header;
