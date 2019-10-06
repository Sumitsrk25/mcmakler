import React from "react";
import Slider from "react-slick";
import { Col } from "react-bootstrap";

import styles from "./style.module.css";

export class StepperCarousal extends React.Component {
  render() {
    var settings = {
      slidesToShow: 4,
      slidesToScroll: 3
    };
    return (
      <Col className="py-4">
        <Slider {...settings}>
          <Items
            src="https://d3e02gns9oqhhr.cloudfront.net/marketing/widget/Icons-17-05-17-GZ/10.svg"
            label="Property"
          />
          <Items
            src="https://d3e02gns9oqhhr.cloudfront.net/marketing/widget/Icons-17-05-17-GZ/10.svg"
            label="House"
          />
          <Items
            src="https://d3e02gns9oqhhr.cloudfront.net/marketing/widget/Icons-17-05-17-GZ/10.svg"
            label="Flat"
          />
          <Items
            src="https://d3e02gns9oqhhr.cloudfront.net/marketing/widget/Icons-17-05-17-GZ/10.svg"
            label="Business"
          />
          <Items
            src="https://d3e02gns9oqhhr.cloudfront.net/marketing/widget/Icons-17-05-17-GZ/10.svg"
            label="Storage"
          />
        </Slider>
      </Col>
    );
  }
}

export const Items = ({ src, label }: { src: string; label: string }) => {
  return (
    <div className={styles.items_card}>
      <img className={styles.items_card__img} alt={label} src={src} />
      <p className="mb-0">{label}</p>
    </div>
  );
};
