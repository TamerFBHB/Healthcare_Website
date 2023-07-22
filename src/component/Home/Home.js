import React from "react";
import "./Home.css";
import NavHeader from "../NavHeader/NavHeader";
import bgend from "../../images/after.png";
import { Button, Container } from "react-bootstrap";
import mainImg from "../../images/main.png";
import shape1 from "../../images/shape1.png";
import shape2 from "../../images/shape2.png";
import shape3 from "../../images/shape3.png";
import pic1 from "../../images/pic1.jpg";
import pic2 from "../../images/pic2.jpg";
import pic3 from "../../images/pic3.jpg";
import shape22 from "../../images/shape2.png";

const Home = () => {
  return (
    <>
      <NavHeader />
      <section className="mainPage">
        <Container>
          <div className="row align-items-center main ">
            <div className="info col-md-6 col-sm-12">
              <p>We Provide All Health Care Solution</p>
              <h1>Protect Your Health And Take Care To Of Your Health</h1>
              <Button className="btn">Read More</Button>
            </div>
            <div className="image col-md-6 col-sm-12">
              <img src={mainImg} alt="" />
            </div>
          </div>
        </Container>
        <img src={shape1} alt="" className="shape1" />
        <img src={shape2} alt="" className="shape2" />
        <img src={shape3} alt="" className="shape3" />
      </section>
      <img src={bgend} alt="" className="bgend" />
      
      {/* ******About_us*****  */}
      <section className="About_us ">
        <Container>
          <div className="About">
            <div className=" shape">
              <div className="flex pic1_pic2">
                <div >
                  <img src={pic1} alt="" className="pic1" />
                </div>
                <div >
                  <img src={pic2} alt="" className="pic2 " />
                </div>
              </div>

              <div className="flex pic3_pic4">
                <div >
                  <img src={pic3} alt="" className="pic3" />
                </div>
                <div className="col-sm-12 col-md-7 col-lg-7  number ">
                  <h1>20</h1>
                  <span>Year Experience</span>
                </div>
              </div>
            </div>

            <div className="p-4 info-medical">
              <div>
                <h5>About Us</h5>
                <h1>
                  The Great Place Of Medical Hospital Center
                </h1>
                <p>
                  We provide the special tips and advices of heath care
                  treatment and high level of best technology involve in the our
                  hospital.
                </p>
              </div>
              <div className=" buttons">
                <button className="btn btn-Help">
                <i class="bi bi-truck"></i>
                  <p>Emergency Help</p>
                </button>

                <button className="btn btn-Doctor">
                <i class="bi bi-hospital"></i>
                <p> Qualified Doctors</p>
                </button>

                <button className="btn btn-cross">
                <i class="bi bi-heart-pulse"></i>
                 <p> Best Professionals</p>
                </button>

                <button className="btn btn-syn">
                <i class="bi bi-capsule"></i>
                <p>Medical Treatment</p>
                </button>
              </div>
              <Button>Read More</Button>
            </div>
          </div>
          <img src={shape22} alt="" className="shape22" />
        </Container>
      </section>
    </>
  );
};

export default Home;
