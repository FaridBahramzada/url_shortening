import "./style.css";
import Logo from "../../images/logo01.svg";
import Facebook from "../../images/icon-facebook.svg";
import Twitter from "../../images/icon-twitter.svg";
import Pinterest from "../../images/icon-pinterest.svg";
import Instagram from "../../images/icon-instagram.svg";
const react = require("react");

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="logo-container">
        <img src={Logo} className="logo-img" alt="" />
      </div>
      <div className="links-container">
        <div className="features">
          <h6>Features</h6>
          <ul>
            <a href="#">
              <li>Link Shortening</li>
            </a>
            <a href="#">
              <li>Branded Links</li>
            </a>
            <a href="#">
              <li>Analytics</li>
            </a>
          </ul>
        </div>
        <div className="resources">
          <h6>Resources</h6>
          <ul>
            <a href="#">
              <li>Blog</li>
            </a>
            <a href="#">
              <li>Developers</li>
            </a>
            <a href="#">
              <li>Support</li>
            </a>
          </ul>
        </div>
        <div className="company">
          <h6>Company</h6>
          <ul>
            <a href="#">
              <li>About</li>
            </a>
            <a href="#">
              <li>Our Team</li>
            </a>
            <a href="#">
              <li>Careers</li>
            </a>
            <a href="#">
              <li>Contact</li>
            </a>
          </ul>
        </div>
      </div>
      <div className="social-icons">
        <a href="#">
          <img src={Facebook} alt="" />
        </a>
        <a href="#">
          <img src={Twitter} alt="" />
        </a>
        <a href="#">
          <img src={Pinterest} alt="" />
        </a>
        <a href="#">
          <img src={Instagram} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
