import styled from "styled-components";
import HomeTopSection from "../components/HomeTopSection";
import NavMenu from "../components/NavMenu";
import { BigCarousel } from "../components/styled/BigCarousel.styled";
import { SmallCarousel } from "../components/styled/SmallCarousel.styled";

const HomePageEl = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auth;
  scrollbar-width: 0;
  row-gap: 1.5rem;
  padding-top: 3rem;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const Home = () => {
  return (
    <HomePageEl>
      <HomeTopSection />
      <Content>
        <BigCarousel title="Popular" />
        <SmallCarousel title="Categories" />
        <BigCarousel title="Recommend" />
      </Content>
      <NavMenu />
    </HomePageEl>
  );
};

export default Home;
