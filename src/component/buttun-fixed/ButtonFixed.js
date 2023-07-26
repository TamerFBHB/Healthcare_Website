import React from "react";
import "./ButtonFixed.css";
import { Button } from "react-bootstrap";

window.addEventListener("scroll", function () {
  if (window.scrollY >= 600) {
    document.getElementById("up").style.display = "block";
  } else {
    document.getElementById("up").style.display = "none";
  }
});

const ButtonFixed = () => {
  const scrollTo = function () {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Button id="up" onClick={scrollTo}>
        <i class="bi bi-caret-up"></i>
      </Button>
    </>
  );
};

export default ButtonFixed;
