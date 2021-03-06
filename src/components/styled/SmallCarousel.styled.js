import styled from "styled-components";
import { H3 } from "./H3.styled";
import SCItem from "./SCItem.styled";

const SmallCarouselEl = styled.div`
  padding: 0 0 0 1rem;
  min-height: min-height;
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

export const SmallCarousel = ({ title }) => {
  return (
    <SmallCarouselEl>
      <H3>{title}</H3>
      <ItemList>
        <SCItem title="Activity" />
        <SCItem title="Relax" />
        <SCItem title="Massage" />
        <SCItem title="Sun Bathing" />
        <SCItem title="Fun" />
      </ItemList>
    </SmallCarouselEl>
  );
};
