import React, { useState } from "react";
import styled from "styled-components";
import * as T from "../styled/StyledText";
import { ListContainer } from "../styled/StyledContainerGlobal";
import { useIsMobile } from "../../hooks/useIsMobile";

const RedRoundRectCard = styled.div`
  position: relative;
  z-index: 0;

  margin: 25px 23px;
  width: 243px;
  height: 160px;
  background-image: linear-gradient(0, #ff6565, #ff6565);
  border-radius: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  /* line-height: 130%;
  font-size: 40px;
  color: #ffffff;
  font-weight: bold;
  text-align: center;
  font-family: "Noto Sans KR", sans-serif; */

  &::before {
    position: absolute;
    content: "";
    inset: 0 0 0 0;
    z-index: -1;

    border-radius: 50px;
    background-image: linear-gradient(
      160deg,
      #ffb0b0,
      #ff9d9d,
      #ff7f7f,
      #ff6565
    );
    box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);

    opacity: 0;
    transition: opacity 0.5s linear;
  }
  &:hover::before {
    opacity: 1;
  }
`;

function WorkCardSet({ animatedItem }) {
  const isMobile = useIsMobile();
  const [isHoveredGistory, setIsHoveredGistory] = useState(false);
  const [isHoveredAMS, setIsHoveredAMS] = useState(false);
  const [isHoveredGistalk, setIsHoveredGistalk] = useState(false);

  return (
    <ListContainer>
      <div {...animatedItem[1]}>
        <div style={isMobile ? {} : { marginLeft: "15px" }}>
          <RedRoundRectCard
            id={"gistory"}
            onMouseOver={() => setIsHoveredGistory(true)}
            onMouseOut={() => setIsHoveredGistory(false)}
          >
            <T.WorkTitleText isHovering={isHoveredGistory}>
              GISTORY
            </T.WorkTitleText>
            <T.WorkInfoText isHovering={isHoveredGistory}>
              GIST 학생 <br /> 커뮤니티 서비스
            </T.WorkInfoText>
          </RedRoundRectCard>
        </div>
      </div>
      <div {...animatedItem[2]}>
        <RedRoundRectCard
          id={"AMS"}
          onMouseOver={() => setIsHoveredAMS(true)}
          onMouseOut={() => setIsHoveredAMS(false)}
        >
          <T.WorkTitleText isHovering={isHoveredAMS}>AMS</T.WorkTitleText>
          <T.WorkInfoText isHovering={isHoveredAMS}>
            GIST 학생단체 <br /> 지원 관리 시스템
          </T.WorkInfoText>
        </RedRoundRectCard>
      </div>
      <div {...animatedItem[3]}>
        <div style={isMobile ? {} : { marginRight: "15px" }}>
          <RedRoundRectCard
            id={"gistalk"}
            onMouseOver={() => setIsHoveredGistalk(true)}
            onMouseOut={() => setIsHoveredGistalk(false)}
          >
            <T.WorkTitleText isHovering={isHoveredGistalk}>
              GISTALK
            </T.WorkTitleText>
            <T.WorkInfoText isHovering={isHoveredGistalk}>
              GIST 강의평가 <br /> 공유 서비스
            </T.WorkInfoText>
          </RedRoundRectCard>
        </div>
      </div>
    </ListContainer>
  );
}

export default WorkCardSet;
