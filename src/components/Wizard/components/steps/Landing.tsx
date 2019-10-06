import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import { StepFooter } from "../footer";
import { StepperCarousal } from "../StepperCarousal";

export const LandingStep = () => {
  return (
    <>
      <Row className="mx-0">
        <Col>
          <p className="-o-font-title text-center">
            What is value of your property
          </p>
          <p className="-o-font-title text-center" style={{ fontSize: "20px" }}>
            100% <span className="-o-color-primary">Free</span> Get Rated
          </p>
          <p className="-o-font-subtitle text-center">
            Which property would you like to rate?
          </p>
        </Col>
      </Row>
      <Row className="mx-0 flex-grow-1 justify-content-center">
        <StepperCarousal />
        <Col className="flex-grow flex-shrink mb-1">
          <Button className="px-5">Request a rating now</Button>
        </Col>
      </Row>
      <StepFooter />
    </>
  );
};
