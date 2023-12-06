import React from "react";
import logo from "../images/Troll Face.png";

export default function Header() {
  return (
    <div className="Header">
      <img src={logo} width="30px" />
      <h3>MemeGenerator</h3>
      <span>React Course - Project 3</span>
    </div>
  );
}
