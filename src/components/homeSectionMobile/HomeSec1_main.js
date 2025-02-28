import React from "react";
import * as T from "../styled/StyledText";
import InfoteamPinklogo from "../../imgs/logoImgs/InfoteamPinkLogo.svg";
import { SectionContainerCol } from "../styled/StyledContainerGlobal";
import styled from "styled-components";
import { useScrollFadeIn } from "../../hooks/useScrollFade";
import AboutButton from "../button/AboutButton";

const Logo = styled.img`
  width: 70vw;
`;

function HomeSec1MainMobile({ innerRefArr }) {
  const animatedItem = {
    0: useScrollFadeIn("up", 1.7, 0),
    1: useScrollFadeIn("up", 1.7, 0.5),
    2: useScrollFadeIn("up", 1.7, 1.0),
  };

  return (
    <SectionContainerCol
      style={{ height: "100vh" }}
      ref={(el) => (innerRefArr.current[0] = el)}
    >
      <div
        style={{
          width: "100%",
          height: "4px",
          backgroundColor: "#ff6565",
          position: "absolute",
          top: "0px",
        }}
      />
      <Logo src={InfoteamPinklogo} {...animatedItem[0]} />
      <T.LogoUnderText style={{ color: "red" }} {...animatedItem[1]}>
        저희는
        <span style={{ fontWeight: "bold", color: "#ff6565" }}> 지스트</span>
        대학 총학생회
        <span style={{ fontWeight: "bold", color: "#ff6565" }}> 정보국</span>
        입니다
      </T.LogoUnderText>
      <div {...animatedItem[2]}>
        <AboutButton secRefArr={innerRefArr} />
      </div>

      <div style={{ height: "20px" }} />
    </SectionContainerCol>
  );
}

export default HomeSec1MainMobile;
