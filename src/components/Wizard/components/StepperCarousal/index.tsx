import React from "react";
import Slider from "react-slick";
import { Col } from "react-bootstrap";

import styles from "./style.module.css";

export class StepperCarousal extends React.Component<any> {
  render() {
    var settings = {
      slidesToShow: 4,
      slidesToScroll: 3
    };
    return (
      <div className="py-4 px-4">
        <Slider {...settings}>
          <Items
            src="https://d3e02gns9oqhhr.cloudfront.net/marketing/widget/Icons-17-05-17-GZ/10.svg"
            label="Property"
            {...this.props}
          />
          <Items
            src="https://d3e02gns9oqhhr.cloudfront.net/marketing/widget/Icons-17-05-17-GZ/10.svg"
            label="House"
            {...this.props}
          />
          <Items
            src="https://d3e02gns9oqhhr.cloudfront.net/marketing/widget/Icons-17-05-17-GZ/10.svg"
            label="Flat"
            {...this.props}
          />
          <Items
            src="https://d3e02gns9oqhhr.cloudfront.net/marketing/widget/Icons-17-05-17-GZ/10.svg"
            label="Business"
            {...this.props}
          />
          <Items
            src="https://d3e02gns9oqhhr.cloudfront.net/marketing/widget/Icons-17-05-17-GZ/10.svg"
            label="Storage"
            {...this.props}
          />
        </Slider>
      </div>
    );
  }
}

export const Items = ({
  src,
  label,
  onSelect = () => {}
}: {
  src: string;
  label: string;
  onSelect?: () => void;
}) => {
  return (
    <div onClick={onSelect} className={styles.items_card}>
      <img className={styles.items_card__img} alt={label} src={src} />
      <p className="mb-0">{label}</p>
    </div>
  );
};
