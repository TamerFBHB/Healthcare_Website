import React, { useState } from "react";
import "./ServiceDetails.css";
import ScrollToTop from "../../scrollTo";
import NavHeader from "../../component/NavHeader/NavHeader";
import ButtonFixed from "../../component/buttun-fixed/ButtonFixed";
import {
  Button,
  ButtonGroup,
  Collapse,
  Container,
  ProgressBar,
} from "react-bootstrap";
import lineBG from "../../images/line-bg.png";
import Footer from "../../component/Footer/Footer";
import Dentest from "../../images/news1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const ServiceDetails = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);

  const [toggle, settoggle] = useState(false);
  const [toggle1, settoggle1] = useState(false);
  const [toggle2, settoggle2] = useState(false);
  const [toggle3, settoggle3] = useState(false);
  const [toggle4, settoggle4] = useState(false);
  const [toggle5, settoggle5] = useState(false);

  return (
    <>
      {/* *****Scroll To Top***** */}
      <ScrollToTop />

      {/* ******NavHeader*****  */}
      <NavHeader />

      {/* ******ButtonFixed*****  */}
      <ButtonFixed />

      {/* *****MainHead***** */}
      <section>
        <div className="MainHead">
          <h1>Service Details</h1>
          <ButtonGroup aria-label="Basic example">
            <Button variant="secondary" href="/" className="btn">
              <i class="bi bi-house-fill"></i>
              Home
            </Button>
            <Button variant="secondary" className="btn">
              /
            </Button>
            <Button variant="secondary" className="btn">
              Service Details
            </Button>
          </ButtonGroup>
        </div>
        <img src={lineBG} alt="" className="lineHeader" />
      </section>

      {/* *****MainPage ***** */}
      <section className="serviceDetails">
        <Container>
          <div className="fristPage row ">
            <div className="content col-lg-8">
              <img src={Dentest} alt="" />
              <h2>Why Medical Had Been So Popular Till</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </p>
           
            <div className="information row col-lg-12 ">
              <div className="chickBox col-md-7">
                <ul>
                  <li>
                    <i class="bi bi-check2"></i>
                    <p>Then along come two they</p>
                  </li>
                  <li>
                    <i class="bi bi-check2"></i>
                    <p>That's just a little bit more than</p>
                  </li>
                  <li>
                    <i class="bi bi-check2"></i>
                    <p>Standard dummy text ever since</p>
                  </li>
                  <li>
                    <i class="bi bi-check2"></i>
                    <p>Simply dummy text of the printing</p>
                  </li>
                  <li>
                    <i class="bi bi-check2"></i>
                    <p>Make a type specimen book</p>
                  </li>
                </ul>
              </div>
              <div className="col-md-5 ">
                <div className="slider1">
                  <div className="label">
                    <h6>Advanced Technology</h6>
                    <div>96%</div>
                  </div>
                  <ProgressBar now={96} />
                </div>

                <div className="slider2">
                  <div className="label">
                    <h6>Certified Engineers</h6>
                    <div>79%</div>
                  </div>
                  <ProgressBar now={79} />
                </div>

                <div className="slider">
                  <div className="label">
                    <h6>6 years Experience</h6>
                    <div>75%</div>
                  </div>
                  <ProgressBar now={75} />
                </div>
              </div>
            </div>
            <div className="Questions row col-lg-12 ">
              <h2>Popular Questions</h2>
              <p>
                Standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book
              </p>
              <div className="column col-xl-12">
                <div className="col-xl-12 py-1">
                  <Button
                    className="button"
                    id="btn"
                    style={{ backgroundColor: toggle && "#f17732" }}
                    onClick={() => {
                      settoggle(!toggle);
                      setOpen(!open); //***********
                    }}
                  >
                    How Doctor Can Ease Your Pain ?
                    <div>
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        id="icon"
                        style={{ display: toggle && "none" }}
                      />
                      <FontAwesomeIcon
                        icon={faChevronUp}
                        id="icon2"
                        style={{ display: toggle && "block" }}
                      />
                    </div>
                  </Button>
                  <Collapse in={open}>
                    <div id="example-collapse-text">
                      <p className="content">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. Nihil anim
                        keffiyeh helvetica, craft beer labore wes anderson cred
                        nesciunt sapiente ea proident.
                      </p>
                    </div>
                  </Collapse>
                </div>
                <div className="col-xl-12 py-1">
                  <Button
                    style={{ backgroundColor: toggle1 && "#f17732" }}
                    onClick={() => {
                      settoggle1(!toggle1);
                      setOpen1(!open1);
                    }}
                  >
                    How Doctor Can Ease Your Pain ?
                    <div>
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        id="icon"
                        style={{ display: toggle1 && "none" }}
                      />
                      <FontAwesomeIcon
                        icon={faChevronUp}
                        id="icon2"
                        style={{ display: toggle1 && "block" }}
                      />
                    </div>
                  </Button>
                  <Collapse in={open1}>
                    <div id="example-collapse-text">
                      <p className="content">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. Nihil anim
                        keffiyeh helvetica, craft beer labore wes anderson cred
                        nesciunt sapiente ea proident.
                      </p>
                    </div>
                  </Collapse>
                </div>

                <div className="col-xl-12 py-1">
                  <Button
                    style={{ backgroundColor: toggle2 && "#f17732" }}
                    onClick={() => {
                      settoggle2(!toggle2);
                      setOpen2(!open2);
                    }}
                  >
                    How Doctor Can Ease Your Pain ?
                    <div>
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        id="icon"
                        style={{ display: toggle2 && "none" }}
                      />
                      <FontAwesomeIcon
                        icon={faChevronUp}
                        id="icon2"
                        style={{ display: toggle2 && "block" }}
                      />
                    </div>
                  </Button>
                  <Collapse in={open2}>
                    <div id="example-collapse-text">
                      <p className="content">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. Nihil anim
                        keffiyeh helvetica, craft beer labore wes anderson cred
                        nesciunt sapiente ea proident.
                      </p>
                    </div>
                  </Collapse>
                </div>

                <div className="col-xl-12 py-1 ">
                  <Button
                    style={{ backgroundColor: toggle3 && "#f17732" }}
                    onClick={() => {
                      settoggle3(!toggle3);
                      setOpen3(!open3);
                    }}
                  >
                    How Doctor Can Ease Your Pain ?
                    <div>
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        id="icon"
                        style={{ display: toggle3 && "none" }}
                      />
                      <FontAwesomeIcon
                        icon={faChevronUp}
                        id="icon2"
                        style={{ display: toggle3 && "block" }}
                      />
                    </div>
                  </Button>
                  <Collapse in={open3}>
                    <div id="example-collapse-text">
                      <p className="content">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. Nihil anim
                        keffiyeh helvetica, craft beer labore wes anderson cred
                        nesciunt sapiente ea proident.
                      </p>
                    </div>
                  </Collapse>
                </div>

                <div className="col-xl-12 py-1 ">
                  <Button
                    style={{ backgroundColor: toggle4 && "#f17732" }}
                    onClick={() => {
                      settoggle4(!toggle4);
                      setOpen4(!open4);
                    }}
                  >
                    How Doctor Can Ease Your Pain ?
                    <div>
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        id="icon"
                        style={{ display: toggle4 && "none" }}
                      />
                      <FontAwesomeIcon
                        icon={faChevronUp}
                        id="icon2"
                        style={{ display: toggle4 && "block" }}
                      />
                    </div>
                  </Button>
                  <Collapse in={open4}>
                    <div id="example-collapse-text">
                      <p className="content">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. Nihil anim
                        keffiyeh helvetica, craft beer labore wes anderson cred
                        nesciunt sapiente ea proident.
                      </p>
                    </div>
                  </Collapse>
                </div>

                <div className="col-xl-12 py-1 ">
                  <Button
                    style={{ backgroundColor: toggle5 && "#f17732" }}
                    onClick={() => {
                      settoggle5(!toggle5);
                      setOpen5(!open5);
                    }}
                  >
                    How Doctor Can Ease Your Pain ?
                    <div>
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        id="icon"
                        style={{ display: toggle5 && "none" }}
                      />
                      <FontAwesomeIcon
                        icon={faChevronUp}
                        id="icon2"
                        style={{ display: toggle5 && "block" }}
                      />
                    </div>
                  </Button>
                  <Collapse in={open5}>
                    <div id="example-collapse-text">
                      <p className="content">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. Nihil anim
                        keffiyeh helvetica, craft beer labore wes anderson cred
                        nesciunt sapiente ea proident.
                      </p>
                    </div>
                  </Collapse>
                </div>
              </div>
            </div>
            </div>
            {/* *************side Bar ************** */}
            <div className="sideBar col-lg-4">
              <div className="buttons col-lg-12">
                <Button className="fristBTN">
                  Engin Diagnostics
                  <i className="bi bi-chevron-right"></i>
                </Button>
                <Button>
                  Lobe oil And Filter
                  <i class="bi bi-chevron-right"></i>
                </Button>
                <Button>
                  Belt And Hoses
                  <i className="bi bi-chevron-right"></i>
                </Button>
                <Button>
                  Air Conditioning
                  <i className="bi bi-chevron-right"></i>
                </Button>
                <Button>
                  Brake Repair
                  <i className="bi bi-chevron-right"></i>
                </Button>
                <Button>
                  Tire And Wheel Service
                  <i className="bi bi-chevron-right"></i>
                </Button>
              </div>

              {/* ***** download *************** */}
              <div className="downloads col-lg-12">
                <p>Download</p>
                <ProgressBar now={20} />
                <Button className="download">
                  <i class="bi bi-file-pdf-fill"></i>
                  Download our Brochures Download
                </Button>
                <Button className="download">
                  <i class="bi bi-file-pdf-fill"></i>
                  Our Company Details Download
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* *****Footer ***** */}
      <Footer />
    </>
  );
};

export default ServiceDetails;
