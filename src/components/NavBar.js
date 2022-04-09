import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import {
  LogoAstroNFT,
  LogoText,
  NavBarAstroNFT,
  NavBarButtons,
  NavButton,
  NavIconButtons,
  DropdownSign,
  SignButton,
} from "../styles/StyleNavBar";
import {
  DropdownButton,
  Dropdown,
} from "react-bootstrap";

const NavBar = () => {
  return (
    <>
      <NavBarAstroNFT>
        <LogoAstroNFT>
          <LinkRouter to={"/home"}>
            <img src={process.env.PUBLIC_URL + "/assets/logo.png"} alt="logo" />
          </LinkRouter>
          <LinkRouter to={"/home"}>
            <LogoText>AstroNFT</LogoText>
          </LinkRouter>
        </LogoAstroNFT>
        <NavBarButtons>
          <LinkRouter to={"/home"}>
            <NavButton>Home</NavButton>
          </LinkRouter>
          <LinkRouter to={"/products"}>
            <NavButton>Products</NavButton>
          </LinkRouter>
          <LinkRouter to={"/contact"}>
            <NavButton>Contact</NavButton>
          </LinkRouter>
          <NavIconButtons>
            <LinkRouter to={"/cart"}>
              <img src={process.env.PUBLIC_URL + "/assets/shopping-cart.jpg"} />
            </LinkRouter>
            <DropdownSign>
              <DropdownButton
                id="dropdown-button-drop"
                title={
                  <img src={process.env.PUBLIC_URL + "/assets/user.jpg"} />
                }
              >
                <Dropdown.Item>
                  <LinkRouter to={"/signin"}>
                    {" "}
                    <SignButton>Sign In</SignButton>{" "}
                  </LinkRouter>
                </Dropdown.Item>
                <Dropdown.Item>
                  <LinkRouter to={"/signup"}>
                    {" "}
                    <SignButton>Sign Up</SignButton>{" "}
                  </LinkRouter>
                </Dropdown.Item>
              </DropdownButton>
            </DropdownSign>
          </NavIconButtons>
        </NavBarButtons>
      </NavBarAstroNFT>
    </>
  );
};

export default NavBar;
