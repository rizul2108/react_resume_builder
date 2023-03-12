import React from "react";
import logo from "../../static/images/resume.png";
import { NavLink } from "react-router-dom";
const Lp = () => {
  return (
    <div className=" container med   about-page">
      <div className="section contact-section">
        <div className="  contact-left-section center">
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <h1>Create a resume for free that stands out</h1>
          <p>
            With the help of us, Applying for your dream job is very easy and fast
          </p>
          <br />

          <NavLink to="/getting-started" className="btn hvr-float-shadow">
            <span>Get Started for Free</span>
          </NavLink>
        </div>
        <div className="contact-right-section">
          <img src={logo} width="340px"className="lp-resume" alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Lp;
