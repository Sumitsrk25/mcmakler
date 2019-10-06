import styled from "styled-components";
import { Container } from "react-bootstrap";
import { specification, colors } from "./Theme";

export const HeaderContainer = styled(Container)`
  height: ${specification.headerHeight}vh;
`;

export const HeaderLink = styled.a`
  height: 100%;
  padding: 0 10px;
  display: flex;
  align-items: center;

  :hover {
    background-color: #f6f6f6;
  }
`;

export const BrandLogo = styled.img`
  width: 140px;
  height: 100%;
`;

export const HeaderNavBar = styled.nav`
  height: 100%;
`;

export const PointerText = styled.p`
  cursor: pointer;
  margin-bottom: 0px;
`;

export const WidgetContainer = styled.div`
  background-image: url(https://images.ctfassets.net/64q0dihi81ut/4JsjvN05wPCIhRMI07CzXf/94c3c9089e60271849e01efa0c7a0f75/hero_bg.png?w=1200&fm=jpg&fl=progressive);
  background-size: cover;
  padding: 40px;
  height: ${100 - specification.headerHeight}vh;
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const CarousalContainer = styled.div`
  border-color: ${colors.primary};
  border-width: 5px;
  border-style: solid;
  display: flex;
  flex: 1;
  max-width: 768px;
  background-color: ${colors.cardBackground};
  min-height: 530px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.14);
  flex-direction: column;
`;

export const CarousalCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

export const TitleText = styled.p`
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  margin-bottom: 0;
`;

export const SubtitleText = styled.p`
  font-size: 15px;
  font-weight: 300;
  color:${colors.subtitleColor}
  margin-bottom: 0;
`;

export const BenefitsText = styled.p`
  font-size: 13px;
  color: #cfcfcd;
  margin-bottom: 0;

  ::before {
    content: "✓";
    margin: 0 4px;
  }
`;

export const ItemCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  border: 4px solid #fff;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.16);
  background-color:#fff;

  img{
    width:138.5px
    height:100px
  }

  p{
      margin-bottom:0
      text-align:center
      text-transform:capitalize
  }
`;
