import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import styles from "./style.module.css";
import { LandingStep } from "./components/steps/Landing";
export const Wizard = () => {
  return (
    <Container fluid className={styles.wizard_container}>
      <Row className="mx-0 flex-grow-1 m-auto">
        <Col className="p-5">
          <Container
            className="p-4 bg-light h-100 -o-border-primary d-flex flex-column justify-content-center "
            style={{ maxWidth: "768px" }}
          >
            <LandingStep />
          </Container>
        </Col>
      </Row>
    </Container>
  );
};
