import React from "react";
import { Container } from "react-bootstrap";
import { Header } from "./components/Header";

import "./App.css";
import { Wizard } from "./components/Wizard";

const App: React.FC = () => {
  return (
    <div className="-o-app-container">
      <Header />
      <Wizard />
    </div>
  );
};

export default App;
