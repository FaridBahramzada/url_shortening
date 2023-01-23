import "./Statistics.css";
import recognitionLogo from "../../images/icon-brand-recognition.svg";
import detailedRecords from "../../images/icon-detailed-records.svg";
import fullyCustomizable from "../../images/icon-fully-customizable.svg";
const react = require("react");

const Statistics = () => {
  return (
    <div className="statistics-container">
      <div className="text-container">
        <h3 className="advanced-text">Advanced Statistics</h3>
        <p id="p-text">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="card-container">
        <div className="cards">
          <i className="circle">
            <img src={recognitionLogo} className="card-icon" alt="" />
          </i>
          <div className="text">
            <h5 className="card-header">Brand Recognition</h5>
            <p className="card-text">
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
        </div>
        <div className="line"></div>
        <div className="cards card-2">
          <i className="circle">
            <img src={detailedRecords} className="card-icon" alt="" />
          </i>
          <div className="text">
            <h5 className="card-header">Detailed Records</h5>
            <p className="card-text">
              Gain insights who is clicking your links. Knowing when and where
              people engage with your content helps inform better decisions.
            </p>
          </div>
        </div>
        <div className="line1"></div>
        <div className="cards card-3">
          <i className="circle">
            <img src={fullyCustomizable} className="card-icon" alt="" />
          </i>
          <div className="text">
            <h5 className="card-header">Fully Customizable</h5>
            <p className="card-text">
              Improve brand awareness and content discoverability though
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
