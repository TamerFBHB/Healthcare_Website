import React from "react";
import "./NavHeader.css";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
// import Collapse from "react-bootstrap/Collapse";
// import { useState } from "react";

window.addEventListener("scroll", function () {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("header").style.backgroundColor = "white";
  } else {
    document.getElementById("header").style.backgroundColor = "transparent";
  }
});

const NavHeader = () => {
  return (
    <>
      <Navbar expand="lg" className=" mainNav " id="header">
        <Container className="BG-white" >
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="200"
              height="50"
              className="d-inline-block align-center me-3"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto links">
              <NavLink href="/" className="Hover">
                Home
              </NavLink>

              {/* ***   start  Pages    *** */}

              <NavLink href="/" className="Hover plus">
                Pages
                <i class="bi bi-plus"></i>
                <nav className="sublinks">
                  <NavLink>About us</NavLink>
                  <NavLink>Our Team</NavLink>
                  <NavLink>FAQ's</NavLink>
                  <NavLink>Booking</NavLink>
                  <NavLink>Error 404</NavLink>
                  <NavLink>Login / Register</NavLink>
                </nav>
              </NavLink>

              <NavDropdown
                title="Pages"
                id="basic-nav-dropdown"
                className="drop-btn"
              >
                <NavDropdown.Item href="#action/3.1" >About us</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" >Our Team</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" >FAQ's</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" >Booking</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" >
                  Error 404
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className="sub-drop">
                  Login / Register
                </NavDropdown.Item>
              </NavDropdown>

              {/* ***   end  Pages    *** */}
              {/* ***   start  Services    *** */}

              <NavLink href="" className="Hover plus">
                Services
                <i class="bi bi-plus"></i>
                <nav className="sublinks  sublinks-service ">
                  <NavLink>Service</NavLink>
                  <NavLink>Service Details</NavLink>
                </nav>
              </NavLink>

              <NavDropdown
                title="Services"
                id="basic-nav-dropdown"
                className="drop-btn"
              >
                <NavDropdown.Item href="#action/3.1">Service</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Service Details
                </NavDropdown.Item>
              </NavDropdown>

              {/* ***   end  Services    *** */}
              {/* ***   start  blog    *** */}
              <NavLink href="" className="Hover plus">
                Blog
                <i class="bi bi-plus"></i>
                <nav className="sublinks sublinks-service ">
                  <NavLink>Blogs</NavLink>
                  <NavLink>Blogs Details</NavLink>
                </nav>
              </NavLink>

              <NavDropdown
                title="Blog"
                id="basic-nav-dropdown"
                className="drop-btn Hover"
              >
                <NavDropdown.Item href="#action/3.1" >Blogs</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" >
                  Blogs Details
                </NavDropdown.Item>
              </NavDropdown>
              {/* ***   end  blog    *** */}
              <NavLink href="/" className="Hover contact-us">
                Contact Us
              </NavLink>

              <NavLink>
                <i class="bi bi-search"></i>
              </NavLink>

              <NavLink className="telephone">
                <i class="bi bi-telephone-fill"></i>
                (+01)999 888 777
              </NavLink>

              <Button className="contact_btn">
                contact us
                <i class="bi bi-caret-right"></i>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavHeader;
