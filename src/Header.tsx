import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { BrandLogo, PointerText, HeaderLink } from "./styles";
const NavBarOptions = [
  "property sales",
  "property validation",
  "counselor",
  "Our team",
  "Career"
];

export const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <BrandLogo
          alt="McMakler Logo"
          src="https://images.ctfassets.net/64q0dihi81ut/6wccDLHc58Hp3wLD1LkkSR/8e11ed674f7deddd657465ebc8f2b2c0/mcmakler-logo.svg"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {NavBarOptions.map(e => (
            <HeaderLink key={e}>
              <PointerText>{e}</PointerText>
            </HeaderLink>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
