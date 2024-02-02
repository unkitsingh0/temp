import React from "react";
import "./style/home.css";
import homeImg from "./style/homeImg.jpg";

function Home() {
  return (
    <div className="Home">
      <img src={homeImg} alt="" style={{ width: "341px" }} />
      <h1>Welcome to Digitalflake Admin</h1>
    </div>
  );
}

export default Home;
