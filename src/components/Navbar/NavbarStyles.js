import styled from "styled-components";

export const NavbarContainerStyled = styled.div`
  background: ${(props) => props.theme.colors.bg};
  padding: 20px;
  max-height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.colors.text};
  box-shadow: 0px 0px 10px #00000036;

  & a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.text};
  }
`;

export const NavbarLogoStyled = styled.p`
  font-size: 35px;
  font-weight: 900;
`;

export const NavbarMenuStyled = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  height: 100%;
  gap: 20px;

  @media screen and (max-width: 690px) {
    display: none;
  }
`;

export const MenuItemStyled = styled.li`
  cursor: pointer;
`;
