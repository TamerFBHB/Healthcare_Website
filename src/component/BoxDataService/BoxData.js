import React from "react";
import { Button } from "react-bootstrap";
import "./BoxData.css";
import ServiceData from "./ServiceData";

const BoxData = () => {
  return (
    <>
      {ServiceData.map((item) => {
        return (
          <div className="card">
           <div className="bis">
             <i className={item.icon}></i>
           </div>
            <h3>{item.title}</h3>
            <p>Phasellus venenatis porta ehonus integer et veverra felis</p>
            <Button>View More</Button>
          </div>
        );
      })}
    </>
  );
};
export default BoxData;

