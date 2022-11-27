import React from "react";
import "boxicons";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  Header,
  NavbarContainer,
  NavbarLogo,
  NavButton,
  NavIcons,
  NavList,
  NavMenu,
} from "./styles";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as routes from "../../app/router/routes.js";
import { setToken } from "../../app/redux/slices";

const NavBar = () => {
  const [isScrollHeader, setIsScrollHeader] = useState(false);

  const token = useSelector((state) => state.app.token);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const usePathName = () => {
    const location = useLocation();
    return location.pathname.split("/")[1];
  };
  const currentLocation = usePathName();

  useEffect(() => {
    const scrollHeader = () => {
      // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
      if (window !== undefined) {
        if (window.scrollY >= 50) {
          addScrollHeader();
        } else {
          removeScrollHeader();
        }
      }
    };
    window.addEventListener("scroll", scrollHeader);

    return () => window.removeEventListener("scroll", scrollHeader);
  });

  function addScrollHeader() {
    if (!isScrollHeader) {
      setIsScrollHeader(true);
    }
  }
  function removeScrollHeader() {
    if (isScrollHeader) {
      setIsScrollHeader(false);
    }
  }

  const handleLogout = () => {
    dispatch(setToken(null));
  };
  const handleLogoClick = () => {
    if (currentLocation === "") {
      // window.scrollTo(0, 0);
      window.location.reload();
      // navigate(0);
    } else {
      navigate(routes.homeRoute);
    }
  };
  const handleAddProperty = () => {
    navigate(routes.addPropertyRoute);
  };

  return (
    <>
      <Header scrollHeader={isScrollHeader}>
        <NavbarContainer scrollHeader={isScrollHeader}>
          <NavbarLogo scrollHeader={isScrollHeader} onClick={handleLogoClick}>
            <box-icon type="solid" name="home-alt-2"></box-icon>
            <span>NetNekretnine</span>{" "}
          </NavbarLogo>
          <NavMenu>
            <NavList linkID={currentLocation} scrollHeader={isScrollHeader}>
              <li>
                <Link id="home" to={routes.homeRoute}>
                  <box-icon type="solid" name="home-alt-2"></box-icon>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <a href="#popular">
                  <box-icon name="building-house" type="solid"></box-icon>
                  <span>Residences</span>
                </a>
              </li>
              <li>
                <Link id="contact" to={routes.contactRoute}>
                  <box-icon name="phone" type="solid"></box-icon>
                  <span>Contact</span>
                </Link>
              </li>
              {token ? (
                <li>
                  <Link
                    id="logout"
                    to={routes.homeRoute}
                    onClick={handleLogout}
                  >
                    <box-icon name="log-out" type="solid"></box-icon>
                    <span>Logout</span>
                  </Link>
                </li>
              ) : (
                <li>
                  <Link id="login" to={routes.loginRoute}>
                    <box-icon name="log-in" type="solid"></box-icon>
                    <span>Login</span>
                  </Link>
                </li>
              )}
            </NavList>
          </NavMenu>
          {/* <box-icon type="regular" name="dots-vertical-rounded"></box-icon> */}
          <NavIcons>
            {token ? <box-icon type="regular" name="heart"></box-icon> : null}
            <box-icon type="regular" name="moon"></box-icon>
            {token ? <AccountCircleIcon /> : null}
          </NavIcons>

          <NavButton onClick={handleAddProperty}>ADD PROPERTY</NavButton>
        </NavbarContainer>
      </Header>
    </>
  );
};

export default NavBar;
