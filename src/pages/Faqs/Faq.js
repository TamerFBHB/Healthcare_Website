import React, { useState } from "react";
import "./Faqs.css";
import ScrollToTop from "../../scrollTo";
import NavHeader from "../../component/NavHeader/NavHeader";
import ButtonFixed from "../../component/buttun-fixed/ButtonFixed";
import Footer from "../../component/Footer/Footer";
import News from "../../component/News/News";
import {
  Button,
  ButtonGroup,
  Collapse,
  Container,
} from "react-bootstrap";
import lineBG from "../../images/line-bg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Faq = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);
  const [open8, setOpen8] = useState(false);
  const [open9, setOpen9] = useState(false);
  const [open10, setOpen10] = useState(false);
  const [open11, setOpen11] = useState(false);

  const [toggle, settoggle] = useState(false);
  const [toggle1, settoggle1] = useState(false);
  const [toggle2, settoggle2] = useState(false);
  const [toggle3, settoggle3] = useState(false);
  const [toggle4, settoggle4] = useState(false);
  const [toggle5, settoggle5] = useState(false);
  const [toggle6, settoggle6] = useState(false);
  const [toggle7, settoggle7] = useState(false);
  const [toggle8, settoggle8] = useState(false);
  const [toggle9, settoggle9] = useState(false);
  const [toggle10, settoggle10] = useState(false);
  const [toggle11, settoggle11] = useState(false);

  return (
    <>
      {/* *****Scroll To Top***** */}
      <ScrollToTop />

      {/* *****NavBar***** */}
      <NavHeader />

      {/* ******ButtonFixed*****  */}
      <ButtonFixed />

      {/* *****MainHead***** */}
      <section>
        <div className="MainHead">
          <h1>Faq's</h1>
          <ButtonGroup aria-label="Basic example">
            <Button variant="secondary" href="/" className="btn">
              <i class="bi bi-house-fill"></i>
              Home
            </Button>
            <Button variant="secondary" className="btn">
              /
            </Button>
            <Button variant="secondary" className="btn">
              Faq's
            </Button>
          </ButtonGroup>
        </div>
        <img src={lineBG} alt="" className="lineHeader" />
      </section>

      {/* *****Faq's***** */}
      <section className="Faqs">
        <Container>
          <div className="row">
            <div className="column col-xl-6">
              <div className="col-xl-12 py-1">
                <Button
                  className="button"
                  id="btn"
                  style={{ backgroundColor: toggle && "#f17732" }}
                  onClick={() => {
                    settoggle(!toggle);
                    setOpen(!open);
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
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident.
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
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident.
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
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident.
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
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident.
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
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident.
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
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident.
                    </p>
                  </div>
                </Collapse>
              </div>
            </div>

            <div className="column col-xl-6">
              <div className="col-xl-12 py-1">
                <Button
                  style={{ backgroundColor: toggle6 && "#f17732" }}
                  onClick={() => {
                    settoggle6(!toggle6);
                    setOpen6(!open6);
                  }}
                >
                  How Doctor Can Ease Your Painan Ease Your Pain ?
                  <div>
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      id="icon"
                      style={{ display: toggle6 && "none" }}
                    />
                    <FontAwesomeIcon
                      icon={faChevronUp}
                      id="icon2"
                      style={{ display: toggle6 && "block" }}
                    />
                  </div>
                </Button>
                <Collapse in={open6}>
                  <div id="example-collapse-text">
                    <p className="content">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident.
                    </p>
                  </div>
                </Collapse>
              </div>
              <div className="col-xl-12 py-1">
                <Button
                  style={{ backgroundColor: toggle7 && "#f17732" }}
                  onClick={() => {
                    settoggle7(!toggle7);
                    setOpen7(!open7);
                  }}
                >
                  How Doctor Can Ease Your Pain ?
                  <div>
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      id="icon"
                      style={{ display: toggle7 && "none" }}
                    />
                    <FontAwesomeIcon
                      icon={faChevronUp}
                      id="icon2"
                      style={{ display: toggle7 && "block" }}
                    />
                  </div>
                </Button>
                <Collapse in={open7}>
                  <div id="example-collapse-text">
                    <p className="content">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident.
                    </p>
                  </div>
                </Collapse>
              </div>

              <div className="col-xl-12 py-1">
                <Button
                  style={{ backgroundColor: toggle8 && "#f17732" }}
                  onClick={() => {
                    settoggle8(!toggle8);
                    setOpen8(!open8);
                  }}
                >
                  How Doctor Can Ease Your Pain ?
                  <div>
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      id="icon"
                      style={{ display: toggle8 && "none" }}
                    />
                    <FontAwesomeIcon
                      icon={faChevronUp}
                      id="icon2"
                      style={{ display: toggle8 && "block" }}
                    />
                  </div>
                </Button>
                <Collapse in={open8}>
                  <div id="example-collapse-text">
                    <p className="content">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident.
                    </p>
                  </div>
                </Collapse>
              </div>

              <div className="col-xl-12 py-1 ">
                <Button
                  style={{ backgroundColor: toggle9 && "#f17732" }}
                  onClick={() => {
                    settoggle9(!toggle9);
                    setOpen9(!open9);
                  }}
                >
                  How Doctor Can Ease Your Pain ?
                  <div>
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      id="icon"
                      style={{ display: toggle9 && "none" }}
                    />
                    <FontAwesomeIcon
                      icon={faChevronUp}
                      id="icon2"
                      style={{ display: toggle9 && "block" }}
                    />
                  </div>
                </Button>
                <Collapse in={open9}>
                  <div id="example-collapse-text">
                    <p className="content">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident.
                    </p>
                  </div>
                </Collapse>
              </div>

              <div className="col-xl-12 py-1 ">
                <Button
                  style={{ backgroundColor: toggle10 && "#f17732" }}
                  onClick={() => {
                    settoggle10(!toggle10);
                    setOpen10(!open10);
                  }}
                >
                  How Doctor Can Ease Your Pain ?
                  <div>
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      id="icon"
                      style={{ display: toggle10 && "none" }}
                    />
                    <FontAwesomeIcon
                      icon={faChevronUp}
                      id="icon2"
                      style={{ display: toggle10 && "block" }}
                    />
                  </div>
                </Button>
                <Collapse in={open10}>
                  <div id="example-collapse-text">
                    <p className="content">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident.
                    </p>
                  </div>
                </Collapse>
              </div>

              <div className="col-xl-12 py-1 ">
                <Button
                  style={{ backgroundColor: toggle11 && "#f17732" }}
                  onClick={() => {
                    settoggle11(!toggle11);
                    setOpen11(!open11);
                  }}
                >
                  How Doctor Can Ease Your Pain ?
                  <div>
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      id="icon"
                      style={{ display: toggle11 && "none" }}
                    />
                    <FontAwesomeIcon
                      icon={faChevronUp}
                      id="icon2"
                      style={{ display: toggle11 && "block" }}
                    />
                  </div>
                </Button>
                <Collapse in={open11}>
                  <div id="example-collapse-text">
                    <p className="content">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident.
                    </p>
                  </div>
                </Collapse>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* *****Latest News ***** */}
      <News />
      {/* *****Footer ***** */}
      <Footer />
    </>
  );
};

export default Faq;
