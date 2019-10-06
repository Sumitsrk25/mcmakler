import React from "react";
import { Container } from "react-bootstrap";
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
    <WidgetContainer>
      <CarousalContainer className="px-5">
        <StepOneCard />
        <footer>
          <div className="d-flex mb-4 justify-content-around align-items-center">
            <BenefitsText>Expert Advice</BenefitsText>
            <BenefitsText>Over 100,000 satisfied owners</BenefitsText>
            <BenefitsText>Free property valuation</BenefitsText>
            <img
              alt="benefits"
              src="https://images.ctfassets.net/64q0dihi81ut/75uCtL23B3YGtk7TIp0nSe/8e5212e589cf74c69e4899407db02dee/tuv-icon.png"
              width={81}
              height={44}
            ></img>
          </div>
        </footer>
      </CarousalContainer>
    </WidgetContainer>
  );
};

const StepOneCard = () => {
  return (
    <CarousalCardWrapper>
      <TitleText className="pt-5">What is the value of your property</TitleText>
      <TitleText style={{ fontSize: "20px" }}>
        100% <span className="-o-color-primary">free</span> Get Rated
      </TitleText>
      <SubtitleText className="pt-2">
        Which property would you like to rate?
      </SubtitleText>
      <div className="d-flex mt-2 justify-content-center">
        <Items
          label="property"
          src="https://d3e02gns9oqhhr.cloudfront.net/marketing/widget/Icons-17-05-17-GZ/10.svg"
        />
        <Items
          label="property"
          src="https://d3e02gns9oqhhr.cloudfront.net/marketing/widget/Icons-17-05-17-GZ/10.svg"
        />
        <Items
          label="property"
          src="https://d3e02gns9oqhhr.cloudfront.net/marketing/widget/Icons-17-05-17-GZ/10.svg"
        />
        {/* <Items
          label="property"
          src="https://d3e02gns9oqhhr.cloudfront.net/marketing/widget/Icons-17-05-17-GZ/10.svg"
        />
        <Items
          label="property"
          src="https://d3e02gns9oqhhr.cloudfront.net/marketing/widget/Icons-17-05-17-GZ/10.svg"
        /> */}
      </div>
    </CarousalCardWrapper>
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
    <HeaderContainer fluid className="d-flex">
      <a href="/" className="d-block">
        <BrandLogo
          alt="McMakler Logo"
          src="https://images.ctfassets.net/64q0dihi81ut/6wccDLHc58Hp3wLD1LkkSR/8e11ed674f7deddd657465ebc8f2b2c0/mcmakler-logo.svg"
        />
      </a>
      <HeaderNavBar className="ml-4 d-flex">
        {NavBarOptions.map(e => (
          <HeaderLink>
            <PointerText>{e}</PointerText>
          </HeaderLink>
        ))}
      </HeaderNavBar>
    </HeaderContainer>
  );
};

export default App;
