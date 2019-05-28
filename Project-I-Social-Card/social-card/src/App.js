import React from "react";

import CardContainer from "./components/CardComponents/CardContainer";
import HeaderContainer from "./components/HeaderComponents/HeaderContainer";
import Footer from "./components/FooterComponents/Footer";

import "./App.scss";

const App = () => {
  return (
    <div className="app-container">
      <HeaderContainer />
      <CardContainer />
      <Footer />
    </div>
  );
};

export default App;
