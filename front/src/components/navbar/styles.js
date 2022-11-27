import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${(props) =>
    props.scrollHeader ? "var(--body-color)" : "transparent"};
  box-shadow: ${(props) =>
    props.scrollHeader ? "0 1px 4px hsla(228, 4%, 15%, 0.1)" : "none"};
  transition: 0.4s;
  z-index: var(--z-fixed);
`;

export const NavbarContainer = styled.nav`
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1023px) {
    > box-icon {
      margin: 0;
    }
  }
`;

export const NavIcons = styled.div`
  margin: 0 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1023px) {
    margin: 0;
  }

  > box-icon {
    width: 26px;
    height: 26px;
    fill: ${(props) =>
      props.scrollHeader ? "var(--text-color-light)" : "var(--body-color)"};
    margin: 0 0.3rem;

    @media screen and (max-width: 320px) {
      width: 24px;
      height: 24px;
      margin: 0 0.2rem;
    }
  }

  > .MuiSvgIcon-root {
    width: 26px;
    height: 26px;
    color: ${(props) =>
      props.scrollHeader ? "var(--text-color-light)" : "var(--body-color)"};
    margin: 0 0.3rem;
    @media screen and (max-width: 320px) {
      width: 24px;
      height: 24px;
      margin: 0 0.2rem;
    }
  }
`;

export const NavbarLogo = styled.div`
  color: ${(props) =>
    props.scrollHeader ? "var(--first-color-alt)" : "var(--body-color)"};
  cursor: pointer;
  display: inline-flex;
  align-items: center;

  span {
    font-weight: var(--font-medium);
  }

  > box-icon {
    fill: ${(props) =>
      props.scrollHeader ? "var(--first-color-alt)" : "var(--body-color)"};
  }

  &:hover {
    color: var(--first-color);
    > box-icon {
      fill: var(--first-color);
    }
  }
`;

export const NavMenu = styled.div`
  width: initial;
  margin-left: auto;

  @media screen and (max-width: 1023px) {
    position: fixed;
    bottom: 2rem;
    background-color: var(--container-color);
    box-shadow: 0 8px 24px hsla(228, 66%, 45%, 0.15);
    width: 70%;
    left: 0;
    right: 0;
    margin: 0 auto;
    padding: 1.3rem 3rem;
    border-radius: 1.25rem;
    transition: 0.4s;
  }
  @media screen and (max-width: 400px) {
    width: 90%;
    padding-left: 24px;
    padding-right: 24px;
  }
`;

export const NavList = styled.ul`
  color: white;
  display: flex;
  column-gap: 3rem;
  li > a {
    color: ${(props) =>
      props.scrollHeader ? "var(--text-color-light)" : "var(--body-color)"};
  }
  li > a#${(props) => (props.linkID ? props.linkID : "home")} {
    @media screen and (min-width: 1024px) {
      border-bottom: 3px solid var(--first-color);
      padding-bottom: 2px;
    }

    @media screen and (max-width: 1023px) {
      box-icon {
        fill: var(--first-color);
      }
    }
  }

  box-icon {
    display: none;
  }

  @media screen and (max-width: 1023px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 0rem;
    padding-inline-start: 0px;
    li > a {
      color: var(--text-color);
      display: flex;
      padding: 0.5rem;
      border-radius: 50%;
    }
    box-icon {
      display: block;
      fill: var(--text-color);
    }
    span {
      display: none;
    }
  }
`;

export const NavButton = styled.button`
  background: linear-gradient(
    101deg,
    var(--first-color),
    var(--first-color-alt)
  );
  color: #fff;
  padding: 14px 28px;
  border-radius: 0.5rem;
  font-size: var(--normal-font-size);
  font-weight: var(--font-medium);
  box-shadow: 0 4px 8px hsla(228, 66%, 45%, 0.25);
  transition: 0.3s;
  cursor: pointer;

  @media screen and (max-width: 1023px) {
    display: none;
  }
`;
