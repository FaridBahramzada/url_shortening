import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Shortener from "./components/Shortener/Shortener";
import Statistics from "./components/Statistics/Statistics";
import Boost from "./components/Boost Card/Boost";
import React from "react";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Main />
      <Shortener />
      <Statistics />
      <Boost />
      <Footer />
    </React.Fragment>
  );
}

export default App;
