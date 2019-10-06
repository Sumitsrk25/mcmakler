import React from "react";
import { Row } from "react-bootstrap";

import styles from "./style.module.css";
export const StepFooter = () => {
  return (
    <Row className="mx-0 justify-content-around mx-2">
      <span className={styles.benefits}>Expert advice</span>
      <span className={styles.benefits}>Over 100,000 satisfied owners</span>
      <span className={styles.benefits}>Free property valuation</span>
      <span className={styles.benefits}>Expert advice</span>
    </Row>
  );
};
