import React from "react";
import { Container } from "react-bootstrap";
import { Header } from "./Header";
import { Widget } from "./Widget";

import "./App.css";

const App: React.FC = () => {
  return (
    <Container fluid className="App px-0">
      <Header />
      <Widget />
    </Container>
  );
};

export default App;
