import React from "react";
import { Link } from "react-router-dom";

// Hooks & Context
import { useTheme } from "../../context/theme/ThemeContext";

// Styles
import {
  NavbarContainerStyled,
  NavbarLogoStyled,
  NavbarMenuStyled,
  MenuItemStyled,
} from "./NavbarStyles";

function Navbar() {
  const { changeTheme } = useTheme();

  return (
    <NavbarContainerStyled>
      <Link to="/">
        <NavbarLogoStyled>Logo.</NavbarLogoStyled>
      </Link>
      <NavbarMenuStyled>
        <MenuItemStyled>
          <Link to="/">Home</Link>
        </MenuItemStyled>
        <MenuItemStyled onClick={changeTheme}>Change Theme</MenuItemStyled>
      </NavbarMenuStyled>
    </NavbarContainerStyled>
  );
}

export default Navbar;
