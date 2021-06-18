import styled from "styled-components";

export const LayoutContainerStyled = styled.div`
  background: ${(props) => props.theme.colors.bg};
  min-height: 100vh;
  height: auto;
`;

export const PageContainerStyled = styled.div`
  padding: 20px;
  color: ${(props) => props.theme.colors.text};
`;
