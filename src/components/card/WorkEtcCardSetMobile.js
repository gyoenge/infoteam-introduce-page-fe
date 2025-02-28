import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import * as T from "../styled/StyledText";
import { workEtcCardImgList } from "../../data/workEtcCardImgs";
import { ListContainer } from "../styled/StyledContainerGlobal";
import { useScrollFadeIn } from "../../hooks/useScrollFade";

const fadeIn = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;

const WorkEtcCard_background_devnight = styled.div`
  position: relative;
  z-index: 0;

  margin-block: 2vw 10vw;
  width: 70vw;
  height: 70vw;
  border-radius: 3.3vw;
  background-image: linear-gradient(0, #343244, #343244);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  &::before {
    position: absolute;
    content: "";
    inset: 0 0 0 0;
    z-index: -1;

    border-radius: 3.3vw;
    background-image: linear-gradient(
      180deg,
      #757384,
      #686581,
      #5c5781,
      #49427d
    );
    box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);

    opacity: 0;
    transition: opacity 0.5s linear;
  }
  &:hover::before {
    opacity: 1;
  }
`;
const WorkEtcCard_background_rect = styled.div`
  position: relative;
  z-index: 0;

  margin-block: 0vw 10vw;
  width: 70vw;
  height: 35vw;
  border-radius: 3.3vw;
  background-image: linear-gradient(0, #ffffff, #ffffff);

  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    position: absolute;
    content: "";
    inset: 0 0 0 0;
    z-index: -1;

    border-radius: 3.3vw;
    ${(props) =>
      props.id == "nas" &&
      `background-image: linear-gradient(30deg, #BFBFBF, #D0D0D0, #ECECEC);`}
    ${(props) =>
      props.id == "gidaesaeng" &&
      `background-image: linear-gradient(30deg, #eaeff5, #cbddf4, #8cc1f6);`}
    box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);

    opacity: 0;
    transition: opacity 0.5s linear;
  }
  &:hover::before {
    opacity: 1;
  }
`;
// nas gradation initial green ver : (30deg, #c8daa4, #d7e5ba, #eef3e4)

const FadingImg = styled.img`
  transition: opacity 0.3s linear;
  ${(props) =>
    props.isHovering
      ? `
    opacity: 0;
  `
      : `
    opacity: 1;
  `};
`;

const CardColWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function WorkEtcCardSetMobile({ animatedItem }) {
  const [isHoveredDN, setIsHoveredDN] = useState(false);
  const [isHoveredNAS, setIsHoveredNAS] = useState(false);
  const [isHoveredGDS, setIsHoveredGDS] = useState(false);

  return (
    <ListContainer>
      <div {...animatedItem[2]}>
        <WorkEtcCard_background_devnight
          id={"devnight"}
          onMouseOver={() => setIsHoveredDN(true)}
          onMouseOut={() => setIsHoveredDN(false)}
        >
          <T.DevnightTitleTextMobile isHovering={isHoveredDN}>
            <span style={{ fontSize: "calc(20px + 5vw)" }}>
              <span style={{ color: "#E55D5D" }}>G</span>IST
            </span>
            <br /> Developers'
            {isHoveredDN ? <br /> : null} night
          </T.DevnightTitleTextMobile>
          <T.DevnightInfoTextMobile isHovering={isHoveredDN}>
            인포팀은 가을 밤 지스트에서 개발하는 모두를 위한 교류 행사인
            DevNight을 주최합니다. 행사는 크게 두가지 세션(세미나 세션, 네트워킹
            세션)으로 진행됩니다.
          </T.DevnightInfoTextMobile>
          {workEtcCardImgList.map((item) => {
            if (item.name == "devnight")
              return (
                <FadingImg
                  src={item.imgSrc}
                  style={{ width: "70vw", position: "absolute", bottom: "0" }}
                  isHovering={isHoveredDN}
                />
              );
          })}
        </WorkEtcCard_background_devnight>
      </div>

      <CardColWrapper>
        <div {...animatedItem[3]}>
          <WorkEtcCard_background_rect
            id={"nas"}
            onMouseOver={() => setIsHoveredNAS(true)}
            onMouseOut={() => setIsHoveredNAS(false)}
          >
            {workEtcCardImgList.map((item) => {
              if (item.name == "nas")
                return (
                  <FadingImg
                    src={item.imgSrc}
                    style={{ height: "32vw" }}
                    isHovering={isHoveredNAS}
                  />
                );
            })}
            <T.NasTitleTextMobile isHovering={isHoveredNAS}>
              <span style={{ color: "#111111" }}>N</span>etwork
              <br />
              <span style={{ color: "#111111" }}>A</span>ttached
              <br />
              <span style={{ color: "#111111" }}>S</span>torage
            </T.NasTitleTextMobile>
            <T.NasInfoTextMobile isHovering={isHoveredNAS}>
              인포팀은 학생자치단체들의 각종 기록과 문서 보존을 목적으로 NAS를
              운영하고 있습니다
            </T.NasInfoTextMobile>
          </WorkEtcCard_background_rect>
        </div>

        <div {...animatedItem[4]}>
          <WorkEtcCard_background_rect
            id={"gidaesaeng"}
            onMouseOver={() => setIsHoveredGDS(true)}
            onMouseOut={() => setIsHoveredGDS(false)}
          >
            {workEtcCardImgList.map((item) => {
              if (item.name == "gidaesaeng")
                return (
                  <FadingImg
                    src={item.imgSrc}
                    style={{ height: "32vw" }}
                    isHovering={isHoveredGDS}
                  />
                );
            })}
            <T.GidaesaengTitleTextMobile isHovering={isHoveredGDS}>
              지대생
              <br />
              <div style={{ color: "#1877F2" }}>
                facebook
                <br />
                그룹
              </div>
            </T.GidaesaengTitleTextMobile>
            <T.GidaesaengInfoTextMobile isHovering={isHoveredGDS}>
              인포팀은 지스트 대학생들이 서로 교류하는 커뮤니티인 '지대생
              페이스북 그룹'을 운영하고 있습니다
            </T.GidaesaengInfoTextMobile>
          </WorkEtcCard_background_rect>
        </div>
      </CardColWrapper>
    </ListContainer>
  );
}

export default WorkEtcCardSetMobile;
