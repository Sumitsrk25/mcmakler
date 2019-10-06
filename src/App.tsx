import React from "react";
import {
  Container,
  Navbar,
  NavDropdown,
  Nav,
  Form,
  FormControl,
  Button,
  Row,
  Col
} from "react-bootstrap";
import {
  HeaderLink,
  HeaderContainer,
  BrandLogo,
  HeaderNavBar,
  PointerText,
  WidgetContainer,
  CarousalContainer,
  CarousalCardWrapper,
  TitleText,
  SubtitleText,
  BenefitsText,
  ItemCard
} from "./styles";

import "./App.css";

const App: React.FC = () => {
  return (
    <Container fluid className="App px-0">
      <Header />
      <Widget />
    </Container>
  );
};

const Widget = () => {
  return (
    <>
      <div className="container-fluid widget-container bg-danger">
        {/* <Row className="mx-5">
          <Col className="m-auto border border-danger">
            <Row className="justify-content-center title">
              <p>What is the value of your property</p>
              <p>100% free Get Rated</p>
              <p>Which property would you like to rate?</p>
            </Row>
            <Row></Row>
            <Row>
              
            </Row>
          </Col>
        </Row> */}
      </div>
    </>
  );
};

const StepOneCard = () => {
  return (
    // <CarousalCardWrapper>
    //   <TitleText className="pt-5">What is the value of your property</TitleText>
    //   <TitleText style={{ fontSize: "20px" }}>
    //     100% <span className="-o-color-primary">free</span> Get Rated
    //   </TitleText>
    //   <SubtitleText className="pt-2">
    //     Which property would you like to rate?
    //   </SubtitleText>
    //   <div className="d-flex mt-2 justify-content-center">
    //     <Items
    //       label="property"
    //       src="https://d3e02gns9oqhhr.cloudfront.net/marketing/widget/Icons-17-05-17-GZ/10.svg"
    //     />
    //     <Items
    //       label="property"
    //       src="https://d3e02gns9oqhhr.cloudfront.net/marketing/widget/Icons-17-05-17-GZ/10.svg"
    //     />
    //     <Items
    //       label="property"
    //       src="https://d3e02gns9oqhhr.cloudfront.net/marketing/widget/Icons-17-05-17-GZ/10.svg"
    //     />
    //     {/* <Items
    //       label="property"
    //       src="https://d3e02gns9oqhhr.cloudfront.net/marketing/widget/Icons-17-05-17-GZ/10.svg"
    //     />
    //     <Items
    //       label="property"
    //       src="https://d3e02gns9oqhhr.cloudfront.net/marketing/widget/Icons-17-05-17-GZ/10.svg"
    //     /> */}
    //   </div>
    // </CarousalCardWrapper>
    <></>
  );
};

const Items = ({ src, label }: { src: string; label: string }) => {
  return (
    <ItemCard>
      <img alt={label} src={src} />
      <p>{label}</p>
    </ItemCard>
  );
};

const NavBarOptions = [
  "property sales",
  "property validation",
  "counselor",
  "Our team",
  "Career"
];

const Header = () => {
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

export default App;
