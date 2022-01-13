import styled from "styled-components";

export const H5 = styled.h5`
  color: ${(p) => (p.color ? p.color : "")};
  font-size: ${(p) => (p.fontSize ? p.fontSize : "")};
  font-weight: ${(p) => (p.fontWeight ? p.fontWeight : "")};
`;
