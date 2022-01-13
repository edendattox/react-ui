import styled from "styled-components";

export const Input = styled.input`
  color: ${(p) => (p.color ? p.color : "")};
  flex: ${(p) => (p.fw ? 1 : "")};
  border: ${(p) => (p.noBorder ? "none" : "")};
  font-weight: ${(p) => (p.fontWeight ? p.fontWeight : "")};
  font-size: ${(p) => (p.fontSize ? p.fontSize : "")};
  padding: 0.2rem;

  &:focus {
    outline: none;
  }
`;
