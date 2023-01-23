import "./style.css";
const react = require("react");

const Shortener = () => {
  return (
    <div className="shortener-container">
      <div className="input-and-button">
        <input
          className="input"
          type="text"
          placeholder="Shorten a link here..."
        />
        <button className="shorten-button">Shorten it!</button>
      </div>
    </div>
  );
};

export default Shortener;
