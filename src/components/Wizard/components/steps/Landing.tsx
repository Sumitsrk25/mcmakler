import React from "react";
import { Col, Row, Button, Carousel, Form } from "react-bootstrap";
import { StepFooter } from "../footer";
import { StepperCarousal } from "../StepperCarousal";

export const LandingStep = () => {
  const [index, setIndex] = React.useState(0);

  return (
    <>
      <Row className="mx-0">
        {index === 0 ? (
          <Col>
            <p className="-o-font-title text-center">
              What is value of your property
            </p>
            <p
              className="-o-font-title text-center"
              style={{ fontSize: "20px" }}
            >
              100% <span className="-o-color-primary">Free</span> Get Rated
            </p>
            <p className="-o-font-subtitle text-center">
              Which property would you like to rate?
            </p>
          </Col>
        ) : (
          <Col>
            <p className="-o-font-title text-center">
              What is value of your property
            </p>
          </Col>
        )}
      </Row>
      <Row className="mx-0 flex-grow-1 justify-content-center">
        <Col>
          <Carousel activeIndex={index} controls={false} indicators={false}>
            <Carousel.Item>
              <StepperCarousal onSelect={() => setIndex(2)} />
              <div>
                <Button
                  className="px-5"
                  onClick={() => {
                    if (index) {
                      setIndex(index - 1);
                    } else {
                      setIndex(1);
                    }
                  }}
                >
                  {index ? "Back" : "Request Rating"}
                </Button>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <StepperCarousal onSelect={() => setIndex(2)} />
              <div>
                <Button
                  className="px-5"
                  onClick={() => {
                    if (index) {
                      setIndex(index - 1);
                    } else {
                      setIndex(1);
                    }
                  }}
                >
                  {index ? "Back" : "Request Rating"}
                </Button>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <RangeCard />
                <Button
                  className="px-5"
                  onClick={() => {
                    if (index) {
                      setIndex(index - 1);
                    } else {
                      setIndex(1);
                    }
                  }}
                >
                  {index ? "Back" : "Request Rating"}
                </Button>
              </div>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <StepFooter />
    </>
  );
};

const RangeCard = () => {
  const [value, setValue] = React.useState("100" as string);
  const onChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <Form.Group>
      <Form.Control
        type="range"
        value={value}
        onChange={onChange}
      ></Form.Control>
      <Form.Group>
        <Form.Label>How Much area does Property have?</Form.Label>
        <Form.Control
          type="number"
          value={value}
          onChange={onChange}
        ></Form.Control>
      </Form.Group>
    </Form.Group>
  );
};
