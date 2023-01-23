import "./style.css";
import Logo from "../../images/logo.svg";
const react = require("react");

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left-side">
        <div className="navbar-logo">
          <img src={Logo} alt="site-logo" />
        </div>
        <div className="left-side-links">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Resources</a>
        </div>
      </div>
      <div className="navbar-right-side">
        <div className="right-side-links">
          <a href="#" className="login-button">
            Login
          </a>
          <button className="signup-button">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
