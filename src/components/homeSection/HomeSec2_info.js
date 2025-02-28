import React from "react";
import styled from "styled-components";
import * as T from "../styled/StyledText";
import { useScrollFadeIn, useScrollZoom } from "../../hooks/useScrollFade";
import infoBackImg from "../../imgs/webserviceImg.svg";
import { SectionContainerCol } from "../styled/StyledContainerGlobal";
import { MEDIA_QUERY_WIDTH_MOBILE_WIDTH } from "../../hooks/useIsMobile";

const InfoWrap = styled.div`
  width: 885px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: ${MEDIA_QUERY_WIDTH_MOBILE_WIDTH}) {
    flex-direction: column;
  }
`;
const ImgWrap = styled.div`
  z-index: 0;
  align-self: flex-end;
  left: 610px;
  transform: translate(0, -17.5px);
  width: 475px;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: ${MEDIA_QUERY_WIDTH_MOBILE_WIDTH}) {
    align-self: center;
    width: 350px;
    margin: 50px 0px 0px;
  }
`;
const InfoBackImg = styled.img`
  align-self: flex-end;
  width: 100%;
  object-fit: contain;
  border-radius: 10px;
  @media only screen and (max-width: ${MEDIA_QUERY_WIDTH_MOBILE_WIDTH}) {
    align-self: center;
  }
`;

function HomeSec2Info({ innerRefArr }) {
  const animatedItem = {
    0: useScrollFadeIn("left", 2.3, 0),
    1: useScrollFadeIn("leftUp", 2.3, 0),
  };
  return (
    <SectionContainerCol
      style={{
        backgroundColor: "#F5F5F5",
        paddingBlock: "0px",
        minHeight: "70vh",
      }}
      ref={(el) => (innerRefArr.current[1] = el)}
    >
      <div style={{ height: "80px" }}></div>
      <InfoWrap>
        <T.InfoText {...animatedItem[0]}>
          저희는 <br />
          GIST 학생들의 삶을 <br />
          <span style={{ fontWeight: "bold" }}>IT기술</span>을 이용해 <br />
          편리하게 <br />
          만들고자 합니다
        </T.InfoText>
        <ImgWrap>
          <div {...animatedItem[1]}>
            <InfoBackImg src={infoBackImg} />
          </div>
        </ImgWrap>
      </InfoWrap>
      <div style={{ height: "80px" }}></div>
    </SectionContainerCol>
  );
}

export default HomeSec2Info;
