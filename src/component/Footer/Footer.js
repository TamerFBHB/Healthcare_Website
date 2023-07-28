import React from "react";
import "./Footer.css";
import { Button, Container } from "react-bootstrap";
import logo from "../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import facebook from "../../images/facebook.png";
import instgram from "../../images/instgram.png";
import tweeter from "../../images/tweeter.png";
import linkIN from "../../images/linkin.png";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <Container className="foot">
          <div className="footer-end row  ">
            <div className="col-sm-6 col-lg-3 py-2 text-center">
              <img src={logo} alt="" />
              <p className="my-4">
                Lorem Ipsum is simply d ummy text of the printing and typummy
                text of the printing and typummy text of the printing and typ.{" "}
              </p>
              <div className="Mobile ">
                <FontAwesomeIcon icon={faPhone} className="icon" />
                <div>
                  <h6>Contact Us</h6>
                  <h4>+01 123 456 7890</h4>
                </div>
              </div>
            </div>
            <div className=" col-sm-6 col-lg-3 py-2 text-center Links">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <NavLink>About Us</NavLink>
                </li>
                <li>
                  <NavLink>Services</NavLink>
                </li>
                <li>
                  <NavLink>Booking</NavLink>
                </li>
                <li>
                  <NavLink>Faq's</NavLink>
                </li>
                <li>
                  <NavLink>Blogs</NavLink>
                </li>
                <li>
                  <NavLink>Our Team</NavLink>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-lg-3 py-2 text-center">
              <h3>Our Service</h3>
              <ul>
                <li>
                  <NavLink>Dental Care</NavLink>
                </li>
                <li>
                  <NavLink>Cardiac Clinic</NavLink>
                </li>
                <li>
                  <NavLink>Messege Therapy</NavLink>
                </li>
                <li>
                  <NavLink>Cardiology</NavLink>
                </li>
                <li>
                  <NavLink>Precise Diagnosis</NavLink>
                </li>
                <li>
                  <NavLink>Abmbulance Services</NavLink>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-lg-3 py-2 text-center Subcribe">
              <h3>Subcribe</h3>
              <input placeholder="Email Adress" />
              <Button>Subscribe Now</Button>
              <ul>
                <li>
                  <a
                    target="_black"
                    href="https://www.facebook.com/profile.php?id=100093255500258"
                  >
                    <img src={facebook} alt="" />
                  </a>
                </li>
                <li>
                  <a target="_black" href="https://www.instagram.com/">
                    <img src={instgram} alt="" />
                  </a>
                </li>
                <li>
                  <a target="_black" href="https://twitter.com/home">
                    <img src={tweeter} alt="" />
                  </a>
                </li>
                <li>
                  <a
                    target="_black"
                    href="https://www.linkedin.com/in/tamer-fouad-830b1027b/"
                  >
                    <img src={linkIN} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="Copyright">
            <h5>
              Copyright © 2023 Design & Developed by <span>Tamer Fouad</span>
            </h5>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Footer;
