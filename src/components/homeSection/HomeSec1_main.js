import React from "react";
import * as T from "../styled/StyledText";
import InfoteamPinklogo from "../../imgs/logoImgs/InfoteamPinkLogo.svg";
import { SectionContainerCol } from "../styled/StyledContainerGlobal";
import styled from "styled-components";
import { useScrollFadeIn } from "../../hooks/useScrollFade";
import { MEDIA_QUERY_WIDTH_MOBILE_WIDTH } from "../../hooks/useIsMobile";

const Logo = styled.img`
  width: 650px;
  @media only screen and (max-width: ${MEDIA_QUERY_WIDTH_MOBILE_WIDTH}) {
    width: 70vw;
    min-width: 350px;
  }
`;
function HomeSec1Main({ innerRefArr }) {
  const animatedItem = {
    0: useScrollFadeIn("up", 1.7, 0),
    1: useScrollFadeIn("up", 1.7, 0.5),
  };

  return (
    <SectionContainerCol ref={(el) => (innerRefArr.current[0] = el)}>
      {/* [[ Main Logo - (1) Styled Text로 (2) Logo svg img로 ]] 
          <T.InfoteamLogo>Infoteam</T.InfoteamLogo> 
          <img src={InfoteamPinklogo} style={{ width: "650px", padding: "0px" }} /> */}

      <Logo src={InfoteamPinklogo} {...animatedItem[0]} />

      <T.LogoUnderText {...animatedItem[1]}>
        저희는
        <span style={{ fontWeight: "bold", color: "#ff6565" }}> 지스트</span>
        대학 총학생회
        <span style={{ fontWeight: "bold", color: "#ff6565" }}> 정보국</span>
        입니다
      </T.LogoUnderText>
    </SectionContainerCol>
  );
}

export default HomeSec1Main;
