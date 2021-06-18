import styled from "styled-components";

export const TitleStyled = styled.p`
  color: ${(props) => props.theme.colors.text};
  font-size: 20px;
  font-weight: 500;
  padding: 10px;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
`;
