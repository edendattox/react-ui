import styled from "styled-components";
import { colors } from "../../assets/Colors";
import { H3 } from "../styled/H3.styled";
import { BCItem } from "./BCItem.styled";

const BigCarouselEl = styled.div`
  padding: 0 0 0 1rem;
  min-height: min-content;
`;

const TitleContainer = styled.span`
  display: flex;
  justify-content: space-between;
  padding-right: 1rem;
`;

const SeeAll = styled.a`
  color: ${colors.Primary};
  font-weight: 600;
  text-decoration: none;
`;

const ItemList = styled.div`
  display: flex;
  margin-top: 1rem;
  column-gap: 1rem;
  overflow-x: scroll;
  scrollbar-width: 0;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const BigCarousel = ({ title }) => {
  return (
    <BigCarouselEl>
      <TitleContainer>
        <H3>{title}</H3>
        <SeeAll href="#">See all</SeeAll>
      </TitleContainer>
      <ItemList>
        <BCItem />
        <BCItem />
        <BCItem />
      </ItemList>
    </BigCarouselEl>
  );
};
