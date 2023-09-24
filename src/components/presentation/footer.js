import React from "react";
import "../../static/scss/footer.scss";
import git from "../../static/images/github.png";
import linkedin from "../../static/images/linkedin.png";
import { Link } from "react-router-dom";
const footer = () => {
  return (
    <footer className="footer">
      <div>
        <Link to="https://github.com/rizul2108">
          <img src={git} className="footer-logo" alt="gitIcon" />
        </Link>
        <Link to="https://www.linkedin.com/in/rizul-gupta-1b8880255/">
          <img src={linkedin} className="footer-logo" alt="linkedInicon" />
        </Link>
      </div>
    </footer>
  );
};
export default footer;
