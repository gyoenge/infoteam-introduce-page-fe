import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import * as T from "../styled/StyledText";
import navbarLogo from "../../imgs/logoImgs/IntroduceNavbarLogo3.svg";
import navbarLogoMini from "../../imgs/logoImgs/IntroduceNavbarLogoMini.svg";

/* styled-components */
const HeaderContainer = styled.div`
  background-color: ${(props) =>
    props.simplify ? "rgba(255, 255, 255, 0)" : "rgba(255, 255, 255, 0.5)"};
  backdrop-filter: ${(props) => (props.simplify ? "none" : "blur(10px)")};
  box-shadow: ${(props) =>
    props.simplify ? "none" : "1px 1px 3px 1px rgba(0, 0, 0, 0.2)"};

  position: sticky;
  z-index: 2;
  top: 0;

  display: flex;
  justify-content: center;

  transition: 0.3s;
  &.hide {
    transform: translateY(-64px);
  }
`;

const HeaderWrap = styled.div`
  width: 90%;
  max-width: 1700px;
  height: 64px;
  margin: 0px 25px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const MenuWrap = styled.div`
  display: flex;
`;

const HomeButton = styled(Link)`
  display: flex;
  align-items: center;
`;
const MenuButton = styled(NavLink)`
  ${T.HeaderMenuText.componentStyle.rules[0]}

  padding: 0px 5px 4px;
  margin-right: 15px;

  transition: 0.1s;

  &:hover {
    color: #707070;
  }
  &.active {
    color: #ff6565;
  }
  &.active:hover {
  }
`;

const LogoIcon = styled.img`
  height: 30px;
  margin-left: 13px;
  padding-bottom: 2px;
`;

/* throttle */
const throttle = function (callback, waitTime) {
  let timerId = null;
  return (e) => {
    if (timerId) return;
    timerId = setTimeout(() => {
      callback.call(this, e);
      timerId = null;
    }, waitTime);
  };
};

/* header react component */
function Header() {
  const [simplify, setSimplify] = useState(true); // 스크롤y값 0이면 simplify
  const [hide, setHide] = useState(false); // 일정 스크롤y값 이상부터, 스크롤 내리면 hide
  const [pageY, setPageY] = useState(0);
  const documentRef = useRef(document);

  const handleScroll = () => {
    const { pageYOffset } = window;
    const deltaY = pageYOffset - pageY;
    const hide = pageYOffset >= 1600 && deltaY >= 0;
    const simplify = pageYOffset <= 200;
    setHide(hide);
    setSimplify(simplify);
    setPageY(pageYOffset);
  };
  const throttleScroll = throttle(handleScroll, 50);

  useEffect(() => {
    documentRef.current.addEventListener("scroll", throttleScroll);
    return () =>
      documentRef.current.removeEventListener("scroll", throttleScroll);
  }, [pageY]);

  return (
    <HeaderContainer className={hide && "hide"} simplify={simplify}>
      <HeaderWrap>
        <HomeButton to="/">
          <LogoIcon src={navbarLogo} />
        </HomeButton>
        <MenuWrap>
          <MenuButton to="/service">services</MenuButton>
          <MenuButton to="/member">members</MenuButton>
        </MenuWrap>
      </HeaderWrap>
    </HeaderContainer>
  );
}

export default Header;
