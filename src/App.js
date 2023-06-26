import React from "react";

// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Section1 from "./components/Section 1/Section1";
import Services from "./components/Services/Services";
import Works from "./components/Works/Works";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <NavigationBar />
      <Section1 />
      <Services />
      <Works />
      <Footer />
    </div>
  );
};

export default App;
