import React from "react";
import styled from "styled-components";
import * as T from "../styled/StyledText";
import { useScrollFadeIn } from "../../hooks/useScrollFade";
import infoBackImg from "../../imgs/webserviceImg.svg";
import { SectionContainerCol } from "../styled/StyledContainerGlobal";
import { MEDIA_QUERY_WIDTH_MOBILE_WIDTH } from "../../hooks/useIsMobile";

const InfoWrap = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: ${MEDIA_QUERY_WIDTH_MOBILE_WIDTH}) {
    flex-direction: column;
  }
`;
const InfoBackImg = styled.img`
  align-self: center;
  width: 67vw;
  margin: 8.3vw 0px 0px;
`;

function HomeSec2InfoMobile({ innerRefArr }) {
  const animatedItem = {
    0: useScrollFadeIn("up", 2.0, 0.25),
    1: useScrollFadeIn("leftUp", 1.8, 0.43),
  };
  return (
    <SectionContainerCol
      style={{
        backgroundColor: "#F5F5F5",
        minHeight: "0px",
        paddingBlock: "0px",
      }}
      ref={(el) => (innerRefArr.current[1] = el)}
    >
      <div style={{ height: "8vw" }}></div>
      <InfoWrap>
        <T.InfoText {...animatedItem[0]}>
          저희는
          <span style={{ fontWeight: "bold" }}> IT기술</span>을 이용해 <br />
          GIST 학생들의 삶을 편리하게 만들고자 합니다
        </T.InfoText>
        <div {...animatedItem[1]}>
          <InfoBackImg src={infoBackImg} />
        </div>
      </InfoWrap>
      <div style={{ height: "12vw" }}></div>
    </SectionContainerCol>
  );
}

export default HomeSec2InfoMobile;
