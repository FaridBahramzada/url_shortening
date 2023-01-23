import "./style.css";
import bcImg from "../../images/illustration-working.svg";
const react = require("react");

const Main = () => {
  return (
    <div className="main-container">
      <div className="background-image">
        <img src={bcImg} alt="background-image" />
      </div>
      <div className="left-container">
        <h1 className="header-text">More than just shorter links</h1>
        <p className="p-text">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="started-button">Get Started</button>
      </div>
    </div>
  );
};

export default Main;
