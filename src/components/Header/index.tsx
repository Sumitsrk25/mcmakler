import React from "react";
import { Navbar, Nav } from "react-bootstrap";

import styles from "./style.module.css";

const NavBarOptions = [
  "property sales",
  "property validation",
  "counselor",
  "Our team",
  "Career"
];

export const Header = () => {
  return (
    <Navbar className={styles.navbar} expand="lg">
      <Navbar.Brand href="#home">
        <img
          className={styles.logo_img}
          alt="McMakler Logo"
          src="https://images.ctfassets.net/64q0dihi81ut/6wccDLHc58Hp3wLD1LkkSR/8e11ed674f7deddd657465ebc8f2b2c0/mcmakler-logo.svg"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {NavBarOptions.map(e => (
            <a className={styles.header_link} key={e}>
              <p className="mb-0">{e}</p>
            </a>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
